const BASE_URL = "/api/weather";

// ===== Weather phenomena translation dictionaries =====

// Modifiers
export const MODIFIERS: Record<string, string> = {
  "-": "轻微",
  "": "",
  "+": "强",
  VC: "附近",
  MI: "浅",
  BC: "散片",
  PR: "部分",
  DR: "低吹",
  BL: "高吹",
  SH: "阵性",
  TS: "雷暴",
  FZ: "冻",
};

// Weather phenomena
export const WEATHER_PHENOMENA: Record<string, string> = {
  // Precipitation
  DZ: "毛毛雨",
  RA: "雨",
  SN: "雪",
  SG: "米雪",
  IC: "冰针",
  PE: "冰粒",
  GR: "冰雹",
  GS: "小冰粒",
  // Visibility obstructions
  BR: "轻雾",
  FG: "雾",
  FU: "烟",
  VA: "火山灰",
  DU: "浮尘",
  SA: "沙",
  HZ: "霾",
  // Other
  PO: "尘卷风",
  FC: "漏斗云",
  DS: "尘暴",
  SQ: "飑",
  SS: "沙暴",
};

// Cloud cover translation
export const CLOUD_COVER: Record<string, string> = {
  FEW: "少云(1-2/8)",
  SCT: "疏云(3-4/8)",
  BKN: "多云(5-7/8)",
  OVC: "阴天(8/8)",
  SKC: "晴空",
  NSC: "无重要云",
  CLR: "无云",
  NCD: "无云",
};

// Special cloud types
export const CLOUD_TYPES: Record<string, string> = {
  TCU: "塔状积云",
  CB: "积雨云",
};

// Flight category classification
export const FLT_CAT: Record<string, [string, string]> = {
  VFR: ["VFR 目视", "🟢"],
  MVFR: ["MVFR 边缘", "🔵"],
  IFR: ["IFR 仪表", "🔴"],
  LIFR: ["LIFR 低仪表", "🟣"],
};

export function parseWeather(wxString: string): string {

  if (!wxString) {
    return "";
  }

  // Try direct match first
  if (wxString in WEATHER_PHENOMENA) {
    return WEATHER_PHENOMENA[wxString]!;
  }

  // Parse weather string
  // Modifiers: -, +, VC
  // Descriptors: MI, BC, PR, DR, BL, SH, TS, FZ
  const modifiersMatch = wxString.match(/^(VC|MI|BC|PR|DR|BL|SH|TS|FZ|\+|-)?(.*)$/);
  if (!modifiersMatch) {
    return wxString;
  }

  const prefix = modifiersMatch[1] ?? "";
  let rest = modifiersMatch[2] ?? "";

  // Translate prefix modifier
  const prefixCn = prefix in MODIFIERS ? MODIFIERS[prefix] : "";

  // Parse remaining parts
  // May contain multiple phenomena
  const phenomenaCn: string[] = [];

  while (rest) {
    let matched = false;

    // Try 3-character code first
    if (rest.length >= 3) {
      const code3 = rest.slice(0, 3);
      if (code3 in WEATHER_PHENOMENA) {
        phenomenaCn.push(WEATHER_PHENOMENA[code3]!);
        rest = rest.slice(3);
        matched = true;
      }
    }

    // Try 2-character code
    if (!matched && rest.length >= 2) {
      const code2 = rest.slice(0, 2);
      if (code2 in WEATHER_PHENOMENA) {
        phenomenaCn.push(WEATHER_PHENOMENA[code2]!);
        rest = rest.slice(2);
        matched = true;
      }
    }

    // Check for descriptor + phenomenon combo
    if (!matched) {
      let found = false;
      for (const descLen of [2, 3]) {
        if (rest.length >= descLen + 2) {
          const desc = rest.slice(0, descLen);
          const phen = rest.slice(descLen, descLen + 2);
          if (desc in MODIFIERS && phen in WEATHER_PHENOMENA) {
            // Already handled by overall parsing
            found = true;
            break;
          }
        }
      }
      // If can't parse, keep as-is
      if (!found && rest) {
        phenomenaCn.push(rest);
        break;
      }
    }
  }

  if (prefixCn && phenomenaCn.length > 0) {
    return prefixCn + phenomenaCn.join("");
  } else if (phenomenaCn.length > 0) {
    return phenomenaCn.join("");
  } else {
    return wxString;
  }
}

export function parseClouds(clouds: Array<{ cover?: string; base?: string | number; cloudType?: string }>): string {

  if (!clouds || clouds.length === 0) {
    return "无云";
  }

  const cloudInfo: string[] = [];

  for (const c of clouds) {
    const cover = c.cover ?? "";
    const base = c.base;
    const cloudType = c.cloudType ?? "";

    // Translate cloud cover
    const coverCn = cover in CLOUD_COVER ? CLOUD_COVER[cover] : cover;

    // Height conversion (hectofeet -> feet/meters)
    let heightStr = "";
    if (base && base !== "N/A") {
      const baseNum = typeof base === "string" ? parseInt(base, 10) : base;
      if (!isNaN(baseNum)) {
        heightStr = ` 云底 ${baseNum}ft (${(baseNum * 0.3048).toFixed(0)}m)`;
      } else {
        heightStr = ` 云底 ${base}`;
      }
    }

    // Translate special cloud types
    let typeStr = "";
    if (cloudType in CLOUD_TYPES) {
      typeStr = ` ${CLOUD_TYPES[cloudType]}`;
    } else if (cover in CLOUD_TYPES) {
      typeStr = ` ${CLOUD_TYPES[cover]}`;
    }

    // Combine cloud info
    cloudInfo.push(`${coverCn}${heightStr}${typeStr}`);
  }

  return cloudInfo.join(" / ");
}

interface MetarResponse {
  success: boolean;
  data?: unknown[];
  error?: string;
}

export async function fetchMetar(icaoCode: string, signal?: AbortSignal): Promise<MetarResponse> {
  const url = `${BASE_URL}/metar?ids=${icaoCode}&format=json`;
  const response = await fetch(url, { signal });
  return handleResponse(response);
}

export async function fetchTaf(icaoCode: string, signal?: AbortSignal): Promise<MetarResponse> {
  const url = `${BASE_URL}/taf?ids=${icaoCode}&format=json`;
  const response = await fetch(url, { signal });
  return handleResponse(response);
}

interface FetchResponse {
  success: boolean;
  data?: unknown[];
  error?: string;
}

async function handleResponse(response: Response): Promise<FetchResponse> {
  const status = response.status;

  const errorMessages: Record<number, string> = {
    204: "未找到该机场的天气数据",
    400: "请求格式错误，请检查 ICAO 机场代码",
    404: "未找到该机场",
    429: "请求过于频繁，请稍后再试",
    500: "服务器内部错误",
    502: "网关错误，请稍后再试",
    504: "网关超时，请稍后再试",
  };

  if (status === 200) {
    try {
      const data = await response.json();
      if (!data || (Array.isArray(data) && data.length === 0)) {
        return { success: false, error: "未找到该机场的天气数据" };
      }
      return { success: true, data: data as unknown[] };
    } catch (e) {
      return { success: false, error: `数据解析失败: ${e}` };
    }
  }

  const errorMsg = status in errorMessages ? errorMessages[status] : `请求失败，状态码: ${status}`;
  return { success: false, error: errorMsg };
}

export interface MetarData {
  rawOb?: string;
  icaoId?: string;
  name?: string;
  reportTime?: string;
  wdir?: string | number;
  wspd?: string | number;
  wgst?: string | number;
  visib?: string | number;
  wxString?: string;
  clouds?: Array<{ cover?: string; base?: string | number; cloudType?: string }>;
  temp?: string | number;
  dewp?: string | number;
  altim?: string | number;
  fltCat?: string;
}

// Legacy parse metar function, not used currently but kept for reference
export function parseMetar(metarData: MetarData): string {
  try {
    // Raw report
    const rawOb = metarData.rawOb ?? "";

    // Basic info
    const icao = metarData.icaoId ?? "N/A";
    const name = metarData.name ?? "N/A";
    let reportTime = metarData.reportTime ?? "N/A";

    // Parse observation time
    if (reportTime !== "N/A") {
      try {
        const dt = new Date(reportTime.replace("Z", "+00:00"));
        reportTime = dt.toISOString().replace("T", " ").slice(0, 19) + " UTC";
      } catch {
        // Keep original
      }
    }

    // Wind direction and speed
    const windDir = metarData.wdir;
    const windSpeed = metarData.wspd;
    const gust = metarData.wgst;
    let wind: string;
    if (windDir === "VRB") {
      wind = "风向不定";
    } else if (windDir === "N/A" || windSpeed === "N/A") {
      wind = "无风";
    } else {
      const gustStr = gust ? ` 阵风 ${gust}kt` : "";
      wind = `${windDir}°/${windSpeed}kt${gustStr}`;
    }

    // Visibility
    let vis = metarData.visib ?? "N/A";
    if (vis !== "N/A") {
      vis = `${vis} statute miles`;
    }

    // Weather phenomena
    const wxRaw = metarData.wxString ?? "";
    const wx = wxRaw ? parseWeather(wxRaw) : "";

    // Cloud cover
    const clouds = metarData.clouds ?? [];
    const cloudsStr = parseClouds(clouds);

    // Temperature and dewpoint
    const temp = metarData.temp;
    const dewp = metarData.dewp;
    const tempStr = temp !== undefined && temp !== "N/A" ? `${temp}°C` : null;
    const dewpStr = dewp !== undefined && dewp !== "N/A" ? `${dewp}°C` : null;

    // Altimeter
    let altim = metarData.altim;
    let altimStr = "N/A";
    if (altim !== undefined && altim !== "N/A") {
      // Try to extract US altimeter from rawOb
      const usAltimMatch = rawOb ? new RegExp("A(\\d{4})").exec(rawOb) : null;
      if (usAltimMatch) {
        const usAltim = usAltimMatch[1]!;
        const usAltimInhg = (parseInt(usAltim, 10) / 100).toFixed(2);
        altimStr = `${Number(altim).toFixed(2)} hPa / ${usAltimInhg} inHg`;
      } else {
        altimStr = `${Number(altim).toFixed(2)} hPa`;
      }
    }

    // Assemble output
    const lines: string[] = [];

    if (rawOb) {
      lines.push(`📄 报文: ${rawOb}`);
    }

    lines.push(
      `📍 ${name} (${icao})`,
      `⏰ 观测时间: ${reportTime}`,
      `💨 风向风速: ${wind}`,
      `👁️ 能见度: ${vis}`
    );

    if (wx) {
      lines.push(`🌤️ 天气: ${wx}`);
    }

    lines.push(`☁️ 云量: ${cloudsStr}`);

    if (tempStr) {
      lines.push(`🌡️ 温度: ${tempStr}`);
    }

    if (dewpStr) {
      lines.push(`💧 露点: ${dewpStr}`);
    }

    if (altimStr !== "N/A") {
      lines.push(`📊 修正海压: ${altimStr}`);
    }

    // Flight category
    const fltCat = metarData.fltCat;
    if (fltCat && fltCat in FLT_CAT) {
      const [catName, catEmoji] = FLT_CAT[fltCat]!;
      lines.push(`✈️ 运行标准: ${catEmoji} ${catName}`);
    }

    return lines.join("\n");
  } catch (e) {
    return `解析失败: ${e}`;
  }
}
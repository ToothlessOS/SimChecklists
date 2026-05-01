import type { MetarData } from "../utils/weather";
import { parseWeather, parseClouds, FLT_CAT } from "../utils/weather";

interface MetarPrintoutProps {
  metarData: MetarData;
  className?: string;
}

function formatTime(reportTime: string | undefined): string {
  if (!reportTime || reportTime === "N/A") return "N/A";
  try {
    const dt = new Date(reportTime.replace("Z", "+00:00"));
    return dt.toISOString().replace("T", " ").slice(0, 19) + " UTC";
  } catch {
    return reportTime;
  }
}

function formatWind(wdir: string | number | undefined, wspd: string | number | undefined, wgst: string | number | undefined): string {
  if (wdir === "VRB") return "VRB (variable)";
  if (!wdir || wdir === "N/A" || !wspd || wspd === "N/A") return "Calm";
  const gustStr = wgst ? ` G ${wgst}kt` : "";
  return `${wdir}deg @ ${wspd}kt${gustStr}`;
}

function formatVisibility(visib: string | number | undefined): string {
  if (!visib || visib === "N/A") return "N/A";
  return `${visib} SM`;
}

export default function MetarPrintout({ metarData, className }: MetarPrintoutProps) {
  const rawOb = metarData.rawOb ?? "N/A";
  const icao = metarData.icaoId ?? "N/A";
  const name = metarData.name ?? "N/A";
  const reportTime = formatTime(metarData.reportTime);
  const wind = formatWind(metarData.wdir, metarData.wspd, metarData.wgst);
  const visibility = formatVisibility(metarData.visib);
  const weather = metarData.wxString ? parseWeather(metarData.wxString) : "None";
  const clouds = parseClouds(metarData.clouds ?? []);

  const temp = metarData.temp;
  const dewp = metarData.dewp;
  const tempStr = temp !== undefined && temp !== "N/A" ? `${temp}C` : null;
  const dewpStr = dewp !== undefined && dewp !== "N/A" ? `${dewp}C` : null;

  let altimStr = "N/A";
  const altim = metarData.altim;
  if (altim !== undefined && altim !== "N/A") {
    const usAltimMatch = rawOb !== "N/A" ? new RegExp("A(\\d{4})").exec(rawOb) : null;
    if (usAltimMatch) {
      const usAltim = usAltimMatch[1]!;
      const usAltimInhg = (parseInt(usAltim, 10) / 100).toFixed(2);
      altimStr = `${Number(altim).toFixed(0)} hPa / ${usAltimInhg} inHg`;
    } else {
      altimStr = `${Number(altim).toFixed(0)} hPa`;
    }
  }

  const fltCat = metarData.fltCat;
  const fltCatInfo = fltCat && fltCat in FLT_CAT ? FLT_CAT[fltCat] : null;

  const lines = [
    `METAR REPORT - ${icao}`,
    `==============================`,
    ``,
    `AIRPORT   : ${name}`,
    `ICAO      : ${icao}`,
    `TIME (UTC): ${reportTime}`,
    `------------------------------`,
    `RAW REPORT:`,
    `  ${rawOb}`,
    `------------------------------`,
    `WIND      : ${wind}`,
    `VISIBILITY: ${visibility}`,
    `WEATHER   : ${weather}`,
    `CLOUDS    : ${clouds}`,
    `TEMP (C)  : ${tempStr ?? "N/A"}`,
    `DEWPT (C) : ${dewpStr ?? "N/A"}`,
    `ALTIMETER : ${altimStr}`,
  ];

  if (fltCatInfo) {
    lines.push(`FLT CATEGORY: ${fltCatInfo[0]}`);
  }

  lines.push(`==============================`);
  lines.push(`** END OF METAR **`);

  return (
    <>
      <style>{`
        .metar-printout {
          font-family: "Courier New", Consolas, monospace;
          font-size: 13px;
          line-height: 1.5;
          background-color: #fff;
          padding: 16px;
          max-width: 520px;
          margin: 16px 0;
        }
        .metar-printout .metar-page {
          background: #fff;
          padding: 8px 12px;
          border: 1px solid #000;
          overflow-x: auto;
          max-width: 100%;
        }
        .metar-printout .metar-line {
          white-space: pre;
          overflow-wrap: break-word;
          word-break: normal;
          color: #000;
        }
        .metar-printout .metar-raw {
          white-space: pre-wrap;
          overflow-wrap: break-word;
          word-break: break-word;
          color: #000;
        }
        .metar-printout .metar-header-line {
          color: #000;
          font-weight: bold;
        }
        .metar-printout .metar-separator {
          color: #000;
        }
        .metar-printout .metar-end {
          color: #000;
          font-weight: bold;
        }
        .metar-printout .metar-fltcat {
          color: #000;
          font-weight: bold;
        }
        .metar-printout .metar-wrap {
          white-space: pre-wrap;
          overflow-wrap: break-word;
          word-break: break-word;
          color: #000;
        }
      `}</style>
      <div className={`metar-printout${className ? ` ${className}` : ""}`}>
        <div className="metar-page">
          {lines.map((line, i) => {
            if (line === "") {
              return <div key={i} className="metar-line">&nbsp;</div>;
            }
            if (line.startsWith("==")) {
              return <div key={i} className="metar-line metar-separator">{line}</div>;
            }
            if (line.startsWith("--")) {
              return <div key={i} className="metar-line metar-separator">{line}</div>;
            }
            if (line.startsWith("**")) {
              return <div key={i} className="metar-line metar-end">{line}</div>;
            }
            if (line.startsWith("RAW REPORT")) {
              return <div key={i} className="metar-line metar-raw">{line}</div>;
            }
            if (line.startsWith("  ") && line.trim() === rawOb) {
              return <div key={i} className="metar-line metar-raw">{line}</div>;
            }
            if (line.includes("FLT CATEGORY")) {
              return <div key={i} className="metar-line metar-fltcat">{line}</div>;
            }
            if (line.startsWith("METAR REPORT")) {
              return <div key={i} className="metar-line metar-header-line">{line}</div>;
            }
            // CLOUDS, WEATHER, RAW OB can be long — allow wrapping
            if (
              line.startsWith("CLOUDS") ||
              line.startsWith("WEATHER") ||
              line.startsWith("RAW REPORT")
            ) {
              return <div key={i} className="metar-line metar-wrap">{line}</div>;
            }
            return <div key={i} className="metar-line">{line}</div>;
          })}
        </div>
      </div>
    </>
  );
}
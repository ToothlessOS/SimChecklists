import { useEffect, useState } from "react";
import { fetchMetar, type MetarData } from "../utils/weather";
import MetarPrintout from "./MetarPrintout";

function WeatherMain() {
  const [input, setInput] = useState<string>("");
  const [searchIcao, setSearchIcao] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [metar, setMetar] = useState<MetarData | null>(null);

  useEffect(() => {
    if (!searchIcao.trim()) return;

    const getWeather = async () => {
      setLoading(true);
      setError(null);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      try {
        const [metarResult] = await Promise.all([
          fetchMetar(searchIcao.trim().toUpperCase(), controller.signal),
        ]);

        clearTimeout(timeout);

        if (metarResult.success && metarResult.data?.[0]) {
          setMetar(metarResult.data[0] as MetarData);
        } else {
          setError(metarResult.error ?? "Failed to fetch METAR");
          setMetar(null);
        }
      } catch {
        setError(
          "请求超时,请稍后重试 / Request timed out, please try again later",
        );
        setMetar(null);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [searchIcao]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toUpperCase();
    if (trimmed) setSearchIcao(trimmed);
  };

  return (
    <div className="weather-page">
      <style>{`
        .weather-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px;
          min-height: calc(100vh - 80px);
        }
        .weather-search-form {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          width: 100%;
          max-width: 420px;
          margin-bottom: 8px;
        }
        .weather-search-input {
          flex: 1;
          font-family: "Courier New", Consolas, monospace;
          font-size: 14px;
          padding: 8px 12px;
          border: 2px solid #333;
          border-radius: 0;
          background: #fff;
          color: #000;
          outline: none;
          box-shadow: inset 0 0 0 1px #333;
          min-width: 0;
        }
        .weather-search-input::placeholder {
          color: #888;
        }
        .weather-search-input:focus {
          border-color: #000;
          box-shadow: 2px 2px 0 #333;
        }
        .weather-search-btn {
          font-family: "Courier New", Consolas, monospace;
          font-size: 13px;
          font-weight: bold;
          padding: 8px 20px;
          border: 2px solid #333;
          border-radius: 0;
          background: #fff;
          color: #000;
          cursor: pointer;
          box-shadow: 2px 2px 0 #333;
          transition: transform 0.1s, box-shadow 0.1s;
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: nowrap;
        }
        .weather-search-btn:hover:not(:disabled) {
          background: #f0f0f0;
        }
        .weather-search-btn:active:not(:disabled) {
          transform: translate(1px, 1px);
          box-shadow: 1px 1px 0 #333;
        }
        .weather-search-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .weather-error {
          font-family: "Courier New", Consolas, monospace;
          font-size: 12px;
          color: #c00;
          text-align: center;
          max-width: 420px;
        }
        .weather-hint {
          font-family: "Courier New", Consolas, monospace;
          font-size: 12px;
          color: #666;
          text-align: center;
        }
        .weather-loading {
          font-family: "Courier New", Consolas, monospace;
          font-size: 13px;
          color: #333;
          text-align: center;
        }
        .weather-printout-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
      <form className="weather-search-form" onSubmit={handleSubmit}>
        <input
          id="icao-search"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ICAO code (e.g. ZBAA)"
          className="weather-search-input"
          maxLength={4}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="characters"
        />
        <button type="submit" className="weather-search-btn" disabled={loading}>
          {loading ? "> searching..." : "> search"}
        </button>
      </form>
      {error && <p className="weather-error">{error}</p>}
      {!loading && !metar && (
        <p className="weather-hint">Airport METAR Search</p>
      )}
      {loading && <p className="weather-loading">-- retrieving metar --</p>}
      {!loading && metar && (
        <div className="weather-printout-wrap">
          <MetarPrintout metarData={metar} />
        </div>
      )}
    </div>
  );
}

export default WeatherMain;

export default function NewTrade() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 className="page-title">
            New Trade
          </h1>

          <p className="page-subtitle">
            Create and execute trading positions
          </p>
        </div>

        <button
          style={{
            height: "42px",
            padding: "0 18px",
            borderRadius: "12px",
            border: "none",
            background:
              "linear-gradient(135deg,#2563EB,#3B82F6)",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Execute Trade
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1.2fr 0.8fr",
          gap: "12px",
          marginTop: "18px",
        }}
      >
        <div
          className="panel"
          style={{
            padding: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Trade Details
          </h3>

          <div
            style={{
              marginTop: "20px",
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "14px",
            }}
          >
            <div>
              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Trading Pair
              </label>

              <input
                placeholder="BTCUSD"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  height: "46px",
                  background: "#0F172A",
                  border:
                    "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  padding: "0 14px",
                  color: "white",
                  outline: "none",
                  fontSize: "13px",
                }}
              />
            </div>

            <div>
              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Trade Type
              </label>

              <select
                style={{
                  width: "100%",
                  marginTop: "8px",
                  height: "46px",
                  background: "#0F172A",
                  border:
                    "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  padding: "0 14px",
                  color: "white",
                  outline: "none",
                  fontSize: "13px",
                }}
              >
                <option>
                  Long
                </option>

                <option>
                  Short
                </option>

                <option>
                  Scalping
                </option>
              </select>
            </div>

            <div>
              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Entry Price
              </label>

              <input
                placeholder="0.00"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  height: "46px",
                  background: "#0F172A",
                  border:
                    "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  padding: "0 14px",
                  color: "white",
                  outline: "none",
                  fontSize: "13px",
                }}
              />
            </div>

            <div>
              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Position Size
              </label>

              <input
                placeholder="0.10"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  height: "46px",
                  background: "#0F172A",
                  border:
                    "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  padding: "0 14px",
                  color: "white",
                  outline: "none",
                  fontSize: "13px",
                }}
              />
            </div>

            <div>
              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Stop Loss
              </label>

              <input
                placeholder="0.00"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  height: "46px",
                  background: "#0F172A",
                  border:
                    "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  padding: "0 14px",
                  color: "white",
                  outline: "none",
                  fontSize: "13px",
                }}
              />
            </div>

            <div>
              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Take Profit
              </label>

              <input
                placeholder="0.00"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  height: "46px",
                  background: "#0F172A",
                  border:
                    "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  padding: "0 14px",
                  color: "white",
                  outline: "none",
                  fontSize: "13px",
                }}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "18px",
            }}
          >
            <label
              className="secondary-text"
              style={{
                fontSize: "11px",
              }}
            >
              Trade Notes
            </label>

            <textarea
              placeholder="Trade setup, psychology, market reasoning..."
              style={{
                width: "100%",
                marginTop: "8px",
                minHeight: "140px",
                background: "#0F172A",
                border:
                  "1px solid rgba(255,255,255,0.04)",
                borderRadius: "14px",
                padding: "14px",
                color: "white",
                outline: "none",
                fontSize: "13px",
                resize: "none",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            className="panel"
            style={{
              padding: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Risk Summary
            </h3>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                <p className="metric-title">
                  RISK %
                </p>

                <h2
                  style={{
                    marginTop: "8px",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  1.5%
                </h2>
              </div>

              <div>
                <p className="metric-title">
                  R:R RATIO
                </p>

                <h2
                  className="success"
                  style={{
                    marginTop: "8px",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  1:2.8
                </h2>
              </div>

              <div>
                <p className="metric-title">
                  ESTIMATED PROFIT
                </p>

                <h2
                  className="success"
                  style={{
                    marginTop: "8px",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  +$420
                </h2>
              </div>
            </div>
          </div>

          <div
            className="panel"
            style={{
              padding: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              AI Trade Analysis
            </h3>

            <div
              style={{
                marginTop: "18px",
                background: "#0F172A",
                borderRadius: "14px",
                padding: "16px",
                lineHeight: "1.8",
                fontSize: "13px",
                color: "#CBD5E1",
              }}
            >
              AI analysis suggests favorable risk-to-reward conditions for this setup.
              Historical performance for similar trades shows strong profitability during London session momentum.
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "16px",
                height: "42px",
                border: "none",
                borderRadius: "12px",
                background: "#0F172A",
                color: "white",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              Generate AI Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
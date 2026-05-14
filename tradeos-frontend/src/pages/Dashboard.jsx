import {
  DollarSign,
  TrendingUp,
  Target,
  Activity,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const chartData = [
  { day: "Mon", value: 4200 },
  { day: "Tue", value: 5100 },
  { day: "Wed", value: 4800 },
  { day: "Thu", value: 6200 },
  { day: "Fri", value: 7600 },
  { day: "Sat", value: 7100 },
  { day: "Sun", value: 8600 },
];

function MetricCard({
  title,
  value,
  change,
  icon,
}) {
  return (
    <div
      className="panel"
      style={{
        padding: "14px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className="metric-title">
          {title}
        </p>

        <div className="card-icon">
          {icon}
        </div>
      </div>

      <h2 className="metric-value">
        {value}
      </h2>

      <p
        className="success"
        style={{
          marginTop: "4px",
          fontWeight: "600",
          fontSize: "11px",
        }}
      >
        {change}
      </p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div>
      <div>
        <h1 className="page-title">
          Dashboard
        </h1>

        <p className="page-subtitle">
          Welcome back, Ashutosh
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4,1fr)",
          gap: "10px",
          marginTop: "16px",
        }}
      >
        <MetricCard
          title="BALANCE"
          value="$12,450"
          change="+8.24%"
          icon={
            <DollarSign
              size={15}
              color="#3B82F6"
            />
          }
        />

        <MetricCard
          title="TODAY PNL"
          value="+$824"
          change="+5.12%"
          icon={
            <TrendingUp
              size={15}
              color="#3B82F6"
            />
          }
        />

        <MetricCard
          title="WIN RATE"
          value="72%"
          change="+4.21%"
          icon={
            <Target
              size={15}
              color="#3B82F6"
            />
          }
        />

        <MetricCard
          title="OPEN TRADES"
          value="8"
          change="4 LONG"
          icon={
            <Activity
              size={15}
              color="#3B82F6"
            />
          }
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "2fr 1fr",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <div
          className="panel"
          style={{
            padding: "16px",
            minHeight: "340px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Equity Curve
              </h3>

              <p
                className="secondary-text"
                style={{
                  marginTop: "4px",
                  fontSize: "11px",
                }}
              >
                Portfolio performance
              </p>
            </div>

            <div
              className="success"
              style={{
                fontWeight: "600",
                fontSize: "12px",
              }}
            >
              +8.24%
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "210px",
              marginTop: "18px",
            }}
          >
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient
                    id="color"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#22C55E"
                      stopOpacity={0.4}
                    />

                    <stop
                      offset="100%"
                      stopColor="#22C55E"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="day"
                  tick={{
                    fill: "#7B849A",
                    fontSize: 11,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#22C55E"
                  strokeWidth={2}
                  fill="url(#color)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3,1fr)",
              gap: "10px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                background: "#0F172A",
                borderRadius: "10px",
                padding: "12px",
              }}
            >
              <p
                className="secondary-text"
                style={{
                  fontSize: "10px",
                }}
              >
                PROFIT
              </p>

              <h3
                style={{
                  marginTop: "5px",
                  fontSize: "16px",
                }}
              >
                +$2,540
              </h3>
            </div>

            <div
              style={{
                background: "#0F172A",
                borderRadius: "10px",
                padding: "12px",
              }}
            >
              <p
                className="secondary-text"
                style={{
                  fontSize: "10px",
                }}
              >
                WIN RATE
              </p>

              <h3
                style={{
                  marginTop: "5px",
                  fontSize: "16px",
                }}
              >
                72%
              </h3>
            </div>

            <div
              style={{
                background: "#0F172A",
                borderRadius: "10px",
                padding: "12px",
              }}
            >
              <p
                className="secondary-text"
                style={{
                  fontSize: "10px",
                }}
              >
                R:R RATIO
              </p>

              <h3
                style={{
                  marginTop: "5px",
                  fontSize: "16px",
                }}
              >
                1:2.4
              </h3>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            className="panel"
            style={{
              padding: "16px",
              minHeight: "165px",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Discipline
            </h3>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                justifyContent:
                  "center",
              }}
            >
              <div
                style={{
                  width: "88px",
                  height: "88px",
                  borderRadius: "50%",
                  border:
                    "7px solid #FACC15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "center",
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                  }}
                >
                  75
                </h2>
              </div>
            </div>
          </div>

          <div
            className="panel"
            style={{
              padding: "16px",
              minHeight: "165px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
              }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Open Trades
              </h3>

              <span
                className="blue-text"
                style={{
                  fontSize: "11px",
                  cursor: "pointer",
                }}
              >
                View all
              </span>
            </div>

            <div
              style={{
                marginTop: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  padding: "10px",
                  background: "#0F172A",
                  borderRadius: "10px",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    BTCUSD
                  </h4>

                  <p
                    className="secondary-text"
                    style={{
                      fontSize: "10px",
                      marginTop: "2px",
                    }}
                  >
                    Long
                  </p>
                </div>

                <div
                  className="success"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  +$420
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  padding: "10px",
                  background: "#0F172A",
                  borderRadius: "10px",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    XAUUSD
                  </h4>

                  <p
                    className="secondary-text"
                    style={{
                      fontSize: "10px",
                      marginTop: "2px",
                    }}
                  >
                    Scalping
                  </p>
                </div>

                <div
                  className="loss"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  -$120
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="panel"
        style={{
          marginTop: "10px",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Recent Trades
            </h3>

            <p
              className="secondary-text"
              style={{
                marginTop: "3px",
                fontSize: "11px",
              }}
            >
              Latest trading activity
            </p>
          </div>

          <span
            className="blue-text"
            style={{
              fontSize: "11px",
              cursor: "pointer",
            }}
          >
            View all
          </span>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "12px",
          }}
        >
          <thead>
            <tr
              className="secondary-text"
              style={{
                textAlign: "left",
                fontSize: "10px",
              }}
            >
              <th style={{ paddingBottom: "12px" }}>
                PAIR
              </th>

              <th style={{ paddingBottom: "12px" }}>
                TYPE
              </th>

              <th style={{ paddingBottom: "12px" }}>
                ENTRY
              </th>

              <th style={{ paddingBottom: "12px" }}>
                EXIT
              </th>

              <th style={{ paddingBottom: "12px" }}>
                PNL
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="table-row">
              <td style={{ padding: "10px 0" }}>
                BTCUSD
              </td>

              <td>
                Swing
              </td>

              <td>
                $67,245
              </td>

              <td>
                $68,120
              </td>

              <td className="success">
                +$875
              </td>
            </tr>

            <tr className="table-row">
              <td style={{ padding: "10px 0" }}>
                EURUSD
              </td>

              <td>
                Scalping
              </td>

              <td>
                1.0854
              </td>

              <td>
                1.0832
              </td>

              <td className="success">
                +$222
              </td>
            </tr>

            <tr className="table-row">
              <td style={{ padding: "10px 0" }}>
                XAUUSD
              </td>

              <td>
                Intraday
              </td>

              <td>
                $2,338
              </td>

              <td>
                $2,350
              </td>

              <td className="success">
                +$1,160
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
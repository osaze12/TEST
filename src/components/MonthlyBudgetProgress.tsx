import {
  RadialBar,
  PolarAngleAxis,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyBudgetProgress({
  value = 49,
}: {
  value?: number;
}) {
  const data = [{ name: "L1", value }];

  const circleSize = 200;
  return (
    <>
      <style>
        {`

      .monthly-progress-container {
        position: relative;
        padding: 30px;
        height: 200px;
        width: 200px;
      }
      .monthly-progress-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        color: #fff;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background: radial-gradient(ellipse at     center,
          rgba(255,113,12,0) 60%,
          #0466C866 51.5%);
      }
  
      `}
      </style>
      <ResponsiveContainer width="none" height="none">
        <div className="monthly-progress-container">
          <div className="monthly-progress-circle">
            <RadialBarChart
              width={circleSize}
              height={circleSize}
              cx={circleSize / 2}
              cy={circleSize / 2}
              innerRadius={100}
              outerRadius={80}
              barSize={10}
              data={data}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                dataKey="value"
                cornerRadius={circleSize / 2}
                fill="#0466C8"
              />
              <text
                x={circleSize / 2}
                y={circleSize / 2}
                fontFamily="CircularStd-Bold"
                textAnchor="middle"
                dominantBaseline="middle"
                className="progress-label"
                fontSize="3em"
                fontWeight="bold"
                fill="#0466C8"
              >
                {value}%
              </text>
            </RadialBarChart>
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
}

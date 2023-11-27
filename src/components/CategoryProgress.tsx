import { RadialBar, PolarAngleAxis, RadialBarChart } from "recharts";

export default function CategoryProgress({
  icon: Icon,
  primaryColor,
  secondaryColor,
  id,
  percent,
}: {
  icon: any;
  secondaryColor: string;
  primaryColor: string;
  id: number;
  percent: string;
}) {
  const data = [{ name: "L1", value: percent }];

  const circleSize = 300;
  return (
    <>
      <style>
        {`
       
    .container {
      position: relative;
      padding: 0px;
      height: 60px;
      width: 60px;
    }
    .circle-${id} {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: sans-serif;
      color: #fff;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background: ${secondaryColor};
    }

    `}
      </style>
      <div className="container">
        <Icon
          fontSize="1.3em"
          fill={primaryColor}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            zIndex: 1,
          }}
        />

        <div
          className={`circle-${id}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "45px",
            height: "45px",
            margin: "auto",
          }}
        ></div>

        <RadialBarChart
          style={{ width: "none", height: "none" }}
          width={circleSize}
          height={circleSize}
          cx={circleSize / 2}
          cy={circleSize / 2}
          innerRadius={100}
          outerRadius={178}
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
            fill={primaryColor}
          />
        </RadialBarChart>
      </div>
    </>
  );
}

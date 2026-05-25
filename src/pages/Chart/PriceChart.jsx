import { Spin, theme } from 'antd';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { formatUsd } from './chartUtils.js';

const PriceChart = ({ data, loading }) => {
  const { token } = theme.useToken();

  const chartMargin = {
    top: token.marginXS,
    right: token.margin,
    left: token.marginXS,
    bottom: token.marginXS,
  };

  const axisTick = {
    fontSize: token.fontSizeSM,
    fill: token.colorTextSecondary,
  };

  return (
    <Spin spinning={loading}>
      <ResponsiveContainer width="100%" height={token.chartHeight}>
        <LineChart data={data} margin={chartMargin}>
          <CartesianGrid
            stroke={token.colorBorderSecondary}
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="label"
            minTickGap={token.sizeXL}
            tick={axisTick}
            axisLine={{ stroke: token.colorBorderSecondary }}
            tickLine={{ stroke: token.colorBorderSecondary }}
          />
          <YAxis
            tickFormatter={formatUsd}
            width={token.sizeXXL * 2}
            tick={axisTick}
            axisLine={{ stroke: token.colorBorderSecondary }}
            tickLine={{ stroke: token.colorBorderSecondary }}
          />
          <Tooltip
            formatter={(value) => formatUsd(value)}
            labelFormatter={(_, payload) =>
              payload?.[0]?.payload?.label ?? ''
            }
            cursor={{ stroke: token.colorPrimary, strokeWidth: token.lineWidth }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={token.colorPrimary}
            strokeWidth={token.lineWidthBold}
            dot={false}
            activeDot={{
              r: token.sizeXXS,
              fill: token.colorPrimary,
              stroke: token.colorBgContainer,
              strokeWidth: token.lineWidth,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Spin>
  );
};

export default PriceChart;

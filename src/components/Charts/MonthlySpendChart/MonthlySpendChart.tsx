import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Box, Typography } from '@mui/material';
import type { DashboardAnalyticsResponse } from '../../../types/analytics';

interface Props {
  data: DashboardAnalyticsResponse | null;
}

export const MonthlySpendChart = ({ data }: Props) => {
  const chartData = [
    {
      name: 'Last Month',
      value: data?.budget_overview.previous_month_total,
    },
    {
      name: 'This Month',
      value: data?.budget_overview.current_month_total,
    },
  ];

  return (
    <Box
      sx={{
        width: 1100,
        height: 300,
        p: 2,
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #f5f7fa, #ffffff)',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Monthly Spend Evolution
      </Typography>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <defs>
            <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1976d2" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#1976d2" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1976d2"
            strokeWidth={3}
            fill="url(#spendGradient)"
            dot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
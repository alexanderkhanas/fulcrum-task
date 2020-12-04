import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';

export const chartConfig: AbstractChartConfig = {
  count: 10,
  backgroundGradientFrom: '#ffffff00',
  backgroundGradientTo: '#ffffff00',
  color: (opacity = 1) => `rgba(40, 40, 40, ${opacity})`,
  barPercentage: 0.5,
  stackedBar: true,
  data: [],
};

import React, { useMemo, useState } from 'react';

import { ActivityIndicator, View } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ChartSwitch from '../../components/ChartSwitch/ChartSwitch';
import { chartConfig } from '../../consts';
import { RootState } from '../../store/rootReducer';
import { connect } from 'react-redux';

const Chart = ({ chart }: ReturnType<typeof mapStateToProps>) => {
  const [chartTypeIndex, setChartTypeIndex] = useState(0);

  const onChartTypeSelect = (index: number) => {
    setChartTypeIndex(index);
  };

  const chartData: LineChartData = useMemo(() => {
    return {
      labels: [],
      datasets: [
        {
          data:
            chart.length > 10
              ? chart
                  .slice(chart.length - 10, chart.length)
                  .map(({ value }) => value)
              : chart.map(({ value }) => value),
        },
      ],
    };
  }, [chart]);

  const chartBaseProps = {
    data: chartData,
    width: wp(100) - 20,
    chartConfig,
    fromZero: true,
    height: hp(50),
  };

  return chart.length ? (
    <View>
      {chartTypeIndex === 0 && <LineChart {...chartBaseProps} />}
      {chartTypeIndex === 1 && (
        <BarChart {...chartBaseProps} yAxisLabel="" yAxisSuffix="" />
      )}
      <ChartSwitch
        thumbnails={[
          require('../../assets/line-chart.png'),
          require('../../assets/bar-chart.png'),
        ]}
        selectedIndex={chartTypeIndex}
        onSelect={onChartTypeSelect}
      />
    </View>
  ) : (
    <ActivityIndicator color="#000" size="large" />
  );
};

const mapStateToProps = (state: RootState) => ({
  chart: state.chart,
});

export default connect(mapStateToProps)(Chart);

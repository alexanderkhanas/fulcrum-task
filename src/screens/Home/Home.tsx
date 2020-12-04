import React, { useEffect } from 'react';
import s from './Home.s';
import { connect } from 'react-redux';

import {
  ChartItemInterface,
  ChatDispatch,
} from '../../store/chartData/chartData.types';
import {
  addChartItemAction,
  clearChartAction,
} from '../../store/chartData/chartData.actions';
import { Text, TouchableOpacity, View } from 'react-native';
import { Socket } from '../../store/websocket';
import Chart from '../../components/Chart/Chart';

const Home = ({ clearChart, addChartItem }: Props) => {
  useEffect(() => {
    const socket = new Socket();
    socket.onMessageReceive(addChartItem);
  }, []);

  return (
    <View style={s.container}>
      <View style={s.titleContainer}>
        <Text style={s.title}>Chart</Text>
        <TouchableOpacity onPress={clearChart}>
          <Text style={s.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <Chart />
    </View>
  );
};

const mapDispatchToProps = (dispatch: ChatDispatch) => ({
  addChartItem: (chartItem: ChartItemInterface) =>
    dispatch(addChartItemAction(chartItem)),
  clearChart: () => dispatch(clearChartAction()),
});

type Props = ReturnType<typeof mapDispatchToProps>;

export default connect(null, mapDispatchToProps)(Home);

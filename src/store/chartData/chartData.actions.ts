import {
  ADD_CHART_ITEM,
  AddChartItemAction,
  ChartItemInterface,
  CLEAR_CHART,
  ClearChartAction,
} from './chartData.types';

export const addChartItemAction = (
  chartItem: ChartItemInterface,
): AddChartItemAction => ({
  type: ADD_CHART_ITEM,
  payload: chartItem,
});

export const clearChartAction = (): ClearChartAction => ({
  type: CLEAR_CHART,
});

import {
  ChartStateInterface,
  ADD_CHART_ITEM,
  AddChartItemAction,
  ClearChartAction,
  CLEAR_CHART,
} from './chartData.types';

const initialState: ChartStateInterface = [];

const chartReducer = (
  state = initialState,
  action: AddChartItemAction & ClearChartAction,
): ChartStateInterface => {
  switch (action.type) {
    case ADD_CHART_ITEM:
      return [...state, action.payload];
    case CLEAR_CHART:
      return [];
    default:
      return state;
  }
};

export default chartReducer;

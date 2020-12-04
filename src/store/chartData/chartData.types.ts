import { ThunkDispatch } from 'redux-thunk';

export const ADD_CHART_ITEM: string = 'ADD_CHART_ITEM';
export const CLEAR_CHART: string = 'CLEAR_CHART';

export interface ChartItemInterface {
  date: number;
  value: number;
}

export type ChartStateInterface = ChartItemInterface[];

export interface AddChartItemAction {
  type: typeof ADD_CHART_ITEM;
  payload: ChartItemInterface;
}

export interface ClearChartAction {
  type: typeof CLEAR_CHART;
}

export type ActionsTypes = AddChartItemAction | ClearChartAction;

export type ChatDispatch = ThunkDispatch<
  ChartStateInterface,
  unknown,
  ActionsTypes
>;

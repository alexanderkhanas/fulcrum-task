import { combineReducers, createStore } from 'redux';
import chartReducer from './chartData/chartData.reducer';

export const rootReducer = combineReducers({
  chart: chartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

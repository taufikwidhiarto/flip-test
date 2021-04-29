import {
  Action,
  combineReducers,
  PreloadedState,
  Store,
  createStore,
  applyMiddleware,
  compose,
} from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";
import { transactionsReducer } from "./transactions/transactions.reducer";

export const reducers = combineReducers({
  transactions: transactionsReducer,
});

// -> https://github.com/zalmoxisus/redux-devtools-extension#installation
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const _createStore = (
  initialState?: PreloadedState<AppState>
): Store<AppState> =>
  createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

const getPreloadedState = (): PreloadedState<AppState> | undefined => {
  // Grab the state from a global variable injected into the server-generated HTML
  const preloadedState = (window as any).__PRELOADED_STATE__;

  // Allow the passed state to be garbage-collected
  delete (window as any).__PRELOADED_STATE__;

  return preloadedState;
};

export const store = _createStore(getPreloadedState());

export type AppState = ReturnType<typeof reducers>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export interface DispatchObject {
  [key: string]: any;
  type: string;
}

type PromiseResolveValue<T> = T extends Promise<infer R> ? R : T;
type EffectType<T extends (...args: any) => any> = ReturnType<ReturnType<T>>;
type EffectReturnValue<T extends (...args: any) => any> = PromiseResolveValue<
  EffectType<T>
>;
export type ActionType<
  T extends (...args: any) => any
> = ReturnType<T> extends DispatchObject ? ReturnType<T> : EffectReturnValue<T>;

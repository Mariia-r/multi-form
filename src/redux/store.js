import { createStore, combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

const rootReducer = combineReducers({
  form: reducerForm
});

const store = createStore(rootReducer);

export default store;
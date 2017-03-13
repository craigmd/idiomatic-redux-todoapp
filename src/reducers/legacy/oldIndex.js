//Keeping this for reference, no longer used after video 20

import { combineReducers } from 'redux'
import todos, * as fromTodos from './todos'

const App = combineReducers({
  todos
});

// export default App

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);

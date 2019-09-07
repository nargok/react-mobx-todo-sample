import React from 'react';
import { observer } from 'mobx-react';
import { values } from 'mobx';
import { getSnapshot } from 'mobx-state-tree';

let id = 1;
const randomId = () => ++id;

const App = observer(props => {
  console.log(getSnapshot(props.store))
  return (
    <>
      <button onClick={e => props.store.addTodo(randomId(), "New Task")}>
        Add Task
      </button>
      {
        values(props.store.todos).map(todo => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => todo.toggle()}
            />
            <input
              type="text"
              value={todo.name}
              onChange={e => todo.setName(e.target.value)}
            />
          </div>
        ))
      }
    </>
)})

export default App;

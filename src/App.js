import React from 'react';
import { types, getSnapshot } from 'mobx-state-tree';

const Todo = types
  .model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
  })
  .actions(self => ({
    setName(newName) {
      self.name = newName
    },

    toggle() {
      self.done = !self.done
    }
  }))

const User = types.model({
  name: types.optional(types.string, ""),
})

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.optional(types.map(Todo), {}),
  })
  .actions(self => ({
    addTodo(id, name) {
      self.todos.set(id, Todo.create({ name }))
    }
  }))

const store = RootStore.create({
  users: {}
})

const john = User.create()
const eat = Todo.create({ name: "eat" })

console.log("john:", getSnapshot(john))
console.log("Eat TODO:", getSnapshot(eat))

store.addTodo(1, "Eat a cake")
store.todos.get(1).toggle()

console.log(getSnapshot(store))


function App() {
  return (
    <>
    </>
  );
}

export default App;

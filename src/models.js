import { types } from 'mobx-state-tree';

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
  users: {},
  todos: {
    "1": {
      name: "Eat a cake",
      done: true,
    }
  },
})

export default store;

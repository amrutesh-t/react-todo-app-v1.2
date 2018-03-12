export default {
  handleChange(event) {
    let value = event.target.value;
    this.setState(prevState => ({
          todos: prevState.switchSearch?prevState.bkpTodos:(prevState.bkpTodos.filter((val)=>(!value ? true : (val.todo.toUpperCase().indexOf(value.toUpperCase()) > -1)))),
          bkpTodos: prevState.bkpTodos,
          input: value,
          filterInput: value,
      })
    );
  },

  handleClick(event) {
    event.preventDefault();
    if (this.state.input.length) {
      const newTodo= {
        todo: this.state.input,
        checked: false,
        active: false,
        completed: false
      };

      this.setState(prevState => ({
        todos: prevState.todos.concat(newTodo),
        bkpTodos: prevState.bkpTodos.concat(newTodo),
        input: '',
        filterInput: ''
      }));
    } else {
      return;
    }
  },

  handleClickAll(event) {
    event.preventDefault();
    const newTodos = this.state.todos;
    newTodos.map((val) => {
      val.checked=!val.checked;
      val.active=val.completed=false;
      return val;
    });

    this.setState(prevState => ({
      todos: newTodos,
      bkpTodos: prevState.bkpTodos,
      input: '',
      filterInput: ''
    }));
  },

  handleCheck(index) {
    const newTodos = this.state.todos;
    newTodos[index].checked = !newTodos[index].checked;
    newTodos[index].active = false;
    newTodos[index].completed = false;

    this.setState(prevState => ({
      todos: newTodos,
      bkpTodos: prevState.bkpTodos,
      input: '',
      filterInput: ''
    }));
  },

  handleDelete(index){
    const newTodos = this.state.todos;
    newTodos.splice(index, 1);
    this.setState(prevState => ({
      todos: newTodos,
      bkpTodos: newTodos,
      input: '',
      filterInput: ''
    }));
  }
}

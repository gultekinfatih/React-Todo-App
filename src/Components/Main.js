import { useState } from "react";
import Todo from "./Todo";

function Main({ todos, setTodos, filteredTodos }) {
  const [clickHandler, setClickHandler] = useState(true);
  const allCompletedHandler = () => {
    //hepsini işaretlemeye tıkladığımda hepsinin completed durumunu true yapması için state'de default true yaptık.
    setTodos(
      todos.map((item) => {
        return { ...item, completed: clickHandler };
      })
    );
    setClickHandler(!clickHandler);
  };
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label onClick={allCompletedHandler} htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </section>
  );
}

export default Main;

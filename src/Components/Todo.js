function Todo({ todo, text, todos, setTodos }) {
  //completed durumunu ayarlayan fonksiyon(tıkladıgım todoyu completed durumunun tersi yap)
  const completed = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  //Silme fonksiyonu(tıkladığım id'ye eşit olmayan id'li todoları göster, tıkladığımı sil)
  const destroy = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  // todonun completed durumu true ise className completed ver false ise boş bırak
  return (
    <>
      <li className={`${todo.completed ? "completed" : ""}`}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={completed}
            checked={todo.completed}
          />
          <label>{text}</label>
          <button className="destroy" onClick={destroy}></button>
        </div>
      </li>
    </>
  );
}

export default Todo;

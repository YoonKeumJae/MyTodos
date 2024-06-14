function App() {

  return (
    <>
      <h1>The TODOLIST Project</h1>
      <form>
        <input type="text" placeholder="Input your todos" />
        <button>OK</button>
      </form>
      <div>
        <ul>
          <li>Todo 1 <button>X</button></li>
          <li>Todo 2 <button>X</button></li>
          <li>Todo 3 <button>X</button></li>
        </ul>
      </div>
    </>
  )
}

export default App

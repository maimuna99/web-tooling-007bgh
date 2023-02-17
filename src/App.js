import React, { useState, useRef, useEffect } from "react";
import Todolist from "./Todolist";
// import Header from "./header";
import uuidv4 from "uuid/v4";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const todoNameRef = useRef();
  const todoDesRef = useRef();
  const todoEmojiRef = useRef();
  // { id: 1, name: "todo1", description: "desc", emoji: "🧘🏻‍♂️", complete: true },
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  function handleAddToDo() {
    const name = todoNameRef.current.value;
    const description = todoDesRef.current.value;
    const emoji = todoEmojiRef.current.value;
    if (name === "") return;
    console.log(name);
    // todoNameRef.current.value = todos;
    setTodos(() => {
      return todos.concat([
        {
          id: uuidv4(),
          name: name,
          description: description,
          emoji: emoji,
          complete: false,
        },
      ]);
    });
    todoNameRef.current.value = null;
    todoDesRef.current.value = null;
    todoEmojiRef.current.value = null;
    console.log(todos, "todos");
  }
  return (
    <>
      {/* <Header /> */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-800">
              Healthy habits for a better life
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              This is your habbit Tracker!
            </p>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-800">
              You have {todos.length} Habit(s)
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
              <div>
                Habit name:
                <input
                  ref={todoNameRef}
                  id="name"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                Habit Description:
                <input
                  ref={todoDesRef}
                  id="describtion"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                Habit Emoji:
                <input
                  ref={todoEmojiRef}
                  id="emoji"
                  type="text"
                  required
                  className="relative block text-9xl w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex justify-center space-x-1">
              <button
                type="submit"
                onClick={handleAddToDo}
                className="group relative  w-full  justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Add Habit
              </button>
              <button
                type="submit"
                className="group relative  w-full  justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Clear Habits
              </button>
            </div>
          </form>

          <Todolist todos={todos} />
        </div>
      </div>
    </>
  );
}

export default App;

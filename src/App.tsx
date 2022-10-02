import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TikTakToe from "./screens/TikTakToe";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo:todo, isDone: false }]);
      setTodo("");
    }else{
      alert('Field cannot be empty ')
    }
  };
  

  

  return (
    // <div className="App">
      <TikTakToe />
     
  );
};

export default App;

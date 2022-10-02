import React from 'react'
import './style.css'


interface Props{
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  
  return (
    <form className='input' onSubmit={handleAdd}>
       <input value={todo} onChange={(e)=> {
          return setTodo(e.target.value)
       }} type="text" placeholder='Enter a task' className='input__box' />
       <button  className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
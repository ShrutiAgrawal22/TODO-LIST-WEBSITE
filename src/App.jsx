import React from 'react'
import { useState } from "react";

const App = () => {

  //list rendering or showing object using useState:
  const [tasks, settasks] = useState([
    {title : "Gym", completed : true},
    {title : "lunch", completed : true},
    {title : "breakfast", completed : true},
    {title : "dinner", completed : true},
  ]);

  const [title, settitle] = useState("");
  
  const SubmitHandler = (e) => {
    e.preventDefault();
    const newtask = ({title, completed : false});

    const copytasks = [...tasks];   //using spread operator for copying tasks.
    copytasks.push(newtask);
    settasks(copytasks);

    settitle("");
  }
  
  let taskrender = tasks.map((task, index) => (
    <li key={index}>{task.title}</li>
  ))

  return (
    // list rendering or showing object using useState:
    <div className="w-[80%] mx-auto mt-2"> 
    <h1 className='text-xl mb-4 mt-4 bg-blue-100 w-1/3 text-center'>Add Tasks</h1>
    <form className='border p-5 mb-5' onSubmit={SubmitHandler}>
      <input 
      className='border p-2 rounded-lg mr-5'
      type="text"
      placeholder='title'
      onChange={(e) => settitle(e.target.value)}
      value={title}
      />
      <button className='bg-red-600 px-5 py-2 text-white'>submit</button>
    </form>

    <h1 className='text-xl mb-2 bg-yellow-100 w-1/3 text-center'>Tasks</h1>
    <ul className="list-disc">{taskrender}</ul>

    </div>
  )
}

export default App
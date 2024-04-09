import React from 'react'

import { useState } from "react";

const App = () => {

  //list rendering or showing object using useState:

  const [tasks, settasks] = useState([]);
  
  const [title, settitle] = useState("");
  
  const [count, setcount] = useState();

  const SubmitHandler = (e) => {
    e.preventDefault();  //for preventing reload of page.
    const newtask = ({title, completed : false});

    const copytasks = [...tasks];   //using spread operator for copying tasks. (new array mai tasks ko copy kia using spread operator)
    copytasks.push(newtask);
    settasks(copytasks);

    settitle("");  //input field ko empty krne ke liye 
  }
  
  let taskrender = <h1>No Task Alloted</h1>
  if(tasks.length > 0){
    taskrender = tasks.map((task, index) => (
      <li className='flex justify-between w-1/3 text-red-600' key={index}>{task.title} <i class="ri-delete-bin-line"></i></li>
    ))
  }
  


  const addTask = (task) => {
    settasks([...tasks, task]);
  }
  return (
    // list rendering or showing object using useState:

    <div className="w-[80%] mx-auto mt-2"> 

    <div className='flex text-xl mb-4 mt-4 px-4 justify-between align-center w-1/3 bg-orange-100'>
    <h1>Total Tasks</h1> 
    <h3>{tasks.length}</h3>
    </div>

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


//we will perform curd operations and the only u -> update will not work
//total number of tasks will show
//delete feature will work

//-create form -> for adding task, title : task name, completed : false

//render all task in the view 

//-- create functionality to mark task completed.
//--- counter to check completed task out of total task.
//---- delete the particular task.

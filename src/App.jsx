import React from 'react'

import { useState } from "react";

const App = () => {

  //list rendering or showing object using useState:

  const [tasks, settasks] = useState([
    {title : "Task 1", completed : false},
    {title : "Task 2", completed : false}
  ]);
  
  const [title, settitle] = useState("");
  
  const [count, setcount] = useState();

  const CompleteTaskToggle = (e, i) => {
    console.log(e, i);

    console.log(e.target.classList);
    e.target.classList.toggle("bg-green-600");
    e.target.classList.toggle("border");

    console.log(e.target.nextSibling.classList);
    e.target.nextSibling.classList.toggle("line-through")
    e.target.nextSibling.classList.toggle("no-underline");
    
    const copyTasks = [...tasks];
    copyTasks[i].completed = !tasks[i].completed;
    settasks(copyTasks);
  }

  const SubmitHandler = (e) => {
    e.preventDefault();  //for preventing reload of page.
    const newtask = ({title, completed : false});

    const copytasks = [...tasks];   //using spread operator for copying tasks. (new array mai tasks ko copy kia using spread operator)
    copytasks.push(newtask);
    settasks(copytasks);

    settitle("");  //input field ko empty krne ke liye 
  }
  
  let taskrender = <h1 className='text-stone-200'>No Task Alloted</h1>
  if(tasks.length > 0){
    taskrender = tasks.map((task, index) => (
      <li className='flex justify-between items-center px-5 w-[20rem] h-[2.8rem] border rounded-md text-stone-200 font-semibold bg-zinc-800 mt-2' 
      key={index}> 

      <div className='flex gap-2 justify-center items-center'>
        <div onClick={(e) => CompleteTaskToggle(e, index)} className='h-5 w-5 rounded-full border border-red-600'></div>
        <h1 className='no-underline'>{task.title}</h1>
      </div>

      <div className='flex gap-2'>
       <i className="ri-edit-line text-stone-200 font-normal"></i>
       <i className="ri-delete-bin-7-line text-stone-200 font-normal"></i>
      </div>

      </li>
    ))
  }
  


  const addTask = (task) => {
    settasks([...tasks, task]);
  }

  console.log(tasks);
  return (
    // list rendering or showing object using useState:

    <div className="w-screen h-screen bg-gray-950 flex justify-start items-center flex-col"> 

    <h1 className='text-white absolute left-12 top-6 font-medium'>XERO<span className='text-orange-500'>TODO</span></h1>

    <h1 className='text-white absolute right-12 top-6'>
    <i class="ri-share-forward-box-line font-thin"></i>
    </h1>

    <div className='flex text-xl justify-between items-center align-center p-10 w-[21rem] h-[11rem] border rounded-2xl mx-auto mt-16 md:mt-6'>
       <div>
        <h1 className='text-stone-200 font-bold text-2xl'>ToDo Done</h1> 
        <h6 className='text-stone-200 text-xs tracking-widest'>Keep it up</h6>
      </div>
      <div className='w-20 h-20 bg-orange-700 rounded-full flex items-center justify-center'>
        <h3 className='text-black font-bold'>{tasks.filter(t => t.completed === true).length} / {tasks.length}</h3>
      </div>
    </div>

    <div className="mt-4 flex align-center items-center flex-col">
        <form className='w-[21rem] mx-auto flex align-center justify-center' onSubmit={SubmitHandler}>
            <input 
                className='p-2 px-4 w-3/4 bg-zinc-800 opacity-50 rounded-lg mr-5 text-white'
                type="text"
                placeholder='write your next task'
                onChange={(e) => settitle(e.target.value)}
                value={title}
            />
            <button className='bg-orange-700 h-10 w-10 text-white rounded-full'>
            <i className="ri-add-line text-black font-bold"></i>
            </button>
        </form>

        <ul className="list-disc mt-4 mx-auto">{taskrender}</ul> 
    </div>

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

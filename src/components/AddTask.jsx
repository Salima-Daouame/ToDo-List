import React, { useState } from 'react';
import listdo from '../../public/img/listdo.png';
import add from '../../public/img/add.png';
import terminer from '../../public/img/terminer.png';
import edit from '../../public/img/edit.png';
import deleter from '../../public/img/delete.png';

function AddTask() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, task]);
      setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks,false]); 
      setTask('');
    }
  };

  const handleTerminerClick = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !completedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  };

  const handleEditClick = (index) => {
    const updatedTask = prompt('Edit task:', tasks[index]);
    if (updatedTask !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  };

  const handleDeleteClick = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <div className='flex flex-col items-center bg-gray-100 h-[80vh] overflow-y-hidden shadow-2xl shadow-gray-400'>
      <div className='  mb-10 flex flex-col items-center'>
        <div className='inline-flex'>
          <h4 className='text-4xl font-bold mt-10 p-0'>ToDo List</h4>
          <img src={listdo} alt='' className='w-15 h-20 mb-5 mt-5' />
        </div>
        <div className='inline-flex focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-500 ring-2 ring-inset pl-15 pr-0 ring-gray-300 rounded-3xl'>
          <input
            type='text'
            placeholder='Add your task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className='border-opacity-0 bg-transparent pl-4 pr-10 placeholder:text-gray-400 focus:border-transparent focus:outline-none font-medium'
          />
          <img
            src={add}
            alt=''
            className='w-11 h-11 cursor-pointer'
            onClick={handleAddTask}
          />
        </div>
      </div>

      <ul className='w-full max-w-md bg-white rounded-md shadow-md overflow-auto'>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center py-2 border-b border-gray-300 ${completedTasks[index] ? 'line-through' : ''}`}
          >
            <span className='flex-1 p-2 font-medium'>{task}</span>
            <img
              src={terminer}
              alt=''
              className='w-8 h-8 mx-2 cursor-pointer'
              onClick={() => handleTerminerClick(index)}
            />
            <img
              src={edit}
              alt=''
              className='w-6 h-6 mx-2 cursor-pointer'
              onClick={() => handleEditClick(index)}
            />
            <img
              src={deleter}
              alt=''
              className='w-6 h-6 mx-2 cursor-pointer'
              onClick={() => handleDeleteClick(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddTask;

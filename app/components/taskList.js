import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskList({ items, toggleComplete, editItem, deleteItem }) {
  return (
    <div>
      <div className="mt-6">
        <h2 className="text-xl text-center">Active Tasks</h2>
        <ul className="border border-white p-4 rounded-lg">
          {items.filter((item) => !item.completed).map((item) => (
            <TaskItem
              key={item.id}
              item={item}
              toggleComplete={toggleComplete}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl text-center">Completed Tasks</h2>
        <ul className="border border-white p-4 rounded-lg">
          {items.filter((item) => item.completed).map((item) => (
            <TaskItem
              key={item.id}
              item={item}
              toggleComplete={toggleComplete}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function TaskItem({ item, toggleComplete, editItem, deleteItem }) {
  return (
    <li className={`my-4 w-full flex justify-between ${item.completed ? 'bg-green-500' : 'bg-slate-950'} border border-white rounded-lg`}>
      <div className="p-4 w-full flex justify-between">
        <span className="capitalize">{item.name}</span>
      </div>
      <div className="p-4 w-full">
        <span className="text-sm">{item.description}</span>
      </div>
      <div className="p-4 w-full">
        <span className="text-sm">{item.priority}</span>
      </div>
      <div className="p-4 w-full">
        <span className="text-sm">{item.dueDate}</span>
      </div>
      <div className="flex space-x-4 items-center mr-3">
        <button onClick={() => toggleComplete(item)} className={item.completed ? 'text-black' : 'text-green-500'}>
          {item.completed ? 'Pending' : 'Done'}
        </button>
        <EditIcon onClick={() => editItem(item)} />
        <DeleteIcon onClick={() => deleteItem(item.id)} />
      </div>
    </li>
  );
}

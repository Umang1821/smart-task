import React from 'react';

export default function TaskForm({ newItem, setNewItem, addItem, updateItem, editingItem }) {
  return (
    <div className="w-[50%] bg-slate-800 p-4 rounded-lg  ">
      <form
        onSubmit={editingItem ? updateItem : addItem}
        className="items-center text-black flex flex-col justify-center gap-2 w-full"
      >
        <div className=" md:grid-cols-2 gap-4 w-full flex">
          <input
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="w-11/12 md:w-9/12 p-3 border mb-2 h-full"
            type="text"
            placeholder="Enter Title"
          />
          <input
            value={newItem.description}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            className="w-11/12 md:w-9/12 p-3 border h-full"
            type="text"
            placeholder="Enter Description"
          />
        </div>
        <div className=" md:grid-cols-2 gap-4 w-full flex">
          <select
            value={newItem.priority}
            onChange={(e) => setNewItem({ ...newItem, priority: e.target.value })}
            className="w-11/12 md:w-9/12 p-3 border h-full"
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            value={newItem.dueDate}
            onChange={(e) => setNewItem({ ...newItem, dueDate: e.target.value })}
            onClick={(e) => e.target.showPicker()}
            className="w-11/12 md:w-9/12 p-3 border h-full"
            type="date"
          />
        </div>
        <button className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl  mt-3 rounded-md" type="submit">
          {editingItem ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
}

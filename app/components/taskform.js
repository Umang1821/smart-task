import React from 'react';

export default function TaskForm({ newItem, setNewItem, addItem, updateItem, editingItem }) {
  return (
    <div className="w-full bg-slate-800 p-4 rounded-lg ">
      <form
        onSubmit={editingItem ? updateItem : addItem}
        className="items-center text-black flex flex-col gap-4 w-full"
      >
        <input
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="w-full p-3 border"
          type="text"
          placeholder="Enter Title"
        />
        <input
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          className="w-full p-3 border mt-3"
          type="text"
          placeholder="Enter Description"
        />
        <select
          value={newItem.priority}
          onChange={(e) => setNewItem({ ...newItem, priority: e.target.value })}
          className="w-full p-3 border mt-3"
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
          className="w-full p-3 border mt-3"
          type="date"
        />
        <button className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl w-full mt-3" type="submit">
          {editingItem ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
}

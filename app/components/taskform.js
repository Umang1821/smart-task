import React from "react";

export default function TaskForm({
  newItem,
  setNewItem,
  addItem,
  updateItem,
  editingItem,
}) {
  return (
    <div className="w-full text-black   bg-gradient-to-r from-slate-700 to-slate-800 p-6 rounded-2xl shadow-lg">
      <form
        onSubmit={editingItem ? updateItem : addItem}
        className="flex flex-col gap-6"
      >
        <h2 className="text-[22px] font-semibold font-mono text-center text-white mb-4">
          {editingItem ? "Edit Task" : "Add New Task"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="p-3 border border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter Title"
          />
          <input
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
            className="p-3 border border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter Description"
          />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={newItem.priority}
            onChange={(e) =>
              setNewItem({ ...newItem, priority: e.target.value })
            }
            className="p-3 border border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            value={newItem.dueDate}
            onChange={(e) =>
              setNewItem({ ...newItem, dueDate: e.target.value })
            }
            onClick={(e) => e.target.showPicker()}
            className="p-3 border border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="date"
          />
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={newItem.priority}
            onChange={(e) =>
              setNewItem({ ...newItem, priority: e.target.value })
            }
            className="p-4 text-lg border border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            value={newItem.dueDate}
            onChange={(e) =>
              setNewItem({ ...newItem, dueDate: e.target.value })
            }
            onClick={(e) => e.target.showPicker()}
            className="p-4 text-lg border border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="date"
          />
        </div>


        <button
          className="w-full text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-xl font-semibold shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          {editingItem ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

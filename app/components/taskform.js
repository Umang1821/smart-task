import React, { useState } from "react";

export default function TaskForm({
  newItem,
  setNewItem,
  addItem,
  updateItem,
  editingItem,
}) {
  const [validationErrors, setValidationErrors] = useState({});

  const validateFields = () => {
    const errors = {};
    if (!newItem.name) errors.name = "Title is required.";
    if (!newItem.description) errors.description = "Description is required.";
    if (!newItem.priority) errors.priority = "Priority is required.";
    if (!newItem.dueDate) errors.dueDate = "Due Date is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});
    if (editingItem) {
      updateItem(e);
    } else {
      addItem(e);
    }
  };

  return (
    <div className="w-full text-black bg-gradient-to-r from-slate-700 to-slate-800 p-6 rounded-2xl shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <h2 className="text-[22px] font-semibold font-mono text-center text-white mb-4">
          {editingItem ? "Edit Task" : "Add New Task"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className={`p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              validationErrors.name
                ? "bg-red-300 text-white"
                : "bg-slate-100 text-black"
            }`}
            type="text"
            placeholder="Enter Title"
          />
          <input
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
            className={`p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              validationErrors.description
                ? "bg-red-300 text-white"
                : "bg-slate-100 text-black"
            }`}
            type="text"
            placeholder="Enter Description"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <select
            value={newItem.priority}
            onChange={(e) =>
              setNewItem({ ...newItem, priority: e.target.value })
            }
            className={`p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              validationErrors.priority
                ? "bg-red-300 text-white"
                : "bg-slate-100 text-black"
            }`}
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            value={newItem.dueDate}
            onChange={(e) => setNewItem({ ...newItem, dueDate: e.target.value })}
            onClick={(e) => e.target.showPicker()}
            className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              validationErrors.dueDate
                ? "bg-red-300 text-white"
                : "bg-slate-100 text-black"
            }`}
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

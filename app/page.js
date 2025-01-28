'use client';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from './firebase';
import TaskForm from './components/taskform';
import TaskList from './components/taskList';
import TaskSummary from './components/taskSummary';
import Login from './components/login';
import { useAuth } from './context/AuthContext';

export default function Home() {
  const { user, logOut } = useAuth();

  if (!user) {
    return <Login />;
  }

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', priority: '', dueDate: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [taskCounts, setTaskCounts] = useState({ total: 0, low: 0, medium: 0, high: 0 });

  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== '' && newItem.description !== '' && newItem.priority !== '' && newItem.dueDate !== '') {
      await addDoc(collection(db, 'items'), {
        ...newItem,
        completed: false,
        uid: user.uid,
      });
      setNewItem({ name: '', description: '', priority: '', dueDate: '' });
    }
  };

  const updateItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== '' && newItem.description !== '' && newItem.priority !== '' && newItem.dueDate !== '') {
      await updateDoc(doc(db, 'items', editingItem.id), { ...newItem });
      setNewItem({ name: '', description: '', priority: '', dueDate: '' });
      setEditingItem(null);
    }
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'items', id));
  };

  const toggleComplete = async (item) => {
    await updateDoc(doc(db, 'items', item.id), { completed: !item.completed });
  };

  useEffect(() => {
    if (editingItem) {
      setNewItem({
        name: editingItem.name,
        description: editingItem.description,
        priority: editingItem.priority,
        dueDate: editingItem.dueDate,
      });
    }
  }, [editingItem]);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, 'items'),
        where("uid", "==", user.uid)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];
        let counts = { low: 0, medium: 0, high: 0 };

        querySnapshot.forEach((doc) => {
          const item = { ...doc.data(), id: doc.id };
          itemsArr.push(item);
          counts[item.priority.toLowerCase()]++;
        });

        setItems(itemsArr);
        setTaskCounts({
          total: itemsArr.length,
          low: counts.low,
          medium: counts.medium,
          high: counts.high,
        });
      });

      return () => unsubscribe();
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-white justify-between sm:p-24 p-4 ">
      <button className="absolute top-4 right-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        onClick={logOut}>Sign out</button>

      <h1 className="text-4xl p-4 text-center text-black">Smart Task Manager</h1>
      <TaskSummary taskCounts={taskCounts} />
      <TaskForm
        newItem={newItem}
        setNewItem={setNewItem}
        addItem={addItem}
        updateItem={updateItem}
        editingItem={editingItem}
        className="w-full max-w-2xl"
      />
      <TaskList
        items={items}
        toggleComplete={toggleComplete}
        editItem={setEditingItem}
        deleteItem={deleteItem}
        className="w-full max-w-2xl"
      />
     
    </main>
  );
}

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const App = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title || !desc) return

    const newTask = {
      id: Date.now(),
      title,
      desc
    }

    setTasks([...tasks, newTask])

    setTitle("")
    setDesc("")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md h-137 flex flex-col gap-4">
        
        {/* FORM */}
        <form 
          onSubmit={submitHandler} 
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold text-center">Add Task</h2>

          <input
            type="text"
            placeholder="Enter task"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Details"
            rows="3"
            className="px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-indigo-500"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
            Add Task
          </button>
        </form>

        
        <div className="flex-1 bg-white p-4 rounded-xl shadow overflow-y-auto">
          
          <AnimatePresence>
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                className="mb-3 p-3 border rounded-lg bg-gray-50 shadow-sm"
              >
                <p className="font-semibold">{task.title}</p>
                <p className="text-gray-600 text-sm">{task.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>

        </div>

      </div>
    </div>
  )
}

export default App
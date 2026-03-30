import React from 'react'

const Card = ({img, title, posts, followers, following}) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      
      {/* Card */}
      <div className="relative w-87.5 p-4 rounded-2xl 
        bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">

        {/* Close Button */}
        <button className="absolute top-2 right-3 text-white text-xl">×</button>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          
          {/* Profile Image with Glow */}
          <div className="p-0.5 rounded-full bg-linear-to-r from-pink-500 to-purple-500">
            <img
              src={img}
              alt="logo"
              className="h-16 w-16 rounded-full object-cover bg-black"
            />
          </div>

          {/* Name + Stats */}
          <div className="text-white">
            <h2 className="font-semibold text-lg">{title}</h2>
            <div className="flex gap-4 text-sm text-gray-300">
              <span><b>{posts}</b> posts</span>
              <span><b>{followers}</b> followers</span>
              <span><b>{following}</b> following</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-3 text-sm text-gray-200">
          <p>🚀 Digital Marketing Agency | AI & Design Experts</p>
          <p>🎨 Graphics 🎬 Video Editing 💻 Web Dev</p>
          <p>📩 WhatsApp Marketing - DM us to grow your brand</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-lg">
            Follow
          </button>
          <button className="flex-1 bg-gray-700 hover:bg-gray-800 text-white py-1.5 rounded-lg">
            Message
          </button>
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-1.5 rounded-lg">
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
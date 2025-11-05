import React from 'react'

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#121212] text-white">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-400"></div>
      <p className="ml-3 text-blue-400">Loading...</p>
    </div>
  )
}

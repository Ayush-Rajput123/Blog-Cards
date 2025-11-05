import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from './Loader'

export default function Detail() {
  const { id } = useParams()
  const { items, loading, error } = useSelector((state) => state.posts)

  if (loading) return <Loader />
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>

  const post = items.find((p) => p.id === Number(id))
  if (!post) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#121212] text-white">
        <p className="text-lg mb-4">Post not found.</p>
        <Link to="/" className="text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center px-4 py-10">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Card Details</h1>
        <Link to="/" className="text-blue-400 hover:underline">
          ← Back
        </Link>
      </div>

      {/* Post Detail Card */}
      <div className="bg-[#1e1e1e] w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.imgSrc}
          alt={post.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Details Page For Post With ID {id}</h2>

          <div className="space-y-3 text-gray-300">
            <p>
              <span className="font-semibold text-gray-100">User Id:</span> {post.userId}
            </p>
            <p>
              <span className="font-semibold text-gray-100">Title:</span> {post.title}
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold text-gray-100">Body:</span> {post.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

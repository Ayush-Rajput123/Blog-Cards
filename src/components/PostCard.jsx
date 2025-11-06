import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  const title = post.title.length > 30 ? post.title.slice(0, 30) + '...' : post.title
  const body = post.body.length > 70 ? post.body.slice(0, 70) + '...' : post.body

  return (
    <Link to={`/item/${post.id}`}>
    <div
      className="
        block bg-[#1e1e1e] text-white rounded-lg overflow-hidden shadow-md
        transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]
        hover:shadow-2xl cursor-pointer h-full
      "
    >
      <img src={post.imgSrc} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <p className="text-xs text-gray-400 mb-1">User ID: {post.userId}</p>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-300">
          {body}
          {post.body.length > 70 && (
            <span className="text-blue-400 ml-1">
              Read More...
            </span>
          )}
        </p>
      </div>
    </div>
    </Link>
  )
}

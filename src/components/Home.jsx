import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
import PostCard from './PostCard'
import Loader from './Loader'

export default function Home() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((s) => s.posts)

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchPosts())
    }
  }, [dispatch])

  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem('scrollY', window.scrollY)
    }
    window.addEventListener('scroll', saveScroll)
    return () => window.removeEventListener('scroll', saveScroll)
  }, [])

  useEffect(() => {
    const y = sessionStorage.getItem('scrollY')
    if (y) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(y, 10), behavior: 'instant' })
      }, 100)
    }
  }, [])

  if (loading) return <Loader />
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>

  return (
    <div className="bg-[#121212] min-h-screen text-white px-5 py-8">
      <h1 className="text-2xl font-bold mb-6">Social Media Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: 'FETCH_POSTS_START' })
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    const withImages = data.map((post) => ({
      ...post,
      imgSrc: `https://picsum.photos/400?random=${post.id}`,
    }))
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: withImages })
  } catch (err) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: err.message })
  }
}

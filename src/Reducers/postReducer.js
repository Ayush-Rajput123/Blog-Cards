const initialState = {
  items: [],
  loading: false,
  error: null,
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POSTS_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, items: action.payload }
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

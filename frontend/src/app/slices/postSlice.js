import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  isLoading:true
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
  
    setPosts: (state, action) => {
      state.posts = action.payload
    },

    addPost:(state,action) => {
      state.posts = [action.payload, ...state.posts]
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    
  },
})


export const { setPosts,setIsLoading, addPost} = postSlice.actions

export default postSlice.reducer
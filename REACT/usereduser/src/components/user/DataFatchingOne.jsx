import React, { useReducer } from 'react'
import axios from "axios"
import { useState,useEffect } from 'react'

const initialstate = {
    loading : true,
    post : [],
    error : ''
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FATCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error : ""
            }
        case 'FATCH_ERROR':
            return {
                loading: false,
                post: {},
                error : "Something went wrong"
            }
        default: 
            return state
    }
}




function DataFatchingOne() {
    // cosnt[loading,setLoading]= useState(true)
    // cosnt [post, setPost] = useState([])
    // cosnt[error,setError]= useState('')

    const [state, dispatch] = useReducer(reducer, initialstate)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            // setLoading(false);
            // setPost(res.data);
            // setError('');
            dispatch({type: "FATCH_SUCCESS", payload: res.data})
        })
        .catch(error => {
            // setLoading(false);
            // setPost([]);
            // setError('somthing went wrong');
            dispatch({type: "FATCH_ERROR",})
        })
    })
  return (
    <div>
      {state.loading ? "Loading........!" : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFatchingOne

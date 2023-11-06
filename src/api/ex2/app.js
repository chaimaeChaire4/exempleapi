import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./users";
const AppUsers=()=>{
    const [users,setUsers]=useState([])
    const [posts,setPosts]=useState([])
    const [userId ,setUserId]=useState("")
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{setUsers(res.data)})
    },[])
    function PostsId(userId) {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((res)=>{
            setPosts(res.data)
            setUserId(userId)
        })
    }
    return(
        <>
        <Users users={users} PostsId={PostsId} userId={userId} posts={posts}/>
        </>
    )
}
export default AppUsers;
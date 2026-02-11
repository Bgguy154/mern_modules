import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false); 

    useEffect(()=>{
        async function showPosts() {
        try {
            setLoading(true);
            const posts = await axios.get("https://dummyjson.com/posts");
            setPosts(posts.data.posts);
            setLoading(false);
        }
        catch (error) {
            console.log("Error occured while loading posts", error);
            setLoading(false);
        }
    }
    showPosts();
    },[])

    if (loading) {
        return <span>Loading posts...</span>
    }
    return (
        <>
            <button>Load Posts</button>
            {
                posts && posts.map((post, ind) => {
                    return <div key={ind}>
                        <h2>{post.title}</h2>
                        <p>{post.body }</p>
                    </div>
                })
            }
        </>
    )
}

export default Posts
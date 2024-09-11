import axios from 'axios';
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const PostAPI = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = useCallback( async () => {
        await axios.get(`/posts`)
        .then((posts)=>{
         console.log(posts);
         setPosts(posts.data);
        })
        .catch(error => toast.error('Error:', error));
     }, []);
 
    useEffect(()=>{fetchPosts()}, [fetchPosts]);

  return {posts : [posts, setPosts]}
}

export default PostAPI
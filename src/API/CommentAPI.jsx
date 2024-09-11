import axios from 'axios';
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const CommentAPI = () => {
    const [comment, setComment] = useState([]);

    const fetchComments = useCallback( async () => {
        await axios.get('/comments').then((comments)=>{
            setComment(comments.data)
        }).catch(error => toast.error(error.message))
        
    }, []);

    useEffect(()=>{
        fetchComments();
    },[fetchComments]);
    
  return {comments : [comment, setComment]}
}

export default CommentAPI
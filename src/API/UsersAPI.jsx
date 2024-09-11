import axios from 'axios';
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const UsersAPI = () => {
    const [user, setUser] = useState([]);

    /* useCallback will return a memoized version of the callback that only changes if one of the inputs has changed. */

    const fetchUsers = useCallback( async () => {
       await axios.get(`/users`)
       .then((users)=>{
        console.log(users);
        setUser(users.data);
       })
       .catch(error => toast.error('Error:', error));
    }, []);

    useEffect(()=>{fetchUsers()}, [fetchUsers]);

  return {users : [user, setUser]}
}

export default UsersAPI
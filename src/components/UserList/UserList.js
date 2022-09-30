import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard/UserCard';

const UserList = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        setData(data);
      };
      useEffect(() => {
        getData();
      }, []);

  return (
    <div>
       {data.map((el) => (
        <UserCard el={el} key={el.id} />))}

    </div>
  )
}

export default UserList
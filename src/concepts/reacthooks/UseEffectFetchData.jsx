import React, { useEffect, useState } from 'react';
import axios from 'axios';
const UseEffectFetchData = () => {
  const [data, setData] = useState([])
   useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        if (res.status === 200) {
          setData(res.data);
        } else {
          return;
        }
      } catch (error) {
        console.log(error)
      }
    }
    getData()
   }, [])
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>#{item.title}</li>
      ))}
    </ul>
  )
}
export default UseEffectFetchData
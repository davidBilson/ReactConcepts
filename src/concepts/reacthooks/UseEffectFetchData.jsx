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
    <div>
      {data.map(item => (
        <div key={item.id}>#{item.title}</div>
      ))}
    </div>
  )
}
export default UseEffectFetchData
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectFetchData = () => {
  const [data, setData] = useState({})
  const [id, setId] = useState(1);

   useEffect(() => {
    async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(res)
        if (res.status === 200) {
          setData(res.data);
        } else {
          return;
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [id])

  // getData()
  return (
    <>
      <input type="text" placeholder='Enter Item Id' value={id} onChange={(e) => setId(e.target.value)} />
      <div>{data.id} {data.title} --</div>
      {/* <ul>
        {data.map(item => (
          <li key={item.id}>#{item.title}</li>
        ))}
      </ul> */}
    </>
  )
}
export default UseEffectFetchData
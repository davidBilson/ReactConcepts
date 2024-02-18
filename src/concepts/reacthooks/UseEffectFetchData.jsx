import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectFetchData = () => {
  const [data, setData] = useState({})
  const [id, setId] = useState(1);
  const [idOnclick, setIdOnclick] = useState(1);

  const fetchData = () => {
    setIdOnclick(id)
  }
   useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(res);
        if (res.status === 200) {
          setData(res.data);
        } else {
          return;
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [idOnclick]);

  return (
    <>
      <input type="text" placeholder='Enter Item Id' value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={fetchData}>Fetch Data</button>
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
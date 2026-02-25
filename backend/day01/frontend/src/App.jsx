import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import StudentCard from './components/studentCard'
import instance from './axiosConfig'

const App = () => {

  const [show , setShow] = useState([])

  // useEffect(()=>{
  //    async function fetchData() {
  //     const res = await fetch('http://localhost:3000/data')
  //     const data = await res.json()
  //     setShow(data)
  //     console.log(data)
  //     await console.log(show)
  //   }
  //   fetchData();
  // },[])

  useEffect( ()=>{
  const fetchData = async () => {
    try {
      const res = await instance.get('/data');
      console.log(res.data);
      setShow(res.data)
    } catch (error) {
      console.error(error);
    }
  };

  fetchData()

  } , [])
  

  return (
    <div>
       See student data here 

      {
        show.map((val)=>{
        return <StudentCard student={val}></StudentCard>
      })
      }
    

    </div>
  )
}

export default App

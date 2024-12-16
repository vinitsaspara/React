import React from 'react'
import { useEffect,useState } from 'react'

function Gitub() {

    const [data,setData] = useState([])

    useEffect(()=> {
        fetch('https://api.github.com/users/vinitsaspara')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            
            setData(data)
        })
    },[])

  return (
    <div className='text-white text-center m-4 bg-gray-500 p-4 text-3xl'>Gitub Reposatories:{data.public_repos} 
    <img  src={data.avatar_url} alt="Git pic" width={300}/></div>
  )
}

export default Gitub

// export const gitubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/vinitsaspara')
//     return response.json()
// }
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const UserInfo = () => {
    const [list, setList] = useState(null)
  const [isLoding, setIsLoding] = useState(true);

    // const {id}=useParams()
    // console.log(id)
    console.log(list)
    const getData=async()=>{
        try {
            const res= await  axios.get("https://pokeapi.co/api/v2/pokemon/")
            setList(res.data.results)
            setIsLoding(false)
        } catch (error) {
            console.log(error)
        }
    }
   useEffect(() => {
  getData()
   }, [])
   
  return (
    <div>
        {/* {isLoding?<>
         <Spinner animation="border" variant="primary" />
         <Spinner animation="border" variant="secondary" />
         <Spinner animation="border" variant="success" />
         <Spinner animation="border" variant="danger" />
         <Spinner animation="border" variant="warning" />
         <Spinner animation="border" variant="info" />
         <Spinner animation="border" variant="light" />
         <Spinner animation="border" variant="dark" />
         <Spinner animation="grow" variant="primary" />
         <Spinner animation="grow" variant="secondary" />
         <Spinner animation="grow" variant="success" />
         <Spinner animation="grow" variant="danger" />
         <Spinner animation="grow" variant="warning" />
         <Spinner animation="grow" variant="info" />
         <Spinner animation="grow" variant="light" />
         <Spinner animation="grow" variant="dark" />
       </>:
list&&
            <>
        <h1>{list.name}</h1>
        </>
        }
    </div> */}
    </div>
  )
}

export default UserInfo
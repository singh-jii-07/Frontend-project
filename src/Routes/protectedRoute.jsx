import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import {Navigate} from 'react-router-dom'


const protectedRoute = ({role,layout,redirectTo="/401"}) => {
    const [loading,setLoading]=useState(false);
    const [authorized,setAuthorized]=useState(false);
    useEffect(()=>{
        const checkRole=async()=>{
            try{
                setLoading(true)
                await axios.get('/api/auth/checkRole',{
                    withCredentials:true
                })
                setAuthorized(true);
            }
            catch(err){
                console.log("something is error")
            }
            finally{
                setLoading(false);
            }
        }
        checkRole();
    },[role])
    if(loading){
        return <div className='flex justify-center items-center h-scree'>
            <p className='text-lg font-medium '>
                <h1>Loading....</h1>
            </p>
        </div>;
    }
    if(!loading){
        return (
         <Navigate to={redirectTo}/>
          )
    }

 
}

export default protectedRoute

import React from 'react'
import { getPersons } from '../api/person.api'
import { useState,useEffect } from 'react';




const Persons=()=> {
    const [Per,setPersons]=useState(null)

    useEffect(()=>{
        getPersons(setPersons)
    },[])

  return (
    <>
    {Per != null ? (
        <div className='container p-14'>
        <table className='border border-gray-400'>
            <thead className='border border-gray-400'>
                <tr className='border border-gray-400'>
                <th className='border border-gray-400'>Id</th>
                <th className='border border-gray 400'>Nombre</th>
                <th className='border border-gray-400'>Apellidos</th>
                <th className='border border-gray-400'>Trabajo</th>
                <th className='border border-gray-400'>Salario</th>
                </tr>
            </thead>
            {Per.map(person=>(<tbody className='border border-gray-400'>
                <tr className='border border-gray-400'>
                <td className='border border-gray'>{person.id}</td>
                <td className='border border-gray-400'>{person.name}</td>
                <td className='border border-gray-400'>{person.lastname}</td>
                <td className='border border-gray-400'>{person.job}</td>
                <td className='border border-gray-400'>{person.salary}</td>
                </tr>
                </tbody>))}
            
        </table>
        </div>
      
  ):('No se encuentrar empleados')}
    </>
    
  )
}

export default Persons
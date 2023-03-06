import React from 'react'

function PersonAdd() {
  return (
    <>
    <div className='w-full max-w-xs p-10' >
    <form action="" className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

    <div className='mb-4'>
    <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
    <input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline' type="text" id='Username' placeholder='Username' />
    </div>
    <div className='mb-4'>
    <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>Lastname</label>
    <input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline' type="text" id='Lastname' placeholder='Lastname' />
    </div>
    <div className='mb-4'>
    <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>Job</label>
    <input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline' type="text" id='Job' placeholder='Jobs' />
    <div className='mb-4'>
    <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>Salary</label>
    <input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline' type="text" id='salary' placeholder='Salary' />
    </div>
    <div className='flex items-center justify-between'>
    <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
    Enviar
    </button>
    </div>
    </div>
    </form>
    </div>
    </>
  )
}

export default PersonAdd
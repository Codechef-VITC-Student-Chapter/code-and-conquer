import React from 'react'

const AlertDialog = ({setModalOpen}) => {
  return (
    <div className='absolute top-0 flex h-screen w-screen justify-center items-center'>
        <div className='p-16 sponsors-bg rounded-md flex flex-col justify-center gap-4 m-auto '>
            <div className='flex justify-end'>
                <button onClick={()=>setModalOpen(false)} className='px-4 bg-red-500 py-2 rounded-md border-2 border-white'>Close</button>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <a href="https://forms.gle/HHig34yTg3JXe8iWA">
                    <button className='px-4 bg-blue-600 py-2 rounded-md border-2 border-white'>HTML & CSS - Sept 4th - Wednesday {"->"}</button>
                </a>     
                <a href="https://forms.gle/YxvdNjFZRpkbiVjB9">
                    <button className='px-4 bg-blue-600 py-2 rounded-md border-2 border-white'>Javascript - Sept 5th - Thursday {"->"}</button>
                </a> 
                <a>
                    <button disabled className='px-4 bg-blue-600 py-2 rounded-md border-2 border-white'>
                    Intrusion Special Episode - Sept 7th - Saturday 
                    <br/>
                    Coming Soon....
                    </button>
                </a>  
                <a>
                    <button disabled className='px-4 bg-blue-600 py-2 rounded-md border-2 border-white'>
                    Code N' Conquer - Sept 8 & 9 - Sunday & Monday
                    <br/>
                    Coming Soon....</button>
                </a>  
            </div>  
        </div>
    </div>
  )
}

export default AlertDialog
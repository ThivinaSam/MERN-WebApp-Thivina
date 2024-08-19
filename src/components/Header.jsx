import React from 'react'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Fresh</span>
            <span className='text-slate-700'>Colombo</span>
        </h1>
        <form>
          <input type="text" placeholder='Search...' className=''/>
        </form>
      </div>
        
    </header>
  )
}

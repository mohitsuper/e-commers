import React from 'react'

export default function Category({CategoryList,setCatName}) {
  let Data = (i)=>{
    setCatName(i)
  }
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-[1.5rem] text-[#444] pl-1 font-bold'>Category</h1>
     <nav className='flex flex-col gap-5 pl-1 text-[1.5rem] font-[400]'> 
        {
          CategoryList.map((v,i)=>{
            return(
              <a href="#" key={i} onClick={()=>{Data(v)}}>{v}</a>
            )
          })
        }
     </nav>
    </div>
  )
}

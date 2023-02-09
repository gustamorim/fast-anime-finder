import React from 'react'
import { useGetChar } from './useChar';


function RightSidebar() {


  const {statusChar, character} = useGetChar()
  

  var isLoading = statusChar === 'loading'
  var isError = statusChar === 'error'
  
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error </div>

  const charslice = character.data.slice(0,5)


  return (
    <div className="rightmainsidebar">
        <div className="sidebar">
              <h3>Top Characters</h3>
              {charslice.map((name, i) => <a href={name.url} key = {i}>
               {name.name}
               <div className="top-content">
               <img src={name.images.jpg.image_url} alt="" />
               </div>
               </a>
               )
               }
        </div>
    </div>
  )
}


export default RightSidebar
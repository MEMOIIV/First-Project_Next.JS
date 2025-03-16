import React from 'react'
export const metadata ={
    title: "Articles",
    description: "Welcome to the articles page."
}
export default function ({children}) {
  return (
    <div>
        <h2>Articles</h2>
        <div style={{marginTop:"50px", background:"blue",padding:"20px", borderRadius:"10px" , color:"white"}}>
            {children}
        </div>
    </div>
  )
}

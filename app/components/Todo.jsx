"use client";
import { useState , useEffect } from 'react';
import React from 'react'

function  todo() {
    const [todo , setTodo]= useState({});
    async function featchData () {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const result = await response.json();
      setTodo(result);
    };
        useEffect(() => { 
          featchData();
         } , []);

  return (
    <div>
      <h2>{todo.title}</h2>
    </div>
  )
}
 
export default todo

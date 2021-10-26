import React from 'react'

export default function File1() {

    function Xy({a,b}){
        return a+b;
    }
    function Z({x}){

        return x;
    }

  return (
    <div>
     <Xy a={10} b={20} /><br />
     <Z  x={`value of x is ${20}`}/>
   
    </div>
  )
}

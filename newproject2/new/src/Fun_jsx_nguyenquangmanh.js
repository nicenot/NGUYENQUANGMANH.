import React from 'react'

export default function Fun_jsx_nguyenquangmanh(props) {
    const users = {
        name:"nguyenquangmanh",
        age:20
    }
  return (
    <div>
      <h2>Function Component new</h2>
      <h3>
        welecom to , {users.name}   -   {users.age}
      </h3>
      <hr/>
      <h3>props:
        <br/>FullName: {props.fullName}  
        <br/>Age: {props.age} 

      </h3>
    </div>
  )
}

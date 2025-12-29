import React, { useEffect, useRef, useState } from 'react'
import './Register.css'
const Register = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [hobby,setHobby] = useState("");
  const [hobbies,setHobbies] = useState([]);
  const [editIndex,seteditIndex] = useState(null);
  const [editValue,seteditValue] = useState("")
  const nameRef = useRef(null)

  const handleHobbies = () => {
     if(!hobby.trim()) return;
     setHobbies([...hobbies,hobby]);
     setHobby("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const useData = {
      name,
      email,
      age:Number(age),
      hobbies,
    };
    try{
      const res = await fetch('http://localhost:5000/register',{
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(useData)
      })
        const data = await res.json();
        if (!res.ok) {
          alert(data.message); // ✅ alert works here
          return;
        }
        alert("Registered Successfully!");
    }catch(e){
      console.log(e.message)
    }
    setName("")
    setEmail("")
    setAge("");
    setHobbies([]);
  }
  const handleDelete = (i) => {
    setHobbies(hobbies.filter((_,index)=> i !== index))
  }

  useEffect(()=>{
    nameRef.current.focus()
  },[])
  return (
    <>
       <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='Name'>Name: </label>
                <input ref={nameRef} value={name} type='text' placeholder="Enter your Name" id='Name' onChange={e => setName(e.target.value)}/>

                <label htmlFor='Email'>Email: </label>
                <input value={email} type='email' placeholder="Enter your Email" id='Email' onChange={e => setEmail(e.target.value)} />

                <label htmlFor='Number'>Age:</label>
                <input value={age} type="number" placeholder='Enter your Age' id='Number' onChange={e => setAge(e.target.value)} />
                <div>
                    <label htmlFor='Hobbies'>Hobbies:</label>
                    <input value={hobby} type='text' placeholder='Hobbies' id='Hobbies' onChange={e => setHobby(e.target.value)}/>
                    <button type="button" className="add-btn" onClick={handleHobbies}>Add</button>
                      <ol>
                        {hobbies.map((h, i) => (
                          <li key={i}>{h}
                          <button type="button" className="delete-btn" onClick={() => handleDelete(i)}>Remove</button>
                          </li>
                        ))}
                    </ol>
                </div>
                <button type='submit' className="submit-btn">Register</button>
            </form>
       </div>
    </>
  )
}

export default Register
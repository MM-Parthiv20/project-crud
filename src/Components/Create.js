import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom';

const Create = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked")
    if (fname && email && password) {
      axios.post('https://677537fa92222241481aee8e.mockapi.io/react-crud', {
        Name: fname,
        Email: email,
        Password: password,
        Description: description,
        //   headers: {
        //     // Add any auth token here
        //     authorization: "your token comes here",
        // },
      })
      // alert("Data Successfully Submitted")
      .then(() => {
        navigate("/read");
      });

    }
    else {
      alert("please fill the form")
    }


  };
  return (
    <>
    <div class="create-page--wrapper">
      <h1 class="text-center">Create</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
          <input type="text" className="form-control"
            onChange={(e) => setFname(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
          <input type="password" className="form-control" aria-describedby="emailHelp"
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
          <textarea type="text" className="form-control" aria-describedby="emailHelp"
            onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='sumbit-btn--wrapper'>
        <Link to="/read" className="btn btn-success">Go to read</Link>
        <button type="submit" className="btn btn-primary ms-auto" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
     
      </div>

    </>
  )
}

export default Create;
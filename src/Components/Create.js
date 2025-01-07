import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom';

const Create = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked")
    if (fname && email) {
      axios.post('https://677537fa92222241481aee8e.mockapi.io/react-crud', {
        Name: fname,
        Email: email,
        //   headers: {
        //     // Add any auth token here
        //     authorization: "your token comes here",
        // },
      });
      alert("Data Successfully Submitted")
      navigate("/read");
    }
    else {
      alert("please fill the form")
    }


  };
  return (
    <>
      <h1>Create</h1>
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
        {fname}
        {email}

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

      </form>
      <Link to="/read">Go to read</Link>

    </>
  )
}

export default Create;
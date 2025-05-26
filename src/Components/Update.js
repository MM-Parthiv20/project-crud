import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, Link, Navigate, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`https://677537fa92222241481aee8e.mockapi.io/react-crud/${id}`)
            .then((res) => {
                setFname(res.data.Name);
                setEmail(res.data.Email);
                setPassword(res.data.Password);
                setDescription(res.data.Description);
            })
    }, [id])

    function handleUpdate(e) {
        e.preventDefault();
        console.log(fname);
        console.log(email);
        // debugger
        axios.put(`https://677537fa92222241481aee8e.mockapi.io/react-crud/${id}`, {
            Name: fname,
            Email: email,
            Password: password,
            Description: description,
        }).then(() => {
            navigate('/read');
        })
    }


    return (
        <>
            <h1>Update</h1>
            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" value={fname}
                        onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                    <input type="text" className="form-control" value={password} aria-describedby="emailHelp"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                    <textarea className="form-control" value={description} aria-describedby="emailHelp"
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>

            </form>
            <Link to="/read">Go to read</Link>

        </>
    )
}

export default Update;
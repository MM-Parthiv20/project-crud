import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Read() {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    function getData() {
        axios.get('https://677537fa92222241481aee8e.mockapi.io/react-crud')
            .then((res) => {
                setData(res.data.sort((a, b) => b.id - a.id));
                console.log(res);
            });
    }
    useEffect(() => {
        getData();
    }, [])



    function handleDelete(id) {
        axios.delete(`https://677537fa92222241481aee8e.mockapi.io/react-crud/${id}`).then(() => {
            <div className="alert alert-danger" role="alert">
                A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            getData();
        })
    }



    const emailRefs = useRef([]);
    const passwordRefs = useRef([]);

    const handleCopy = (type, index) => {
        let valueToCopy = '';
        if (type === 'email' && emailRefs.current[index]) {
            valueToCopy = emailRefs.current[index].value;
        } else if (type === 'password' && passwordRefs.current[index]) {
            valueToCopy = passwordRefs.current[index].value;
        }

        if (valueToCopy) {
            navigator.clipboard.writeText(valueToCopy)
                .then(() => {
                    console.log(`${type} copied:`, valueToCopy);
                    toast.success("Copied to clipboard"); // ✅ THIS LINE IS GOO
                })
                .catch(err => {
                    console.error('Copy failed:', err);
                     toast.error("Copied failed!"); // ✅ THIS LINE IS GOO
                });
        }
    };

    const [visiblePasswords, setVisiblePasswords] = useState({});
    const togglePasswordVisibility = (index) => {
        setVisiblePasswords(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };





    return (
        <>

            <h2 className="text-center mt-3 mb-3">Stored Data</h2>
            {/* <Link to="/">Back to create</Link> */}

            <div className='data-table--wrapper desktop-view'>
                <table className="table table-striped table-hover">
                    <thead className='tableHead'>
                        <tr>
                            <th scope="col" className="text-center sticky-column-top">Srno.</th>
                            <th scope="col" className="text-center">Name</th>
                            <th scope="col" className="text-center">Email</th>
                            <th scope="col" className="text-center">Password</th>
                            <th scope="col" className="text-center">Description</th>
                            <th scope="col" className="text-center">ID</th>
                            <th scope="col" className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                if (item.Name && item.Email) {
                                    return (

                                        <tr key={index}>
                                            <th scope="row" className="text-center sticky-column">{index + 1}</th>
                                            <td className="text-center">{item.Name}</td>
                                            <td className="text-center">{item.Email}</td>
                                            <td className="text-center">{item.Password}</td>
                                            <td className="text-center">{item.Description}</td>
                                            <th scope="row" className="text-center">{item.id}</th>
                                            <td className="d-flex align-items-center justify-content-center gap-3 text-center">
                                                <button type="button" className="btn btn-success" onClick={() => { navigate(`/update/${item.id}`) }}>Update</button>
                                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>


                                    )
                                }
                            })
                        }


                    </tbody>

                </table>
            </div>
            <div className='data-table--wrapper mobile-view'>
                {
                    data.map((item, index) => {
                        if (item.Name && item.Email) {
                            return (
                                <>
                                    <div className="card mb-3">
                                        <h6 className="card-header">
                                            <div>{item.Email}</div>
                                            <div className="action-btn-wrapper">
                                                <div className="btn btn-sm btn-success" onClick={() => { navigate(`/update/${item.id}`) }}><i className="bi bi-pen"></i></div>
                                                <div className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}><i className="bi bi-trash"></i></div>
                                            </div>
                                        </h6>
                                        <div className="card-body" key={index}>
                                            <div className='section--wrapper'>
                                                <p className="card-section-title">Email</p>

                                                <div className="input-group mb-2">
                                                    <input type="email" className="form-control" value={item.Email} readOnly
                                                        ref={el => emailRefs.current[index] = el}
                                                        aria-describedby={`email-addon-${index}`}></input>
                                                    <span className="input-group-text"
                                                        id={`email-addon-${index}`}
                                                        onClick={() => handleCopy('email', index)}
                                                        style={{ cursor: 'pointer' }}>
                                                        <i className="bi bi-copy"></i>
                                                    </span>

                                                </div>

                                            </div>
                                            <div className='section--wrapper'>
                                                <p className="card-section-title">Password</p>
                                                {/* <p>{item.Password}</p> */}
                                                <div className="input-group">
                                                    <input
                                                        type={visiblePasswords[index] ? 'text' : 'password'}
                                                        className="form-control" value={item.Password} readOnly
                                                        ref={el => passwordRefs.current[index] = el}
                                                        aria-describedby={`password-addon-${index}`}></input>
                                                    <span className="input-group-text"
                                                        id={`password-addon-${index}`}
                                                        onClick={() => handleCopy('password', index)}
                                                        style={{ cursor: 'pointer' }}>
                                                        {/* <i className="bi bi-copy"></i> */}
                                                         <i className={`bi ${handleCopy[index] ? 'bi-eye text-primary active' : 'bi bi-copy'}`}></i>
                                                    </span>
                                                    <div className="password-show"
                                                        onClick={() => togglePasswordVisibility(index)}>
                                                        {/* <i className={`bi ${visiblePasswords[index] ? 'bi-eye-slash text-primary active' : 'bi-eye'}`}></i> */}
                                                        <i className={`bi ${visiblePasswords[index] ? 'bi-eye text-primary active' : 'bi-eye'}`}></i>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={1000}
                                        hideProgressBar={true}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        theme="colored"
                                        transition={Slide}
                                        closeButton={false}
                                        toastClassName="custom-toast-width"
                                    />


                                </>
                            )
                        }
                    })
                }

            </div>
            <div className='d-flex justify-content-between mt-3'>
                <button type="button" className="btn btn-warning" onClick={() => { navigate("/") }}>Back to create</button>
                {/* <button type="button" className="btn btn-success" onClick={() => { navigate("/update") }}>go to update</button> */}
            </div>
        </>
    );
}
export default Read;

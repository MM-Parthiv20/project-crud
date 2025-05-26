import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link, Navigate } from 'react-router-dom';

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
            <div class="alert alert-danger" role="alert">
                A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            </div>
            getData();
        })

    }

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

                                        <tr key={item.id}>
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

                                <div class="card mb-2">
                                    <h6 class="card-header">
                                        <div>{item.Email}</div>
                                        <div className="action-btn-wrapper">
                                            <div className="btn btn-sm btn-success" onClick={() => { navigate(`/update/${item.id}`) }}><i class="bi bi-pen"></i></div>
                                            <div className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}><i class="bi bi-trash"></i></div>
                                        </div>
                                    </h6>
                                    <div class="card-body">
                                        <div className='section--wrapper'>
                                            <p >Email</p>
                                            <p>{item.Email}</p>
                                        </div>
                                        <div className='section--wrapper'>
                                            <p >Password</p>
                                            <p>{item.Password}</p>
                                        </div>
                                    </div>
                                </div>


                            )
                        }
                    })
                }

            </div>
            <div className='d-flex justify-content-between mt-2'>
                <button type="button" className="btn btn-warning" onClick={() => { navigate("/") }}>Back to create</button>
                {/* <button type="button" className="btn btn-success" onClick={() => { navigate("/update") }}>go to update</button> */}
            </div>
        </>
    );
}
export default Read;

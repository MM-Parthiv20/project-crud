import React from 'react';

function Read() {
    function getData(){
        axios.get('https://677537fa92222241481aee8e.mockapi.io/react-crud',{
            
        })
    }
    return (
        <>
        <h2 class="text-center mt-3 mb-3">Stored Data</h2>
        <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" class="text-center">ID</th>
            <th scope="col" class="text-center">Name</th>
            <th scope="col" class="text-center">Email</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-center">1</th>
            <td class="text-center">Mark</td>
            <td class="text-center">Otto</td>
            <td class="d-flex align-items-center justify-content-center gap-3 text-center">
            <button type="button" class="btn btn-success">ADD</button> 
            <button type="button" class="btn btn-danger">Delete</button> 
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">2</th>
            <td class="text-center">Jacob</td>
            <td class="text-center">Thornton</td>
            <td class="d-flex align-items-center justify-content-center gap-3 text-center">
            <button type="button" class="btn btn-success">ADD</button> 
            <button type="button" class="btn btn-danger">Delete</button> 
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">3</th>
            <td class="text-center">Larry the Bird</td>
            <td class="text-center">Thornton</td>
            <td class="d-flex align-items-center justify-content-center gap-3 text-center">
            <button type="button" class="btn btn-success">ADD</button> 
            <button type="button" class="btn btn-danger">Delete</button> 
            </td>
          </tr>
        </tbody>
      </table>
      </>
    );
}
export default Read;

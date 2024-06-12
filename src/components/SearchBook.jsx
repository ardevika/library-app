import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

const SearchBook = () => {
    const [data, setData] = useState({
        "title": ""
    });
    const [result, setResult] = useState([]);

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:4426/search", data)
            .then((response) => {
                setResult(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteBook = (id) => {
        let input = { "id": id };
        axios.post("http://localhost:4426/delete", input)
            .then((response) => {
                console.log(response, data);
                if (response.data.status.status === "success") {
                    alert("Successfully deleted");
                } else {
                    alert("Something went wrong");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" value={data.title} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>Search</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Distributor</th>
                                    <th scope="col">Publisher</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.Name}</td>
                                        <td>{value.description}</td>
                                        <td>{value.year}</td>
                                        <td>{value.Distributor}</td>
                                        <td>{value.publisher}</td>
                                        <td><button className="btn btn-danger" onClick={() => deleteBook(value._id)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBook;

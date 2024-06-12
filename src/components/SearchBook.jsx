import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';


const SearchBook = () => {
    const [data, changeData] = useState({
        "title": ""
    });
    const [result, changeResult] = useState([])

    const inputHandler = (event) => {
        changeData({ ...result, [event.target.name]: event.target.name });
    };

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:4426/search", data).then(
            (response) => {
                changeResult(response.data)
            }
        ).catch(


            (error) => {
                console.log(error)
            }
        )
    };

    const DeleteBook = (id) => {
        let input = { "id": id }
        axios.post("http://localhost:4426/delete", input).then(
            (response) => {
                console.log(response, data)
                if (response.data.status.status == "success") {
                    alert("successfully deleted")
                } else {
                    alert("something went wrong")
                }
            }
        ).catch(error => {
            console.log(error);

        });

        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                                </div>
                                <div>
                                    <button className="btn btn-success" onClick={readValue}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <table className="table">
                                            <thead>
                                                <tr>

                                                    <th scope="col">Name</th>
                                                    <th scope="col">Descrption</th>
                                                    <th scope="col">Year</th>
                                                    <th scope="col">distributor</th>
                                                    <th scope="col">pulisher</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    result.map(
                                                        (value, index) => {
                                                            return <tr>
                                                                <td>{value.Name}</td>
                                                                <td>{value.discription}</td>
                                                                <td>{value.year}</td>
                                                                <td>{value.Distributor}</td>
                                                                <td>{value.pulisher}</td>
                                                                <td><button className="btn btn-danger" onClick={() => {DeleteBook(value._id) }}>Search</button></td>
                                                            </tr>
                                                        }
                                                    )}


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   </div>
            </div>
        );
    };
}

export default SearchBook;
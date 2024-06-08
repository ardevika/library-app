import React from 'react'
import NavBar from './NavBar'

const AddBook = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-16 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-16 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">year</label>
                                <select name="" id="" className="form-control">
                                    <option value="">1999</option>
                                    <option value="">2000</option>
                                    <option value="">2024</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-16 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Distributor Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-16 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">pulisher</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-16 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Add</label> 
                                <button className="btn btn-success">here</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook
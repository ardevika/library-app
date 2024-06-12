import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddBook = () => {
    const[data,setData]=useState(
        {
          "Name"  :"",
          "discription":"",
          "pulisher":"",
          "year":"",
          "Distributor":""


        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]: event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:4426/add",data).then(
            (response)=>{
                console.log(response.data)
            if(response.data.status=="success") {
                alert("successfull")

            }
            else{
                alert("error")
            }
                console.log(response.data)
                setData(response.data)

            
            }
        ).catch()
    }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-16 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='Name' value={data.Name} onChange={inputHandler} />
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
                                <input type="text" className="form-control" name='discription' value={data.discription} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-16 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Distributor Name</label>
                                <input type="text" className="form-control" name='Distributor' value={data.Distributor} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-16 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">publisher</label>
                                <input type="text" className="form-control" name='pulisher' value={data.pulisher} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-16 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"></label> 
                                <button className="btn btn-success" onClick={readValue}>add</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook
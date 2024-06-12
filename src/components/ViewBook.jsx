import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewBook = () => {
    const [data,changeData]=useState([ ])
    const fetchData=()=>
        {
            axios.get("http://localhost:4426/view").then(
                (response)=>{
                    changeData(response.data)
                }

            ).catch()
        }
        useEffect(()=>{
            fetchData()
        },[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="coll col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <row>
                            <div className="coll col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <table class="table">
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
                                        data.map(
                                            (value,index) => 
                                              {return  <tr>
                                               <td>{value.Name}</td>
                                                <td>{value.discription}</td>
                                                <td>{value.year}</td>
                                                <td>{value.Distributor}</td>
                                                <td>{value.pulisher}</td>
                                            </tr>
                                            }
                                        )}
                                       
                                        
                                    </tbody>
                                </table>
                            </div>
                        </row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBook
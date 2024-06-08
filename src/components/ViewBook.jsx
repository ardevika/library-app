import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewBook = () => {
    const [data,changeData]=useState(

        [
            {"slno": 1,"Name":"devika","author":"eee","price":1},
           
            {"slno": 1,"Name":"degfjha","author":"eee","price":1},
           
            {"slno": 1,"Name":"dekjhgfika","author":"eee","price":1}
          
        ]
    )
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
                                            <th scope="col">sl no</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">author</th>
                                            <th scope="col">price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        data.map(
                                            (value,index) => {

                                              return  <tr>
                                                <th scope="row">{value.slno}</th>
                                                <td>{value.Name}</td>
                                                <td>{value.author}</td>
                                                <td>{value.price}</td>
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
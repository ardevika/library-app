import React from 'react'
import NavBar from './NavBar'

const ViewBook = () => {
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
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>novel</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            
                                        <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
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
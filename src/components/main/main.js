import React, { Component } from 'react';

import "react-table/react-table.css";
import { Link } from 'react-router-dom'
class Main extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
        };
    }
    componentWillMount() {
        fetch("http://localhost:3000/user").then( resp => {
            return resp.json();
        }).then( obj => {
            this.setState({ 
                data: obj
            });
        });
    }
      
    render () {
        const { data } = this.state;
        const datalist = data.length ? (
            data.map(e=>{
                return (
                    <tr key={e.id}>
                        <td style={{"width":"10%"}}>
                            <Link
                            className="btn" 
                            to={'/'+ e.id}>
                                DodajNaprawę
                            </Link>
                        </td>
                        <td>{e.name}</td>
                        <td>{e.model}</td>
                        <td>{e.serialNumber}</td>
                    </tr>
                )
            })
            ) : (<tr className="center"><td>Brak danych</td></tr>)
        return (
            <div className="container  flex">
                <div>
                    <table className="highlight centered">
                        <thead>
                            <tr>
                                <th>Link</th>
                                <th>Imie</th>
                                <th>Model</th>
                                <th>nrSeryjny</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datalist}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Main;
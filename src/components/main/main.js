import React, { Component } from 'react';

import "react-table/react-table.css";
import { Link } from 'react-router-dom'
class Main extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
            result:[]
        };
    }
   
    handleInputChange = (e) => {
        let results = this.state.data.filter(r=>{
            return (r.name.toLowerCase().indexOf(e.target.value.toLowerCase())!== -1 ? (
                r
            ):(null))
        })
        this.setState({
            result: results
        })
        
    }

    componentWillMount() {
        fetch("http://localhost:3000/user").then( resp => {
            return resp.json();
        }).then( obj => {
            this.setState({ 
                data: obj,
                result:obj
            });
        });
    }
      
    render () {
        const  data  = this.state.result;
        const datalist = data.length ? (
            data.map(e=>{
                return (
                    <tr key={e.id}>
                        <td style={{"width":"10%"}}>
                            <Link
                            className="btn" 
                            to={'/'+ e.id}>
                                Szczegóły
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
                <input
                    placeholder="Szukaj..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.searchValue}</p>
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
import React, { Component } from 'react';


class Subtable extends Component {
    state = {
        data: null,
        service:{

        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.post_id;
        const fields = Array.prototype.slice.call(e.target)
            .filter(el => el.name)
            .reduce((form, el) => ({
                ...form,
                [el.name]: el.value,
            }), {});
        console.log(fields)
        const dataToSend =JSON.stringify(fields)
        fetch('http://localhost:3000/user/'+id+'/service', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: dataToSend
        })
    }
    handleChange = (event) => {
        event.preventDefault()
        if (event.target.name === "name")
            this.setState({ name: event.target.value});
        if (event.target.name === "model")
             this.setState({ model: event.target.value});
        if (event.target.name === "serialNumber")
            this.setState({ serialNumber: event.target.value});
        if (event.target.name === "description")
            this.setState({description: event.target.value});
        if (event.target.name === "parts")
            this.setState({ parts: event.target.value});
        if (event.target.name === "cost")
            this.setState({cost: event.target.value });
        if (event.target.name === "inputDate")
            this.setState({inputDate: event.target.value});
        if (event.target.name === "outputDate")
            this.setState({outputDate: event.target.value});
    };


    componentDidMount() {
        console.log(this.props)
        let id = this.props.match.params.post_id;
        fetch("http://localhost:3000/user/"+id).then( resp => {
            return resp.json();
        }).then( obj => {
            this.setState({ 
                data: obj
            });
        });
    }
    
    render () {
        console.log(this.state.data)
        const data = this.state.data ? (
            <div>
                <h4 className="center">{this.state.data.name} {this.state.data.model} {this.state.data.serialNumber}</h4>
            </div>
        ) : (<h1 className="center">Wczytywanie...</h1>)
        const datalist = this.state.data ? (
            this.state.data.service.map(e=>{
                return (
                    <tr key={e.id}>
                        <td>{e.description}</td>
                        <td>{e.parts}</td>
                        <td>{e.cost}</td>
                        <td>{e.inputDate}</td>
                        <td>{e.outputDate}</td>
                    </tr>
                )
            })
            ) : (<tr className="center"><td>Brak danych</td></tr>)
        return (
            <div className="container">
                {data}
                <form onSubmit={this.handleSubmit}>
                    <h3>Dodaj nowy wpis</h3>
                    <label>
                        Opis:
                        <input
                        type="text"
                        name="description"
                        value={this.state.service.description}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Części:
                        <input
                            type="text"
                            name="parts"
                            value={this.state.service.parts}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Koszt:
                        <input
                            type="number"
                            name="cost"
                            value={this.state.service.cost}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Data przyjęcia:
                        <input
                            type="date"
                            name="inputDate"
                            value={this.state.service.inputDate}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Data wydania:
                        <input
                            type="date"
                            name="outputDate"
                            value={this.state.service.outputDate}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Dodaj" />
                </form>
                
                <table className="striped highlight">
                    <thead>
                        <tr>
                            <th>Opis</th>
                            <th>Cześci</th>
                            <th>Koszt</th>
                            <th>Data przyjęcia</th>
                            <th>Data wydania</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datalist}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Subtable
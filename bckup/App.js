import React, { Component } from "react";

import "./App.css";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
// import json db
// import jsonData from "./components/db/db.json";
// console.log(jsonData);

//const loadData = () => JSON.parse(JSON.stringify(jsonData));

    



class App extends Component {
  constructor() {
    super();
    this.state = {
      data:[],
      name: "",
      model: "",
      serialNumber: "",
      service:[{
        description:"",
        parts:"",
        cost:"",
        inputDate:"",
        outputDate:""
      }]
      
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
  
  handleChange = (event) => {
    event.preventDefault()
    let data
      data= {...this.state.service}
      console.log('data ',data)
    if (event.target.name === "name")
      this.setState({ name: event.target.value });
    if (event.target.name === "model")
      this.setState({ model: event.target.value });
    if (event.target.name === "serialNumber")
      this.setState({ serialNumber: event.target.value });
    if (event.target.name === "description")
        
      this.setState({
        service:[{ 
          description: event.target.value
        }] 
      });
    if (event.target.name === "parts")
      this.setState({ 
        service:[{
          parts: event.target.value 
        }]
      });
    if (event.target.name === "cost")
      this.setState({ 
        service:[{
          cost: event.target.value
        }]
      });
    if (event.target.name === "inputDate")
      this.setState({ 
        service:[{
          inputDate: event.target.value
        }]
      });
    if (event.target.name === "outputDate")
      
      this.setState({ 
        service:[{
          outputDate: event.target.value
        }]
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const fields = Array.prototype.slice.call(e.target)
      .filter(el => el.name)
      .reduce((form, el) => ({
        ...form,
        [el.name]: el.value,
      }), {});
    console.log(fields)
    const newData = this.state.data
    newData.push(fields)
    this.setState({ 
      data: newData ,
      name: "",
      model: "",
      serialNumber: "",
      service:[{
        description:"",
        parts:"",
        cost:"",
        inputDate:"",
        outputDate:"" 
      }]
        
    });
    const dataToSend =JSON.stringify(fields)
    fetch('http://localhost:3000/user', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: dataToSend
    })
  };
 
  
  // renderEditable = cellInfo => {
  //   return (
  //     <div
  //       style={{ backgroundColor: "#fafafa" }}
  //       contentEditable
  //       suppressContentEditableWarning
  //       onBlur={e => {
  //         let row = this.state.data[cellInfo.index];
  //         row[cellInfo.column.id] = e.target.innerHTML;
  //         this.listPrimitive.update(cellInfo.index, row);
  //       }}
  //       dangerouslySetInnerHTML={{
  //         __html: this.state.data[cellInfo.index][cellInfo.column.id]
  //       }}
  //     />
  //   );
  // };
 
  render() {
    const { data } = this.state;
    console.log(this.state.service)
    return (
      <div className="App">
        <div className="App-intro">
          <form onSubmit={this.handleSubmit}>
            <h3>Dodaj nowy wpis</h3>
            <label>
              Nazwisko Imię:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            {"   "}
            <label>
              Model:
              <input
                type="text"
                name="model"
                value={this.state.model}
                onChange={this.handleChange}
              />
            </label>{" "}
            <label>
              Nr. Seryjny:
              <input
                type="text"
                name="serialNumber"
                value={this.state.serialNumber}
                onChange={this.handleChange}
              />
            </label>
            {"   "}
            <input type="submit" value="Dodaj" />
          </form>
        </div>
        <div>
          <ReactTable
            collapseOnDataChange= {false}
            collapseOnPageChange= {false}
            collapseOnSortingChange= {false}
            filterable
            SubComponent={(row, i) => {
              console.log(row ,i)  
              return (
                <div style={{margin:"20px"}}>
                  <form onSubmit={this.handleSubmit}>
                    <h3>Dodaj nową naprawę</h3>
                    <label>
                      Opis Usterki:
                      <textarea
                        type="text"
                        name="description"
                        value={this.state.service.map(e => e.description)}
                        onChange={this.handleChange}
                      />
                    </label>
                    {"   "}
                    <label>
                      Wymienione Części:
                      <textarea
                        type="text"
                        name="parts"
                        value={this.state.service.map(e => e.parts)}
                        onChange={this.handleChange}
                      />
                    </label>
                    {"   "}
                    <label>
                      Koszt Łącznie:
                      <input
                        type="number"
                        name="cost"
                        value={this.state.service.map(e => e.cost)}
                        onChange={this.handleChange}
                      />
                    </label>
                    {"   "}
                    <label>
                      Data przyjęcia:
                      <input
                        type="date"
                        name="inputDate"
                        value={this.state.service.map(e => e.inputDate)}
                        onChange={this.handleChange}
                      />
                    </label>
                    {"   "}
                    <label>
                      Data wydania:
                      <input
                        type="date"
                        name="outputDate"
                        value={this.state.service.map(e => e.outputDate)}
                        onChange={this.handleChange}
                      />
                    </label>
                    {"   "}
                    <input type="submit" value="Dodaj" />
                  </form>
                  <ReactTable
                  data={data[row.index].service}
                  defaultPageSize={5}
                  className="-striped -highlight" 
                  columns={[
                    {
                      Header: "Data Przyjęcia",
                      accessor: "inputDate",
                      Cell: this.renderEditable
                    },
                    {
                      Header: "Data Wydania",
                      accessor: "outputDate",
                      Cell: this.renderEditable
                    },
                    {
                      Header: "Opis Usterki",
                      accessor: "description",
                      Cell: this.renderEditable
                    },
                    {
                      Header: "Wymienione Części",
                      accessor: "parts",
                      Cell: this.renderEditable
                    },
                    {
                      Header: "Koszt Łącznie:",
                      accessor: "cost",
                      Cell: this.renderEditable
                    }
                  ]}
                  />
                </div>
              );
            }}
            data={data}
            columns={[
              {
                Header: "Nazwisko Imię",
                accessor: "name",
                Cell: this.renderEditable,
                
              },
              {
                Header: "Model",
                accessor: "model",
                Cell: this.renderEditable
              },
              {
                Header: "Nr. Seryjny",
                accessor: "serialNumber",
                Cell: this.renderEditable
              }
              
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}

export default App;
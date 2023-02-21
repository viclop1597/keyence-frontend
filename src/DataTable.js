import React from 'react';
import Table from 'react-bootstrap/Table';
import './button.css';
import '@fortawesome/fontawesome-free/css/all.css';


function DataTable(props) {
  const data = props.data;

  // Render table header
  const header = data[0].map((value, index) => (
    <th key={index}>{value}</th>
  ));

  // Render table rows
  const rows = data.slice(1).map((row, index) => (
    <tr key={index}>
      {row.map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  ));

  // Render table
  return (
    <><Table responsive striped bordered variant="dark">
      <thead>
        <tr>
           {header}
        </tr>
      </thead>
      <tbody>
       {rows}
      </tbody>
    </Table>

    <div>
    <button><i className='fas fa-plus-circle'></i></button>
    <button><i className='fas fa-edit'></i></button>
    <button><i className='fas fa-trash-alt'></i></button>
    </div></>

  );
}


export default DataTable;

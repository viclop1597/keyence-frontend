import React from 'react';
import Table from 'react-bootstrap/Table';


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
    <Table striped="columns">
      <thead>
        <tr>
           {header}
        </tr>
      </thead>
      <tbody>
       {rows}
      </tbody>
    </Table>
  );
}


export default DataTable;

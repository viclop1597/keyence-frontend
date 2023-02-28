import logo from './logo.svg';
import React from 'react';
import DataTable from './DataTable';
import { Routes, Route, Link } from "react-router-dom";

// Bootstrap
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


// Import XLSX
import * as XLSX from 'xlsx';

import './App.css';




function App() {

  //
   

//


  const [data, setData] = React.useState([]);

  // Function to convert xlsx to json
  function handleFile(e) {
    const files = e.target.files;
    const i = 0;
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
  
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
  
      // Get first worksheet /
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
  
      // Convert array of arrays /
      const data = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false });
  
      // Convert all cell values to strings /
      const newData = data.map(row => {
        return row.map(cell => {
          if (typeof cell === 'number') {
            return cell.toString();
          } else {
            return cell;
          }
        });
      });
  
      /* Update state */
      setData(newData);
    };
  
    if (rABS) {
      reader.readAsBinaryString(files[i]);
    } else {
      reader.readAsArrayBuffer(files[i]);
    }
  }

  return (
    <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>

         <input type="file"
                name='demo'
                id="demo" accept=".xls,.xlsx"
                onChange={handleFile}
                className="inputfile"/>
         <label for="demo">Choose a file</label>
         <br></br>
             
          

         {data.length > 0 && <DataTable data={data} />}
       </header>
     </div>
  );
}


export default App;
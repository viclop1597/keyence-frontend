import logo from './logo.svg';
import React from 'react';
import DataTable from './DataTable';

// Bootstrap
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


// Import XLSX
import * as XLSX from 'xlsx';

import './App.css';


import ThemeSwitcher from "./ThemeSwitcher";


function App() {
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
      const wb = XLSX.read(bstr, {type:rABS ? 'binary' : 'array'});

      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, {header:1});
      /* Update state */
      setData(data);
    };

    if(rABS) reader.readAsBinaryString(files[i]); else reader.readAsArrayBuffer(files[i]);
    // Call the function to render the table
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <input type="file"
               id="demo" accept=".xls,.xlsx"
               onChange={handleFile}/>        
               
        <ThemeSwitcher/>

        {data.length > 0 && <DataTable data={data} />}
      </header>
    </div>
  );
}
export default App;
import XLSX from 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';


document.getElementById("demo").onchange = (evt) => {
    // (A) NEW FILE READER
    var reader = new FileReader();
   
    // (B) ON FINISH LOADING
    reader.addEventListener("loadend", (evt) => {
      // (B1) GET THE FIRST WORKSHEET
      var workbook = XLSX.read(evt.target.result, {type: "binary"}),
          worksheet = workbook.Sheets[workbook.SheetNames[0]],
          range = XLSX.utils.decode_range(worksheet["!ref"]);
   
      // (B2) READ CELLS IN ARRAY
      var data = [];
      for (let row=range.s.r; row<=range.e.r; row++) {
        let i = data.length;
        data.push([]);
        for (let col=range.s.c; col<=range.e.c; col++) {
          let cell = worksheet[XLSX.utils.encode_cell({r:row, c:col})];
          data[i].push(cell.v);
        }
      }
      console.log(data);
    });
   
    // (C) START - READ SELECTED EXCEL FILE
    reader.readAsArrayBuffer(evt.target.files[0]);
  };
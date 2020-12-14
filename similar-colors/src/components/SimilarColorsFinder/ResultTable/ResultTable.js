import React from "react";
import { DataGrid } from '@material-ui/data-grid';
import useStyles from "./styles"

const ResultTable = ({ rows = [] }) => {
    const classes = useStyles();

    //List of columns and their headers
    const columns = [
      {
        field: "color", headerName: "Color", renderCell: (params) => (
          <div style={{backgroundColor:params.value, width:150}} >&nbsp;</div>
        ), headerAlign: 'center',
},
      { field: "name", headerName: "Name", width: 150, align:"center" , headerAlign: 'center',
},
      { field: "hex", headerName: "HEX", format: (value) => value.toUpperCase() ,align:"center", headerAlign: 'center',
 },
      { field: "rgb", headerName: "RGB",align:"center", headerAlign: 'center',
 },
      { field: "cymk", headerName: "CYMK",width: 150, align:"center", headerAlign: 'center',
 }
  ];
  
   return (
     rows.length > 0 ? (
       <div style={{ height: 300, width: '100%' }} className={classes.root}>
         <DataGrid rows={rows} columns={columns} pageSize={5} />
       </div>) :
       <div>
         <h3>Possible errors:</h3>
         <ul>
           <li>Make sure the input has 6 characters.</li>
           <li>Valid HEX color code can only contains numbers (0-9) and (A-F).</li>
         </ul>
         
       </div>
   );
}
export default ResultTable;

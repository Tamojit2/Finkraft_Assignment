import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../App.css';
import './AgGridStyles.css';



const Dashboard = ({ missions }) => {
    const columnDefs = [
      { headerName: 'Mission Name', field: 'mission', sortable: true, filter: true },
      { headerName: 'Launch Date', field: 'date', sortable: true, filter: true },
      { headerName: 'Launch Time', field: 'time', sortable: true, filter: true },
      { headerName: 'Rocket Name', field: 'rocket', sortable: true, filter: true },
      { headerName: 'Company Name', field: 'company', sortable: true, filter: true },
      { headerName: 'Launch Location', field: 'location', sortable: true, filter: true },
      { headerName: 'Mission Price', field: 'price', sortable: true, filter: true },
      { headerName: 'Success Status', field: 'successful', sortable: true, filter: true },
    ];
  
    const gridOptions = {
      domLayout: 'autoWidth',
      pagination: true,
      paginationPageSize: 10,
    };
  
    return (
      <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={missions}
          gridOptions={gridOptions}
        />
      </div>
    );
  };
  
  export default Dashboard;
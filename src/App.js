import "./App.css"
import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import  {Data}  from "./Data/data";
import Navbar from "./components/Navbar/Navbar";


function App() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    [],
  );

  return (
    <div className="App">
      <Navbar/>
        <MaterialReactTable columns={columns} data={Data} />
    </div>
  );
}

export default App;

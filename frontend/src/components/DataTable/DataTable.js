import React from 'react';
import Table from 'react-bootstrap/Table';
import { useTable } from 'react-table';

function DataTable({ data }) {
  const columns = React.useMemo(() => {
    if (data.length > 0) {
      const dynamicColumns = Object.keys(data[0]).map((key) => ({
        Header: key,
        accessor: key,
      }));
      return dynamicColumns;
    }
    return [];
  }, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div className='container'>
      <div className="table-responsive"> 
        <Table striped bordered hover {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              )}
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DataTable;

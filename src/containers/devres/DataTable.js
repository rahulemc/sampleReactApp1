import React from 'react';

import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

 
class DataTable extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      rows : [{"id":1,"first_name":"William","last_name":"Elliott","email":"welliott0@wisc.edu",
             "country":"Argentina"},
              {"id":2,"first_name":"Carl","last_name":"Ross","email":"cross1@mlb.com",
             "country":"South Africa"},
              {"id":3,"first_name":"Jeremy","last_name":"Scott","email":"jscott2@cbsnews.com",
             "country":"Colombia"}],
     filteredDataList: this.rows,
            
    };
  }
 
  render() {
      return <Table
        height={40+((this.state.rows.length+1) * 30)}
        width={1000}
        rowsCount={this.state.rows.length}
        rowHeight={30}
        headerHeight={30}
        rowGetter={function(rowIndex) {return this.state.rows[rowIndex]; }.bind(this)}>
        <Column dataKey="id" width={50} label="Id" />
        <Column dataKey="first_name" width={200} label="First Name" />
        <Column  dataKey="last_name" width={200} label="Last Name" />
        <Column  dataKey="email" width={400} label="e-mail" />
        <Column  dataKey="country" width={300} label="Country" />
      </Table>
  }
}
 


export default DataTable;
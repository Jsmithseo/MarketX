console.log("hello")







// var ResponsiveTable = React.createClass({
//   head: function() {
//     var columns = _.map(this.props.columns, function(colName, columns) {
//       return (
//         <th>{colName}</th>
//       );
//     });
//     return (
//       <tr>{columns}</tr>
//     );
//   },
  
//   rows: function() {
//     var _this = this;
//     return _.map(_this.props.rows, function(row) {
//       var values = _.map(_this.props.columns, function(colName, colKey) {
//         return (
//           <td data-label={colName}>{row[colKey]}</td>
//         );
//       })
//       return (
//         <tr>{values}</tr>
//       );
//     })
//   },
  
//   render: function() {
//     return (
//       <table id="responsive-table">
//         <thead>
//           {this._head()}
//         </thead>
//         <tbody>
//           {this._rows()}
//         </tbody>
//       </table>
//     );
//   }
// });
    
// var cols = {
//   People: 'People',
//   Investors: 'Investors',
//   Acquisitions: 'Acquisitions',
// }

// var rows = [{
//   People: 'Alexander Karp ph.D',
//   Investors: 'Aeon Funds',
//   Acquisitions:'FT Technologies'
// },{
//   People:'Joe Lonsdale',
//   Investors: 'Dover Madison Capital Management',
//   Acquisitions: 'Propeller'
// },{
//   People: 'Stepen Cohen',
//   Investor: 'Nima Capital',
//   Acquisitions: 'Poptip'
// },{
//   People:"Geoff Belknap Ph.D",
//   Investors:'GSV Ventures',
//   Acquisitions:'Artis Ventures',
// },{
//   People:'Y Dan Rubinstein Ph.D',
//   Investors:'MircoVentures MarketPlace',
//   Acquisitions:'Vociegem'
// }
// }]

// React.render(
//   <ResponsiveTable columns={cols} rows={rows} />,
//   document.getElementById('table_container');
// );
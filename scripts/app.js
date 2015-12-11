
var ListTable = React.createClass({
  render: function() {
    return (
				<div className="ListTable">

							<table>
							  <tr>
							    <th>People</th>
							    <th>Investor</th>
							    <th>Acquisitions</th>
							  </tr>
							  <tr>
							    <td>Alexander Karp ph.D</td>
							    <td>Aeon Funds</td>
							    <td>FT Technologies</td>
							  </tr>
							  <tr>
							    <td>Joe Lonsdale</td>
							    <td>Dover Madison Capital Management</td>
							    <td>Propeller</td>
							  </tr>

							<tr>
							<td>Stephen Cohen</td>
							<td>Nima Capital</td>
							<td>Poptip</td>
							</tr>
							<tr>
							<td>Geoff Belknap Ph.D</td>
							<td>GSV Ventures</td>
							<td>Artis Ventures</td>
							</tr>
							<tr>
							<td>Y.Dan Rubinstein Ph.D</td>
							<td>MircoVenture Marketplace</td>
							<td>Voicegem </td>
							</tr>

							</table>
							     
							      </div>
							    );
							  }
							});
ReactDOM.render(
  <ListTable />,
  document.getElementById('content')
); 


var FundingTable = React.createClass({
  render: function() {
    return (
            <div className="FundingTable ">
                       <table class="table table-striped">
                            <thead class="thead-inverse">
                                <tr>
                                    <th>Title</th>
                                    <th>Series</th>
                                    <th>Funding</th>
                                    <th>Announced On</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Later Stage VC </td>
                                    <td>K</td>
                                    <td>554.83M</td>
                                    <td>23-Jul-2015</td>
                                  

                                </tr>
                                <tr>
                                    <td>Later Stage VC</td>
                                    <td>J</td>
                                    <td>400.00M</td>
                                    <td>26-Nov-2014</td>
                                    

                                </tr>
                                <tr>
                                    <td>Later Stage VC</td>
                                    <td>I</td>
                                    <td>635.71M</td>
                                    <td>03-Nov-2014</td>    

                                </tr>         

                            </tbody>
 
                        </table>
      </div>
    );
  }
});
ReactDOM.render(
  <FundingTable  />,
  document.getElementById('Funding_table')
);  





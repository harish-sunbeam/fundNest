import React from 'react'
import logoaxis from "../image/Axis.png";
import logohdfc from "../image/HDFC.png";
import logoicici from "../image/icici.png";
import logosbi from "../image/SBI.png";
import "../CSS/peercomparison.css";

function PeerComparison() {
  return (
    <div>
            <div className='col-md-10' style={{textAlign:'center',marginLeft:'20px',marginBottom:'20px',marginRight:'20px'}}>
                 <table className="table  align-middle  table-bordered"style={{border:'2',borderStyle:'solid',borderColor:'black'}}>
                    <thead className="bg-primary text-white">
                        <tr>
                            <th scope="col">logo</th>
                            <th scope="col">Mutual Fund</th>
                            <th scope="col">1 Year Return</th>
                            <th scope="col">6 Month Return</th>
                            <th scope="col">3 Month Return</th>
                            <th scope="col">1 Month Return</th>
                        </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>
                            <div className="img-logo text-center">
                                <img src={logoaxis} alt='Image'/>
                            </div>
                        </td>
                        <td>Axis Small Cap Fund Direct Growth </td>
                        {/* calculate from previous data */}
                        <td>29.82%</td>
                        <td>32.47%</td>
                        <td>34.57%</td>
                        <td>31.68%</td>
                    </tr>
                

                    <tr>
                        <td>
                            <div className="img-logo text-center">
                                <img src={logoicici} alt='Image'/>
                            </div>
                        </td>
                        <td>ICICI Small Cap Fund Direct Growth Plan </td>
                        {/* calculate from previous data */}
                        <td>34.46%</td>
                        <td>36.84%</td>
                        <td>33.24%</td>
                        <td>35.58%</td>
                    </tr>


                    <tr>
                        <td>
                            <div className="img-logo text-center">
                                <img src={logohdfc} alt='Image'/>
                            </div>
                        </td>
                    <td>HDFC Small Cap Fund Direct Growth  </td>
                        {/* calculate from previous data */}
                        <td>33.16%</td>
                        <td>38.23%</td>
                        <td>36.18%</td>
                        <td>40.21%</td>
                    </tr>


                    <tr>
                        <td>
                            <div className="img-logo text-center">
                                <img src={logosbi} alt='Image'/>
                            </div>
                        </td>
                    <td>SBI Small Cap Fund Direct Growth  </td>
                        {/* calculate from previous data */}
                        <td>28.57%</td>
                        <td>31.48%</td>
                        <td>29.48%</td>
                        <td>33.62%</td>
                    </tr>
                    </tbody>


                 </table>      
            </div>


            {/* <h4>Holdings :</h4>
    <div className='col-md-5' style={{textAlign:'center',marginBottom:'20px',marginRight:'100px'}}>
        <table className="table table-bordered"style={{border:'2',borderStyle:'solid',borderColor:'black'}}>
            
  <thead className="bg-primary text-white">
    <tr>
      <th scope="col">StockId</th>
      <th scope="col">Stock Name</th>
      <th scope="col">Stock Sector</th>
      <th scope="col">Stock Assets</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">101</th>
      <td>HAxis Bank</td>
      <td>Banking</td>
      <td>25%</td>
    </tr>
    <tr>
      <th scope="row">102</th>
      <td>Tata Power</td>
      <td>Power</td>
      <td>16%</td>
    </tr>
    <tr>
      <th scope="row">103</th>
      <td>Tata Steel</td>
      <td>Metal</td>
      <td>20%</td>
    </tr>
    <tr>
      <th scope="row">104</th>
      <td>Dr Reddy</td>
      <td>Health</td>
      <td>15%</td>
    </tr> <tr>
      <th scope="row">105</th>
      <td>TCS</td>
      <td>IT</td>
      <td>24%</td>
    </tr>
  </tbody>
</table>    
    </div> */}

    </div>
  )
}

export default PeerComparison
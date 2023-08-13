import React from 'react'
import "../CSS/return.css";
import Doughnut  from './DoughnutMf2';



function ReturnCalculatorMf2() {
  return (

    <div className='container'>
        <div className='row'>
        <div className="card col-md-5" style={{marginRight:"100px"}}>
            <div class="card-body">

            {/*     
        Toggle Buttons */}
     
            <div> 
            <div className='row'>
                <div className='col-md-6 col-xs-12'>
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" />        
            <label class="btn btn-outline-primary " style={{marginTop:'10px'}} for="success-outlined">Monthly SIP</label>
            </div>

            <div className='col-md-6 col-xs-12'>
            <input type="radio" class="btn-check" name="options-outlined"  id="danger-outlined" autocomplete="off"/>
            <label className="btn btn-outline-primary" style={{marginTop:'10px'}} for="danger-outlined">One Time Investment</label>
            </div>
            </div>
            
        </div>

        <br></br>
        
        
                <tr>
            <td style={{width:'250px'}}>
                <div className='col-md-12'>
                    <h6>Investment[₹]</h6>
                </div>
            </td>

            <td>
            <div class="col-md-12">
              <select class="form-select float-left" aria-h6="Default select example" style={{width:'200px'}}>
                <option value="1">1,000  </option>
                <option value="2">2,000 </option>
                <option value="3">3,000 </option>
                <option value="4">5,000 </option>
                <option value="5">10,000 </option>
              </select>
            </div>               
            </td>

                </tr>  

        <br></br>


        <tr>

            <td style={{width:'250px'}}>
                <div className='col-md-12'>
                    <h6>Investment Period[Months]</h6>
                </div>
            </td>

            <td style={{width:'150px'}}>
            <div class="col-md-12">
              <select class="form-select float-right" aria-h6="Default select example" style={{width:"200px"}}>
                <option value="1">1 </option>
                <option value="3">3</option>
                <option value="4">6</option>
                <option value="5">12</option>
              </select>
            </div>

            </td>     
        </tr>
            
         <br></br>   

            <tr>
                <td style={{width:'250px'}}>
                     <div class="col-md-6">  
                        <h6> Return Of Investment [₹]</h6>
                     </div>
                </td>
            
                <td style={{width:'200px'}}>
                    <div class="form-group,col-md-2" style={{borderRadius:'10px'}}>
                    <input type="text" class="form-control" />
                    </div>
                </td>
            </tr>

            <br></br>

            <a href="#" class="btn btn-primary" style={{marginLeft:'200px'}} >Calculate</a>

            </div>
        </div>

        {/* end of the Calculator card */}
        
    {/* table settings for the holdings */}
    <h4>Holdings :</h4>
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
      <th scope="row">201</th>
      <td>Icici Bank</td>
      <td>Banking</td>
      <td>22%</td>
    </tr>
    <tr>
      <th scope="row">202</th>
      <td>NTPC</td>
      <td>Power</td>
      <td>15%</td>
    </tr>
    <tr>
      <th scope="row">203</th>
      <td>Hindalco</td>
      <td>Metal</td>
      <td>24%</td>
    </tr>
    <tr>
      <th scope="row">204</th>
      <td>Cipla</td>
      <td>Health</td>
      <td>19%</td>
    </tr> <tr>
      <th scope="row">205</th>
      <td>Infosys</td>
      <td>IT</td>
      <td>20%</td>
    </tr>
  </tbody>
</table>    
    </div>

        {/* Doughnut */}
      <div className="col-md-8" style={{height:'250px',width:'300px'}}>
             <Doughnut />
      </div>
      
        </div>      
</div>




  )
}


// Doughnut





export default ReturnCalculatorMf2





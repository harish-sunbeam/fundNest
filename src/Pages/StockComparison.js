import React from "react";
import '../CSS/stockcmp.css'
function StockComparison() {
  return (
    
    <div>
         <section>
        <div className="container ">
          {/* image div */}
          <h1 className="mb-5">Peer Comparison</h1>
          <div className="bg-white shadow mx-auto text-center">
            <div>
              <table className="table table-bordered table-hover align-middle">
                <thead className="th">
                  <tr>
                    <th>No</th>
                    <th>Mutual Fund Name</th>
                    <th>Sector</th>
                    <th>1M Returns %</th>
                    <th>6M Returns %</th>
                    <th>1Y Returns %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Axis Small Cap Fund Direct Growth </td>
                        {/* calculate from previous data */}
                        <td>29.82%</td>
                        <td>32.47%</td>
                        <td>34.57%</td>
                        <td>31.68%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>ICICI Small Cap Fund Direct Growth Plan </td>
                        {/* calculate from previous data */}
                        <td>34.46%</td>
                        <td>36.84%</td>
                        <td>33.24%</td>
                        <td>35.58%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>HDFC Small Cap Fund Direct Growth  </td>
                        {/* calculate from previous data */}
                        <td>33.16%</td>
                        <td>38.23%</td>
                        <td>36.18%</td>
                        <td>40.21%</td>
                  </tr>
                  <tr>
                    <td>4</td>
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
          </div>
        </div>
      </section>
      <br></br>
      <section>
        <div className="container ">
          {/* image div */}
          <h1 className="mb-5">Stock Comparison</h1>
          <div className="bg-white shadow mx-auto text-center">
            <div>
              <table className="table table-bordered table-hover">
                <thead className="th">
                  <tr>
                    <th>No</th>
                    <th>Stock Name</th>
                    <th>Sector</th>
                    <th>1M Returns %</th>
                    <th>6M Returns %</th>
                    <th>1Y Returns %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Axis Bank</td>
                    <td>Banking</td>
                    <td>5%</td>
                    <td>10%</td>
                    <td>25%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Tata Power</td>
                    <td>Power</td>
                    <td>5%</td>
                    <td>10%</td>
                    <td>25%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Tata Steel</td>
                    <td>Metal</td>
                    <td>5%</td>
                    <td>10%</td>
                    <td>25%</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Dr Reddy</td>
                    <td>Health</td>
                    <td>5%</td>
                    <td>10%</td>
                    <td>25%</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>TCS</td>
                    <td>IT</td>
                    <td>5%</td>
                    <td>10%</td>
                    <td>25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <br></br>
    </div>
  );
}
export default StockComparison;

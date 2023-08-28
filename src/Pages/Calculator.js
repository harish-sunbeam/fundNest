import React, { useState } from 'react';

function Calculator() {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [annualInterestRate, setAnnualInterestRate] = useState(5);
  const [investmentPeriod, setInvestmentPeriod] = useState(1); // In years
  const [returns, setReturns] = useState(0);

  const handleInitialInvestmentChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setInitialInvestment(newValue);
    calculateCompoundInterest(newValue, annualInterestRate, investmentPeriod);
  };

  const handleInterestRateChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setAnnualInterestRate(newValue);
    calculateCompoundInterest(initialInvestment, newValue, investmentPeriod);
  };

  const handleInvestmentPeriodChange = (event) => {
    const newValue = parseInt(event.target.value);
    setInvestmentPeriod(newValue);
    calculateCompoundInterest(initialInvestment, annualInterestRate, newValue);
  };

  const calculateCompoundInterest = (investment, rate, period) => {
  

    const intrestRate = (1+ (rate/100));
    const bracket = Math.pow(intrestRate,period/12);

    const futureValue = bracket * investment;

    setReturns(futureValue.toFixed(2));

  };

  return (

    <div>
      <div className="text-information benefit-div">
      <h5 className="mb-5"> Return Calculator</h5>
      </div>

    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      {/* <div className="card col-md-4" style={{ display: 'flex', justifyContent: 'center', padding: '20px',width : "600px"}}>
          <div class="card-body">
          <div className="App">
          <h3>Return Calculator</h3>
          <div>
   
        <label>Initial Investment: ${initialInvestment}</label>
        <input
          type="range"
          min="500"
          max="5000"
          step="100"
          value={initialInvestment}
          onChange={handleInitialInvestmentChange}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%): {annualInterestRate}%</label>
        <input
          type="range"
          min="1"
          max="20"
          step="0.1"
          value={annualInterestRate}
          onChange={handleInterestRateChange}
        />
      </div>
      <div>
        <label>Investment Period (Months): {investmentPeriod} months</label>
        <input
          type="range"
          min="1"
          max="24"
          step="1"
          value={investmentPeriod}
          onChange={handleInvestmentPeriodChange}
        />
      </div>
      <div>
        <h2>Returns: ${returns}</h2>
      </div>
      </div>
      </div>
    </div> */}

    {/* COPYIN THE CODE OF THE CARD */}
    <div class="card " style={{display: 'flex', justifyContent: 'center', padding: '20px',width : "600px",height:"340px"}}>
  <div class="card-header bg-primary " style={{color: 'white'}}>
    <h3>Return Calculator</h3>
  </div>
  <div class="card-body">
   <label>Initial Investment: ₹ {initialInvestment}</label>
        <input
          type="range"
          min="500"
          max="1000000"
          step="100"
          value={initialInvestment}
          onChange={handleInitialInvestmentChange}
        />
      </div>
      
   
        <div>
        <label>Annual Interest Rate (%): {annualInterestRate}%</label>
        <input
          type="range"
          min="1"
          max="30"
          step="0.1"
          value={annualInterestRate}
          onChange={handleInterestRateChange}
        />
      </div>

      <br></br>
     

      <div>
        <label>Investment Period (Months): {investmentPeriod} months</label>
        <input
          type="range"
          min="1"
          max="24"
          step="1"
          value={investmentPeriod}
          onChange={handleInvestmentPeriodChange}
        />
      </div>
      <br></br>
        <div class="card-footer">
          <h2>Returns : ₹ {returns}</h2>
        </div>
  </div>

  
  
</div> 


{/* END OF THE COPIED CODE */}
    </div>
  );
}

export default Calculator
 
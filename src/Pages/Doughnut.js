import React from "react";
import { MDBContainer } from "mdbreact";
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto'


const App = () => {   
    // Sample data
    const data = {
      labels: ["Hdfc Bank", "Tata Power", "Tata Steel", "Dr Reddy", "TCS"],
        datasets: [
          {
            label: "Weightage of Each Stock in Mutual Fund ",
            data: [25, 16,  20  , 15, 24],
            backgroundColor: ["palevioletred", "orangered", "lawngreen", "blue", "black"],
           
          }
        ]
    }
      
    return (
      <MDBContainer>
        <Doughnut data={data} />
      </MDBContainer>
    );
  }

export default App  
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from "react";


function PeerComparison() {
  
 
      // for Mutual Fund 1 
    const [peerComparison1, setpeerComparison1] = useState(
        //returnPercentage : ""
    );

      const [peerComparison2, setpeerComparison2] = useState(
        //returnPercentage : ""
      );

      const [peerComparison3, setpeerComparison3] = useState(
        //returnPercentage : ""
      );


      // for Mutual Fund 2

      const [peerComparison4, setpeerComparison4] = useState(
        //returnPercentage : ""
      );

      const [peerComparison5, setpeerComparison5] = useState(
        //returnPercentage : ""
      );

      const [peerComparison6, setpeerComparison6] = useState(
        //returnPercentage : ""
      );


      // for Mutual Fund 3

      const [peerComparison7, setpeerComparison7] = useState(
        //returnPercentage : ""
      );

      const [peerComparison8, setpeerComparison8] = useState(
        //returnPercentage : ""
      );

      const [peerComparison9, setpeerComparison9] = useState(
        //returnPercentage : ""
      );



      // for Mutual Fund 4

      const [peerComparison10, setpeerComparison10] = useState(
        //returnPercentage : ""
      );

      const [peerComparison11, setpeerComparison11] = useState(
       // returnPercentage : ""
      );

      const [peerComparison12, setpeerComparison12] = useState(
        //returnPercentage : ""
      );

      
    

      const onInputChange = (e) => {
        setpeerComparison1({ ...peerComparison1, [e.target.name]: e.target.value });
        setpeerComparison2({ ...peerComparison2, [e.target.name]: e.target.value });
        setpeerComparison3({ ...peerComparison3, [e.target.name]: e.target.value });
        setpeerComparison4({ ...peerComparison4, [e.target.name]: e.target.value });
        setpeerComparison5({ ...peerComparison5, [e.target.name]: e.target.value });
        setpeerComparison6({ ...peerComparison6, [e.target.name]: e.target.value });
        setpeerComparison7({ ...peerComparison7, [e.target.name]: e.target.value });
        setpeerComparison8({ ...peerComparison8, [e.target.name]: e.target.value });
        setpeerComparison9({ ...peerComparison9, [e.target.name]: e.target.value });
        setpeerComparison10({ ...peerComparison10, [e.target.name]: e.target.value });
        setpeerComparison11({ ...peerComparison11, [e.target.name]: e.target.value });
        setpeerComparison12({ ...peerComparison12, [e.target.name]: e.target.value });
      };

      useEffect(()=>{
        debugger
        // MUTUAL FUND 01
        axios.get(`http://localhost:8080/mfdetails/getnavbymfid/1?noOfDays=30`).then(response=>{
            console.log(response.data);
            const data1 = response.data;
            setpeerComparison1(data1);
            
        }).catch(error=>console.log(error))

        axios.get(`http://localhost:8080/mfdetails/getnavbymfid/1?noOfDays=90`).then(response=>{
            console.log(response.data);
            const data2 = response.data;
            setpeerComparison2(data2);
            
        }).catch(error=>console.log(error))

        axios.get(`http://localhost:8080/mfdetails/getnavbymfid/1?noOfDays=180`).then(response=>{
            console.log(response.data);
            const data3 = response.data;
            setpeerComparison3(data3);
            
        }).catch(error=>console.log(error))

        // MUTUAL FUND 02
        axios.get(`http://localhost:8080/mfdetails/getnavbymfid/2?noOfDays=30`).then(response=>{
          console.log(response.data);
          const data4 = response.data;
          setpeerComparison4(data4);
      }).catch(error=>console.log(error))

      axios.get(`http://localhost:8080/mfdetails/getnavbymfid/2?noOfDays=90`).then(response=>{
          console.log(response.data);
          const data5 = response.data;
          setpeerComparison5(data5);
      }).catch(error=>console.log(error))

      axios.get(`http://localhost:8080/mfdetails/getnavbymfid/2?noOfDays=180`).then(response=>{
          console.log(response.data);
          const data6 = response.data;
          setpeerComparison6(data6);
      }).catch(error=>console.log(error))

      // MUTUAL FUND 03
      axios.get(`http://localhost:8080/mfdetails/getnavbymfid/3?noOfDays=30`).then(response=>{
        console.log(response.data);
        const data7 = response.data;
        setpeerComparison7(data7);
    }).catch(error=>console.log(error))

    axios.get(`http://localhost:8080/mfdetails/getnavbymfid/3?noOfDays=90`).then(response=>{
        console.log(response.data);
        const data8 = response.data;
        setpeerComparison8(data8);
    }).catch(error=>console.log(error))

    axios.get(`http://localhost:8080/mfdetails/getnavbymfid/3?noOfDays=180`).then(response=>{
        console.log(response.data);
        const data9 = response.data;
        setpeerComparison9(data9);
    }).catch(error=>console.log(error))

    // MUTUAL FUND 04
    axios.get(`http://localhost:8080/mfdetails/getnavbymfid/4?noOfDays=30`).then(response=>{
      console.log(response.data);
      const data10 = response.data;
      setpeerComparison10(data10);
  }).catch(error=>console.log(error))

  axios.get(`http://localhost:8080/mfdetails/getnavbymfid/4?noOfDays=90`).then(response=>{
      console.log(response.data);
      const data11 = response.data;
      setpeerComparison11(data11);
  }).catch(error=>console.log(error))

  axios.get(`http://localhost:8080/mfdetails/getnavbymfid/4?noOfDays=180`).then(response=>{
      console.log(response.data);
      const data12 = response.data;
      setpeerComparison12(data12);
  }).catch(error=>console.log(error))


    },[]);


  return (
    <div>
      
    <div className="container ">
    <div className="text-information benefit-div">
    <h5 className="mb-5"> PeerComparison</h5>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>  
    <table className="table table-bordered table-hover" style={{ width: '100%' ,textAlign:'center'}}>
      <thead className="th">
        <tr>
          <th>No</th>
          <th>Stock Name</th>
          <th>1 Month Return(%) </th>
          <th>3 Month Return(%)  </th>
          <th>6 Month Return(%) </th>
        </tr>
      </thead>
      <tbody>
            <tr>
                <td>1</td>
                <td>HDFCSMALL</td>
                <td>
                <div>
                  <h6>{peerComparison1}</h6>
                  </div>
                </td>
                <td><div>
                  <h6>{peerComparison2}</h6>
                  </div>
                </td>
                <td><div>
                  <h6>{peerComparison3}</h6>
                   </div>
                </td>
            </tr>

            <tr>
                <td>2</td>
                <td>ICICPRU</td>
                <td><div>
                  <h6>{peerComparison4}</h6>
                  </div></td>
                <td><div>
                  <h6>{peerComparison5}</h6>
                  </div></td>
                <td><div>
                  <h6>{peerComparison6}</h6>
                  </div></td>
            </tr>

            <tr>
                 <td>3</td>
                <td>AXISBALANCE</td>
                <td><div>
                  <h6>{peerComparison7}</h6>
                  </div></td>
                <td><div>
                  <h6>{peerComparison8}</h6>
                  </div></td>
                <td><div>
                  <h6>{peerComparison9}</h6>
                  </div></td>
            </tr>

            <tr>
                <td>4</td>
                <td>SBIGROW</td>
                <td><div>
                  <h6>{peerComparison10}</h6>
                  </div></td>
                <td><div>
                  <h6>{peerComparison11}</h6>
                  </div></td>
                <td><div>
                  <h6>{peerComparison12}</h6>
                  </div></td>
            </tr>

      </tbody>
     </table>
     </div> 

    </div>
    </div>

  )

   }

export default PeerComparison
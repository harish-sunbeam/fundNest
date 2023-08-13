import img1 from '../Assets/images/Axis.png'
import img2 from '../Assets/images/icici.png'
import img3 from '../Assets/images/HDFC.png'
import img4 from '../Assets/images/SBI.png'
import mfSize from '../CSS/fundList.css'
import { useHistory } from "react-router-dom";
import React from 'react'


function AllMutualFunds() {

    let history=useHistory();
    var fund1=()=>
    {
        history.push("/mf1")
    }

  return (
    <div>

<html>
<head>
    <title>Funds List</title>


</head>
<body>
    <div class="container ">
{/* 1st Row */}
        <div class="row gy-3 my-3">
        {/* we have taken md-6 as we want 2 cards in one row*/}
            <div class="col-sm-12 col-md-6 colContent">
                {/* here in below line 'card border-primary mb-3' is additional class for border see if its working */}
                <div class="card card1 card border-primary mb-3 cardSize" onClick={fund1}>
                    <div class="text-center mb-3">
                    <img src={img1} class="card-img-top mfImg" alt="Failed to load Image"/>
                    </div>
                    <div class="card-body">  
                        <h5 class="card-title text-truncate">Axis Small Cap Fund Direct Growth</h5>  {/* card wans't in original class picked up from bootstrap */}
                        <p class="card-text return"> {/* growth in % for specific time period  */} 46.6%(3Y)</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 colContent">
                {/* here in below line 'card border-primary mb-3' is additional class for border see if its working */}
                <div class="card card1 card border-primary mb-3 cardSize">
                    <div class="text-center mb-3">
                    <img src={img2} class="card-img-top mfImg" alt="Failed to load Image"/>
                    </div>
                    <div class="card-body">  
                        <h5 class="card-title text-truncate">ICICI Smallcap Fund Direct Growth Plan</h5>  {/* card wans't in original class picked up from bootstrap */}
                        <p class="card-text return" > {/* growth in % for specific time period  */} 46.6%(3Y)</p>
                    </div>
                </div>
            </div>
        </div>
{/* 2nd row */}
        <div class="row gy-3 my-3">
        {/* we have taken md-6 as we want 2 cards in one row*/}
            <div class="col-sm-12 col-md-6 colContent">
                {/* here in below line 'card border-primary mb-3' is additional class for border see if its working */}
                <div class="card card1 card border-primary mb-3 cardSize" >
                    <div class="text-center mb-3">
                    <img src={img3} class="card-img-top mfImg" alt="Failed to load Image"/>
                    </div>
                    <div class="card-body">  
                        <h5 class="card-title text-truncate">HDFC Small Cap Fund Direct Growth</h5>  {/* card wans't in original class picked up from bootstrap */}
                        <p class="card-text return" > {/* growth in % for specific time period  */} 46.6%(3Y)</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 colContent">
                {/* here in below line 'card border-primary mb-3' is additional class for border see if its working */}
                <div class="card card1 card border-primary mb-3 cardSize" >
                    <div class="text-center mb-3">
                    <img src={img4} class="card-img-top mfImg" alt="Failed to load Image"/>
                    </div>
                    <div class="card-body">  
                        <h5 class="card-title text-truncate">SBI Small Cap Fund Direct Growth</h5>  {/* card wans't in original class picked up from bootstrap */}
                        <p class="card-text return" > {/* growth in % for specific time period  */} 46.6%(3Y)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

    </div>
  )
}

export default  AllMutualFunds


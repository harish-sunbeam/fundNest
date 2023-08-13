import React from "react";
import "../CSS/homepage.css";
import stock from "../Assets/images/9634.jpg";
import divers from '../Assets/images/Investing-pana.png'
import promanage from '../Assets/images/Strategic consulting-pana.png'
import liquidity from '../Assets/images/Progress overview-bro.png'
import regulation from '../Assets/images/Privacy policy-pana.png'
function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text">
                Nest Your Funds,<br></br>Grow Your Wealth<br></br> Welcome To
                FundNest!!!
              </div>
              <div className="div-p">
                <p>
                  Welcome to FundNest, the leading mutual fund platform that
                  empowers you to grow your wealth and achieve your financial
                  goals. With our user-friendly interface and diverse selection
                  of funds, investing has never been easier.Whether you're
                  planning for retirement, saving for a child's education, or
                  simply looking to grow your wealth, our platform provides the
                  tools and resources you need to make informed investment
                  decisions.{" "}
                </p>
              </div>
              <div className="buttons">
                <a href="" className="btn btn-primary btn-color">
                  Get Started
                </a>
              </div>
            </div>
            
            <div className="col-md-6 col-xs-12 " >
              
              <img src={stock} className="w-100 stockimg"></img>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="information">
        <div className="container">
          <div className="row info-1">
            <div className="col-md-6">
              <div className="text-information benefit-div">
                <h5 className="">Benefits of Investing in Mutual Funds</h5>
              </div>
            </div>
          </div>
          <div className="row info-2">
            <div className="col-md-6">
              <img src={divers} className="w-100"></img>
            </div>
            <div className="col-md-6">
              <div className="text-information">
                <h5>Diversification</h5>
                <p>One of the key benefits of investing in mutual funds is diversification. 
                  Mutual funds pool money from multiple investors and invest in a variety 
                  of securities such as stocks, bonds, and other assets. This diversification 
                  helps reduce the risk associated with investing in a single security, 
                  as losses in one investment can be offset by gains in others.</p>
              </div>
            </div>
          </div>
          <div className="row info-1">
            <div className="col-md-6">
              <div className="text-information">
                <h5>Professional Management</h5>
                <p> Mutual funds are managed by experienced investment 
                  professionals who have the expertise and resources 
                  to research and select suitable investment opportunities. 
                  This relieves investors of the burden of making individual 
                  investment decisions.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={promanage} className="w-100"></img>
            </div>
          </div>
          <div className="row info-2">
            <div className="col-md-6">
              <img src={liquidity} className="w-100"></img>
            </div>
            <div className="col-md-6">
              <div className="text-information">
              <h5>Liquidity</h5>
                <p> Mutual funds offer high liquidity, allowing investors to buy or sell 
                  their fund shares on any business day at the net asset value (NAV). 
                  This provides flexibility and ease of access to investors who may 
                  need to access their investment capital quickly.</p>
              </div>
            </div>
          </div>
          <div className="row info-1">
            <div className="col-md-6">
              <div className="text-information">
              <h5>Regulatory Oversight</h5>
                <p>  Mutual funds are subject to regulatory oversight and are 
                  required to comply with industry regulations, providing investors 
                  with a level of protection. This oversight helps ensure fair practices, 
                  transparency, and adherence to investor rights.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={regulation} className="w-100"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

import React from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import SignUp from './SignUp';
import Profilehome from "./Profilehome";
import Home from "./Home";
import Footer from "./Footer";
import Calculator from "./Calculator";
import ReturnCalculator from "./ReturnCalculator";
import Career from "./Career";
import PrivacyPolicy from "./PrivacyPolicy";
import TC from "./T&C";
import AddProfile from './AddProfile'
import UpdateProfile from './UpdateProfile'
import UpdatePassword from './UpdatePassword'
import KycDetails from './KycDetails'
import NomineeDetails from './NomineeDetails'
import AllMutualFunds from './AllMutualFunds';
import MutualFund1 from './MutualFund1';
import StockComparison from "./StockComparison";
const Landing = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/allmutualfunds" component={AllMutualFunds} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/t&c" component={TC} />
        <Route exact path="/profilehome" component={Profilehome} />
        <Route exact path="/addprofile" component={AddProfile} />
        <Route exact path="/updateprofile" component={UpdateProfile} />
        <Route exact path="/UpdatePassword" component={UpdatePassword} />
        <Route exact path="/KycDetails" component={KycDetails} />
        <Route exact path="/NomineeDetails" component={NomineeDetails} />
        <Route exact path="/returncalculator" component={ReturnCalculator} />  
        <Route exact path='/mf1' component={MutualFund1}/>
         <Route exact path='/signup' component={SignUp}/>
         <Route exact path='/stockcmp' component={StockComparison}/>

      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Landing;

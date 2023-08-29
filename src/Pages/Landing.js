import React from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import SignUp from "./SignUp";
import Profilehome from "./Profilehome";
import Home from "./Home";
import Footer from "./Footer";
import Calculator from "./Calculator";
import ReturnCalculator from "./ReturnCalculator";
import Career from "./Career";
import PrivacyPolicy from "./PrivacyPolicy";
import TC from "./T&C";
import AddProfile from "./AddProfile";
import UpdateProfile from "./UpdateProfile";
import UpdatePassword from "./UpdatePassword";
import KycDetails from "./KycDetails";
import NomineeDetails from "./NomineeDetails";
import AllMutualFunds from "./AllMutualFunds";
import MutualFund1 from "./MutualFund1";
import StockComparison from "./StockComparison";
import StockDetails from "./StockDetails";
import MfCompanyDetails from "./MfCompanyDetails";
import MutualFundDetails from "./MutualFundDetails";
import StockSelection from "./SelectStockInMf";
import AddSelectedStock from "./AddSelectedStock";
import AdminDash from "./AdminDash";
import ListAllMf from "./ListAllMf";
import UserDash from "./UserDash";
import MfManagerDash from "./MfManagerDash";
import ChangeStockPrice from "./ChangeStockPrice";
import FireBase from "./FireBase";
import PeerComparison from "./PeerComparison";
import UserInvestment from "./UserInvestment";
import OrderHistory from "./OrderHistory";
import TransactionHistory from "./TransactionHistory";
import WithdrawTransaction from "./WithdrawTransaction";
import DepositTransaction from "./DepositTransaction";
import Otp from "./Otp";
import CompanySignUp from "./CompanySignUp";
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
        <Route exact path="/mf1" component={MutualFund1} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/stockcmp" component={StockComparison} />
        <Route exact path="/stockdetails" component={StockDetails} />
        <Route exact path="/addmfcompanydetails" component={MfCompanyDetails} />
        <Route exact path="/addmfdetails" component={MutualFundDetails} />
        <Route exact path="/selectstocksinmf" component={StockSelection} />
        <Route exact path="/admindashboard" component={AdminDash} />
        <Route
          exact
          path="/addselectedstocksinmf"
          component={AddSelectedStock}
        />
        <Route exact path="/listallmf" component={ListAllMf} />
        <Route exact path="/changestockprice" component={ChangeStockPrice} />
        <Route exact path="/userdashboard" component={UserDash} />
        <Route exact path="/mfmanagerdashboard" component={MfManagerDash} />
        <Route exact path="/firebase" component={FireBase} />
        <Route exact path="/peercomparison" component={PeerComparison} />
        <Route exact path="/userinvestmentdetails" component={UserInvestment} />
        <Route exact path="/orderhistory" component={OrderHistory} />
        <Route
          exact
          path="/transactionhistory"
          component={TransactionHistory}
        />
        <Route
          exact
          path="/withdrawtransaction"
          component={WithdrawTransaction}
        />
        <Route
          exact
          path="/deposittransaction"
          component={DepositTransaction}
        />
        <Route exact path="/otp" component={Otp} />
        <Route exact path='/companysignup' component={CompanySignUp}/>
        
      </Switch>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Landing;

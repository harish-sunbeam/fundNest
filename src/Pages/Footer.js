import React from "react";
import "../CSS/footer.css";
import { Form, Link } from "react-router-dom";
function Footer() {
  return (
    <html>
<head>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
</head>
<body>

  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h1>FundNest</h1>
  	 			    <p>
                Nest Your Funds, Grow Your Wealth,
                Welcome To <br></br> FundNest !
              </p>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Quick Links</h4>
  	 			<ul>
            
  	 				<li><Link to="/allmutualfunds"><a href="">Mutual Funds</a></Link></li>
  	 				<li><Link to="/calculator"><a href="">Calculator</a></Link></li>
  	 				<li><Link to="/career"><a href="">Career</a></Link></li>
  	 				<li><Link to="/privacypolicy"><a href="">Privacy Policy</a></Link></li>
  	 				<li><Link to="/t&c"><a href="">Terms & Conditions</a></Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
          <div className="footer-col reachus" style={{width:"150px"}}>
              <h4>Reach Us</h4>
              <p>
                <i className="fa-solid fa-phone-volume"></i> +91 7559441917
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i> fundnest@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-paper-plane"></i> Karad, India.
              </p>
            </div>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
  	 				<a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
  	 				<a href="https://in.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

</body>
</html>
    
  );
}

export default Footer;

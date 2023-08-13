import React from 'react'

function ContactUs() {
  return (
   
    <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
          
             
            <h3>Contact Us</h3>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <h5>We are located at:-</h5>
              <p>
                Registered Office: Anuda Chambers, 203 Shaniwar Peth,
                Near Gujar Hospital, Karad- 415 110, Dist.Statara, MH-INDIA.
              </p>
            </div>
            <div className="mb-3">
              <h5>Website:-</h5>
              <p>www.fundnest.com</p>
            </div>
            <div className="mb-3">
              <h5>Email:-</h5>
              <p>mutualfund123@gmail.com</p>
            </div>
            <div className="mb-3">
              <h5>Contact Numbers:-</h5>
              <p>02167 - 225500, 225800</p>
            </div>
            <div className="mb-3">
              <h5>Location:-</h5>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7770.697541250064!2d74.170456!3d17.283543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf7475b88b50ef%3A0xb62a72a9291b5cf9!2sAnuda%20Chambers!5e0!3m2!1sen!2sin!4v1627384827829!5m2!1sen!2sin"
                  allowFullScreen
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
);
};

export default ContactUs
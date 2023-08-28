import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { request } from "./axios";
function ListAllMf() {
    var history=useHistory();
  const [listOfMf, setListOfMf] = useState([]);
  const [mfDetails, setMfDetails] = useState({
    mfId: "",
    mfName: "",
    mfFundSize: "",
    mfTotalUnits: "",
    mfTotalInvestment: "",
  });
  useEffect(() => {
    request("GET", "/mfdetails/getlistofallmf", {}).then((res) =>
      setListOfMf(res.data)
    );
  }, []);

const handleClick =(s)=>
{
    sessionStorage.setItem("mfName",s.mfName)
    sessionStorage.setItem("mfId",s.mfId)
    history.push('/changestockprice')
}

  return (
    <div>
      <section>
        <div className="container ">
          <div className="text-information benefit-div">
            <h5 className="mb-5">List Of Mutual Funds</h5>
          </div>

          {listOfMf.map((s) => {
            return (
              <div className="container-fluid ">
                <div className="row">
                  <center>
                    <div className="col-xl-4 col-lg-5 ">
                      <div className="card shadow mb-4 card-hover ">
                        <div className="card-header py-3" onClick={()=> handleClick(s)}>
                          <h6 className="m-0 font-weight-bold text-primary">
                            {s.mfName}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ListAllMf;

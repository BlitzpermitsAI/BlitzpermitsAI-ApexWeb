import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VerifyCodeApi } from "../../../Common/Api/LoginService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import "./VerifyCode.css";

const VerifyCode = () => {
  const navigate = useNavigate();

  //const dispatch = useDispatch();
  const [codeData, setCodeData] = useState({ code: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const userMail = localStorage.getItem("userEmail");

  const [errors, setErrors] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  const schema = Yup.object().shape({
    code: Yup.number()
      .typeError("Code must be a number")
      .required("Code is required"),
  });

  //   useEffect(() => {
  //     const userMail = localStorage.getItem("userEmail");
  //     // const userInfo = JSON.parse(userData);
  //     //console.log(userInfo,"location");
  //     if (userMail === null || undefined) {
  //       navigate("/");
  //     }
  //   }, []);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    try {
      await schema.validateAt(name, { [name]: value });
      setErrors({ ...errors, [name]: "" });
    } catch (error) {
      setErrors({ ...errors, [name]: error.message });
    }
    setCodeData({
      ...codeData,
      [name]: value,
      userName: userMail !== "" ? userMail : "",
    });
  };

  const handleSubmit = async (e) => {
 
    e.preventDefault();
    try {
      await schema.validate(codeData, { abortEarly: false });
        CallApi();
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const CallApi = () => {
    setShowLoader(true);
    try {
      VerifyCodeApi(codeData).then(async (response) => {
        console.log(response?.response?.isSuccess,"response");
        if (response?.status == "200" || response?.status == "OK") {
          setShowLoader(false);
          navigate("/Home");
        }
        else{
            setErrorMsg("InValid Code !")
            setShowLoader(false);
        }
      });
    } catch (error) {
        setShowLoader(false);
      console.log("error", error);
    }
    
  };

  return (
    // <div className="roboto-regular">
    <div className="main-login">
      <div className="login-container">
        <div className="leftcontainer">
          <div className="ai-powered"> AI - Powered </div>
          <div className="bz-tagline">
            <h1>CODE</h1>
            <h3>COMPLIANCE</h3>
            <h2>REVIEWS</h2>
          </div>
        </div>
        <div className="rightcontainer">
          <form onSubmit={handleSubmit}>
            <div className="bz-logo"> </div>
            <div className="verify-code">
              <div className="signIn-title-code">Verify Your Code </div>
              <p>Verification code has been sent your email id</p>
            </div>
            <br></br>

            <div className="field-set">
              <div className="field-container">
                <label className="required">Code</label>
                <input
                  type="text"
                  id="txt-field"
                  className="txt-field"
                  name="code"
                  value={codeData?.code || ""}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
                <div>
                  {errors.code && (
                    <span style={{ color: "red", "font-size": "14px" }}>
                      {errors.code}
                    </span>
                  )}
                </div>
                <br></br>
                {errorMsg !== "" ? (
                  <div className="failure-div">
                    <div>
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        style={{ color: "red" }}
                      />
                    </div>
                    <div className="failure-text">{errorMsg}</div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="align-right mrgn-bt-10"></div>
              {showLoader ? (
                <div style={{ textAlign: "center", marginTop: "0px" }}>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    color="#5b72da"
                    spin
                    size="2x"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="btn-container">
              <button type="submit" className="btn-action width100p" id="">
                Verify
              </button>
              <div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;

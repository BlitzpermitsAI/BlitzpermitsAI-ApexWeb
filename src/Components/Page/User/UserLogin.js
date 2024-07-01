import { React, useEffect, useState } from "react";
import { LoginAPI, UserDetailsAPI } from "../../../Common/Api/LoginService";
import { Link, useNavigate } from "react-router-dom";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import "./UserLogin.css";

const UserLogin = () => {
  let navigate = useNavigate();

  const [showLoader, setShowLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const schema = Yup.object().shape({
    username: Yup.string()
      .email("Invalid email")

      .required("Email is required"),

    password: Yup.string().required("Password is required"),
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    try {
      await schema.validateAt(name, { [name]: value });
      setErrors({ ...errors, [name]: "" });
    } catch (error) {
      setErrors({ ...errors, [name]: error.message });
    }
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(loginData, { abortEarly: false });

      CallApiData();
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const CallApiData = () => {
    setShowLoader(true);

    try {
      LoginAPI(loginData).then(async (response) => {
        if (response?.status == "200" || response?.status == "OK") {
          if (response?.data?.message === "Token created") {
            setShowLoader(false);
            localStorage.setItem(
              "userTokenInfo",
              JSON.stringify(response?.data?.response)
            );
            await UserDetailsAPI(response?.data?.response?.userId).then(
              (userdata) => {
                localStorage.setItem("userEmail", userdata?.data?.email);
                localStorage.setItem(
                  "UserInfo",
                  JSON.stringify(userdata?.data)
                );
                const NavPage =
                  userdata?.userType === "admin"
                    ? "/Home"
                    : "/Home";
                navigate(NavPage);
               // navigate("/Home");
              }
            );
          }
        } else if (response?.data?.responseObject === null) {
          navigate("/verify-code");
        } else if (response?.response?.data?.status == 401) {
          setShowLoader(false);
          setErrorMsg("Invalid Credentials, Please Retry !!");
        }
        else { navigate("/reset-password", { state: response?.data });}
      });
    } catch (error) {
      setShowLoader(false);
      console.log("error",error);
    }
    
  };
  /*
    dispatch(login(loginData))
      .unwrap()
      .then((data) => {
        if (data.status == "200" || data.status == "OK") {
          localStorage.setItem("userEmail", data?.data?.email);
          setShowLoader(false);
          setErrorMsg("");
          
          if (data?.data?.message === "Token created") {
            localStorage.setItem(
              "userTokenInfo",
              JSON.stringify(data?.data?.response)
            );
            dispatch(getUserInfo(data?.data?.response?.userId))
              .unwrap()
              .then((userdata) => {
                localStorage.setItem("userEmail", userdata?.email);
                localStorage.setItem("UserInfo", JSON.stringify(userdata));
                
                const NavPage =
                  userdata?.userType === "admin"
                    ? "/dashboard"
                    : "/project-summary";
                navigate(NavPage);
                window.location.reload();
              });
          } else if (data?.data?.responseObject === null) {
           
            navigate("/verify-code");
          } else {
          
            navigate("/reset-password", { state: data?.data });
          }
        } else {
          setShowLoader(false);
          //   console.log("responseBody", data);
        }
      })
      .catch((e) => {
        console.log(e, "error in login", e?.code);
        setShowLoader(false);
        setErrorMsg("Invalid Credentials, Please Retry !!");
      });
      */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShowPassword = (e, showValue) => {
    showValue ? setShowPassword(true) : setShowPassword(false);
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
          <form onSubmit={handleSubmitLogin}>
            <div className="bz-logo"> </div>
            <div className="signIn-title"> </div>
            <br />
            <div className="field-set">
              <div className="field-container">
                <label className="required">Email </label>
                <input
                  type="text"
                  id="txt-field"
                  className="txt-field"
                  name="username"
                  value={loginData.username || ""}
                  onChange={handleInputChange}
                />
                <div>
                  {errors.username && (
                    <span style={{ color: "red", "font-size": "14px" }}>
                      {errors.username}
                    </span>
                  )}
                </div>
              </div>

              <div className="field-container">
                <label className="required">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="txt-field"
                  name="password"
                  value={loginData.password || ""}
                  onChange={handleInputChange}
                />
                {!showPassword ? (
                  // <button
                  //   className="btn-show-login"
                  //   onClick={(e) => handleShowPassword(e, true)}
                  // ></button>
                  <FontAwesomeIcon
                    icon={faEye}
                    className="btn-cancel"
                    onClick={(e) => handleShowPassword(e, true)}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="btn-cancel"
                    icon={faEyeSlash}
                    onClick={(e) => handleShowPassword(e, false)}
                  />
                )}
                <div>
                  {errors.password && (
                    <span style={{ color: "red", "font-size": "14px" }}>
                      {errors.password}
                    </span>
                  )}
                </div>
              </div>
              <div className="align-right mrgn-bt-10">
                {/* {" "}
              <a href="" id="">
                Forgot Password?
              </a>{" "} */}

                <Link to="/forgot-password"> Forgot Password?</Link>
              </div>
              {showLoader ? (
                <div style={{ textAlign: "center", marginTop: "0px" }}>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    color="#5b72da"
                    spin
                    size="2x"
                  />
                  {/* <p>Loading...</p> */}
                </div>
              ) : (
                ""
              )}

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
            <div className="btn-container">
              <button type="submit" className="btn-action width100p" id="">
                Log In
              </button>
              <div>
                {/* <span className="txt-size12">{`Don't have an account?`} </span>{" "}
              <a href="" id="">
                Register
              </a> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

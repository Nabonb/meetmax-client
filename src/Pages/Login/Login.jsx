import React, { useState } from "react";
import NavbarSocial from "../../Components/Navbar/NavbarSocial";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import google from "../../assets/images/Google.png";
import apple from "../../assets/images/Apple.png";
import mail from "../../assets/images/Mail.png";
import eyeOff from "../../assets/images/Eye Off.png";
import eyeOpen from "../../assets/images/Eye.png";
import lock from "../../assets/images/Lock.png";
import { Input } from "@nextui-org/react";
import "./Login.css";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <NavbarSocial></NavbarSocial>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#4E5D78] mt-[30px]">
          Sign In
        </h1>
        <p className="text-xs font-medium text-[#4E5D78] mt-[10px] mb-[30px]">
          Welcome back, you’ve been missed!
        </p>
        <div className="md:w-[580px] w-4/5 mx-auto bg-[#CDCDD41A]">
          <div className="py-10 px-10">
            <div>
              <Link>
                <Button
                  className="text-base md:mr-5 font-medium text-[#4E5D78] bg-[#4E5D780D] py-[14px] px-8 md:w-[240px] md:h-[52px]"
                  startContent={
                    <img className="mr-5 h-[16px] w-[16px]" src={google}></img>
                  }
                >
                  Log in With Google
                </Button>
              </Link>
              <Link>
                <Button
                  className="text-base mt-5 md:mt-0 font-medium text-[#4E5D78] bg-[#4E5D780D] py-[14px] px-8 md:w-[240px] md:h-[52px]"
                  startContent={
                    <img className="mr-5 h-[16px] w-[16px]" src={apple}></img>
                  }
                >
                  Log in With Apple
                </Button>
              </Link>
            </div>
            <div className="flex items-center py-[30px] space-x-1">
              <div className="flex-1 h-px sm:w-16 w-[217px] bg-gray-700"></div>
              <p className="px-3 text-[#4E5D78] font-bold text-lg">OR</p>
              <div className="flex-1 h-px sm:w-16 w-[217px] bg-gray-700"></div>
            </div>
            <div>
              <Input
                className="text-sm font-medium border border-[#4E5D7833] rounded-lg"
                color="#FFFFFF"
                type="email"
                placeholder="Your Email"
                startContent={<img className="mr-[4px]" src={mail} />}
              />
              <Input
                placeholder="Enter your password"
                startContent={<img className="mr-[4px]" src={lock} />}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                  >
                    {isVisible ? (
                      <img src={eyeOpen} alt=""></img>
                    ) : (
                      <img src={eyeOff} alt=""></img>
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="text-sm font-medium border border-[#4E5D7833] rounded-lg my-5"
              />
              {/* This is for the date and gender input*/}
              <div className="flex justify-between">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="md:ml-[22px] w-3 h-3"
                  />
                  <span className="text-sm text-[#4E5D78] ml-[4px] md:ml-[10px] font-medium">
                    Remember Me
                  </span>
                </label>
                <p className="text-sm text-[#4E5D78] font-medium">Forgot Password?</p>
              </div>
              <Button className="my-5 w-full font-medium" color="primary">
                Sign In
              </Button>
              <p className="md:text-base font-medium text-xs">
              You haven't any account? 
                <Link
                  to="/signup"
                  className="text-[#377DFF] md:ml-[19px] md:text-base text-xs font-medium"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

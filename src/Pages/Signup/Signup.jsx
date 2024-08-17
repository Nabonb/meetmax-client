import React, { useState } from "react";
import NavbarSocial from "../../Components/Navbar/NavbarSocial";
import { Button } from "@nextui-org/react";
import google from "../../assets/images/Google.png";
import apple from "../../assets/images/Apple.png";
import mail from "../../assets/images/Mail.png";
import vector from "../../assets/images/Vector.png";
import eyeOff from "../../assets/images/Eye Off.png";
import eyeOpen from "../../assets/images/Eye.png";
import lock from "../../assets/images/Lock.png";
import calender from "../../assets/images/Calender.png";
import male from "../../assets/images/male.png";
import female from "../../assets/images/Female.png";
import { Link } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import "./Signup.css";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputType, setInputType] = useState("text");
  const [gender, setGender] = useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  // console.log(gender)
  return (
    <div>
      <NavbarSocial></NavbarSocial>
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#4E5D78] mt-[30px]">
          Getting Started
        </h1>
        <p className="text-xs font-medium text-[#4E5D78] mt-[10px] mb-[30px]">
          Create an account to continue and connect with the people.
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
                className="text-sm font-medium border border-[#4E5D7833] rounded-lg my-5"
                type="text"
                placeholder="Your Name"
                startContent={<img className="mr-[4px]" src={vector} />}
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
              <div className="md:flex gap-x-5">
                <Input
                  className="text-sm md:w-1/2 font-medium border border-[#4E5D7833] rounded-lg "
                  placeholder="Date of birth"
                  startContent={<img className="mr-[4px]" src={calender} />}
                  type={inputType}
                  onFocus={() => setInputType("date")}
                  onBlur={(e) => {
                    if (!e.target.value) setInputType("text");
                  }}
                />
                <RadioGroup
                  orientation="horizontal"
                  className="text-sm md:w-1/2 font-medium border border-[#4E5D7833] rounded-lg mt-5 md:mt-0  py-[8px] px-3 bg-white"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  {gender === "male" ? (
                    <img className="w-4 h-4 my-auto" src={male} alt="" />
                  ) : gender === "female" ? (
                    <img className="w-4 h-4 my-auto" src={female} alt="" />
                  ) : (
                    ""
                  )}
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </RadioGroup>
              </div>
              <Button className="my-5 w-full font-medium" color="primary">Sign Up</Button>
              <p>Already have an account? <Link to='/login' className="text-[#377DFF] ml-[19px] text-base font-medium">Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

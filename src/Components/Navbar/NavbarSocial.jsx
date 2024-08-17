import React from "react";

import logo from "../../assets/images/Logo.png";

const NavbarSocial = () => {
  console.log("Hello world");
  return (
    <div>
      <div className="navbar px-[30px] py-[25px] bg-white">
        <div className="flex-1">
          <img src={logo} alt="" />
          <p className="text-lg font-bold ml-[10px]">Meetmax</p>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="text-sm font-medium text-[#4E5D7899]">English(US)</summary>
                <ul className="bg-white rounded-t-none p-2">
                  <li>
                    <a>Bangla</a>
                  </li>
                  <li>
                    <a>French</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarSocial;

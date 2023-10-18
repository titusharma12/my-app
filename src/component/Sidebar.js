import React from "react";
import { TbSettings2 } from "react-icons/tb";
import { SiPkgsrc } from "react-icons/si";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbSquareKey } from "react-icons/tb";
import { PiUserSquare } from "react-icons/pi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineLiveHelp } from "react-icons/md";
import { AiFillCodeSandboxSquare } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar-top">
      <div className="dashboard">
        <TbSettings2 className="icon-dashboard" />
        Dashboard
      </div>
      <div className="sidebar-middle">
        <div className="dashborad2 dashboard-icons">
          <span className="dashboard-icon-margin">
            <TbSquareKey className="icon-dashboard"/>
            Dashboard
          </span>
        </div>

        <div className="dashboard-icons">
          <span className="dashboard-icon-margin">
            <AiFillCodeSandboxSquare className="icon-dashboard"/>
            Product
          </span>
          <MdOutlineKeyboardArrowRight className="dashboard-arrow-margin" />
        </div>

        <div className="dashboard-icons">
          <span className="dashboard-icon-margin">
            <PiUserSquare className="icon-dashboard"/>
            Customer
          </span>
          <MdOutlineKeyboardArrowRight className="dashboard-arrow-margin" />
        </div>

        <div className="dashboard-icons">
          <span className="dashboard-icon-margin">
            <MdOutlineAccountBalanceWallet className="icon-dashboard"/>
            Income
          </span>
          <MdOutlineKeyboardArrowRight className="dashboard-arrow-margin" />
        </div>

        <div className="dashboard-icons">
          <span className="dashboard-icon-margin">
            <CiDiscount1 className="icon-dashboard"/>
            Promote
          </span>
          <MdOutlineKeyboardArrowRight className="dashboard-arrow-margin" />
        </div>

        <div className="dashboard-icons">
          <span className="dashboard-icon-margin">
            <MdOutlineLiveHelp className="icon-dashboard"/>
            Help
          </span>

          <MdOutlineKeyboardArrowRight className="dashboard-arrow-margin" />
        </div>
      </div>
      
      <div className="sidebar-bottom">
      <div className="dashboard-icons">
          <span className="dashboard-icon-margin">
            <img src='../userprofile.png' alt='img' width="50px" height="50px"/>
            Profile
          </span>
          <MdOutlineKeyboardArrowRight className="dashboard-arrow-margin" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

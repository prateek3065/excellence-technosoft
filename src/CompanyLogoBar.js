import React from "react";
import companyLogo from "./CompanyLogo.png";
import "./App.css";
export default function CompanyLogoBar() {
  return (
    <div className="company-logo-bar">
      <img src={companyLogo} alt="" className="image"></img>
      <h1>This is test</h1>
    </div>
  );
}

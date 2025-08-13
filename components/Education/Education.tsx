import React from "react";

export default function Education() {
  return (
    <><div className="section">
      <p className="section-header">Education</p>
      <div className="flex flex-col gap-1">
        <p className="text-title">Virginia Commonwealth University</p>
        <div className="flex flex-col gap-1  md:flex-row justify-between">
          <p className="italic date-text">
            MS in Computer Science
          </p>
          <p className="date-text">Aug 2024 - Dec 2025</p>
        </div>
      </div>
      <p className="section-header">Education</p>
      <div className="flex flex-col gap-1">
        <p className="text-title">CHRIST (Deemed to be University),India </p>
        <div className="flex flex-col gap-1  md:flex-row justify-between">
          <p className="date-text">
            MS in Computer Applications
          </p>
          <p className="date-text">July 2023 – May 2024</p>
        </div>
      </div>
      <p className="section-header">Education</p>
      <div className="flex flex-col gap-1">
        <p className="text-title">University of Delhi,India </p>
        <div className="flex flex-col gap-1  md:flex-row justify-between">
          <p className="italic date-text">
          Bachelor of Science in Applied Physical Scienc
          </p>
          <p className="date-text">July 2019 – May 2022</p>
        </div>
      </div>
    </div>
    </>
    
  );
}

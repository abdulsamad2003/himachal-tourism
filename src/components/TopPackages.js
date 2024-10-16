import React from 'react'
import "../styles/TopPackages.css"
import { BiSolidPlaneAlt } from "react-icons/bi";
import PackageCard from './PackageCard';

const TopPackages = () => {
  return (
    <section id="packages" className="top-packages">
      <div className="heading">
        <span className="small-heading">
          <BiSolidPlaneAlt color="blue" size={"25px"} />
          <h5>
            Packages
          </h5>
        </span>
        <h1 >Top Selling Himachal Tour Packages</h1>
        <p>Approved by department of Himachal Tourism</p>
        <br />
        <p> Explore Himachal, Customize Tour Packages, Lowest Rates, Guaranteed Services.</p>
      </div>
      <PackageCard />
    </section>
  )
}

export default TopPackages

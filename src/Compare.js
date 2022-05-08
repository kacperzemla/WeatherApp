import { useState } from "react";
import interiaLogo from "./static/interia_logo_ukr2.svg"
import onetLogo from "./static/onetLogo.png"
import weather from "./static/weatherChannel.png"
import avenue from "./static/Avenue.png"
import wpLogo from "./static/Wp.webp"
import meteoLogo from "./static/meteoprog.webp"

import ServiceContainer from "./ServiceContainer";

function Compare() {
  const [region, setRegion] = useState("agh");
  const [hour, setHour] = useState("8");



  function handleChangeHour(event) {
    setHour(event.target.value);
  }


  return (
    <div className="compare-container">
      <select
            name="hours"
            className="compare-select"
            onChange={(event) => handleChangeHour(event)}
          >
            <option value="0">0:00</option>
            <option value="1">1:00</option>
            <option value="2">2:00</option>
            <option value="3">3:00</option>
            <option value="4">4:00</option>
            <option value="5">5:00</option>
            <option value="6">6:00</option>
            <option value="7">7:00</option>
            <option value="8">8:00</option>
            <option value="9">9:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
            <option value="23">23:00</option>
          </select>
      
      <ServiceContainer service={"interia"} region = {region} hour ={hour} logo = {interiaLogo}/>
      <ServiceContainer service={"avenue"} region = {region} hour ={hour} logo= {avenue}/>
      <ServiceContainer service={"weatherChannel"} region = {region} hour ={hour} logo ={weather} />
      <ServiceContainer service={"onet"} region = {region} hour ={hour}  logo ={onetLogo}aveav/>
      <ServiceContainer service={"wp"} region = {region} hour ={hour} logo= {wpLogo} />
      <ServiceContainer service={"metroprog"} region = {region} hour ={hour} logo = {meteoLogo} />

    </div>
  );
}

export default Compare;

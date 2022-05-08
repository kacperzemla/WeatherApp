import { useState } from "react";

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
            <option value="8">8:00</option>
            <option value="10">10:00</option>
            <option value="12">12:00</option>
            <option value="14">14:00</option>
            <option value="16">16:00</option>
            <option value="18">18:00</option>
            <option value="20">20:00</option>
          </select>
      <ServiceContainer service={"interia"} region = {region} hour ={hour} />
      <ServiceContainer service={"avenue"} region = {region} hour ={hour} />
      <ServiceContainer service={"weatherChannel"} region = {region} hour ={hour} />
      <ServiceContainer service={"onet"} region = {region} hour ={hour} />
      <ServiceContainer service={"wp"} region = {region} hour ={hour} />
      <ServiceContainer service={"metroprog"} region = {region} hour ={hour} />

    </div>
  );
}

export default Compare;

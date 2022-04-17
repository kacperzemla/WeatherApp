import { useState } from "react";

import ServiceContainer from "./ServiceContainer";

function Compare() {
  const [region, setRegion] = useState("plaszow");
  const [hour, setHour] = useState("8");

  function handleChange(event) {
    setRegion(event.target.value);
  }

  function handleChangeHour(event) {
    setHour(event.target.value);
  }


  return (
    <div className="compare-container">
      <select name="regions" className="compare-select" onChange={(event) => handleChange(event)}>
        <option value="plaszow">region1</option>
        <option value="region2">region2</option>
        <option value="region3">region3</option>
      </select>
      <select
            name="hours"
            className="compare-select"
            onChange={(event) => handleChangeHour(event)}
          >
            <option value="8">8:00</option>
            <option value="10">10:00</option>
            <option value="12">12:00</option>
          </select>
      <ServiceContainer service={"interia"} region = {region} hour ={hour} />
      <ServiceContainer service={"avenue"} region = {region} hour ={hour} />
      <ServiceContainer service={"weatherChannel"} region = {region} hour ={hour} />
    </div>
  );
}

export default Compare;

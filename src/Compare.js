import ServiceContainer from "./ServiceContainer";

function Compare() {
  return (
    <div className="compare-container">
      <ServiceContainer  service={'weather'}/>
      <ServiceContainer  service={'weather2'}/>
      <ServiceContainer  service={'weather'}/>
    </div>
  );
}

export default Compare;

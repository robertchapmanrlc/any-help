
import FacilityList from "./FacilityList";
import Map from "./Map";

function MainContent() {
  return (
    <div className="w-full h-[calc(100%-6rem)] md:h-[calc(100%-7.5rem)] md:mt-14 flex md:flex-row flex-col-reverse justify-end md:justify-start items-center">
      <FacilityList />
      <Map />
    </div>
  );
}

export default MainContent
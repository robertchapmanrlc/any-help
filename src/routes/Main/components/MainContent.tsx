
import FacilityList from "./FacilityList";
import Map from "./Map";

function MainContent() {
  return (
    <div className="w-full h-[calc(100%-8rem)] md:h-[calc(100%-7.5rem)] md:mt-14 flex flex-col-reverse md:flex-row justify-between items-center">
      <FacilityList />
      <Map />
    </div>
  );
}

export default MainContent
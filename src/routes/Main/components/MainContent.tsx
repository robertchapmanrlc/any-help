
import FacilityList from "./FacilityList";
import Map from "./Map";

function MainContent() {
  return (
    <div className="w-full h-[calc(100%-8rem)] md:h-[calc(100%-4rem)] flex justify-between">
      <FacilityList />
      <Map />
    </div>
  );
}

export default MainContent
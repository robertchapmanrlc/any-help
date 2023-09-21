
import FacilityList from "./FacilityList";
import Map from "./Map";

function MainContent() {
  return (
    <div className="w-full h-[calc(100%-8rem)] md:h-[calc(100%-4rem)] flex flex-col-reverse md:flex-row border-8 justify-between items-center">
      <FacilityList />
      <Map />
    </div>
  );
}

export default MainContent

import Map from "./Map";

function MainContent() {
  return (
    <div className="w-full h-[calc(100%-8rem)] md:h-[calc(100%-4rem)] flex justify-between">
      <div className="w-[35%]">List</div>
      <Map />
    </div>
  );
}

export default MainContent
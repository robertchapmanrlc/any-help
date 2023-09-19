
function Header() {
  return (
    <div className="w-full h-32 md:h-16 flex flex-col md:flex-row items-center justify-between bg-green-500 drop-shadow-[0_30px_15px_rgba(22,101,52,0.15)]">
      <h1 className="text-white text-2xl font-lexend md:ml-4 md:pt-0 pt-4">Find Help Nearby</h1>
      <div className="w-full md:w-[450px] md:mr-4 md:pb-0 pb-3 flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-white text-lg font-lexend">
          Look for other locations
        </h3>
        <input
          type="text"
          placeholder="Search here"
          className="w-[50%] opacity-40 rounded-md font-lexend py-1 px-2"
        />
      </div>
    </div>
  );
}

export default Header;

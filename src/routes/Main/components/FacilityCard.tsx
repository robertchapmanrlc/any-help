interface FacilityCardProps {
  name: string;
  website: string;
}

function FacilityCard({ name, website }: FacilityCardProps) {
  return (
    <div className="w-full h-auto bg-white flex flex-col justify-center items-center">
      <h1 className="text-center font-lexend">{name}</h1>
      <a className="text-center font-lexend" href={website}>Website</a>
    </div>
  );
}

export default FacilityCard;

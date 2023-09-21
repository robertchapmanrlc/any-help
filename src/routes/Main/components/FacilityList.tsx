
import { data, detail } from '../../../../template.ts';

function FacilityList() {

  console.log(data.results);

  const facilities = data.results;
  const details = detail.result

  return <div className="w-[35%]">
    {facilities.map((facility) => (
      <div className='flex flex-col'>
        <p key={facility.place_id}>{facility.name}</p>
        <p>{details.website}</p>
      </div>
    ))}
  </div>;
}

export default FacilityList;

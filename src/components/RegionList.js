import Region from "./Region";

const RegionList = (props) => {
  const regions = props.region;

  return (
    <>
      {regions.map((region) => {
        return (
          <div>
            <Region region={region} />
          </div>
        );
      })}
    </>
  );
};

export default RegionList;

import { Link } from "react-router-dom";
const Region = (props) => {
  const [code, name] = props.region;
  return (
    <>
      <div>
        <Link to={`region/${name}`} state={{ code, name }}>
          <p>{name}</p>
        </Link>
      </div>
    </>
  );
};

export default Region;

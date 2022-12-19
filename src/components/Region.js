const Region = (props) => {
  const [code, name] = props.region;
  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default Region;

function Restaurant(props) {
  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "300px",
        height: "300px",
        margin: "20px",
      }}
    >
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default Restaurant;

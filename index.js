const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return (
    <div className={`box ${className}`}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="boxContainer">
      <Box className="box box1" text="Small" />
      <Box className="box box2" text="Medium" />
      <Box className="box box3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

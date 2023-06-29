const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="boxes-app-container">
    <h1 className="title">Boxes</h1>
    <div className="container">
      <Box className="small" text="small" />
      <Box className="medium" text="medium" />
      <Box className="large" text="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

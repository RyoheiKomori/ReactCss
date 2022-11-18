export const InlinStyle = () => {
  const containerStyle = {
    border: "solid 2x #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    deispay: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {};
  const bottonStyle = {};
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={bottonStyle}>FIGHT!!</button>
    </div>
  );
};

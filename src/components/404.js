import _404Img from "../assets/img/404.jpg";

// -- 404 page for this app
const _404 = () => {
  const img404 = {
    height: "50%",
    width: "50%",
    ObjectFit: "fill",
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={_404Img} alt="404_img" style={img404} />
      </div>
    </>
  );
};

export default _404;

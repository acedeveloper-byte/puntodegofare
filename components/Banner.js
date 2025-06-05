import React from "react";

const Banner = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url("/images/banner_plane.png")`,
          height: "100vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
          }}
        ></div>
      </section>
    </>
  );
};

export default Banner;

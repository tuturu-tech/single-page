import skelly from "../images/skelly.png";
import cards from "../images/cards.png";

import "../App.css";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "inherit",
        zIndex: "1",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "20px",
        }}
      >
        <img
          style={{
            maxHeight: "500px",
          }}
          src={skelly}
          alt="skelly"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img style={{ width: "400px" }} src={cards} alt="mystery cards" />
        <h2
          style={{
            color: "#ffeddc",
            maxWidth: "400px",
            textAlign: "center",
            borderColor: "black",
            WebkitTextStroke: "1px black ",
          }}
        >
          <i>Hey Fella'! Pshh, over here! </i>
          <p>
            Wanna buy a pet? We got 'em real cheap here, 50 percent off!{" "}
            <i>Heheh</i>
          </p>
        </h2>
        <button
          style={{
            width: "50%",
            fontSize: "36px",
            fontFamily: "forte",
            backgroundColor: "#ffeddc",
          }}
          class="button glow-button"
        >
          Summon
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "#ffeddc", marginRight: "20px" }}> 0.05 ETH </h2>
          <h2 style={{ color: "#ffeddc" }}>0/1000</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import "../App.css";
import head from "../images/head.png";
import body from "../images/Body.png";
const About = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 0",
      }}
      class="gradient"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "200px",
          marginRight: "200px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <img src={body} alt="body" style={{ maxWidth: "45%" }} />
        <div style={{ width: "10%" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            maxWidth: "45%",
          }}
        >
          <h1
            style={{
              fontFamily: "forte",
              color: "#ffeddc",
              marginTop: "20px",
            }}
          >
            What are Skellys all about?
          </h1>
          <p
            style={{
              color: "#ffeddc",
              fontSize: "20px",
              overflowWrap: "break-word",
              textAlign: "justify",
              maxWidth: "400px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "100px" }}></div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "200px",
          marginRight: "200px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            maxWidth: "45%",
            minWidth: "45%",
          }}
        >
          <h1
            style={{
              fontFamily: "forte",
              color: "#ffeddc",
              marginTop: "20px",
            }}
          >
            They sound amazing!
          </h1>
          <p
            style={{
              color: "#ffeddc",
              fontSize: "20px",
              overflowWrap: "break-word",
              textAlign: "justify",
              maxWidth: "100%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div style={{ width: "10%" }}></div>
        <img src={head} alt="head" style={{ maxWidth: "45%" }} />
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#200E0B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "#ffeddc",
          fontFamily: "forte",
          marginBottom: "50px",
          fontSize: "50px",
        }}
      >
        {" "}
        Frequent Mysteries Answered{" "}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "45%",
            marginLeft: "20%",
          }}
        >
          <div class="faq-box">
            <h2 class="h2">Lorem Ipsum?</h2>
            <p class="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="faq-box">
            <h2 class="h2">Lorem Ipsum?</h2>
            <p class="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="faq-box">
            <h2 class="h2">Lorem Ipsum?</h2>
            <p class="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div style={{ width: "10%" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "45%",
            marginRight: "20%",
          }}
        >
          <div class="faq-box">
            <h2 class="h2">Lorem Ipsum?</h2>
            <p class="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="faq-box">
            <h2 class="h2">Lorem Ipsum?</h2>
            <p class="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="faq-box">
            <h2 class="h2">Lorem Ipsum?</h2>
            <p class="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <About />
      <FAQ />
    </div>
  );
};

export default Body;

import { ReactComponent as DiscordLogo } from "../images/discordWhite.svg";
import { ReactComponent as TwitterLogo } from "../images/twitterWhite.svg";

const Footer = () => {
  return (
    <div class="footer">
      <p
        style={{
          marginLeft: "20px",
          cursor: "pointer",
          fontFamily: "Broadway",
        }}
        onClick={() => {
          window.open("https://twitter.com/TuturuTech", "_blank");
        }}
      >
        Tuturu
      </p>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <DiscordLogo
          style={{ marginRight: "20px", marginLeft: "20px", cursor: "pointer" }}
        />
        <TwitterLogo
          style={{ marginRight: "20px", marginLeft: "20px", cursor: "pointer" }}
          onClick={() => {
            window.open("https://twitter.com/TuturuTech", "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default Footer;

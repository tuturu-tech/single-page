import skelly from "../images/skelly.png";
import cards from "../images/cards.png";
import { ethers } from "ethers";
import DopeDonuts from "../contracts/abis/DopeDonuts.json";

import "../App.css";

const CONTRACT_ADDRESS = "0x7399db4225e62E256c1765ff6Cb66bDe8ab83902";

const askContractToMintNft = async (_provider) => {
  try {
    if (_provider) {
      const provider = _provider;
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        DopeDonuts.abi,
        signer
      );

      console.log("Going to pop wallet now to pay gas...");
      let nftTxn = await connectedContract.publicMint({
        value: ethers.utils.parseEther("0.001"),
      });

      console.log("Mining...please wait.");
      await nftTxn.wait();

      console.log(
        `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
      );
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

const giveaway = async (_provider) => {
  try {
    if (_provider) {
      const provider = _provider;
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        DopeDonuts.abi,
        signer
      );

      console.log("Going to pop wallet now to pay gas...");
      let nftTxn = await connectedContract.giveAway(
        "0xaaC1D92E356144c6b3032297Df02897F273C898c"
      );

      console.log("Mining...please wait.");
      await nftTxn.wait();

      console.log(
        `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
      );
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

const mintButtonPressed = async (provider) => {
  await askContractToMintNft(provider);
};

const Hero = ({ provider }) => {
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
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        marginTop: "50px",
        marginBottom: "50px",
        paddingLeft: "20px",
        paddingRight: "20px",
        borderRadius: "10px",
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
          <i>Bake a donut!</i>
        </h2>
        <button
          style={{
            width: "50%",
            fontSize: "36px",
            fontFamily: "forte",
            backgroundColor: "#e95654",
          }}
          class="button glow-button"
          onClick={async () => {
            await askContractToMintNft(provider);
          }}
        >
          Bake
        </button>
        <button
          onClick={async () => {
            await giveaway(provider);
          }}
        >
          Test
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

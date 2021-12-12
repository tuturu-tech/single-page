import React, { useEffect, useState } from "react";

import logoSkelly from "../images/logo.png";
import { ReactComponent as DiscordLogo } from "../images/discord.svg";
import { ReactComponent as TwitterLogo } from "../images/twitter.svg";
import { Button } from "../components";
import "./Header.css";

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  const [account, setAccount] = useState("");
  const [rendered, setRendered] = useState("");

  useEffect(() => {
    async function fetchAccount() {
      try {
        if (!provider) {
          return;
        }

        // Load the user's accounts.
        const accounts = await provider.listAccounts();
        setAccount(accounts[0]);

        // Resolve the ENS name for the first account.
        const name = await provider.lookupAddress(accounts[0]);

        // Render either the ENS name or the shortened account address.
        if (name) {
          setRendered(name);
        } else {
          setRendered(account.substring(0, 6) + "..." + account.substring(36));
        }
      } catch (err) {
        setAccount("");
        setRendered("");
        console.error(err);
      }
    }
    fetchAccount();
  }, [account, provider, setAccount, setRendered]);

  return (
    <Button
      style={{ fontFamily: "forte", fontSize: "18px" }}
      class="button glow-button"
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </Button>
  );
}

const Header = ({ provider, loadWeb3Modal, logoutOfWeb3Modal }) => {
  return (
    <div class="header">
      <img
        style={{ maxWidth: "200px", marginLeft: "30px" }}
        src={logoSkelly}
        alt="logo"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button class="button">
          <TwitterLogo />
        </Button>
        <Button class="button">
          <DiscordLogo />
        </Button>
        <WalletButton
          provider={provider}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
        />
      </div>
    </div>
  );
};

export default Header;

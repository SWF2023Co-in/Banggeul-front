///// wagmi 사용 ///////x
// https://wagmi.sh/examples/connect-wallet
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: "DmRoAHziHZlofqakBRpDixO1kPPsJGQo" }),
    publicProvider(),
  ] //여기에 제가 발급받은 Alchemy API key를 입력했습니다.
);

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "...",
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export const walletImages = {
  metaMask:
    "https://app.uniswap.org/static/media/metamask.a8bd577376764ebfd421e669e37b0ebb.svg",
  coinbaseWallet:
    "https://app.uniswap.org/static/media/coinbaseWalletIcon.07499ce0896d18990e93182d478a70cd.svg",
  walletConnect:
    "https://app.uniswap.org/static/media/walletConnectIcon.1dbab988fae0fcca5455f5eaed5e4417.svg",
  injected:
    "https://cdn.iconscout.com/icon/free/png-256/free-wallet-566-433443.png",
} as Record<string, string>;

export default config;

import { createConfig } from "@ponder/core";
import { http } from "viem";

import { SwapERC20Abi } from "./abis/SwapERC20Abi";

export default createConfig({
  networks: {
    mainnet: { chainId: 1, transport: http(process.env.PONDER_RPC_URL_1) },
  },
  contracts: {
    SwapERC20: {
      abi: SwapERC20Abi,
      address: "0xd82FA167727a4dc6D6F55830A2c47aBbB4b3a0F8",
      network: "mainnet",
      startBlock: 16776806,
    },
  },
});

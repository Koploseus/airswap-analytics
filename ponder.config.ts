import { createConfig } from "@ponder/core";
import { http } from "viem";

import { SwapERC20Abi } from "./abis/SwapERC20Abi";
import { bsc, polygon } from "viem/chains";

export default createConfig({
  networks: {
    mainnet: { chainId: 1, transport: http(process.env.PONDER_RPC_URL_1) },
    bsc: { chainId: 56, transport: http(process.env.PONDER_RPC_URL_56) },
    polygon: { chainId: 137, transport: http(process.env.PONDER_RPC_URL_137) },

  },
  contracts: {
    SwapERC20: {
      abi: SwapERC20Abi,
      network: {
        mainnet: {
          address: "0xd82FA167727a4dc6D6F55830A2c47aBbB4b3a0F8",
          startBlock: 19760873,
        },
        bsc: {
          address: "0xd82FA167727a4dc6D6F55830A2c47aBbB4b3a0F8",
          startBlock: 38292160,
        },
        polygon: {
          address: "0xd82FA167727a4dc6D6F55830A2c47aBbB4b3a0F8",
          startBlock: 56297487,
        }
      },
    },
  },
});

import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  AirSwapSwap: p.createTable({
    id: p.string(),
    chainId: p.int(),
    senderToken: p.string(),
    senderAmount: p.bigint(),
    blockNumber: p.bigint(),
    makers: p.string(),
    date: p.bigint()
  }),
}));

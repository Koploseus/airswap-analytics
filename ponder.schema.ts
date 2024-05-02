import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  AirSwapSwap: p.createTable({
    id: p.string(),
    senderToken: p.string(),
    senderAmount: p.bigint(),
    blockNumber: p.bigint(),
  }),
}));

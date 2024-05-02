import { ponder } from "@/generated";
ponder.on("SwapERC20:Authorize", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("SwapERC20:Cancel", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("SwapERC20:OwnershipTransferStarted", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("SwapERC20:OwnershipTransferred", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("SwapERC20:SwapERC20", async ({ event, context }) => {
  const { AirSwapSwap } = context.db;

  await AirSwapSwap.create({
    id: event.log.id,
    data: {
      senderToken: event.args.senderToken,
      senderAmount: event.args.senderAmount,
      blockNumber: event.block.number
    },
  });
});

 
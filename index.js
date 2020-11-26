const { Node } = require("flatend");

const main = async () => {
  const node = await Node.start({
    addrs: [`0.0.0.0:9000`],
    services: {
      index: (ctx) => ctx.json({root: true}),
    },
  });
}

main().catch(err => console.error(err));

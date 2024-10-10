import { XtHandler } from "..";

const handler = new XtHandler();

// check if is an epf agent
handler.xt('f#epfga', (client) => {
  client.sendXt('epfga', client.penguin.is_agent ? 1 : 0);
});

// check if there is an active field ops
handler.xt('f#epfgf', (client) => {
  // sends an integer boolean, FALSE if there is an active field ops
  // that wasn't done
  client.sendXt('epfgf', 0);
});

// get the medals
handler.xt('f#epfgr', (client) => {
  // TODO medals
  // first value is all time, second is current
  client.sendXt('epfgr', 0, 0);
});

// becoming an agent
handler.xt('f#epfsa', (client) => {
  client.makeAgent();
  client.sendXt('epfsa', 1); // 1 is "true" for being agent
})

export default handler
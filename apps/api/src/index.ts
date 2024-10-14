import { log } from "@repo/logger";
import { createServer } from "./server";
import config from "@repo/env";
const port = config.PORT || 4000;

const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

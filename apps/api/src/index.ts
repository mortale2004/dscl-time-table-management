import logger from "@repo/logger";
import { createServer } from "./server";
import config from "@repo/env";
const port = config.PORT || 4000;
const server = createServer();

server.listen(port, () => {
  logger.info(`api running on ${port}`);
});

import express from "express";
import handleGetStops from "./endpoints/stops/handleGet";
import handleGetBollards from "./endpoints/bollards/handleGet";
import handleGetDepartures from "./endpoints/departures/handleGet";
import handleGetLines from "./endpoints/lines/handleGet";
import handleGetLine from "./endpoints/line/handleGet";
import { errorHandler } from "./middleware/errorHandler";
import { logger } from "./middleware/logger";

const apiRouter = express.Router();

apiRouter.use(logger);

apiRouter.get("/stops", handleGetStops);
apiRouter.get("/bollards", handleGetBollards);
apiRouter.get("/departures", handleGetDepartures);
apiRouter.get("/lines", handleGetLines);
apiRouter.get("/line", handleGetLine);

apiRouter.use(errorHandler);

export default apiRouter;
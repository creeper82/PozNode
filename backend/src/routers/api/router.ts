import express from "express";
import handleGetStops from "./stops/handleGet";
import handleGetBollards from "./bollards/handleGet";
import handleGetDepartures from "./departures/handleGet";
import handleGetLines from "./lines/handleGet";

const apiRouter = express.Router();

apiRouter.get("/stops", handleGetStops);
apiRouter.get("/bollards", handleGetBollards);
apiRouter.get("/departures", handleGetDepartures);
apiRouter.get("/lines", handleGetLines);

export default apiRouter;
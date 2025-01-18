import express from "express";
import handleGetStops from "./stops/handleGet";
import handleGetBollards from "./bollards/handleGet";
import handleGetDepartures from "./departures/handleGet";

const apiRouter = express.Router();

apiRouter.get("/stops", handleGetStops);
apiRouter.get("/bollards", handleGetBollards);
apiRouter.get("/departures", handleGetDepartures);

export default apiRouter;
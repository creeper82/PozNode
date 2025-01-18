import express from "express";
import handleGetStops from "./stops/handleGet";
import handleGetBollards from "./bollards/handleGet";

const apiRouter = express.Router();

apiRouter.get("/stops", handleGetStops);
apiRouter.get("/bollards", handleGetBollards);

export default apiRouter;
import express from "express";
import handleGetStops from "./stops/handleGet";

const apiRouter = express.Router();

apiRouter.get("/stops", handleGetStops);

export default apiRouter;
import app from "./app.js"; // move your Express logic to app.js
import serverless from "serverless-http";

export const handler = serverless(app);

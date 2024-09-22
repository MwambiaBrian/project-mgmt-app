import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import connectDB from "./config/db.js";
import path from "path";

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

//--------------------------Deployment--------------------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hello from server");
  });
}

//--------------------------Deployment---------------------------
//GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development", // Enables the GraphiQL GUI
  })
);
app.listen(port, () => {
  console.log(`--> Server running on port ${port} ...`);
});

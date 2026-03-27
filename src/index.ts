import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db";
import nodesRouter from "./routes/nodes";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());
app.use("/api/nodes", nodesRouter);

app.get("/", (_req, res) => {
  res.json({ message: "Spatial Notes Backend is running" });
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

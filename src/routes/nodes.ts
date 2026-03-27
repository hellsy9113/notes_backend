import { Router } from "express";
import {
  getNodes,
  createNode,
  updateNode,
  deleteNode,
} from "../controllers/nodes.controller";

const router = Router();

router.get("/", getNodes);
router.post("/", createNode);
router.put("/:id", updateNode);
router.delete("/:id", deleteNode);

export default router;
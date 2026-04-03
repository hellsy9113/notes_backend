/**
 * Summary: Express controller functions handling the HTTP request/response cycle for node-related API endpoints.
 */
import { Request, Response } from "express";
import * as NodeService from "../services/node.service";

export const getNodes = async (_req: Request, res: Response): Promise<void> => {
  try {
    const nodes = await NodeService.getAllNodes();
    res.json(nodes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch nodes" });
  }
};

export const createNode = async (req: Request, res: Response): Promise<void> => {
  try {
    const { content, x, y } = req.body;
    const node = await NodeService.createNode(content, x, y);
    res.status(201).json(node);
  } catch (err) {
    res.status(500).json({ error: "Failed to create node" });
  }
};

export const updateNode = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const updates: Partial<{ content: string; x: number; y: number }> = req.body;
    const node = await NodeService.updateNode(id, updates);
    if (!node) {
      res.status(404).json({ error: "Node not found" });
      return;
    }
    res.json(node);
  } catch (err) {
    res.status(500).json({ error: "Failed to update node" });
  }
};

export const deleteNode = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    await NodeService.deleteNode(id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete node" });
  }
};
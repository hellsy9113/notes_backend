import Node, { INode } from "../models/Nodes";

export const getAllNodes = async (): Promise<INode[]> => {
  return await Node.find().sort({ createdAt: -1 });
};

export const createNode = async (
  content: string,
  x: number,
  y: number
): Promise<INode> => {
  return await Node.create({ content, x, y });
};

export const updateNode = async (
  id: string,
  updates: Partial<{ content: string; x: number; y: number }>
): Promise<INode | null> => {
  return await Node.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteNode = async (id: string): Promise<void> => {
  await Node.findByIdAndDelete(id);
};
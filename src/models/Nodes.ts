import mongoose, { Document, Schema } from "mongoose";

export interface INode extends Document {
  content: string;
  x: number;
  y: number;
  createdAt: Date;
  updatedAt: Date;
}

const NodeSchema = new Schema<INode>(
  {
    content: { type: String, default: "New Note" },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<INode>("Node", NodeSchema);
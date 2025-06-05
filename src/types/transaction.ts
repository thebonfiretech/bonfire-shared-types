import { ObjectId } from "mongoose";

export interface TransactionModelType {
  createAt: Date;
  lastUpdate?: Date;
  description?: string;
  type: "buy" | "pix" | "other" | "investment" | "coin-distribution";
  userID: ObjectId;
  spaceID?: ObjectId;
  value: number;
  from?: {
    id: ObjectId;
    name: string;
    type: string;
  };
  to?: {
    id: ObjectId;
    type: string;
    name: string
  };
  items: any;
  _id: string;
}
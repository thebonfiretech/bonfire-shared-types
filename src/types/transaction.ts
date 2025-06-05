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
    reference: string;
  };
  to?: {
    id: ObjectId;
    reference: string;
    name: string
  };
  items: any;
  _id: string;
}
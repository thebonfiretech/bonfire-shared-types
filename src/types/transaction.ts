import { ObjectId } from "mongoose";

export interface TransactionModelType {
  createAt: Date;
  lastUpdate?: Date;
  description?: string;
  type: "buy" | "pix" | "other" | "investment";
  userID: ObjectId;
  value: number;
  from?: {
    id: ObjectId;
    name: string
  };
  to?: {
    id: ObjectId;
    name: string
  };
  items: any;
  _id: string;
}

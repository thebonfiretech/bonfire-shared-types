import { Types } from "mongoose";

export type ProductStatusType = "active" | "inactive" | "exhausted";

export interface ProductMetricsType {
    sold: number;
    available: number;
    views: number;
}

export interface ProductModelType {
    _id: string;
    name: string;
    description?: string;
    value: number;
    createdAt: Date;
    lastUpdate: Date;
    status: ProductStatusType;
    userID: Types.ObjectId;
    spaceID: Types.ObjectId;
    categoryID?: Types.ObjectId;
    metrics: ProductMetricsType;
    attachments: string[];
}
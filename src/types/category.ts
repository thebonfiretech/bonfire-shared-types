import { Types } from "mongoose";

export type CategoryScopeType = "product";

export interface CategoryModelType {
    _id: string;
    name: string;
    description?: string;
    createdAt: Date;
    lastUpdate: Date;
    userID: Types.ObjectId;
    id?: string;
    scope: CategoryScopeType;
}
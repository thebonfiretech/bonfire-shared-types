import { Types } from "mongoose";

export interface ClassModelType {
    _id: string;
    name: string;
    space: {
        id: Types.ObjectId;
        name: string;
    };
    status: "active" | "inactive";
    createAt: Date;
    lastUpdate?: Date;
    description?: string;
    images?: {
        profile?: string;
    };
    metrics: {
        users: number;
    };
};
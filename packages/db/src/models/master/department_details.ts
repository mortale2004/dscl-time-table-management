import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import type { DepartmentDetails } from "@repo/types/master";

// Schema
const department_details_schema = new mongoose.Schema<DepartmentDetails>(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    department_name: {
      type: String,
      unique: true,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "department_details",
  }
);

// Model
export const department_details_model = mongoose.model(
  "department_details",
  department_details_schema
);

import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import type { CourseDetails } from "@repo/types/master";

// Schema
const course_details_schema = new mongoose.Schema<CourseDetails>(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    course_name: {
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
    collection: "course_details",
  }
);

// Model
export const course_details_model = mongoose.model(
  "course_details",
  course_details_schema
);

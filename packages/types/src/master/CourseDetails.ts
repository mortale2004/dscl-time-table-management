import VALIDATE from "@/helpers/ValidationHelper";
import * as yup from "yup";

export const courseDetailsSchema = yup.object().shape({
  _id: VALIDATE.REQUIRED_SELECT("Course Details"),
  course_name: VALIDATE.REQUIRED_TEXT("Course Name"),
  is_active: VALIDATE.REQUIRED_BOOLEAN("Active"),
});

export type CourseDetails = yup.InferType<typeof courseDetailsSchema>;

import VALIDATE from "@/helpers/ValidationHelper";
import * as yup from "yup";

export const departmentDetailsSchema = yup.object().shape({
  _id: VALIDATE.REQUIRED_SELECT("Department Details"),
  department_name: VALIDATE.REQUIRED_TEXT("Department Name"),
  is_active: VALIDATE.REQUIRED_BOOLEAN("Active"),
});

export type DepartmentDetails = yup.InferType<typeof departmentDetailsSchema>;

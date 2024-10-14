import { department_details_model } from "@/models/master/department_details";
import { addFilterSortAndCount } from "@/helpers/aggregationQueryHelper";
import dbOperations from "@/das/dbOperations";
import { DepartmentDetails } from "@repo/types/master";

const departmentDetailsDas = {
  insertDepartment: (
    payload: Omit<DepartmentDetails, "_id">,
    options?: any
  ) => {
    return dbOperations.insertRecord(
      department_details_model,
      payload,
      options
    );
  },

  updateCasteCategories: (
    filter?: any,
    payload?: DepartmentDetails,
    options?: any
  ) => {
    return dbOperations.updateRecords(
      department_details_model,
      filter,
      payload,
      options
    );
  },

  getDepartmentByData: (payload: any) => {
    const filter = {
      caste_category_name: payload.caste_category_name,
      _id: { $ne: payload._id },
    };
    return dbOperations.getRecords(department_details_model, filter);
  },

  getCasteCategories: (
    filter: any,
    projection?: any,
    sortBy?: any,
    session?: any
  ) => {
    return dbOperations.getRecords(
      department_details_model,
      filter,
      projection,
      sortBy,
      session
    );
  },

  getDepartmentDetails: (
    filter?: any,
    sortBy?: any,
    skip?: any,
    limit?: any,
    options?: any
  ) => {
    sortBy = {
      ...sortBy,
      caste_category_name: 1,
    };
    const query: any = [];
    addFilterSortAndCount(query, filter, sortBy, skip, limit);
    return dbOperations.aggregate(department_details_model, query, options);
  },

  deleteCasteCategories: (filter?: any, options?: any) => {
    return dbOperations.deleteRecords(
      department_details_model,
      filter,
      options
    );
  },
};

export default departmentDetailsDas;

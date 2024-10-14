import { course_details_model } from "@/models/master/course_details";
import { addFilterSortAndCount } from "@/helpers/aggregationQueryHelper";
import dbOperations from "@/das/dbOperations";
import { CourseDetails } from "@repo/types/master";

const courseDetailsDas = {
  insertCourse: (payload: Omit<CourseDetails, "_id">, options?: any) => {
    return dbOperations.insertRecord(course_details_model, payload, options);
  },

  updateCasteCategories: (
    filter?: any,
    payload?: CourseDetails,
    options?: any
  ) => {
    return dbOperations.updateRecords(
      course_details_model,
      filter,
      payload,
      options
    );
  },

  getCourseByData: (payload: any) => {
    const filter = {
      caste_category_name: payload.caste_category_name,
      _id: { $ne: payload._id },
    };
    return dbOperations.getRecords(course_details_model, filter);
  },

  getCasteCategories: (
    filter: any,
    projection?: any,
    sortBy?: any,
    session?: any
  ) => {
    return dbOperations.getRecords(
      course_details_model,
      filter,
      projection,
      sortBy,
      session
    );
  },

  getCourseDetails: (
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
    return dbOperations.aggregate(course_details_model, query, options);
  },

  deleteCasteCategories: (filter?: any, options?: any) => {
    return dbOperations.deleteRecords(course_details_model, filter, options);
  },
};

export default courseDetailsDas;

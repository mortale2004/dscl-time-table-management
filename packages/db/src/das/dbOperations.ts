const dbOperations = {
  insertRecord: async (model: any, payload: any, options?: any) => {
    return await model.create([payload], options);
  },
  getRecords: async (
    model: any,
    filter?: any,
    projection?: any,
    sortBy?: any,
    skip?: number,
    limit?: number,
    session?: any
  ) => {
    let query = model.find(filter, projection).sort(sortBy).skip(skip);
    if (limit !== 0) {
      query = query.limit(limit);
    }

    if (session) {
      query = query.session(session);
    }

    return await query.lean();
  },

  getRecord: async (
    model: any,
    filter?: any,
    projection?: any,
    sortBy?: any,
    session?: any
  ) => {
    let record;
    if (session) {
      record = await model
        .findOne(filter, projection)
        .sort(sortBy)
        .session(session)
        .lean();
    } else {
      record = await model.findOne(filter, projection).sort(sortBy).lean();
    }
    return record;
  },
  aggregate: async (model: any, query: any, options?: any) => {
    let response = [];
    if (options?.session) {
      response = await model.aggregate(query).session(options.session).exec();
    } else {
      response = await model.aggregate(query).exec();
    }
    return response;
  },
  bulkWrite: async (model: any, operations: any, options?: any) => {
    return await model.bulkWrite(operations, options);
  },
  getCount: async (model: any, filter?: any) => {
    const count = await model.countDocuments(filter);
    return count;
  },
  updateRecords: async (
    model: any,
    filter: any,
    payload: any,
    options?: any
  ) => {
    return await model.updateMany(filter, payload, options);
  },
  updateRecord: async (
    model: any,
    filter: any,
    payload: any,
    options?: any
  ) => {
    return await model.findOneAndUpdate(filter, payload, options).lean();
  },
  updateSingleRecord: async (
    model: any,
    filter: any,
    payload: any,
    options?: any
  ) => {
    return await model.updateOne(filter, payload, options).lean();
  },
  deleteRecords: async (model: any, filter: any, options?: any) => {
    const response = await model.deleteMany(filter, options);
    return response;
  },
  deleteRecord: async (model: any, filter: any, options?: any) => {
    return await model.findOneAndDelete(filter, options).lean();
  },
};

export default dbOperations;

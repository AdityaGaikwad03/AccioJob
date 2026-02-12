import createError from "../utils/createError.js";
import gigModel from "../models/gigModel.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "only sllers can create gigs"));
  const newGig = new gigModel({
    userId: req.userId,
    ...req.body,
  });
  try {
    const saveGig = await newGig.save();
    res.status(201).json(saveGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await gigModel.findById(req.params.id);
    console.log("gig", gig);
    console.log("req.params.id", req.params.id);
    if (gig.userId !== req.userId)
      return next(createError(403, "you can delete your gig"));
    await gigModel.findByIdAndDelete(req.params.id);
    res.status(200).send("gig has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await gigModel.findById(req.params.id);

    if (!gig) next(createError(404, "gig, no found"));
    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, options: "i" } }),
  };
  const allowedSortFields = ["price", "createAt", "rating"];
  const sortField = allowedSortFields.includes(q.sort) ? q.sort : "createdAt";
  try {
    const gigs = await gigModel.find(filters).sort({ [sortField]: -1 });
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
};

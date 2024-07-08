import Listing from "../models/listing.model.js";
import { handleErrors } from "../utils/error.js";

// function to create a new listing:
export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

// function to delete a listing:
export const deleteListing = async (req, res, next) => {
  // get the listing:
  const listing = await Listing.findById(req.params.id);

  // check if the listing is existing:
  if (!listing) {
    return next(handleErrors(404, "Listing not found!"));
  }

  // check if the user is the owner of the listing:
  if (req.user.id !== listing.userRef) {
    return next(handleErrors(401, "You can only delete your own listings!"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    return res.status(200).json("Listing has been deleted successfully!");
  } catch (error) {
    next(error);
  }
};

// function to update a listing:
export const updateListing = async (req, res, next) => {
  // get the listing:
  const listing = await Listing.findById(req.params.id);

  // check if the listing is existing:
  if (!listing) {
    return next(handleErrors(404, "Listing not found!"));
  }

  // check if the user is the owner of the listing:
  if (req.user.id !== listing.userRef) {
    return next(handleErrors(401, "You can only update your own listings!"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

// function to get a listing by id:
export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return next(handleErrors(404, "Listing not found!"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

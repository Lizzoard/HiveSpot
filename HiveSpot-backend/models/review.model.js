import mongoose from "mongoose";
const { Schema, model, SchemaType } = mongoose;

const reviewSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true
  },
  
});

const Review = model("Review", reviewSchema);
export default Review;
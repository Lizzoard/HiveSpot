import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

const businessesSchema = new Schema({
  name: String,
  category: String,
  location: {
    city: String,
    address: String,
  },
  rating: Number,
  reviews: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Review",
    },
  ],
  images: [String],
});

const Business = model("Business", businessesSchema);
export default Business;
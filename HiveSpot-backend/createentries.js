import mongoose from "mongoose";
import connectDB from "./config/database.js";
import Businesses from "./models/business.model.js";
import Review from "./models/review.model.js";


connectDB();



const businesses = await Businesses.create(
  [
    {
  name: "Pizzeria La Famiglia",
  category: "Restaurant",
  location: {
    city: "Witzenhausen",
    address: "Walburger Str. 18",
  },
  rating: 4.5,
  images: ["https://lh3.googleusercontent.com/p/AF1QipNFVjU_BnLxHIO3jM-bpu6bcb1kG3uez66DdmOI=s680-w680-h510-rw","https://lh3.googleusercontent.com/p/AF1QipP25qPfQCGZJjOOem9cuqTUBTjvWNRPU-Z3Y87p=s680-w680-h510-rw"],       
    },
    {
      name: "Ristorante Pizzeria Rialto",
      category: "Restaurant",
      location: {
        city: "Witzenhausen",
        address: "Walburger Str. 49A",
      },
      rating: 4.3,
      images: ["https://lh3.googleusercontent.com/p/AF1QipPMjiYeY3-IDHqQOJybTEBL4b0QxqH_DXXf_k9P=s680-w680-h510-rw","https://lh3.googleusercontent.com/p/AF1QipMGBkHju5TUuelVek5Pgk0RsIgy_n4oo8evDWZL=s680-w680-h510-rw"]
    },
    {
      name: "Bio-Bistro Ringelnatz",
      category: "Restaurant",
      location: {
        city: "Witzenhausen",
        address: "Steinstraße 12",
      },
      rating: 4.4,
      images: ["https://lh3.googleusercontent.com/p/AF1QipNX2AUSvqQWzfwGnDNJWYXb8UFZ6Sm56txHTB1G=s680-w680-h510-rw","https://lh3.googleusercontent.com/p/AF1QipO_SsR8sbZS-9-Rrllw7ArGXRtOJ_RkAoWb6mSc=s680-w680-h510-rw"]
    },
    {
      name: "Pizzeria La Strada",
      category: "Restaurant",
      location: {
        city: "Witzenhausen",
        address: "Walburger Str. 2",
      },
      rating: 4.6,
      images: ["https://lh3.googleusercontent.com/p/AF1QipPf9sHv0yZ3FQn6w5ZKtRJ6L5aG1rY5Xv0j6VQ=s680-w680-h510-rw","https://lh3.googleusercontent.com/p/AF1QipO6CvQ7s4Z3JQ2fJ4Zy9Vd9p3Yyv2d8XK7vqj5v=s680-w680-h510-rw"]
    },
]);

console.log("Data Imported!");
console.log(businesses);

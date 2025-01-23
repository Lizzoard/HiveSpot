import express from 'express';
import Businesses from '../models/business.model.js';
import Review from '../models/review.model.js';

const router = express.Router();


router.get('/', async (req, res) => {
  const businesses = await Businesses.find().populate('reviews');
  res.json(businesses);
});
 
router.get('/:id', async (req, res) => {
  const business = await Businesses.findById(req.params.id).populate('reviews');  
  res.json(business);
});

router.post('/:id/reviews', async (req, res) => {
  const { user, text, rating } = req.body;
  const business = await Businesses.findById(req.params.id);
  const review = new Review({ user, text, rating });
  business.reviews.push(review);
  business.save();
  res.json(review);
});
 
export default router;
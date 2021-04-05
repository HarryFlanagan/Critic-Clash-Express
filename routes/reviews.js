import express from 'express';
import db from '../models/reviewService';

const router = express.Router();


router.post('/', (req, res) => {
    db.createReview(req, res);
});

router.get('/', (req, res) => {
    db.readReviews(req, res)
})

router.get('/:id', (req,res) => {

db.readReview(req, res);
})

router.put('/:id',(req, res) => {
    db.updateReview(req, res)
   })

router.delete('/:id',(req, res) => {
 db.deleteReview(req, res)
})

export default router;

import { Review } from "./reviewModel";

function readReviews(req, res, options =[])  {
    Review.find()
    .then((result) =>
    res.json(result))
    .catch((error) =>
    res.status(500).json({error: 'An error'}))
}

function readReview(req, res) {
    const id = rew.params.id;
    Review.findById(id)
    .then((result) =>
    res.json(result))
    .catch((error) =>
    res.status(404).json({error: 'not found'}))
}

function createReview (req, res) {
    let ReviewDoc = new Review(req.body);
    ReviewDoc.save()
    .then((result) => {
        console.log('Review saved')
        result.status(201).json({id: result._id, url: `/reviews/${results._id}`})
    })
    .catch((error) => {
        res.status(412).json({ status: 'fail', message: 'not created'})
    });
}
function updateReview(req, res){
    const id = req.params.id
    console.log('Updating Review')
     Review.findByIdAndUpdate(
         { _id: id},
         {...req.body})
         .then((result) =>{
             if (result){
                 res.status(200).send({message: 'updated Review'})
                 mongoose.set('useFindAndModify', false);
             }
             else{
                 res.status(404).send({message: 'Review not found'})
             }
         })
         .catch((error) =>
         res.status(404).send({message: 'not found'})     
         );
          
     }

function deleteReview(req, res) {
    const id = req.params.id;

    Review.findByIdAndDelete(id).
    then((result) => {
        if(result) {
        res.status(203).send({message: 'deleted'})     
    }
    else{
        res.status(404).send({ message: 'not found'});
    }
})
.catch((error)=>
res.status(404).send({ message: 'not found'}));
}




export default {createReview, deleteReview, readReviews, readReview, updateReview}


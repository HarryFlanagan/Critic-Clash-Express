import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
    {
        title: {type: String, required: true},
        stars: {type: Number, required: true},
        album: {type: String, required: true},
        cover: {type: String, required: true},
        summary: {type: String, required: true},
        reviewer: {type: String, required: true},
    }, 
);

let Review = mongoose.model('Review', ReviewSchema)

export { Review }
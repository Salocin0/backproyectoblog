

import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    plot: { type: String, required: true },
    //genres: { type: Array, required: true },
    runtime: { type: Number, required: true },
    //cast: { type: Array, required: true },
    poster: { type: String, required: true },
    title: { type: String, required: true },
    fullplot: { type: String, required: true },
    rated: { type: String, required: true },
    year : { type: Number, required: true },
    //languages: { type: Array, required: true },
    released: { type: String, required: true },
    director: { type: String, required: true },
    //awards: { type: String, required: true },
    //imdb: { type: Number, required: true },
    //country:{ type: Array, required: true },
    type:{ type: String, required: true },
    //tomatoes: { type: Object, required: true },
})

const Movies = mongoose.model("Movies", movieSchema);

export default Movies;
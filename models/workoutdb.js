const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var workout = new Schema(
    {
        day: {
            type: Date,
            default: ()=> new Date ()
        },
        exercises : [
            {
                type: {
                    type : String,
                    trim: true,
                    required: "Select an exercise type"
                },
                name: {
                    type : String,
                    trim: true,
                    required: "Please name your exercise"
                },
                duration: {
                    type: Number,
                    required: "Enter a duration"
                },
                weight: {
                    type: Number,
                
                },
                reps: {
                    type: Number,
                   
                },
                sets: {
                    type: Number,
                    
                },
                distance: {
                    type: Number
                }
            }
        ]
        

    }
    
);

const Workout = mongoose.model("Workout", workout);

module.exports = Workout;
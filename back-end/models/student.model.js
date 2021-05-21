//schema is the blueprint of mongoDB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema(
    {
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
}, 
{
    timestamps: true
}
);

const Student = mongoose.model('student', studentSchema);
module.exports = Student;
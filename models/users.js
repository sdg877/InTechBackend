const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {type: String, required: true },
    username: {
        type: String,
        unique: true,
        trin: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            return ret;
        }
    },
    techStack: String,
    currentSalary: Number,
    desiredSalary: Number,
    jobTitle: String,
    relocate: Boolean,
    location: String
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
})

module.exports = mongoose.model('User', userSchema)
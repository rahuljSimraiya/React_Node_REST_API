import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    fname: {type: String, required: true, max: 100},
    fname: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    contact:{type: String, required: true, max: 11},
});
let Users = mongoose.model('users', UserSchema);

export default Users;
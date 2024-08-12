const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    t_name: String,
    t_address: String,
    t_email: String,
    t_phone: Number,
    t_age: Number,
    t_id: String,
    t_dob:String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('topper', UserSchema);
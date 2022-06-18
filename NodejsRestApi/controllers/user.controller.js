
import User from '../models/user.model.js';
//Simple version, without validation or sanitation
let service = {};
service.user_list = function (req, res) {	 
     User.find(function (err, users) {
        if (err) res.send(err);;
        res.send(users);
    })
};
//Simple version, without validation or sanitation
service.user_create =  function (req, res) {
    let user = new User(
        {
            fname: req.body.fname,
		    lname: req.body.lname,
		    email: req.body.email,
		    contact:req.body.contact
        }
    );
    user.save(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
   
};


service.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

service.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    });
};
export default service;

import users from './users.js';
function initialize(app){
    app.use('/users', users);
}

export default initialize;


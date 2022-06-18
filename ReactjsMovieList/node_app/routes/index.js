function initialize(app){
    app.use('/api/movies', require('./movies'));
}

module.exports = { initialize }

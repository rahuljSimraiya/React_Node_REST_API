const express = require('express');
const router = express.Router();
const fs = require('fs');
const utils = require('../utilities/utils');
const data = require('../moviedb/db.json')
router.get('/',getMovieList);
function getMovieList(req, res){
    const movieListData =  data;
    return utils.sendResponse(res, 200, 'Successfull get list', movieListData );
}
module.exports = router

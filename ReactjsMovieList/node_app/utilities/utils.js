function sendResponse(res, statusCode, message, data) {
    return res./*status(statusCode).*/json({ data, message, statusCode });
}

module.exports = { sendResponse }

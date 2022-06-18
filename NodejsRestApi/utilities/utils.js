function sendResponse(res, statusCode, message, data) {
    return res.json({ data, message, statusCode });
}
export default sendResponse;


function logRequests(req, res, next) {
  console.log(`Request method: ${req.method}, Request URL: ${req.url}`);
  next();
}

module.exports = logRequests;

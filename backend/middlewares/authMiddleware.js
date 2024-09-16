function authMiddleware(req, res, next) {
    // Exemple simple d'authentification
    if (req.headers.authorization) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }
  
  module.exports = authMiddleware;
  
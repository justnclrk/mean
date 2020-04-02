const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
  response.sendFile(path.resolve('dist/index.html'));
  // response.sendFile(path.join('../../../dist/first-ang-app/index.html'));
});

module.exports = router;

const { Router } = require('express');
const countryRouter = require('./coutryRouter')
 const activRouter = require('./activRouter')
const router = Router();

router.use('/countries', countryRouter);
  router.use('/activities', activRouter);


module.exports = router;



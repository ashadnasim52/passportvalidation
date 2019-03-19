const exprese = require('express');
const passport = require('passport');
const router = exprese.Router();

//handling this route with passportjs
//we set the starategy to google
router.use('/google', passport.authenticate('google', {
    scope: ['profile', 'email', ]
}))

router.get('/redirect/access', passport.authenticate('google'), (req, res) => {
    res.send('all good')
})

module.exports = router
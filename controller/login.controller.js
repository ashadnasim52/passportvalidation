const User = require('../model/User')



exports.handleLogin = (req, res) => {
    res.render('login')
}
exports.handlePostLogin = (req, res) => {

    const {
        email,
        password
    } = req.body;
    if (email.trim() == '') {
        res.render('login', {
            error: 'please enter email'
        })

    } else if (password.trim() == '') {
        res.render('login', {
            error: 'please enter password'
        })

    } else {
        User.findOne({
            email
        }).then(user => {
            console.log(user);

            if (!user) {
                return res.render('login', {
                    error: 'User not Found'
                })
            } else {
                return res.send('all good')

            }
        })
    }
}
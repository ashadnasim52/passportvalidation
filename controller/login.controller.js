exports.handleLogin = (req, res) => {
    const {
        email,
        password
    } = req.body;
    if (email.trim() == '') {
        res.render('login')

    }
}
exports.handlePostLogin = (req, res) => {
    res.send('all good')
}
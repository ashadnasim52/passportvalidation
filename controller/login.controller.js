exports.handleLogin = (req, res) => {
    // res.send('login')
    res.render('login.ejs');

}

exports.handlePostLogin = (req, res) => {
    console.log(req.body);
    const {
        name,
        email,
        password,
        password2
    } = req.body;
    if (name.trim() == '') {
        return res.render('login.ejs', {
            name,
            email,
            password,
            password2,
            error: ['please enter name']
        })
    }
    if (email.trim() == '') {
        return res.render('login.ejs', {
            name,
            email,
            password,
            password2,
            error: ['please enter email']
        })
    }
    if (password.trim() == '') {
        return res.render('login.ejs', {
            name,
            email,
            password,
            password2,
            error: ['please enter password']
        })
    }
    if (password.trim() == '') {
        return res.render('login.ejs', {
            name,
            email,
            password,
            password2,
            error: ['please confirm password ']
        })
    }
    if (password !== password2) {
        return res.render('login.ejs', {
            name,
            email,
            password,
            password2,
            error: ['Confirm password does not matched']
        })
    } else {
        return res.render('login.ejs', {
            name,
            email,
            password,
            password2,
            error: []
        })

    }

}
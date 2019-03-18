exports.handleRegister = (req, res) => {
    // res.send('login')
    return res.render('register.ejs')

}

exports.handlePostRegister = (req, res) => {
    console.log(req.body);
    const {
        name,
        email,
        password,
        password2
    } = req.body;
    if (name.trim() == '') {
        return res.render('register.ejs', {
            name,
            email,
            password,
            password2,
            error: 'please enter name'
        })
    }
    if (email.trim() == '') {
        return res.render('register.ejs', {
            name,
            email,
            password,
            password2,
            error: 'please enter email'
        })
    }
    if (password.trim() == '') {
        return res.render('register.ejs', {
            name,
            email,
            password,
            password2,
            error: 'please enter password'
        })
    }
    if (password.trim() == '') {
        return res.render('register.ejs', {
            name,
            email,
            password,
            password2,
            error: 'please confirm password '
        })
    }
    if (password !== password2) {
        return res.render('register.ejs', {
            name,
            email,
            password,
            password2,
            error: 'Confirm password does not matched'
        })
    } else {
        //redirect to register
        res.send('all good')

    }

}
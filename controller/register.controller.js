const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const User = require('../model/User')

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
        User.findOne({
            email
        }).then(registeredEmail => {
            if (registeredEmail) {
                return res.render('register.ejs', {
                    name,
                    email,
                    password,
                    password2,
                    error: 'Email already exists'
                })
            } else {
                const toRegister = new User({
                    name,
                    email,
                    password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) throw err;
                        toRegister.password = hash;

                        toRegister.save().then(user => {
                            // res.send('all good')
                            req.flash('success_msg', 'success now login..')

                            return res.redirect('/login')

                        }).catch(err => console.error(err))
                    })
                })
            }

        })



    }

}
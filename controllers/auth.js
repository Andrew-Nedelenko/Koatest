
const {sequelize, User} = require('../models/Users')

const formAuth = async ctx => {
    const {username, email, password} = ctx.request.body
    let errors = []
    console.log(ctx.request.body)
    if(!username || !email || !password){
        ctx.response.status = 403
    }else{
      if(username){
          await User.findOne({
              where: {
                  username: username
              }
          }).then(checkUser => {
                if(checkUser){
                    errors.push(username)
                    console.log(errors)
                }
          })
      }
        if(email){
            await User.findOne({
                where: {
                    email: email
                }
            }).then(checkEmail => {
              if(checkEmail){
                  errors.push(email)
                  console.log(errors)
              }
            })
        }
        if(errors.length > 0) {
            ctx.response.status = 302
        }else{
            ctx.response.status = 200
            sequelize.sync().then(() => {
              User.create({
                  username: ctx.request.body.username,
                  email: ctx.request.body.email,
                  password: ctx.request.body.password,
                  date: Date.now()
              }).then( n =>{
                  console.log(n.toJSON())
              })
          })
        }
    }
}


module.exports = {
    formAuth
}
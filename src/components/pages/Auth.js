import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export class Auth extends Component {
    static propTypes = {
        value: PropTypes.string
    }
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        post: '',
        image: '',
        errors: []
    }
    checkusername = e => {
        console.log(event.target.value)
        this.state.username = event.target.value
    }
    checkemail = e => {
        console.log(event.target.value)
        this.state.email = event.target.value
    }
    checkpassword = e => {
        console.log(event.target.value)
        this.state.password = event.target.value
    }
    checkpassword2 = e => {
        console.log(event.target.value)
        this.state.password2 = event.target.value
    }
    checkpost = e => {
        console.log(event.target.value)
        this.state.post = event.target.value
    }

    checkimg = e => {
        console.log(event.target.value)
    }

    formSubmit = async e => {
        e.preventDefault()
        console.log(this.state.value)
        
        const {username, email, password, post} = this.state;
        const data = await fetch('http://localhost:3201', {
            method: "POST",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                post: post
            }),
            headers: {
              "Content-Type": "application/json",
            },
        })
        console.log(data)
        console.log(data.status)
    }
  render() {
    return (
      <_Auth>
          <p>Authentication form</p>
            <form onSubmit={this.formSubmit}>
                <label htmlFor="">
                username
                    <input type="text" name='username' value={this.state.value} onBlur={this.checkusername}/>
                </label>
                <label htmlFor="">
                email
                    <input type="email" name='email' value={this.state.value} onBlur={this.checkemail}/>
                </label>
                <label htmlFor="">
                password
                    <input type="password" name='password' value={this.state.value} onBlur={this.checkpassword}/>
                </label>
                <label htmlFor="">
                confirm password
                    <input type="password" name='password2' value={this.state.value} onBlur={this.checkpassword2}/>
                </label>
                <label htmlFor="">
                post
                    <textarea type="text" name='post' value={this.state.value} onBlur={this.checkpost}/>
                </label>
                <label htmlFor="">
                image
                    <input type="file" name='image' value={this.state.value} onBlur={this.checkimg}/>
                </label>
                <label htmlFor="">
                    <input type="submit"/>
                </label>
            </form>
            <p>{this.state.value}</p>
      </_Auth>
    )
  }
}



export const Ubuntu = "'Ubuntu', sans-serif;"
const _Auth = styled.div`
    margin: 80px 0 0 0;
    width: 100%;
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');
    font-family: ${Ubuntu};
    p{
        margin: 0 0 20px 0;
        text-align: center;
        font-size: 1.3em;
        font-weight: bold;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        label{
            margin: 5px 0;
            color: rgba(82,81,18, 0.8);
            font-size: .8em;
        }
        
        input{
            display: block;
            font-family: ${Ubuntu};
            width: 400px;
            border: none;
            border-bottom: 1px solid rgba(82,81,81, 0.2);
            padding: 5px;
            margin: 5px 0;
            outline: none;
            @media (max-width: 450px) {
                width: 260px;
            }
            &:-webkit-autofill,
            &:-webkit-autofill:hover,
            &:-webkit-autofill:focus,
            &:-webkit-autofill:active {
            transition: background-color 25000s ease-in-out 0s;
            }
        }
        input[name='image']{
            border: none;
        }
        input[type='submit']{
            border: none;
            cursor: pointer;
        }

        textarea{
            display: block;
            width: 410px;
            resize: none;
            border: none;
            border-bottom: 1px solid rgba(82,81,81, 0.2);
            outline: none;
            @media (max-width: 450px) {
                width: 270px;
            }
        }
    }
`


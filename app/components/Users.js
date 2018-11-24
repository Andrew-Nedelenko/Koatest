import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
import User from './User'

class Users extends Component {
      constructor(){
        super()
        this.state = {
          contacts: [
            {
              id: 1,
              name: "Jonh Dou",
              email: "john@gmail.com",
              img: "https://e1.am.phnx.pics/phnx/bigmir/70/40/69/704069/255b4eb08644fe9fef7abdfe2869d031-quality_80Xresize_crop_1Xallow_enlarge_0Xw_730Xh_562.jpg"
            },
            {
              id: 2,
              name: "Karen Wilson",
              email: "karen@gmail.com",
              img: "https://e1.am.phnx.pics/phnx/bigmir/70/36/80/703680/4e483e632fc93769b7117284b4f6dc2f-quality_80Xresize_crop_1Xallow_enlarge_0Xw_730Xh_562.jpg"
            },
            {
              id: 3,
              name: "Jess Bons",
              email: "jess@gmail.com",
              img: "https://e1.am.phnx.pics/phnx/bigmir/70/39/53/703953/e8cbadf95ecc4fef3ce4bf86beb40313-quality_80Xresize_crop_1Xallow_enlarge_0Xw_730Xh_562.jpg"
            }
          ]
        }
      }
  render() {
      const { contacts } = this.state
    return (
      <Nav>
        {contacts.map(m => <User 
        m={m}
        id={m.id}
        />)}
      </Nav>
    )
  }
}


export const data = async () => {
  const fetchData = await fetch('http://localhost:3000/testapi')
  const json = await fetchData.json()
  console.log(json)
}

data()


const Nav = styled.nav`

ul{
  list-style-type: none;
    li{
      img{
        width: 150px;
      }
    }
  }

`
  

export default Users
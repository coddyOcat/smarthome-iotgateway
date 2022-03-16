import React from 'react'
import styled from 'styled-components'

const UserData = [
  {
    title: 'Name',
    txt: 'Peter Parker'
  },
  {
    title: 'Email',
    txt: 'parker.peter1@gmail.com'
  },
  {
    title: 'Phone',
    txt: '0943165781'
  },
  {
    title: 'Password',
    txt: '****************'
  }
]

const User = () => {
  return (
    <UserContainer>
      <UserAvatar>
        <Avatar>
          User
          
        </Avatar> 
      </UserAvatar>
      <UserInfo>
        {
          UserData.map((item, key) => {
            return (
              <Info key={key}>
                <Title>
                  {item.title}
                </Title>
                <Text>
                  {item.txt}
                </Text>
                <Edit>Edit</Edit>
              </Info>
            )
          })
        }
      </UserInfo>
    </UserContainer> 
  )
}

const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F3F4FF;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const UserAvatar = styled.div`
  background-color: #FFF;
  width: 35%;
  height: 25%;
  border-radius: 10px;
  margin: 20px 10px 10px 10px;
`

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserInfo = styled.div`
  width: 65%;
  height: 10%;
`

const Info = styled.div`
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 10px 30px 20px 0;
  padding: 0 20px 0 10px;
  border-radius: 20px;
  height: 70px;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`

const Text = styled.div`
`

const Edit = styled.div`
  color: blue;
`
export default User
import React from 'react'
import styled from 'styled-components'
import images from './images'
const Topbar = () => {
  return (
    <Container>
        <Title>YOUR HOME</Title>
        <Avatar src={images.avatar}/>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.div`
    font-weight: bold;
`

const Avatar = styled.img`
    width: 40px;
    height: 40px;
`

export default Topbar
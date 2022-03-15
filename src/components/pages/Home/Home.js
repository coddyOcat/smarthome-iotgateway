import React, { useState } from 'react'
import styled from 'styled-components'
import Rooms from './Rooms'

const Home = () => {
  const [type, setType] = useState('room')
  const changeType = (t) => {
    setType(t)
  }
  return (
    <Container>
      <Row>
        <TypeButton className={type === 'room' ? 'active' : ''} onClick={() => changeType('room')}>ROOMS</TypeButton>
        <TypeButton className={type === 'device' ? 'active' : ''} onClick={() => changeType('device')}>DEVICES</TypeButton>
      </Row>
      {type === 'room' ? <Rooms/> : ''}
    </Container>
  )
}


const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const TypeButton = styled.div`
  margin-right: 5px;
  padding: 0 15px;
  padding-bottom: 5px;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
  &.active {
    border-bottom: 6px solid #5E44FF;
  }
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F3F4FF;
    border-radius: 20px;
    padding: 15px;
`
export default Home
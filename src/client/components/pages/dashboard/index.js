import React, { useState } from 'react'
import styled from 'styled-components'
import Devices from './devices'
import Rooms from './rooms'

import Sidebar from "../../sidebar"
import Topbar from "../../topbar";

function Dashboard() {
  const [type, setType] = useState('room')
  const changeType = (t) => {
    setType(t)
  }
  return (
    <DashboardContainer>
      <Row>
        <TypeButton className={type === 'room' ? 'active' : ''} onClick={() => changeType('room')}>ROOMS</TypeButton>
        {/* <TypeButton className={type === 'device' ? 'active' : ''} onClick={() => changeType('device')}>DEVICES</TypeButton> */}
      </Row>
      {type === 'room' ? <Rooms/> : <Devices/>}
    </DashboardContainer>
  )
}

export default function dashboardPage() {
    return (
        <Container>
            <Sidebar/>
            <Main>
                <Topbar/>
                <Dashboard />
            </Main>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 750px;
  margin: 0 auto;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 85%;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const TypeButton = styled.div`
  margin-right: 5px;
  padding: 0 20px;
  padding-bottom: 5px;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
  &.active {
    border-bottom: 6px solid #5E44FF;
  }
`

const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F3F4FF;
    border-radius: 20px;
    padding: 15px;
`

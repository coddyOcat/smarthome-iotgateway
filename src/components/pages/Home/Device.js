import { Switch } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Device = (props) => {
  return (
    <Container color={props.color} width={props.width} shadow={props.shadow}>
      <Row>
        <Icon><i className="fa fa-lightbulb-o" style={{fontSize: '26px', color: 'white'}} aria-hidden="true"></i></Icon>
        <Switch/>
      </Row>
      <Name>Single Led</Name>
    </Container>
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Name = styled.div`
  margin-top: 10px;
`

const Icon = styled.div`
  background-color: #5E44FF;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  background-color: ${props => props.color ? props.color : 'white'};
  width: ${props => props.width ? props.width : '24%'};
  box-shadow: ${props => props.shadow ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : ''};
  border-radius: 10px;
  padding: 20px;
  margin: 5px 0;
`

export default Device
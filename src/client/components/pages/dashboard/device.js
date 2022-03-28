import { Switch } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import SensorsIcon from '@mui/icons-material/Sensors';
import SpeakerIcon from '@mui/icons-material/Speaker';
import { updateData } from '../../../service/axios'

const Device = (props) => {
  const handleChange =  (deviceName, data) => {
    // const res = await updateData(deviceName, data)
    props.setlistDevice(props.listDevice.map( item => {
      if (item.name == deviceName) item.isActive = data.isActive
      return {
          id: item.id,
          isActive: item.isActive,
          ...item
      }
    }))
  }
  return (
    <Container color={props.color} width={props.width} shadow={props.shadow}>
      <Row>
        <Icon>
          {props.device.typeName==='fan'&& <ModeFanOffIcon/>}
          {props.device.typeName==='door'&& <MeetingRoomIcon/>}
          {props.device.typeName==='temperature'&& <ThermostatIcon/>}
          {props.device.typeName==='humidity'&& <InvertColorsIcon/>}
          {props.device.typeName==='room-light'&& <LightbulbIcon/>}
          {props.device.typeName==='gas'&& <GasMeterIcon/>}
          {props.device.typeName==='light-sensor'&& <SensorsIcon/>}
          {props.device.typeName==='buzzer'&& <SpeakerIcon/>}
        </Icon>
        <Switch 
          checked={props.device.isActive} 
          disabled={props.device.isModded}
          onChange={()=>handleChange(props.device.name, {isActive: !props.device.isActive})}/>
      </Row>
      <Name>{props.device.name}</Name>
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
  color: white;
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

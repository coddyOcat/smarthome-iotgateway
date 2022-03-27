import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Device from './device';

const Devices = () => {
  const devices = [
    {
      id: 0,
      name: 'Light',
      icon: 'fa fa-lightbulb-o'
    },
    {
      id: 1,
      name: 'Speaker',
      icon: 'fa fa-bullhorn'
    },
    {
      id: 2,
      name: 'Thermostat',
      icon: 'fa fa-thermometer-empty'
    },
    {
      id: 3,
      name: 'Fans',
      icon: 'fa fa-life-ring'
    },
    {
      id: 4,
      name: 'TV',
      icon: 'fa fa-television'
    }
  ]
  let scrl = useRef(null);
  const [targetDeviceId, settargetDeviceId] = useState(0)
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const slide = (shift) => {
      scrl.current.scrollLeft += shift;
      setscrollX(scrollX + shift);
      if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
      ) {
      setscrolEnd(true);
      } else {
      setscrolEnd(false);
      }
  };
  const scrollCheck = () => {
      setscrollX(scrl.current.scrollLeft);
      if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
      ) {
      setscrolEnd(true);
      } else {
      setscrolEnd(false);
      }
  };
  const changeDevice = (roomId) => {
    settargetDeviceId(roomId)
  }
  return (
    <Container>
        <Row>
            <ButtonScroll className={scrollX<=1 ? 'disable':''} onClick={() => slide(-180)}><i className="fa fa-caret-left" aria-hidden="true"></i></ButtonScroll>
            <RoomBtns ref={scrl} onScroll={scrollCheck}>
              {devices.map((device) => {
                return <RoomBtn key={device.id} onClick={() => changeDevice(device.id)} className={targetDeviceId === device.id ? 'active':''}>
                  <i class={device.icon} aria-hidden="true" style={{marginRight: '10px', fontSize: '24px'}}></i> {device.name}
                </RoomBtn>
              })}
            </RoomBtns>
            <ButtonScroll className={scrolEnd ? 'disable':''} onClick={() => slide(180)}><i className="fa fa-caret-right" aria-hidden="true"></i></ButtonScroll>
            <AddBtn>+</AddBtn>
        </Row>
        <Title>All rooms</Title>
        <AllRoom>
          <Room>
            <RoomName>Living Room</RoomName>
            <Device color='#F0F0F0'/>
            <Device color='#F0F0F0'/>
            <Device color='#F0F0F0'/>
            <Device color='#F0F0F0'/>
            <Device color='#F0F0F0'/>
          </Room>
          <Room>
            <RoomName>Bath Room</RoomName>
            <Device color='#F0F0F0'/>
          </Room>
          <Room>
            <RoomName>Bath Room</RoomName>
            <Device color='#F0F0F0'/>
          </Room>
          <Room>
            <RoomName>Bath Room</RoomName>
            <Device color='#F0F0F0'/>
          </Room>
          <Room>
            <RoomName>Bath Room</RoomName>
            <Device color='#F0F0F0'/>
          </Room>
        </AllRoom>
    </Container>
  )
}

const RoomName = styled.div`
  width: 100%;
  font-weight: bold;
`

const Room = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  margin: 5px 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
`

const AllRoom = styled.div`
  height: 485px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 5px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 3px;
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #757575;
  }
`

const Title = styled.div`
  color: gray;
  font-weight: bold;
  margin: 10px 0;
`

const Row = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AddBtn = styled.div`
  height: 50px;
  width: 50px;
  background-color: #5E44FF;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 50px;
  cursor: pointer;
  margin: 0 auto;
`

const RoomBtns = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 88%;
  margin: 0 5px;
`

const RoomBtn = styled.div`
  margin-right: 10px;
  height: 80px;
  min-width: 160px;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 0px 20px 0px 20px;
  &.active {
    background-color: #5E44FF;
    color: white;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonScroll = styled.button`
  border: none;
  background-color: transparent;
  :hover {
    cursor: pointer;
    color: #00001a;
  }
  color: gray;
  & .fa-caret-left {
    font-size: 50px;
  }
  & .fa-caret-right {
    font-size: 50px;
  }
  &.disable{
    :hover {
        cursor: context-menu;
    }
    color: gray;
  }
`;

export default Devices

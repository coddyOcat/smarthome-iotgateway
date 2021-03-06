import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Device from './device';

import { useParams } from "react-router-dom"
import { loadAreasByUser, loadDevicesByArea } from "../../../service/axios"

const Rooms = () => {
    let scrl = useRef(null);
    const [targetRoomId, settargetRoomId] = useState(0)
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);

    const {id} = useParams()
    const [rooms, setRooms] = useState([
        {
            id: 0,
            name: 'Living room'
        }
    ])
    const [listDevice, setlistDevice] = useState([])
    useEffect( async () => {
        const listAreas = await loadAreasByUser(id)
        settargetRoomId(listAreas[0]._id)
        setRooms(listAreas.map( item => { return {id: item._id, name: item.areaName }}))
    }, [])

    useEffect( () => {
        setTimeout( async () => {
            const listDevices = await loadDevicesByArea(targetRoomId)
            if (listDevices != "NOT OK") {
                setlistDevice(listDevices)
                console.log(listDevices)
            }
        }, 1000)
    }, [targetRoomId, listDevice])

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
    const changeRoom = (roomId) => {
        settargetRoomId(roomId)
    }
    return (
        <Container>
        <Row>
            <ButtonScroll className={scrollX<=1 ? 'disable':''} onClick={() => slide(-180)}><i className="fa fa-caret-left" aria-hidden="true"></i></ButtonScroll>
            <RoomBtns ref={scrl} onScroll={scrollCheck}>
                {rooms.map((room) => {
                return <RoomBtn key={room.id} onClick={() => changeRoom(room.id)} className={targetRoomId === room.id ? 'active':''}>{room.name}</RoomBtn>
                })}
            </RoomBtns>
            <ButtonScroll className={scrolEnd ? 'disable':''} onClick={() => slide(180)}><i className="fa fa-caret-right" aria-hidden="true"></i></ButtonScroll>
            <AddBtn>+</AddBtn>
        </Row>
        <Title>All devices</Title>
        <AllDevice>
            {listDevice.map((device)=> {
                if(device.typeName !== 'light-sensor' && device.typeName !== 'buzzer')
                    return (<Device key={device._id} setlistDevice={setlistDevice} listDevice={listDevice} device={device} shadow={true}/>)
            })}
        </AllDevice>
        </Container>
    )
}

const AllDevice = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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

export default Rooms

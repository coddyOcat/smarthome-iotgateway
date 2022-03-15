import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const Rooms = () => {
    let scrl = useRef(null);
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
  return (
    <Container>
        <Row>
            <ButtonScroll className={scrollX<=1 ? 'disable':''} onClick={() => slide(-180)}><i className="fa fa-caret-left" aria-hidden="true"></i></ButtonScroll>
            <RoomBtns ref={scrl} onScroll={scrollCheck}>
                <RoomBtn>Living room</RoomBtn>
                <RoomBtn>Bathroom</RoomBtn>
                <RoomBtn>Bedroom</RoomBtn>
                <RoomBtn>Kitchen</RoomBtn>
                <RoomBtn>Living room</RoomBtn>
                <RoomBtn>Bathroom</RoomBtn>
                <RoomBtn>Bedroom</RoomBtn>
                <RoomBtn>Kitchen</RoomBtn>
            </RoomBtns>
            <ButtonScroll className={scrolEnd ? 'disable':''} onClick={() => slide(180)}><i className="fa fa-caret-right" aria-hidden="true"></i></ButtonScroll>
            <AddBtn>+</AddBtn>
        </Row>
    </Container>
  )
}

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
    /* #5E44FF */
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 0px 20px 0px 20px;
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
import styled from 'styled-components'
import { RiHomeWifiLine } from "@react-icons/all-files/ri/RiHomeWifiLine";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { VscDashboard } from "@react-icons/all-files/vsc/VscDashboard";
import { MdAutoAwesome } from "react-icons/md";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const SidebarData = [
    {
        title: 'Home',
        icon: <AiOutlineHome/>,
        link: '/home'
    },
    {
        title: 'Dashboard',
        icon: <VscDashboard/>,
        link: '/dashboard'
    },
    {
        title: 'Mode',
        icon: <MdAutoAwesome/>,
        link: '/mode'
    },
    {
        title: 'User',
        icon: <AiOutlineUser/>,
        link: '/user'
    }
]

const Sidebar = () => {
  const [pathname, setPathname] = useState('')
  const location = useLocation()
  useEffect(() => {
    console.log(location)
    setPathname(location.pathname)
  }, [location])
  return (
    <Container>
        <Logo>
            <RiHomeWifiLine/>
        </Logo>
        <Items>
            {SidebarData.map((val, key) => {
            return (
            <Item key={key}>
                <ItemLink to={val.link} className={pathname === val.link ? 'active' : ''}>
                    <Icon>{val.icon}</Icon>
                    <Title>{val.title}</Title>
                </ItemLink>
            </Item>)
            })}
        </Items>
        <Link to="/login">
            <Logout>
                <Icon><FiLogOut/></Icon>
                <Title>Logout</Title>
            </Logout>
        </Link>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  min-width: 15%;
  background-color: #5E44FF;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border-radius: 30px;
`

const Logo = styled.div`
  color: white;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const Items = styled.ul`
  flex: 5;
`

const Logout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  min-height: 50px;
  border-radius: 20px;
  :hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
  flex: 0;
`

const Item = styled.li`
  display: flex;
  height: 50px;
  width: 100%;
  margin: 5px 0;
`

const ItemLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
  :hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
  &.active {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`

const Icon = styled.span`
  flex: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
`
const Title = styled.span`
  flex: 60%;
  font-size: 16px;
`


export default Sidebar

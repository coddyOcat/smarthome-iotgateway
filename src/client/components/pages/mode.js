import React, { useEffect } from 'react'
import styled from 'styled-components'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SecurityIcon from '@mui/icons-material/Security';
import Switch from '@mui/material/Switch';

import Sidebar from "../sidebar"
import Topbar from "../topbar";

const ModeData = [
  {
    title: 'Light Mode',
    icon: <LightbulbIcon style={{fontSize:50}}/>,
    description: 'You can switch auto mode on light here'
  },
  {
    title: 'Security Mode',
    icon: <SecurityIcon style={{fontSize:50}}/>,
    description: 'You can switch security mode here'
  },
  {
    title: 'Light Mode',
    icon: <LightbulbIcon style={{fontSize:50}}/>,
    description: 'You can switch security mode here'
  },
  {
    title: 'Security Mode',
    icon: <SecurityIcon style={{fontSize:50}}/>,
    description: 'You can switch security mode here'
  }
]

import { useParams } from "react-router-dom"
import { loadModesByUser } from "../../service/axios"

const Auto = () => {
    const {id} = useParams()
    useEffect( async() => {
        const listModes = await loadModesByUser(id)
        const lisst = listModes.map( item => {
            let form = {}
            if (item.name == "light-mode") {
                form = {
                    title : 'Light Mode',
                    icon : <LightbulbIcon style={{fontSize:50}}/>,
                    description : 'You can switch light mode here'
                }
            } else if (item.name == "security-mode") {
                form = {
                    title : 'Security Mode',
                    icon : <SecurityIcon style={{fontSize:50}}/>,
                    description : 'You can switch security mode here'
                }
            } else if (item.name == "fan-mode") {
                form = {
                    title : 'Fan Mode',
                    icon : <LightbulbIcon style={{fontSize:50}}/>,
                    description : 'You can switch fan mode here'
                }
            }
            return {
                id: item._id,
                ...form
            }
        })
        console.log(lisst)
    },[])
  return (
    <AutoContainer>
      {
        ModeData.map((item, key) => {
          return (
            <AutoItem key={key}>
              <IconSwitch>
                <ItemIcon>
                  {item.icon}
                </ItemIcon>
                <ItemSwitch>
                  <Switch
                  // checked={checked}
                  // onChange={handleChange}
                  // inputProps={{ 'aria-label': 'controlled' }}
                  />
                </ItemSwitch>
              </IconSwitch>
              <NameDescription>
                <ItemName>
                  {item.title}
                </ItemName>
                <ItemDescription>
                  {item.description}
                </ItemDescription>
              </NameDescription>
            </AutoItem>
          )
        })
      }
    </AutoContainer>
  )
}

export default function modePage() {
    return (
        <Container>
            <Sidebar/>
            <Main>
                <Topbar/>
                <Auto />
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

const AutoContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  background-color:#F3F4FF;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 20px;
`

const AutoItem = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 200px;
  background-color: #fff;
  border-radius: 8px;
  padding: 0 10px 0 15px;
`

const IconSwitch = styled.div`
  display: flex;
  justify-content: space-between;
`

const ItemIcon = styled.div``

const ItemSwitch = styled.div``

const NameDescription = styled.div`
  margin-top: 10px;
`

const ItemName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`

const ItemDescription = styled.div`
  margin-top: 20px;
  font-size: 0.8rem;
  font-weight: 200;
`

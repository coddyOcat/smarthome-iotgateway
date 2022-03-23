import React from 'react'
import styled from 'styled-components'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SecurityIcon from '@mui/icons-material/Security';
import Switch from '@mui/material/Switch';
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

const Auto = () => {
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




export default Auto
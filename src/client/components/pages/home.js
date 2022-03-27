import React from 'react'
import styled from "styled-components"
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from "react-apexcharts";

import Sidebar from "../sidebar"
import Topbar from "../topbar";

const chartOptions1 = {
    series: [{
        name: 'Temperature',
        data: [30, 40, 27, 29, 40, 31, 29, 42, 20, 18, 24, 22]
    }],
    options: {
        color: ['#4099c8'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            title: {
                text: "Temparature(\u00b0C)"
            }
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }

}

const chartOptions2 = {
    series: [{
        name: 'Humidity',
        data: [30, 40, 27, 29, 40, 31, 29, 42, 20, 18, 24, 22]
    }],
    options: {
        color: ['#4099c8'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            title: {
                text: "Humidity(%)"
            }
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }

}


function Home() {
    return (
        <DashboardContainer>
            <Measure>
                <TempHumi>
                    <Item>
                        <TempIcon>
                            <DeviceThermostatIcon style={{ fontSize: 50 }} />
                        </TempIcon>
                        <DataContainer>
                            <Label>
                                Temperature
                            </Label>
                            <Data>
                                <DataSign>
                                    +
                                </DataSign>25&deg;C
                            </Data>
                        </DataContainer >
                    </Item>
                    <Item>
                        <TempIcon>
                            <OpacityIcon style={{ fontSize: 50 }} />
                        </TempIcon>
                        <DataContainer>
                            <Label>
                                Humidity
                            </Label>
                            <Data>
                                30%
                            </Data>
                        </DataContainer >
                    </Item>
                </TempHumi>
                <Gas>
                    <TempIcon>
                        <LocalFireDepartmentIcon style={{ fontSize: 50 }} />
                    </TempIcon>
                    <DataGas>
                        <Label>
                            Gas sensivity
                        </Label>
                        <GasChart>
                            <CircularProgressbar value={60} text={'60%'} />
                        </GasChart>
                    </DataGas>
                </Gas>
            </Measure>
            <Statistic>
                <BoxChart>
                    <Chart
                        options={chartOptions1.options}
                        series={chartOptions1.series}
                        type='line'
                        height='100%'
                    />
                </BoxChart>
                <BoxChart>
                    <Chart
                        options={chartOptions2.options}
                        series={chartOptions2.series}
                        type='line'
                        height='100%'
                    />
                </BoxChart>
            </Statistic>
        </DashboardContainer>
    )
}

export default function homePage() {
    return (
        <Container>
            <Sidebar/>
            <Main>
                <Topbar/>
                <Home />
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

const DashboardContainer = styled.div`
    background-color: #F3F4FF;
    padding: 15px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
`

const Measure = styled.div`
    display: flex;
    height: 50%;
    justify-content: space-between;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
`

const TempHumi = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Item = styled.div`
    width: 100%;
    display: flex;
    height: 49%;
    border-radius: 8px;
    background-color: #fff;
    align-items: center;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Gas = styled.div`
    display:flex;
    align-items: center;
    background-color: #fff;
    width: 49%;
    border-radius:8px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Statistic = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50%;
    align-items: center;
`

const BoxChart = styled.div`
    width: 49%;
    height: 90%;
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 5px;
`


const TempIcon = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0 2px 3px #a49292;
`

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 30px;
`

const Data = styled.div`
    font-size: 2rem;
`

const Label = styled.div`
    font-size: 1.4rem;
    margin: 8px 0;
`

const DataSign = styled.span`
    font-size: 1.3rem;
`
const DataGas = styled.div`
    margin-left: 30px;
`

const GasChart = styled.div`
    width: 150px;
    height: 150px;
`

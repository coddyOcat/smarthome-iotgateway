import React from 'react'
import styled from "styled-components"
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from "react-apexcharts";

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


function Dashboard() {
    return (
        <DashboardContainer>
            <Measure>
                <TempHumi>
                    <Temperature>
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
                    </Temperature>
                    <Humidity>
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
                    </Humidity>
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
                <TempChart>
                    <Chart
                        options={chartOptions1.options}
                        series={chartOptions1.series}
                        type='line'
                        height='100%'
                    />
                </TempChart>
                <HumidityChart>
                    <Chart
                        options={chartOptions2.options}
                        series={chartOptions2.series}
                        type='line'
                        height='100%'
                    />
                </HumidityChart>
            </Statistic>
        </DashboardContainer>
    )
}

const DashboardContainer = styled.div`
    background-color: #F3F4FF;
    padding-top:20px;
`

const Measure = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const TempHumi = styled.div`
  width: 400px;
`

const Temperature = styled.div`
    width: 80%;
    display: flex;
    border-radius: 8px;
    background-color: #fff;
    align-items: center;
    padding-left: 10px;
    margin-top: 10px;
`

const Humidity = styled.div`
width: 80%;
display: flex;
border-radius: 8px;
background-color: #fff;
align-items: center;
padding-left: 10px;
margin-top: 10px;
`

const Gas = styled.div`
    display:flex;
    align-items: center;
    background-color: #fff;
    width: 400px;
    margin-top: 10px;
    border-radius:8px;
    padding-left: 10px;
`

const Statistic = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
`

const TempChart = styled.div`
    width: 650px;
    margin-bottom: 40px;
`

const HumidityChart = styled.div`
  width: 650px;
`

const TempIcon = styled.div`
    width: 60px;
    height: 60px;
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
    width: 100px;
    height: 100px;
`


export default Dashboard
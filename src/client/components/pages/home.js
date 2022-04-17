import React, { useState, useEffect} from 'react'
import styled from "styled-components"
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactApexChart from "react-apexcharts";

import Sidebar from "../sidebar"
import Topbar from "../topbar";

import { useParams } from 'react-router-dom'
import { loadDatasByDevice } from '../../service/axios'
import { ConstructionOutlined } from '@mui/icons-material';

function Home() {
    // const { id } = useParams()
    const [dataForm, setData] = useState({
        temperature_1: 0,
        humidity_1: 0,
        gas_1: 0,
        temperature_chart_1: [],
        gar_chart_1: []
    })
    const optionsTemp = {
        chart: {
          id: 'temp',
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        annotations: {
          yaxis: [{
            y: 30,
            borderColor: '#999',
          }],
          xaxis: [{
            x: new Date('14 Nov 2012').getTime(),
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
                datetimeUTC: true,
              show: true,
              text: 'Rally',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          }]
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          min: new Date(new Date().setSeconds(new Date().getSeconds() - 300)).getTime() + 25200000,
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
    }
    const optionsHumid = {
        chart: {
          id: 'humid',
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        annotations: {
          yaxis: [{
            y: 30,
            borderColor: '#999',
          }],
          xaxis: [{
            x: new Date('14 Nov 2012').getTime(),
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Rally',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          }]
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          min:  new Date(new Date().setSeconds(new Date().getSeconds() - 300)).getTime() + 25200000,
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
    }
    const [selectionTemp, setSelectionTemp] = useState('')
    const [selectionHumid, setSelectionHumid] = useState('')
    const updateData = (timeline, id)=> {
        if(id==='temp') setSelectionTemp(timeline)
        else setSelectionHumid(timeline)
        switch (timeline) {
            case 'one_day':
                ApexCharts.exec(
                id,
                'zoomX',
                new Date(new Date().setDate(new Date().getDate() - 1)).getTime(),
                new Date(new Date()).getTime()
                )
                break
            case 'one_week':
                ApexCharts.exec(
                id,
                'zoomX',
                new Date(new Date().setDate(new Date().getDate() - 7)).getTime(),
                new Date(new Date()).getTime()
                )
                break
            case 'one_month':
                ApexCharts.exec(
                id,
                'zoomX',
                new Date(new Date().setMonth(new Date().getMonth() - 1)).getTime(),
                new Date(new Date()).getTime()
                )
                break
            case 'six_months':
                ApexCharts.exec(
                id,
                'zoomX',
                new Date(new Date().setMonth(new Date().getMonth() - 6)).getTime(),
                new Date(new Date()).getTime()
                )
                break
            case 'one_year':
                ApexCharts.exec(
                id,
                'zoomX',
                new Date(new Date().setFullYear(new Date().getFullYear() - 1)).getTime(),
                new Date(new Date()).getTime()
                )
                break
            case 'all':
                ApexCharts.exec(
                id,
                'zoomX',
                new Date(new Date().setFullYear(new Date().getFullYear() - 2)).getTime(),
                new Date(new Date()).getTime()
                )
                break
            default:
        }
    }

    useEffect(() => {
        setTimeout( () => {
            Promise.all([
                loadDatasByDevice("temperature-1"),
                loadDatasByDevice("humidity-1"),
                loadDatasByDevice("gas-1")
            ]).then((data) => {
                const [tempNew, humidNew, gasNew] = data
                const temps = tempNew.map((temp)=> {
                    return [Date.parse(temp.created.slice(0,19)) + 25200000, temp.dataValue]
                })
                const humids = humidNew.map((humi)=> {
                    return [Date.parse(humi.created.slice(0,19)) + 25200000, humi.dataValue]
                })
                const tempSeries = [{data: temps}]
                const humidSeries = [{data: humids}]
                setData({
                    temperature_1: tempNew[tempNew.length-1].dataValue,
                    humidity_1: humidNew[humidNew.length-1].dataValue,
                    gas_1: Math.ceil(gasNew[gasNew.length-1].dataValue/7),
                    temperature_chart_1: tempSeries,
                    gar_chart_1: humidSeries
                })
            })
        }, 1000)
        console.log(dataForm)
    }, [dataForm])
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
                                </DataSign>{dataForm.temperature_1}&deg;C
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
                                {dataForm.humidity_1}%
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
                            <CircularProgressbar value={dataForm.gas_1} text={dataForm.gas_1+'%'} />
                        </GasChart>
                    </DataGas>
                </Gas>
            </Measure>
            <Statistic>
                <BoxChart>
                    <button id="one_day"
                        onClick={()=>updateData('one_day', 'temp')} className={ (selectionTemp==='one_day' ? 'active' : '')}>
                    1D
                    </button>
                    <button id="one_week"
                        onClick={()=>updateData('one_week', 'temp')} className={ (selectionTemp==='one_week' ? 'active' : '')}>
                    1W
                    </button>
                    <button id="one_month"
                        onClick={()=>updateData('one_month','temp')} className={ (selectionTemp==='one_month' ? 'active' : '')}>
                    1M
                    </button>
                    <button id="six_months"
                        onClick={()=>updateData('six_months', 'temp')} className={ (selectionTemp==='six_months' ? 'active' : '')}>
                    6M
                    </button>
                    <button id="one_year"
                        onClick={()=>updateData('one_year', 'temp')} className={ (selectionTemp==='one_year' ? 'active' : '')}>
                    1Y
                    </button>
                    <button id="all"
                        onClick={()=>updateData('all', 'temp')} className={ (selectionTemp==='all' ? 'active' : '')}>
                    ALL
                    </button>
                    <ReactApexChart options={optionsTemp} series={dataForm.temperature_chart_1} type="area" height={'90%'} />
                </BoxChart>
                <BoxChart>
                    <button id="one_day"
                        onClick={()=>updateData('one_day', 'humid')} className={ (selectionHumid==='one_day' ? 'active' : '')}>
                    1D
                    </button>
                    <button id="one_week"
                        onClick={()=>updateData('one_week', 'humid')} className={ (selectionHumid==='one_week' ? 'active' : '')}>
                    1W
                    </button>
                    <button id="one_month"
                        onClick={()=>updateData('one_month', 'humid')} className={ (selectionHumid==='one_month' ? 'active' : '')}>
                    1M
                    </button>
                    <button id="six_months"
                        onClick={()=>updateData('six_months', 'humid')} className={ (selectionHumid==='six_months' ? 'active' : '')}>
                    6M
                    </button>
                    <button id="one_year"
                        onClick={()=>updateData('one_year', 'humid')} className={ (selectionHumid==='one_year' ? 'active' : '')}>
                    1Y
                    </button>
                    <button id="all"
                        onClick={()=>updateData('all','humid')} className={ (selectionHumid==='all' ? 'active' : '')}>
                    ALL
                    </button>
                    <ReactApexChart options={optionsHumid} series={dataForm.gar_chart_1} type="area" height={'90%'} />
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

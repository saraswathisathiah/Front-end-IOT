import React, { Component } from 'react'
import { CRow, CCol, CContainer, CCard, CCardBody } from '@coreui/react'
import MenuSample from '../CommonFloor/SideMenu/SideMenu'
import Topnav from '../CommonFloor/TopNav/TopNav'
import DashBoardTab from './DashboardTab'
import PowerConsumptionChart from '../Chart/Powerconsumption'
import SemiCircleChart from  '../Chart/Airconditioner'
import ApexAreaChart from '../Chart/Powerconsumption'
import HumidityAreaChart from '../Chart/Humidity'
export default class extends Component {
  render() {
    return (
        <CContainer style={{ margin: '0px' }}>

            <CRow>
                <CCol sm={2}><MenuSample/></CCol>
                <CCol sm={8}>
                    <CRow>
                        <CCol><Topnav /></CCol>
                    </CRow>
                    <CRow>

                        <CCard style={{ width: '80rem' }}>
                            <DashBoardTab />
                            <CRow>

                                <CCol>
                                    <CCard style={{ marginLeft: '20px', width: '30rem', marginBottom: '50px', border: '1px solid', borderRadius: '5px', borderBlockColor: 'black' }}>
                                       {/* <PowerConsumptionChart/> */}
                                       <ApexAreaChart/>
                                    </CCard>
                                </CCol>
                                <CCol>
                                    <CCard style={{ marginLeft: '20px', width: '30rem', marginBottom: '50px', border: '1px solid', borderRadius: '5px', borderBlockColor: 'black' }}>
                                        <SemiCircleChart
                                            min={0}
                                            max={30}
                                            value={16}
                                        />
                                    </CCard>
                                </CCol>
                                <CRow>
                                    <CCard style={{ marginLeft: '20px', width: '70rem', marginBottom: '50px', border: '1px solid', borderRadius: '5px', borderBlockColor: 'black' }}>
                                        <HumidityAreaChart />
                                    </CCard>
                                </CRow>

                            </CRow>

                        </CCard>

                       

                    </CRow>

                   
                </CCol>
               
            </CRow>
            



        </CContainer>
    )
  }
}

import React, { Component } from 'react'
import { CRow, CCol, CContainer, CCard, CCardBody } from '@coreui/react'
import DisplayDevices from './DisplayDevices'
import './DisplayDevices.css'
import MenuSample from '../CommonFloor/SideMenu/SideMenu'
import Topnav from '../CommonFloor/TopNav/TopNav'
import { useNavigate } from 'react-router-dom'
import PopupMod from '../popup_component/ModalPopup'

export default function DisplayDevices1() {
    var navigate = useNavigate();
    var addDevice=(e)=>{
        e.preventDefault();
        navigate('/addDevice')

    }
  
        return (
            < CContainer style={{ margin: '0px' }}>


                <CRow>
                    <CCol sm={2}><MenuSample /></CCol>
                    <CCol sm={8}>
                        <CRow>
                            <CCol><Topnav /></CCol>
                        </CRow>
                        <CRow>

                            <CCard style={{ width: '80rem' , paddingTop:'10px'}}>
                                <CRow>
                                    <CCol>My Devices</CCol>
                                    <CCol style={{marginLeft:'500px'}}>
                                        {/* <button className='btnColor' onClick={e=>addDevice(e)}> Add Devices</button> */}
                                        <PopupMod/>
                                    </CCol>

                                </CRow>
                                <hr/>
                                <CRow>

                                    {/* <CCol>
                                        <CCard style={{ marginLeft: '20px', width: '30rem', marginBottom: '50px', border: '1px solid', borderRadius: '5px', borderBlockColor: 'black' }}> */}
                                    <DisplayDevices />
                                    {/* </CCard>
                                    </CCol> */}


                                </CRow>
                            </CCard>



                        </CRow>


                    </CCol>
                </CRow>



            </CContainer >
        )
                                
}

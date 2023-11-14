import { render } from "@testing-library/react";

import popup from './popup.css';
import React, {useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function PopupMod({ isOpen, onClose, display }){

  const [device,setDisplay] = useState({display:'none'});
  const [add_device_popup,setDevicePopup] =useState({display:'none'})
  const [device_name,setDeviceName] =  useState('');
  const [description,setDescription] = useState('');
  const [organization, setOrganization] = useState('');
  const [connection, setConnection] = useState('');
  const [hardware, setHardware] = useState('');
  const options = [{key:1,value:'Option 1'}, {key:2,value:'Option 2'}, {key:3,value:'Option 3'}];


  const handleInputChange = (event) => {

    let field=event.target.id;

    switch(field){
      case 'device_name':
        setDeviceName(event.target.value);
      break;
      case 'description':
        setDescription(event.target.value);
      break;
      case 'connection':
        setConnection(event.target.value);
      break;
      case 'organization':
        setOrganization(event.target.value);
      break;
      case 'hardware':
        setHardware(event.target.value);
      break;

    }

    
  };

  

  const openModal = (setter,value) => {
    switch (setter)  {

      case 'device popup':
        setDisplay(value);
      break;

      case 'add device':
          setDevicePopup(value);
      break;

      case 'default':
       
          setDisplay(value);
          setDevicePopup(value);
       
      break;

    }
    
  };
  
  const closeModal = (setter,value) => {
    switch (setter) {

      case 'close device':
        setDisplay(value);
      break;
      case 'close add device':
        setDevicePopup(value);
        setDeviceName('');
        setDescription('');
        setConnection('');
        setHardware('');
        setOrganization('');
      break;
      case 'default':
          setDisplay(value);
          setDevicePopup(value);
      break;

    }
  };

  const AddDevice = async (e)=>{
    console.log([organization,hardware,connection,device_name,description]);
    e.preventDefault();
    try{
      const response = await axios.post('your-backend-endpoint-url', {
       organization,hardware,device_name,description,connection
      });

    }
    catch(error){
        console.log(error);
    }

  }

  
      
      return (
      <div className="pop-component">

        <button className="popup-cancel btn-class" onClick={()=>openModal('device popup',{display:'block'})}> Add Device</button>
      
        <div id="myModal" className="modal  add-device-modal" style={device} >

          <div className="modal-content container-fluid">

            <div className="modal-header">
              <p className="modal-title col-md-12">Add Device</p>
              <p className="modal-sub-title col-md-12">Choose a way to create device</p>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 card-container" >
                  <Card className="qr-card" >
                    <Card.Header className="card-Header">Scan QR</Card.Header>
                    <Card.Body>   
                      <Card.Img className="scanner-card-img" src="/images/scan_qr.svg" />
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-6 card-container" >
                  <Card className="add-device-card" onClick={()=>openModal('add device',{display:'block'})}>
                    <Card.Header className="card-Header">Add Manually</Card.Header>
                    <Card.Body>
                      <Card.Img className="device-card-img" src="/images/add_device.svg" />
                    </Card.Body>
                  </Card>
                </div>
              </div>
             

              <button className="popup-cancel btn-class" onClick={()=>closeModal('close device',{display:'none'})}>cancel</button>
            </div>

          </div>          
        </div>


        {/*  Add new device modal*/}

        <div id="add_new_device" className="modal  add-new-device-modal" style={add_device_popup} >

          <div className="modal-content container-fluid">

            <div className="modal-header">
              <p className="modal-title col-md-12">Add New Device</p>
            </div>

            <div className="modal-body">

              <div className="row">
                <div className="col-md-6 add-device-inputs">
                  <label htmlFor="device name" className="label-class">Device Name</label><br/>
                  <input type="text" id="device_name" className="input-class" value={device_name} onChange={handleInputChange}/>
                  
                </div>
                <div className="col-md-6 add-device-inputs">
                  <label htmlFor="device name" className="label-class">Organiztion Name</label><br/>
                  <select id="organization" className="input-class" value={organization} onChange={handleInputChange}>
                    <option value="">Select an option</option>
                    {options.map((option, index) => (
                      <option key={index} value={option.key}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 add-device-inputs">
                  <label htmlFor="device name" className="label-class">Select Hardware</label><br/>
                  <select id="hardware" className="input-class" value={hardware} onChange={handleInputChange}>
                    <option value="">Select an option</option>
                      {options.map((option, index) => (
                        <option key={index} value={option.key}>
                          {option.value}
                        </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 add-device-inputs">
                  <label htmlFor="device name" className="label-class">Connection Type</label><br/>
                  <select id="connection" className="input-class" value={connection} onChange={handleInputChange}>
                    <option value="">Select an option</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.key}>
                          {option.value}
                        </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <label className="label-class textarea-lable">Description</label><br/>
                  <textarea  id="description" className="input-class textarea" value={description} onChange={handleInputChange}/>
                </div>
              </div>
             
              <div className="button-group device-add-cancel">
                <button className="add-button btn-class" onClick={AddDevice}>Add</button>
                <button className="cancel-button btn-class" onClick={()=>closeModal('close add device',{display:'none'})}>Cancel</button>
              </div>
              
            </div>

          </div>

          

        </div>


      </div>
      )

      


     
}



export default PopupMod;
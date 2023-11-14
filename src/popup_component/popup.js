// import './popup.css';
// import { Component } from 'react';

// import { useState } from 'react';




// class Popup extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           display: 'display:none',
//           isLoading: true,
//         };
//       }
    
//       openModal = () => {
//         this.setState({ display: 'display:block' });
//       };
    
//       closeModal = () => {
//         this.setState({ display: 'display:none' });
//       };

//       componentDidMount(){
//         this.setState({isLoading:false});
//         console.log('component mounted');
//       }
      

//     render(){
//         const { data,isLoading } = this.state;

//         if(isLoading){
//             return(
//                 <div>Loading</div>
//             );
//         }

//         console.log(this.state.display);
//         let toggle=this.state.display;

//     return(
//     <div className="pop-component">
//         <button onClick={modal()}> modal</button>
      

//     <div id="myModal" className="modal" style={this.display} >
//         <div className="modal-content">
//             <span className="close" onClick={modal('close')}>&times;</span>
//             <p>Some text in the Modal..</p>
//         </div>
//     </div>

//     </div>

//     );

//     }

    
// }

// function modal(value){
//      const pop_modal=new Popup();
//      if(value=='close')
//       pop_modal.openModal();
//       else
//       pop_modal.closeModal();
// }

// export default Popup;

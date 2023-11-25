import React, { Component } from 'react'
import "./TopNav.css"

export default class Topnav extends Component {
    render() {
        return (
            <div>
                {/* //<div class="container-fluid"> */}
                {/* <div class="column flex-wrap"> */}

                <div class="col-sm-1" >{/*class="col-sm-1"*/}
                    <select class="selectBorder">
                        <option value="select1">Siruseri Phase1</option>
                        <option value="select1">Siruseri Phase2</option>
                        <option value="select1">Siruseri Phase3</option>
                        <option value="select1">Siruseri Phase4</option>
                    </select>
                </div>
                <div class="col-sm-3 col-sm-offset-2">{/*class= "col-sm-3 col-sm-offset-2"*/}
                    <form action="" class="search-form">
                        <div class="form-group has-feedback">
                            <label for="search" class="sr-only ">Search</label>
                            <input type="text" class="form-control searchInput" name="search" id="search" placeholder="Search for Devices" style={{ width: '200px' }} />
                            <span class="glyphicon glyphicon-search form-control-feedback searchIcon" style={{ marginInline: '-50px' }}></span>
                        </div>
                    </form>
                </div>
                <div style={{ paddingLeft: '450px' }} >
                    <svg width="20px" height="40px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12.75 15V16.5H11.25V15H12.75ZM10.5 10.4318C10.5 9.66263 11.1497 9 12 9C12.8503 9 13.5 9.66263 13.5 10.4318C13.5 10.739 13.3151 11.1031 12.9076 11.5159C12.5126 11.9161 12.0104 12.2593 11.5928 12.5292L11.25 12.7509V14.25H12.75V13.5623C13.1312 13.303 13.5828 12.9671 13.9752 12.5696C14.4818 12.0564 15 11.3296 15 10.4318C15 8.79103 13.6349 7.5 12 7.5C10.3651 7.5 9 8.79103 9 10.4318H10.5Z" fill="#080341"></path> </g></svg>


                    <svg width="30px" height="40px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7009 7.14697C9.62899 7.14697 8.64717 8.38197 7.66632 10.607C7.09252 12.1293 6.80727 13.75 6.82587 15.382C8.24252 16.4412 9.94777 17.0173 11.7009 17.029C13.454 17.0173 15.1592 16.4412 16.5759 15.382C16.5948 13.75 16.3099 12.1294 15.7364 10.607C14.7546 8.38197 13.7727 7.14697 11.7009 7.14697Z" stroke="#000000" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.5904 19.2745C14.9209 19.0248 14.9865 18.5545 14.7368 18.224C14.4872 17.8934 14.0168 17.8279 13.6863 18.0775L14.5904 19.2745ZM9.71536 18.0775C9.38484 17.8279 8.91451 17.8934 8.66486 18.224C8.41521 18.5545 8.48078 19.0248 8.81131 19.2745L9.71536 18.0775ZM10.8887 4.75C10.4744 4.75 10.1387 5.08579 10.1387 5.5C10.1387 5.91421 10.4744 6.25 10.8887 6.25V4.75ZM12.513 6.25C12.9272 6.25 13.263 5.91421 13.263 5.5C13.263 5.08579 12.9272 4.75 12.513 4.75V6.25ZM13.6863 18.0775C12.5041 18.9704 10.8975 18.9704 9.71536 18.0775L8.81131 19.2745C10.5285 20.5714 12.8732 20.5714 14.5904 19.2745L13.6863 18.0775ZM10.8887 6.25H12.513V4.75H10.8887V6.25Z" fill="#000000"></path> </g></svg>


                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-person-circle circlePadding" viewBox="0 0 25 25" stroke-width="1.0" >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <label>UserName</label>
                </div>
                {/* </div> */}

                {/* </div> */}


            </div>
        )
    }
}

import React, { Component } from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'
import './Dashboardtab.css';

export default class DashBoardTab extends Component {
    render() {
        return (
            <CNav variant="underline" >
                <CNavItem className='tabAlign'>
                    <CNavLink href="#" active>
                        All
                    </CNavLink>
                </CNavItem>
                <CNavItem className='tabAlign'>
                    <CNavLink href="#">Bay 1</CNavLink>
                </CNavItem>
                <CNavItem className='tabAlign'>
                    <CNavLink href="#">Bay 2</CNavLink>
                </CNavItem>
                <CNavItem className='tabAlign'>
                    <CNavLink href="#">Bay 3</CNavLink>
                </CNavItem>
                <CNavItem className='tabAlign'>
                    <CNavLink href="#">Bay 4</CNavLink>
                </CNavItem>
                <CNavItem className='tabAlign'>
                    <CNavLink href="#">Bay 5</CNavLink>
                </CNavItem>
                <CNavItem className='tabAlign'>
                    <CNavLink href="#">Bay 6</CNavLink>
                </CNavItem>
                <CNavItem className='tabAlign'>
                    <CNavLink href="#">
                        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0" stroke='9400d3'></g><g id="SVGRepo_tracerCarrier" stroke-linecap="square" stroke-linejoin="square"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.844,0,0,114.839,0,256s114.844,256,256,256s256-114.839,256-256S397.156,0,256,0z M398.825,269.916 L213.273,392.998c-2.838,1.88-6.045,2.783-9.219,2.783c-5.404,0-10.709-2.621-13.927-7.469c-5.099-7.686-3-18.047,4.686-23.146 L359.381,256L194.813,146.835c-7.686-5.099-9.785-15.46-4.686-23.146c5.121-7.686,15.492-9.773,23.146-4.686l185.551,123.081 c4.664,3.093,7.469,8.317,7.469,13.916C406.294,261.599,403.488,266.823,398.825,269.916z"></path> </g> </g> </g></svg>
                    </CNavLink>
                </CNavItem>
                <CNavItem className='tabAlign'>
                    <CNavLink href="#">
                        <button style={{ backgroundColor: '#9400d3', color: 'black', borderRadius: '4px', width: '70px', border: '1px', height: '30px' }} >+Add</button>
                    </CNavLink>
                </CNavItem>
            </CNav>
        )
    }
}

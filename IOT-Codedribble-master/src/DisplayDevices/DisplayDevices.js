import React, { Component } from 'react'

export default class DisplayDevices extends Component {
    render() {
        return (
            
            <div>
                <table class="table">
                    <thead class="tableThColor">
                        <tr>
                        <th><input type="checkbox"/></th>
                        <th>Device Name</th>
                        <th>Auth Token</th>
                        <th>Device Owner</th>
                        <th>Organization Name</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ...
                    </tbody>
                </table>


            </div>
        )
    }
}

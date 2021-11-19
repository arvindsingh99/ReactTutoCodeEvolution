import React, { Component } from 'react'
import FragmentColumn from './FragmentColumn'
export default class FragmentTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <FragmentColumn />
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

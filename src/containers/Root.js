import React, {Component} from 'react'
import {Provider} from 'react-redux'
import config from '../config/config'
import AsyncApp from './AsyncApp'

const store = config()

export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <AsyncApp/>
            </Provider>
        )
    }
}

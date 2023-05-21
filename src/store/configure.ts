import {applyMiddleware, createStore} from "redux"
import {createLogger} from "redux-logger"

const configure = () => {
    return createStore(reducer, applyMiddleware(createLogger()))
}

export default configure
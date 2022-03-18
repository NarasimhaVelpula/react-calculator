import {configureStore} from '@reduxjs/toolkit'
import expressionReducer from './expressionSlice'

export default configureStore({
    reducer:{
        expression: expressionReducer
    },
})
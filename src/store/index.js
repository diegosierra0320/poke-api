import { configureStore } from "@reduxjs/toolkit"
import nameTrainer from './Slices/nameTrainer.slice'

export default configureStore({
    reducer: {
        nameTrainer
    }
})
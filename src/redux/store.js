import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducer';

export default configureStore({reducer: allReducers});
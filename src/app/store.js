import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSplice';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});

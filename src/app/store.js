import { configureStore } from "@reduxjs/toolkit";

import addUnitSliceReducer from "../features/units/addUnitSlice";

export default configureStore({
  reducer: {
    addUnitData: addUnitSliceReducer,
  },
});

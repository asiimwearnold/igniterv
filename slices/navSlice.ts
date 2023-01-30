import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  CarOrder: null,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setCarOrder: (state, action) => { 
            state.CarOrder = action.payload;

        }
    }
})

export const { setOrigin, setDestination, setTravelTimeInformation, setCarOrder } = navSlice.actions;
// selectors
export const selectOrigin = (state: { origin: any; }) => state.origin;
export const selectDestination = (state: { destination: any; }) => state.destination;
export const selectTravelTimeInformation = (state: { travelTimeInformation: any; }) => state.travelTimeInformation;
export const selectCarOrder = (state: {carOrder: any; }) => state.carOrder;

export default navSlice.reducer;
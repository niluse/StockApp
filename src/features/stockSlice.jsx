import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  categories: [],
  loading: false,
  error: false
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },
    // firmsSuccess: (state,{payload})=>{
    //   state.loading = false
    //   state.firms = payload.data 
    // },
    // salesSuccess: (state,{payload})=>{
    //   state.loading = false
    //   state.sales = payload.data 
    // }, ...
    getStocksSuccess: (state,{payload})=>{
      state.loading = false
      state[payload.url] = payload.apiData  
    },
    // firmDelete: (state,{payload})=>{
      
    // },


    getProPurBranFirmSuccess: (state, { payload }) => {
      state.loading = false
      state.products = payload[0]
      state.purchases = payload[1]
      state.brands = payload[2]
      state.firms = payload[3]
      state.error = false
    },

    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {fetchStart, getStocksSuccess, fetchFail, getProPurBranFirmSuccess} = stockSlice.actions

export default stockSlice.reducer

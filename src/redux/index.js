import { configureStore } from '@reduxjs/toolkit'
import counter from "./features/count.slice"
import wishlist from './features/wishlist.slice'
import cart from './features/cart.slice'
import auth from './features/auth.slice'
import { mainApi } from './api'

export const store = configureStore({
  reducer: {
    counter,
    wishlist,
    cart,
    auth,
    [mainApi.reducerPath]: mainApi.reducer,
    // accessToken,
    // profile,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
})

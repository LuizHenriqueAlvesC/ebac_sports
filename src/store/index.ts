import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import favoritoSlice from './reducers/favoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>

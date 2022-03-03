import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import {RootStateOrAny} from "react-redux"

interface IPokemonState {
  selectedPokemon:any
}

const initialState = { selectedPokemon:{}} as IPokemonState

const pokemonSlice:Slice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonData:(state:RootStateOrAny,action:PayloadAction)=>{
        state.selectedPokemon=action?.payload
    }
  },
})

export const selectedPorkemonSelector=(state:RootStateOrAny)=>state.pokemon.selectedPokemon

export const { setPokemonData } = pokemonSlice.actions
export default pokemonSlice.reducer
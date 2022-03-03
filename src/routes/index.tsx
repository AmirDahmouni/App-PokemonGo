import React from "react"
import {useRoutes} from "react-router-dom"
import App from "../App"
import PokemonList from "../pokemonList"
import PokemonDetails from "../PokemonDetails"

const AppRoutes=()=>{
    return useRoutes([
        {
         path:"/",
         element:<App/>,
         children:[{
             path:"",
             element:<PokemonList/>
         },
         {
          path:"/details/:id",
          element:<PokemonDetails/>
         }]
        },{path:"*",element:""}
    ])
}
export default AppRoutes
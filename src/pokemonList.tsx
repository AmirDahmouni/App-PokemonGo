import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate} from "react-router"
import { setPokemonData } from "./store/pokimeonSlice"

interface PokemonType {
    name:string,
    image:string,
    url:string
}

export default function ()
{
    const dispatch=useDispatch()
    const [list,setlist]=useState<PokemonType[]>([])
        
    const fetchPokemonData=(url:string)=>{
        fetch(url)
        .then(result=>result.json())
        .then((pokemon:PokemonType)=>setlist((_list:PokemonType[])=>[..._list,pokemon]))
    }
    
    const fetchPokemonList=()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((result)=>result.json())
        .then(list=>{
            list?.results.forEach((pokemon:PokemonType)=>{
                fetchPokemonData(pokemon?.url)
            })
        })
    }
    
    
    useEffect(()=>{
        fetchPokemonList()
    },[])
    useEffect(()=>{
      console.log(list)
    },[list])

    const navigate=useNavigate()
    
    const showDetails=(pokemon:any)=>{
        dispatch(setPokemonData(pokemon))
        navigate("/details/"+pokemon?.id)    
    }
    const renderList=()=>{
        return list.length>0 ? 
        (
        <div className="columns is-multiline is-centered">{list.map((pokemon:any,index)=>
            <>
            <div className="column is-one-quarter box" key={index} onClick={e=>showDetails(pokemon)}>
              <img src={pokemon?.sprites?.other?.dream_world?.front_default} /> 
              <div className="divider"/>
              <h3 className="title is-5 pokemon-card_name">{pokemon?.name}</h3>  
            </div>
            
           
            </>
        )}
            
         </div>
         ):
        (<h3 className="list-">Loading ....</h3>)
    }
    return (
        <div className="list container">
                {renderList()}
        </div>
    )
}
import React from "react";
import { useSelector } from "react-redux";
import { selectedPorkemonSelector } from "./store/pokimeonSlice";
 
const PokemonDetails = () => {
   const pokemon = useSelector(selectedPorkemonSelector) ?? {};
   return (
       <div className="box pokemon-card mb-3">
         <div className="pokemon-card_header">
         <div className="pokemon-card_img">
                   <img
                       src={pokemon?.sprites?.other?.dream_world?.front_default}
                       alt=""
                   />
               </div>
               <h1 className="pokemon-card_id">{"#" + String(pokemon?.id).padStart(3, "0")}</h1>
            
           </div>

           <div className="pokemon-card_info mt-3">
               <button className="pokemon-height button is-rounded">
                   {pokemon?.height / 10}m
               </button>
               <div className="pokemon-content">
               <div className="pokemon-card_name">
                       <h4 className="title is-4">{pokemon?.name}</h4>
               </div>

               <div className="pokemon-types field is-grouped is-grouped-multiline mt-3">
                       <div className="control">
                           <div className="tags has-addons">
                           {pokemon?.types?.map((type: any, index: number) => (
                                   <h6
                                       className={
                                           "pokemon-type subtitle is-6 tag " + type?.type?.name
                                       }
                                       key={index}
                                   >
                       {type?.type?.name}
                                   </h6>
                               ))}
                           </div>
                       </div>
                   </div>
               </div>
               <button className="pokemon-weight button is-rounded">
                   {pokemon?.weight / 10}kg



                   </button>
           </div>
       </div>
   );
};
 
export default PokemonDetails;



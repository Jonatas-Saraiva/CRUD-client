import "./index.css"
import React from "react";
import FormDialog from "../dialog/dialog";

function Game (props){
    const [open, setOpen] = React.useState(false);
  function  handleClick (){
   setOpen(true)
  }
  
    return ( 
        <FormDialog  id={props.id} open ={open} setOpen={setOpen} name={props.name} cost={props.cost} category={props.category} games={props.games} setGames={props.setGames}>
        <section className="box">
        <h1>Game</h1>
        <div className="div1" onClick={handleClick}>{props.name}</div>
        <div className="div2">R${props.cost}</div>
        <div className="div3">Categoria:{props.category}</div>
        </section>
        </FormDialog>
    )
}


export default Game;
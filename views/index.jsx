const React = require('react');
const allPokemon = require('../models/pokemon');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

  class Index extends React.Component {
    render(){
      const pokemon = this.props
    return (
      <div style={myStyle}>See All The Pokemon!
        <ul>
        {allPokemon.map((pokemon,i)=>{
          return(
     <li>
      <a href={`/pokemon/${i}`}>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</a>
      
 </li>
          );
        })}
       </ul>
      
      
      </div>
      
      )
    }
}
  
  module.exports  = Index
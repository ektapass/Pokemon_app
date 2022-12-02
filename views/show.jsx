const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

  class Show extends React.Component {
    render(){
      let pokemon = this.props.pokemon
    return (
       <> 
      <h1 >Gotta catch 'Em All</h1>
      
        
        
    
      <h2>{pokemon.name}</h2>
      <img src={pokemon.img +".jpg"}></img>
      <a href = "/pokemon">Back </a>
     
        
    
    
      
    
      </>
      
      )
    }
}
  
  module.exports  = Show;
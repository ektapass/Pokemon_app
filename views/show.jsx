const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

  class Show extends React.Component {
    render(){
      const {pokemon} = this.props
      console.log(this.props)
    return (
       <> 
      <h1 style={myStyle}>Gotta catch 'Em All</h1>
      
       
      <h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1) }</h2>
      <img src={pokemon.image +".jpg"}></img>
      <a href = "/pokemon">Back </a>
     
          
      </>
      
      )
    }
}
  
  module.exports  = Show;
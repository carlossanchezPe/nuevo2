import logo from './logo.svg';
import './App.css';
import React,{Component,Fragment} from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';


class App extends Component {
  mifuncion(){
    console.log("Apoco si?")
  }
  render(){
  return (
        
  <div className="App">
    
     <Banner
     texto1="Rick And Morty"
    
     />
    <Header/>
    
    <Banner
    
    
     texto1="Rick Sanchez C-137"
     />
    <Body
            
    texto1="Capitulos Mas vistos de Rick And Morty"
    arreglo={["1.Star Mort Rickturn of the Jerri","2.Close Rick","3.The Ricks Must Be Crazy","4.The Wedding Squanchers","5.Pickle Rick"]
    }
    
    
    
    
    />
    <div>
      <Button variant="primary" onClick={()=>this.mifuncion()}>Lo quieres tocar?</Button>
    </div>
    
  <Footer >{<p> Rick And Morty 2023</p>}</Footer>
  

  </div>
  );
}
  }
export default App;



import React from 'react';
import SearchBar from './SearchBar';
import './App.css';
import unsplash from './api/unsplash';
import { thisExpression } from '@babel/types';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        image:[]    
    }
}
componentDidMount(){
  this.onSearchSubmit()
}
 onSearchSubmit=async term =>{
    const response = await unsplash.get('/search/photos',{
      params:{query: term},
      
    });
   this.setState({image:response.data.results});
  }
  render(){
    console.log(this.state.image);
  return (
    <div className="ui container">
     
      <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>

      <p>searched image{this.state.image.length}</p>
      


    {this.state.image.map( images =>{
      return <img src={images.urls.regular}  />
    })}
    </div>
  );
}
}
export default App;


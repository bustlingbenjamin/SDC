import React, { Component, Fragment } from 'react';

import BeautyStars from 'beauty-stars';
import Donut from 'react-svg-donuts';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      info: null,
      number: {value: 5},
      isLoaded: false,
    }
  }
  

  componentDidMount() {
    const buttonElement = document.getElementById('button');
    const inputBox = document.getElementById('searchbar')

    let self=this;
    buttonElement.addEventListener('click', function (event){
      let name= inputBox.value
      console.log("name")
      fetch('/targets/'+name)
      .then(res => {
        return res.json();
       }).then(data => {
        console.log(data.rows[0]);
        self.setState({info: data.rows[0]})
        }); 
    })
  }

  handleClick() {
    console.log('it works');
  }



  render() {
    const progress = 100;

    const renderProgress = progress => <strong>{progress}%</strong>;

    let review;
    if(this.state.info===null){
      review= <div></div>
    }else{
      review=
      <Fragment>
        <h1 className="display">Guest ratings and reviews</h1>	        {review}
        <div className="title"> 	
         <h2 className="rate">Average rate: {this.state.info.rating}	
         </h2>	
        <BeautyStars 	
          value={this.state.value}	
          onChange={value => this.setState({ value })}	
        />	
        <Donut 	
        progress={progress} onRender={renderProgress} 	
        />	
    </div>	
    <h3 className="photo">Review photo:	
    <img src={this.state.info.image}></img>	
    </h3>	
    <div className="container">	
      <h1 className="tittle">Reviews </h1>	
    <h3 className="comment">Item name: {this.state.info.name} 
      <h3>{this.state.info.account}:</h3>	
      <h2>{this.state.info.comment}</h2>	</h3>	
    </div>	
        <button onClick={ this.handleClick.bind(this) }>Write a review</button>
      </Fragment>
    }






    return (
      <div className="app">
        {review}
      </div>
    );
    
  }
  
}
export default App;

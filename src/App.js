import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Header";
import friends from "./friends.json";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedTeam: [],
    score: 0
  };
  imageClick = event =>{
    const currentTeam = event.target.alt;
    const TeamAlreadyClicked = this.state.clickedTeam.indexOf(currentTeam) > -1;
  
    if (TeamAlreadyClicked){
  this.setState({
    friends: this.state.friends.sort(function(a, b) {
      return 0.5 - Math.random();
  }),
  clickedTeam: [],
  score: 0
    });
    alert("You lose. Play again?");
  } else{
    this.setState(
      {
        friends: this.state.friends.sort(function(a,b){
          return 0.5 - Math.random();
        }),
        clickedTeam: this.state.clickedTeam.concat(
          currentTeam
        ),
        score: this.state.score +1
      },
      () => {
        if (this.state.score === 12) {
          alert("Yay! You Win!");
          this.setState({
            friends: this.state.friends.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedTeam: [],
            score: 0
          });
        }
      }
    );
  }
};

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar 
        score={this.state.score}
        />
        <Title/>
      
        {this.state.friends.map(friends => (
          <FriendCard
            imageClick={this.imageClick}
            id={friends.id}
            key={friends.id}
            name={friends.name}
            image={friends.image}
          />
        ))}
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;

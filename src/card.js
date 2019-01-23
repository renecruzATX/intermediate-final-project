import React, { Component } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Question from './question.js';

class Cards extends Component {
  state = {
    show: 'hidden',
    button: false,
    refresh: true
  }
  //this method reveals the answer on the question component
  showAnswer=()=>{
    if (this.state.show === 'hidden'){
      this.setState({show: ''})
    };
    if (this.state.button === false) {
      this.setState({button: true})
    };
  }

  //this method refreshes the page to get a new question
  updateQuestion=()=>{
    window.location.reload()
  }

  render() {
    return (

      <div>
        <Card>
          <CardActionArea className="actionArea">
            {/*CardMedia renders a random picture for the card so it won't look so boring*/}
            <CardMedia
              component="img"
              height="250"
              image="https://picsum.photos/400/200/?random"
              title="Random"
            />
            <CardContent>
              {/*Import the question component and also pass props to the child component 'Question' to reveal answer*/}
              <Question show={this.state.show}/>
            </CardContent>
          </CardActionArea>
          <CardActions className="buttons">
            {/*This button calls showAnswer, reveals the answer and then becomes disabled*/}
            <Button
              disabled={this.state.button}
              onClick={this.showAnswer}
              size="large"
              color="default">
              Answer
            </Button>
            {/*this button calls updateQuestion and refreshes the page for a new question*/}
            <Button
              onClick={this.updateQuestion}
              size="large"
              color="default">
              New Question
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Cards;

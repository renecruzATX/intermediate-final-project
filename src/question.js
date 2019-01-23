import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class Question extends Component {
  state = {
    questions: []
  }
  //fetches random Jeopardy questions
  componentDidMount() {
    fetch('http://jservice.io/api/random')
      .then(questions => questions.json())
      .then(questions => {
        this.setState({questions})
      });
  }
  //the next four methods give me the parts of the question that is being asked
  //for some reason when I checked the state 'questions' in the console there would be
  //two arrays being created and I needed the second one. so that's why the if statement
  //tried just using the parts of the state directly in the elements but kept getting
  //undefined.  had to use methods instead.
  renderQuestion(){
    if (this.state.questions.length > 0) {
      return this.state.questions[0].question;
    }
  }
  renderCategory(){
    if (this.state.questions.length > 0) {
      return 'Category: ' + this.state.questions[0].category.title.toUpperCase();
    }
  }
  renderDifficulty(){
    if (this.state.questions.length > 0) {
      return ' Difficulty: ' + this.state.questions[0].value;
    }
  }
  renderAnswer(){
    if (this.state.questions.length > 0) {
      return 'Answer: ' + this.state.questions[0].answer;
    }
  }

  render() {
    return (
      <div>
      <Typography className="category" component="h3">
        {this.renderCategory()} {this.renderDifficulty()}
      </Typography>
      <Typography gutterBottom variant="headline" component="h2">
        {this.renderQuestion()}
      </Typography>
      {/*this element grabs props from the parent 'card' component to reveal the answer*/}
      <Typography
        className={`italic ${this.props.show}`}
        component="p">
        {this.renderAnswer()}
      </Typography>
      </div>
    );
  }
}

export default Question;

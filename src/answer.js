import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Answer extends Component {
  render() {
    return (
      <Typography className="italic" component="p">
        {this.renderAnswer()}
      </Typography>
    );
  }
}

export default Answer;

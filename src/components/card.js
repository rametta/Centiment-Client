import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  width: '46%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Card = props => {
  return <Paper style={style} zDepth={2}>
    <div>
      {props.children}
    </div>
  </Paper>
}

module.exports = Card;
import React from 'react';
import recycle from './recycle.png';

class GameComponent extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      gameScore: 0
    };
  }
  render() {
    return (
      <div>Page here</div>
    );
  }
}

export default GameComponent;
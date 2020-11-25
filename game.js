'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
        <div>
            <p id="quote">"A quote of about this size or longer"</p>
            <input type="text" name="text" id="input_field" placeholder="First Name" autocomplete="off" />
            <br />
            <button className="custom-btn btn-5" style="margin-bottom: 50px"><span>Enter</span></button> 
        </div>
    );
  }
}

const domContainer = document.querySelector('#game_container');
ReactDOM.render((LikeButton), domContainer);
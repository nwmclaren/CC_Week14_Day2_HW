import React, {Component} from 'react';
import TopTwentyDetail from '../components/TopTwentyDetail.js';

class TopTwentyContainer extends Component {

constructor(props){
  super(props)
    this.state = {
      songs: []
    }
  }

componentDidMount(){
  console.log("Top Twenty Has Landed");
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
  fetch(url)
  .then(res => res.json())
  .then(songs => this.setState({songs:songs.feed.entry}))
}

render(){
  return(
  <div>
  <h2>ITunes Top Twenty Songs</h2>
  <TopTwentyDetail songs={this.state.songs}/>
  </div>
);
}

}

export default TopTwentyContainer;

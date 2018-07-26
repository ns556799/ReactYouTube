import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetail";

import SearchBar from "./components/searchBar";
import logo from "./logo.svg";
import "./App.css";

import config from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboarding");
  }

  videoSearch(term) {
    YTSearch({ key: config.YT_API_KEY, term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearchDebounce = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="page-wrap">
          <SearchBar onSearchTermChange={videoSearchDebounce} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo =>
              this.setState({ selectedVideo: selectedVideo })
            }
            videos={this.state.videos}
          />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

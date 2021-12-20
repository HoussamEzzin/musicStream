import React, {Component} from "react";
import SongPlayer from "../SongPlayer/SongPlayer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Input from "../Input/Input";
import {Button} from "reactstrap";


class Home extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            songs:[],
            playing:false,
            current:'',
            adding: false,
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () =>{
        axios.get("http://localhost:8000/api/songs/")
            .then((res) => this.setState({songs: res.data}))
            .catch((err)=>console.log(err));
    }

    handleChange = (e) => {
        this.setState({
            url: e.target.value
        });
    }

    playSong = (title) =>{
        this.setState({
            playing: true,
            current: "videos/"+title+".mp4",
        })
    }

    addSong = () => {
        this.setState((state) =>({
            adding: !state.adding,
        }));
    }
    renderSongs = () => {
        const newSongs = this.state.songs;

        return newSongs.map((song) => (
            <li key={song.title}>
                <h4>{song.title}</h4>
                <p>{song.description}</p>
                <button onClick={() => this.playSong(song.title)}>
                    <FontAwesomeIcon icon={faPlayCircle}  />
                </button>

                <br/>
                <span>You played this song {song.count} times !</span>

            </li>

        ))
    }

    render(){
        return(
          <div>
              <div>
                  {this.state.adding ? (
                      <Input />

                  ) :
                      <Button className="btn btn-primary"
                              onClick={this.addSong}
                      >Add Song </Button>

                  }

              </div>
              <div className="container d-flex">
                  <ul>
                      {this.renderSongs()}
                  </ul>

                  {this.state.playing ? (
                      <SongPlayer title={this.state.current} />
                  ) : null
                  }

              </div>
          </div>

        );
    }
}

export default Home;
import React, {Component} from "react";
import SongPlayer from "../SongPlayer/SongPlayer";
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';

class Home extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            songs:[],
            play:false,
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

    handleSubmit = () =>{
        this.setState({
            play: !this.state.play
        })
    }

    render(){
        return(
          <div>
              {this.state.play ? (
                      <SongPlayer url={this.state.url}/>
              ) :
                  <Form>
                      <FormGroup>
                          <Label for="song-url">URL</Label>
                          <Input
                              type="text"
                              id="song-url"
                              name="url"
                              value={this.state.url}
                              onChange={this.handleChange}
                              placeholder="Enter the video url"
                          />
                          <Button color="success"
                                  onClick={() => this.handleSubmit}
                          >
                              Play
                          </Button>
                      </FormGroup>
                  </Form>

              }



          </div>
        );
    }
}

export default Home;
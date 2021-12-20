import React, {Component} from "react";
import ReactPlayer from "react-player";

class SongPlayer extends Component{


    render(){
        return(
            <div className="container">
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player "
                        url = {this.props.title}
                        width = '100%'
                        height = '100%'
                        controls={true}
                    />
                </div>
            </div>


    );
    }
}

export default SongPlayer;
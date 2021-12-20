import React, {Component} from "react";
import ReactPlayer from "react-player";

class SongPlayer extends Component{


    render(){
        return(
            <div>
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player "
                        url = {this.props.url}
                        width = '50%'
                        height = '50%'
                        controls={true}
                    />
                </div>
            </div>


    );
    }
}

export default SongPlayer;
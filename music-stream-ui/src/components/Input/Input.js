import React, {Component} from "react";
import axios from "axios";

class Input extends Component{

    constructor(props) {
        super(props);
        this.state= {
            keyword: '',
            submit:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            keyword: event.target.value
        });
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({
            submit: this.state.input,
        });
        console.log("INPUT IS :", this.state.keyword);
        axios.post("http://localhost:8000/search/",this.state.keyword).then((res)=> console.log(res))
    }


    render() {

        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.input}
                        onChange={this.handleChange} />
                    <button type='submit'>Submit!</button>
                </form>

            </div>
        )
    }
}

export default Input;
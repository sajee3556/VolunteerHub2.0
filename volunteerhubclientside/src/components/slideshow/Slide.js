import React, {Component} from 'react';

class Slide extends Component{

    render(){
        let url = this.props.url;
        return(
            <div class="slide">
                    <img class="rounded mx-auto d-block"
                         src={url} alt={"Flower"}
                         width="200" height="200"/>
            </div>
        )
    }
}

export default Slide;
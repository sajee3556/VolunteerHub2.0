import React, {Component} from 'react';
import Slide from "./Slide";

class SlideShow extends Component {
    state = {
        images: [
            {
                id: 1,
                url: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
                id: 2,
                url: "https://images.pexels.com/photos/929778/pexels-photo-929778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
                id: 3,
                url: "https://images.pexels.com/photos/54620/rose-roses-blossom-bloom-54620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
                id: 4,
                url: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
                id: 5,
                url: "https://images.pexels.com/photos/54620/rose-roses-blossom-bloom-54620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
                id: 6,
                url: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
        ]
    };

    render() {
        const {images} = this.state;
        let slides = images.map((image) => {
            return <Slide key={image.id} url={image.url}/>
        });
        return (
            <div class="slide-container">
                {slides}
            </div>
        )
    }
}

export default SlideShow;
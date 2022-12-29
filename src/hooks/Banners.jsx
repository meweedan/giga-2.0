import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class Banners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: false,
            items: []
        }
    }

    componentDidMount () {
        
this.getAll();    }

    getAll() {
        this.setState({loading: true});
        fetch('http://localhost:1337/api/heroes?populate=*')
        .then(res => res.json())
        .then((result) => {
            this.setState({
                loading: false,
                items: result.data,
            })
        }, (error) => {
            this.setState({
                loading: false
            })
        });
    }

    render () {
        const {items} = this.state;
        return (
            <Carousel autoPlay interval="7000" transitionTime="2500" showArrows={false} showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true} autoFocus={true}>
               {
                items.map(item => {
                    const mime = item.attributes.Banner.data.attributes.mime;
                    
                    if (mime  === 'video/mp4') {
                        return (
                            <div key={item.id}>
                      {/* <div className="banner-area"> */}
                                <div className="banner-video">
                                    <video src={`http://localhost:1337${item.attributes.Banner.data.attributes.url}`} alt="Banner video"/>
                              <div className="title"><h3>{item.attributes.Banner_title}</h3></div>
                              <div className="content">{item.attributes.Banner_text}</div>
                            </div>
                          </div>  
                    //  </div>
                        );

                    } 
                    return (
                        <div key={item.id}>
                            <br/>
                            <div className="banner-image">
                                
                            <img src={`http://localhost:1337${item.attributes.Banner.data.attributes.url}`} alt="Banner hero"/></div>
                            
                            <div className="title"><h3>{item.attributes.Banner_title}</h3></div>

                              <div className="content">{item.attributes.Banner_text}</div>
                     </div>
                    );

            })}
            </Carousel>

           
        );
    }
}


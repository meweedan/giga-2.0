import React from "react";

export default class Brands extends React.Component {
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
        fetch('http://localhost:1337/api/brands?populate=*')
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
            items.map(item => (
        <div className="plan-section ptb-120">
            <div key={item.id}>
                <div className="banner-images">
                    <img src={`http://localhost:1337${item.attributes.Brands_img.data.attributes.url}`} alt="Brands we're partnered with" width="90%"/>
                </div>
            </div>
        </div>             

                ))

        );
    }
}

  
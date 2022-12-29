import React from 'react';

export default class Products extends React.Component {
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
        fetch('http://localhost:1337/api/products?populate=*')
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
                                    <div className="gallery-content">
                                <div className="product-item">
                         <img src={`http://localhost:1337${item.attributes.Product_img.data.attributes.url}`} alt="product" width="90%"/>
                            <div key={item.id}>
                            <div className="title"><h3>{item.attributes.Product_name}</h3></div>
                            <div className="plan-price-area">
                                        <h2 className="price-title">{item.attributes.Product_price} LYD</h2></div>
                                        <div className="plan-body" style={{color:"blue"}}>{item.attributes.Product_desc}</div>
                            </div>
                            </div>
            </div>
         </div>
                ))

        );
    }
}


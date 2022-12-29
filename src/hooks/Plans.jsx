import React from 'react'

export default class Plans extends React.Component {
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
        fetch('http://localhost:1337/api/plans/')
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
                <div className="container">                
                <div className="plan-item">
                    <div key={item.id}>
                    
                            <div className="plan-price-area">

                            <div><h3 className="price-title">{item.attributes.Plan_name}</h3></div></div>
                            
                            <div className="plan-price-area">
                                        <h2 className="price-title">{item.attributes.Plan_price} LYD</h2></div>
                                             
                                        <div className="plan-price-area">

                                                   <div className="price-title">{item.attributes.Plan_down}</div>
                                                   <div> <p className="price-title">{item.attributes.Plan_up}</p></div>
                                                   <div> <h3 className="price-title">{item.attributes.Plan_quota}</h3></div>
                                        </div>

                    </div>
                    </div>
                    </div>
                </div>                

                ))

        );
    }
}


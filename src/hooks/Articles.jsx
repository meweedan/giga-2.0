import React from "react";

export default class Articles extends React.Component {
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
        fetch('http://localhost:1337/api/articles?populate=*')
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
                                    <div className="blog-content">
                         <img src={`http://localhost:1337${item.attributes.Article_img.data.attributes.url}`} alt="Article img" width="250px" height="5000px"/>
                            <div key={item.id}>
                            <div className="title" key={"article_title"}><h3>{item.attributes.Article_title}</h3></div>
                            <div className="date" key={"date_plans"}> {item.attributes.Publish_date}</div>
                            <div className="content" key={"news_content"}>{item.attributes.Article}</div>
                            </div>
                            </div>
        
             ))

        );
    }
}


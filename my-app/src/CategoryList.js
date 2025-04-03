import React, { Component } from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
export default class CategoryList extends Component {


    state = {
        categories: []
    }








    componentDidMount() {
        this.getCategories();

    }
    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => this.setState({ categories: data }));;
    }


    changeCategory = (category) => {
        this.setState({ currentCategory: category.categoryName });
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>


                <ListGroup style={{ backgroundColor: "white", width: "100%", height: "100%", cursor:"pointer" }} striped bordered hover size="sm" responsive>

                    {this.state.categories.map(category => (
                        <ListGroupItem
                            active={category.categoryName === this.props.currentCategory ? true : false}

                            onClick={() => this.props.changeCategory(category)} key={category.categoryid}>
                            {category.categoryName}

                        </ListGroupItem>
                    ))}

                </ListGroup>
                {/* <h4>{this.props.currentCategory}</h4> */}
            </div>
        )//  // ✅ `onClick` olayında üst bileşene (`App`) state'i güncellemesi için `props` kullanıyoruz
    }
}
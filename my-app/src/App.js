import React, { Component } from "react";
import Navi from "./Navi";
import './App.css';
import CategoryList from './CategoryList';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import Products from './Products';


export default class App extends Component {


  
  state = {
    currentCategory: "", product: [], cart: [],
  }
  componentDidMount() {

    this.getProduct();
  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
    console.log(category);
    this.getProduct(category.id);
  }
  getProduct = categoryId => {
    // ✅ Ürünleri almak için API'den veri çekiyoruz
    // ✅ `fetch` ile API'den veri çekiyoruz
    // ✅ `then` ile gelen veriyi JSON formatına çeviriyoruz
    // ✅ `then` ile gelen veriyi state'e atıyoruz
    // ✅ `catch` ile hata durumunu yakalıyoruz
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ product: data }));
  }
  addtoCart = (product) => {
    let newCart = this.state.cart;
    var AddedItem = newCart.find(c => c.product.id === product.id);
    if (AddedItem) {
      AddedItem.quantity +=+1;
    } else { newCart.push({ product: product, quantity: 1 }); }
     this.setState({ cart: newCart })
     //  ✅ `cart` state'ine ürün ekliyoruz
  //  ✅ `cart` state'ini güncelliyoruz
  //  ✅ `setState` ile state'i güncelliyoruz
  //  ✅ `newCart` dizisine yeni ürün ekliyoruz
  //  ✅ `newCart` dizisini state'e atıyoruz
  
  } 
  
  DeletetoCart = (product) => {
    let newCart = [...this.state.cart];
    let itemIndex = newCart.findIndex(c => c.product.id === product.id);
    if (itemIndex !== -1) {
      newCart[itemIndex].quantity -= 1; //burda itemleri geri siliyoruz ve bunu oncliğe bağlamak için ben dropdown'a bağlayacağım
      if (newCart[itemIndex].quantity <= 0) {
        newCart.splice(itemIndex, 1);
    }
    this.setState({ cart: newCart });

    } }
    ClearCart = () => {
      this.setState({ cart: [] });
  };
 
  render() {

    return (
      <div className="App">


        <Container>
          {/* ✅ Navi bileşenini ekledik */}
          {/* ✅ Navi bileşenine `title` prop'u gönderdik */}
          <Navi cart={this.state.cart} DeletetoCart={this.DeletetoCart} ClearCart={this.ClearCart } />
          <Row>


            {/* ✅ CategoryList bileşenine `changeCategory` fonksiyonu ve `currentCategory` prop'u gönderildi */}
            <Col xs={4} >
              <CategoryList
                // currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory} info={this.categoryInfo} currentCategory={this.state.currentCategory} />

            </Col>
            <Col xs={8}>
              {/* ✅ Products bileşenine `currentCategory` gönderildi */}
              <Products
                product={this.state.product}
                addtoCart={this.addtoCart}
                currentCategory={this.state.currentCategory} />
            </Col>

          </Row>
        </Container>
      </div>
    )

  }
};

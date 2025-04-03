import React, { Component, useState } from 'react'
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Badge } from 'reactstrap'

export default class CartSummary extends Component {



    renderCartSummary() {
return(
        <div><UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Sepet
            </DropdownToggle>
            <DropdownMenu right >
                {

                    this.props.cart.map(cartItem => (


                        <DropdownItem style={{ color: "success" }}
                            key={cartItem.product.id}
                            onClick={() =>


                                this.props.DeletetoCart(cartItem.product)



                            } /*buradaki kod ise dropdown'a tıkladığımızda silmeye yarıyo*/ >

                            {cartItem.product.productName}
                            <Badge color="success">({cartItem.quantity}) </Badge>
                        </DropdownItem>
                    ))
                    //bu kısım cartitemlarını map olarak alıyor ve sonrasında bir dropdown item olarak yazıyor
                }

                    <DropdownItem divider />
                    <DropdownItem onClick={() => this.props.ClearCart()}>
                        Reset
                    </DropdownItem>
            </DropdownMenu>


        </UncontrolledDropdown> </div>

    )}








    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderCartSummary() : <div></div>}
            </div>
        )
    }
}

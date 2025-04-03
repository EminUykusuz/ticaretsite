import React from "react";
import { Table, Button } from 'reactstrap';


export default class Products extends React.Component {
    
    render() {

        return (

            <div style={{ backgroundColor: "orange",  }}>
                <h3 >Products -{this.props.currentCategory}</h3>
                <p>Product List{ }- </p>
                <Table style={{ backgroundColor: "white", width: "100%", height: "100%" }} striped bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                ProductName
                            </th>
                            <th>
                                Unit Price
                            </th>
                            <th>
                                Quantity Per Unit
                            </th>
                            <th>
                                Units In Stock
                            </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.product.map(product => (
                            <tr key={product.productId}>
                                <th scope="row">{product.id} </th>
                                <td>
                                    {product.productName}
                                </td>
                                <td>
                                    {product.unitPrice}
                                </td>
                                <td>
                                    {product.quantityPerUnit}
                                </td>
                                <td>
                                    {product.unitsInStock}
                                </td>
                                <td>  <Button onClick={() => this.props.addtoCart(product)} color="secondary" outline >
                                    satın al
                                </Button> </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
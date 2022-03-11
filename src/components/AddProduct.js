import React, { useState } from "react";
import ProductService from "../ProductService";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [crea, setCrea] = useState({
    id: "",
    productName: "",
    quantity: "",
    unitPrice: "",
    //	    price = unitPrice*quantity;
    image: "",
    originOfProduct: "",
    isPurchased: "",
  });
  const allCrea = async () => {
    const newProd = await ProductService.get();
  }
    const handleChange = (event) => {
      setCrea({...crea,[event.target.name]: event.target.value});
    
      console.log(event.target);
    }
      const saveProduct = (e) => {
        e.preventDefault();
        let product = {
          id: crea.id,
          productName: crea.productName,
          quantity: crea.quantity,
          unitPrice: crea.unitPrice,
          image: crea.image,
          originOfProduct: crea.originOfProduct,
          isPurchased: crea.isPurchased,
        };
        console.log(product);

        ProductService.createProduct(product)
          .then((res) => {
            navigate("/products");
          })
          .catch((err) => {
            console.log("record not saved.");
          });
      }
        return (
          <div>
            <form>
              {/* <label htmlFor="id">id:</label>
              <input
                id="id"
                onChange={handleChange}
                value={crea.id}
                type="id"
              /> */}
              <label htmlFor="productName">Product Name:</label>
              <input
                id="productName"
                onChange={handleChange}
                value={crea.productName}
                type="productName"
              />
              <label htmlFor="quantity">quantity:</label>
              <input
                id="quantity"
                onChange={handleChange}
                value={crea.quantity}
                type="quantity"
              />
              <label htmlFor="unitPrice">Unit unitPrice:</label>
              <input
                id="unitPrice"
                onChange={handleChange}
                value={crea.unitPrice}
                type="unitPrice"
              />
              {/* <label htmlFor='Price'>Price:
    </label>
    <input id='price' onChange={handleChange} value={crea.price} type='price'/> */}
              {/* <label htmlFor="image">image:</label>
              <input
                id="image"
                onChange={handleChange}
                value={crea.image}
                type="image"
              /> */}
              <label htmlFor="originOfProduct">originOfProduct:</label>
              <input
                id="originOfProduct"
                onChange={handleChange}
                value={crea.originOfProduct}
                type="originOfProduct"
              />
              <label htmlFor="isPurchased">id:</label>
              <input
                id="isPurchased"
                onChange={handleChange}
                value={crea.isPurchased}
                type="isPurchased"
              />
              <button className="store" onClick={saveProduct}>
              add
              </button>
            </form>
          </div>
        );
      
    
  
}
export default AddProduct;

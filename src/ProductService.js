import axios from 'axios';

const PRODUCT_API_BASE_URL="http://localhost:8080/api";
class ProductService{

    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL+"/allproducts");
    }
    createProduct(product){
        return axios.post(PRODUCT_API_BASE_URL+"/addproduct",product);
    }
    getProductById(id){
        return axios.get(PRODUCT_API_BASE_URL+"/product/"+id)
    }
    getProductByName(name){
        console.log(PRODUCT_API_BASE_URL+"/product/name/"+name)

        return axios.get(PRODUCT_API_BASE_URL+"/product/name/"+name)
    }
    updateProduct(student,id){
        return axios.get(PRODUCT_API_BASE_URL+"/product/"+id,student);
    }
    deleteProduct(id){
        return axios.delete(PRODUCT_API_BASE_URL+"/product/"+id);
    }
}

export default new ProductService();
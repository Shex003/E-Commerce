import axios from "axios";
import { createContext } from "react";
import { toast } from "react-hot-toast";

export let CartContext = createContext();

export default function CartContextProvider(props) {
    
    let headers = {
        token: localStorage.getItem('useToken')
    }
   
console.log(headers)
;    async function addProductToCart(productId) {
      return await axios.post("https://ecommerce.routemisr.com/api/v1/cart", 
            {
                productId:productId
            },
             {
                headers 
            }) .then((response)=>{
                console.log(response.data);
                toast.success(response.data.message);
                return response;
            }) .catch((error) => {
                console.log(error);
                // toast.error(response.data.message)
                error.response?.data?.message || 'Something went wrong'
                return error;
            })  
            

    }

    async function getCartProducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
          headers
        }) .then((response)=>{
          console.log(response);
          return response;
        }) .catch((error) => {
          console.log(error);
          return error;
        })
    }

    //Delete Product from Cart

    async function deleteProduct(productId){
        return await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            headers
        }) .then((response)=>{
          console.log(response);
          return response;
        }) .catch((error) => {
          console.log(error);
          return error;
        })
    }
        //Update Product Quantity

        async function updateCartItem(productId, count){
            return await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{

                count: count
            } ,{
                headers
            }) .then((response)=>{
              console.log(response);
              return response;
            }) .catch((error) => {
              console.log(error);
              return error;
            });
        }

    return <CartContext.Provider value={{addProductToCart, updateCartItem, getCartProducts, deleteProduct}}>{props.children}
    </CartContext.Provider>
}
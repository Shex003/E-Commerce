import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export let CartContext = createContext();

export default function CartContextProvider(props) {
    
    const [noOfCartItem, setNoOfCartItem] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartId, setCartId] = useState(null);

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
                console.log(response.data.data._id, "add");
                setCartId(response.data.data._id);
                setTotalPrice(response.data.data.totalCartPrice);
                setNoOfCartItem(response.data.numOfCartItems);
                toast.success(response.data.message);
                return response;
            }) .catch((error) => {
                console.log(error);
                toast.error(response.data.message)
                // error.response?.data?.message || 'Something went wrong'
                return error;
            })  
            

    }

    async function getCartProducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
          headers
        }) .then((response)=>{
          console.log(response);
          setCartId(response.data.data._id);
          setTotalPrice(response.data.data.totalCartPrice);
          setNoOfCartItem(response.data.numOfCartItems);
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
          setTotalPrice(response.data.data.totalCartPrice);
          setNoOfCartItem(response.data.numOfCartItems);
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
              setCartId(response.data.data._id);
              setTotalPrice(response.data.data.totalCartPrice); 
              return response;
            }) .catch((error) => {
              console.log(error);
              return error;
            });
        }

        //Pay Online

        async function onlinePayment(shippingAddress){
          return await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,{

            shippingAddress
          } ,{
              headers
          }) .then((response)=>{
            console.log(response.data.session.url); 
            // setTotalPrice(response.data.data.totalCartPrice);
            // setNoOfCartItem(response.data.numOfCartItems);
            window.location.href= response.data.session.url;
            return response;
          }) .catch((error) => {
            console.log(error);
            return error;
          });
      }

        //Clear Cart products

        async function clearCart(){
            return await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
                headers
            }) .then((response)=>{
              console.log(response);
              return response;
            }) .catch((error) => {
              console.log(error);
              return error;
            })
        }

    return <CartContext.Provider value={{addProductToCart, updateCartItem, getCartProducts, deleteProduct, clearCart, noOfCartItem, totalPrice, onlinePayment}}>{props.children}
    </CartContext.Provider>
}
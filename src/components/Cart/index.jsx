import React,{ useState, useEffect} from "react";
import styled from 'styled-components'

const StyledTopDiv = styled.div`
background-color: #000000;
padding: 12px 0px 12px 15px;
color: #ffffff;
font-size: 12px;
font-weight: 700;
font-family: sans-serif;
`;
const StyledArticle = styled.article`
border: none;
box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
text-align: center;
margin-top: 20px;
 width: 20%;
&:hover{
    transform: translateY(5px);
}
`;
const StyledProductName = styled.h3`
font-size: 18px;
margin-top: 20px;
margin-bottom: -7px;
font-weight: 700;
font-family: sans-serif;
text-align: center;
padding: 0px 16px;
height: 50px;
`;

const StyledSpan = styled.span`
font-size: 13px;
font-weight: 600;
margin-top: 7px;
font-family: sans-serif;
margin-left: 13px;
`;

const Cart = ({cartItems}) => {

    const [open, setOpen] = useState(false);

    console.log(cartItems)
   return(
       <div>
           <StyledTopDiv>My Cart ({cartItems.length} item)</StyledTopDiv>

           {cartItems.length === 0 &&
             <div>no cartItems are there.</div>
           }

               {cartItems.map((item)=>{
                   return(
                   <StyledArticle key={item.product.id}>
                       <img style={{ width: "170px", height: "140px" }} src={item.product.thumbnail} alt={item.product.name} />
                       <StyledProductName>{item.product.title}</StyledProductName>
                       <StyledSpan>Price:{item.product.price}</StyledSpan>
                       <StyledSpan>
                           Quantity:{item.quantity}
                       </StyledSpan>
                   </StyledArticle>
                   )
               })}
           
       </div>
   )
}
export default Cart;
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { AiOutlineCopyright } from "react-icons/ai"
// import { useNavigate } from "react-router-dom";
// import "./prod.css"
const StyledContainer = styled.div`
display: flex;
justify-content: center;
@media (max-width:768px){
    main{
        grid-template-columns: repeat(2,1fr);
    }
}
@media (max-width:500px){
    main{
        grid-template-columns: repeat(1,1fr);
    }
    main > article{
        text-align: center;
    }
}
`;
const StyledCategoryCol = styled.div`
width: 15%;
background-color: #d3d3d387;
margin-left:15px;
`;
const StyledGrid = styled.main`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 0px;
width: 60%;
`;
const StyledArticle = styled.article`
border: none;
box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
text-align: center;
&:hover{
    transform: translateY(5px);
}
`;
const StyledProductName = styled.h3`
font-size: 18px;
margin-top: 20px;
margin-bottom: 30px;
font-weight: 700;
font-family: sans-serif;
text-align: center;
padding: 0px 16px;
height: 50px;
`;

const StyledP = styled.p`
margin-left: 12px;
font-size: 11px;
text-align: left;
margin-right: 12px;
margin-top: 0px;
background-color: #d3d3d387;
margin-top:15px;
height:67px
`;
const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
padding:5px 12px 20px;
`;
const StyledSpan = styled.span`
font-size: 10px;
font-weight: 600;
margin-top: 7px;
font-family: system-ui;
`;
const StyledBuyButton = styled.button`
background-color: #c50707f0;
color: white;
font-size: 10px;
font-family: sans-serif;
padding: 7px;
width: 80px;
border:none;
cursor:pointer;
`;
const StyledUl = styled.ul`
list-style: none;
padding-left: 0px;
&:hover{
    background-color: #c50707f0;
}
`;
const StyledLI = styled.li`
font-size: 11px;
font-family: system-ui;
/* margin: 7px 0px -7px 35px; */
list-style: none;
padding: 10px 0px 10px 40px;
&:hover{
    background-color: #be455a;
    cursor:pointer;
    color: white;
}
`;
const StyledFooter = styled.div`
background-color: #80808021;
padding: 12px 0px 12px 138px;
margin: 0px 0px 50px 20px;
font-size: 11px;
font-family: cursive;
width: 97%;

& svg{
    vertical-align: baseline;
    height: 10px;
}
`;
const Products = ({ productItem , handleAddproduct}) => {
    console.log(productItem)
    const [productList, setProductList] = useState(productItem);
    const uniqueList = [
        ...new Set(
            productItem.map((currEle) => {
                return currEle.category
            })
        )
    ]


    const BrandList = [
        ...new Set(
            productItem.map((currEle) => {
                return currEle.brand
            })
        )
    ]
    console.log(BrandList)

    //    console.log(uniqueList)
    const [categoryItem, setCategoryItem] = useState(uniqueList)
    const [brandItem, setBrandItem] = useState(BrandList)


    const filterProducts = (productCategory) => {
        const newProductList = productItem.filter((ele) => {
            return ele.category === productCategory;
        })
        console.log(newProductList)
        setProductList(newProductList);
        console.log(productList)
    }
    const filterBrand = (productBrand) => {
        const newProductList = productItem.filter((ele) => {
            return ele.brand === productBrand;
        })
        console.log(newProductList)
        setProductList(newProductList);
        console.log(productList)
    }

    // const buyProduct = (clickedProduct) =>{
    //     navigate( 
    //         "/cart",{state:clickedProduct}
    //        );
    // }
    // useEffect(() => {
    //     console.log(categoryItem)
    //     console.log(productItem)
    //     console.log(productList)
    // })
    return (
        <div>
            <StyledContainer>

                <StyledCategoryCol>
                    {
                        categoryItem.map((list, index) => {
                            return (
                                // <StyledUl key={list.id} onClick={()=>filterProducts(list.id)}>
                                <StyledLI key={index} onClick={() => filterProducts(list)}>
                                    {list}
                                </StyledLI>
                                // <hr />
                                // </StyledUl>
                            )
                        })
                    }
                </StyledCategoryCol>
                <StyledCategoryCol>
                    {
                        brandItem.map((brandName, index) => {
                            return (
                                // <StyledUl key={list.id} onClick={()=>filterProducts(list.id)}>
                                <StyledLI key={index} onClick={() => filterBrand(brandName)}>
                                    {brandName}
                                </StyledLI>
                                // <hr />
                                // </StyledUl>
                            )
                        })
                    }
                </StyledCategoryCol>
                <StyledGrid>
                    {
                        productList.map((currEle) => {
                            return (
                                <StyledArticle key={currEle.id}>
                                    <StyledProductName>{currEle.title}</StyledProductName>
                                    <img style={{ width: "100px", height: "100px" }} src={currEle.thumbnail} alt="card image" />
                                    <StyledP>{currEle.description}</StyledP>
                                    <StyledDiv className="text">
                                        <StyledSpan>MRP Rs.{currEle.price}</StyledSpan>
                                        <StyledBuyButton onClick ={() => handleAddproduct(currEle)}>Add to Cart</StyledBuyButton>
                                    </StyledDiv>
                                </StyledArticle>
                            )
                        })
                    }



                </StyledGrid>
            </StyledContainer>
        </div>



    )
}
export default Products;
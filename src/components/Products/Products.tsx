import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { fetchProducts } from "../../store/productService";

const Products = () => {
  const dispatch = useDispatch<any>();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img
            height={"50px"}
            width={"50px"}
            src={product.imageURL}
            alt={product.name}
          />
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default Products;

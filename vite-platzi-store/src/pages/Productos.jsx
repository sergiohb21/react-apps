import { useState,useEffect } from 'react'
import { getProducts } from "../services/productService"
import { CardComponent } from '../components/CardProducto'

export function Productos () {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const productsData = await getProducts();
          setProducts(productsData);
        } catch (error) {
          console.log("Error al traer los productos:", error);
        }
      };
    
      fetchData();
    }, []);

    return (
        <>
            <div class='app'>
                {products.map((product) => (
                    <CardComponent key={product.key} product={product}/>
                ))}
            </div>
        </>
    )
}

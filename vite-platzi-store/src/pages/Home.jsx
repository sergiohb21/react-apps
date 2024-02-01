import { useState,useEffect } from 'react'
import { getProduct } from "../services/singleProductService"
import { CarouselComponent } from '../components/Carousel'

export function Home () {
    const [product, setProduct] = useState([]);
    const numProduct = 4;

    useEffect(() => {
      const fetchData = async (numProduct) => {
        try {
          const productData = await getProduct(numProduct);
          setProduct(productData);
        } catch (error) {
          console.log("Error al traer los producto:", error);
        }
      };
    
      fetchData(numProduct);
    }, []);

    return (
        <>
            <CarouselComponent product={product}/>
        </>
    )
}

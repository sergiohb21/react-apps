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
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Los usuarios también han comprado
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <CardComponent key={product.id} product={product}/>
              ))}
          </div>
        </div>
      </div>
    )
}

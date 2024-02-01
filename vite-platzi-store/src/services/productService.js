const API_URL = "https://api.escuelajs.co/api/v1/products";

const getProducts = async () => {
    try {
        const response = await fetch(API_URL);
        const data     = await response.json();
        
        return data;
    } catch (error) {
        console.log("Error fetch productos: ", error);
        throw error;
    }
}

export { getProducts }
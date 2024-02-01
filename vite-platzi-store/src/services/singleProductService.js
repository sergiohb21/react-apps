const API_URL = "https://api.escuelajs.co/api/v1/products/";

const getProduct = async (numProduct) => {
    try {
        const response = await fetch(`${API_URL}${numProduct}`);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener el producto: ", error.message);
        throw error;
    }
}

export { getProduct }

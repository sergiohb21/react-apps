import { Badge,
  Button,
  Card,
} from "keep-react";
  import {
    Heart,
    ShoppingCart,

  } from "phosphor-react";
import { useState } from "react";

export const CardComponent = ({ product }) => {
  const [isFav, setFav] = useState(false);

  const addFavorito = () => {
      setFav(!isFav)
  }

  const addCarrito = (product) => {
    alert(JSON.stringify(product.price));
  }
  return (
 <>
        <Card
          className="max-w-xs overflow-hidden rounded-md"
          imgSrc={product.images}
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
            <Heart size={20} weight="bold" color={isFav ? "red" : "white"} onClick={addFavorito}/>
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="flex items-center justify-between">
              <Badge size="xs" colorType="light" color="gray">
                Disponible
              </Badge>
              <Card.Title>{product.price} €</Card.Title>
            </Card.Container>
            <Card.Container className="my-3">
              <Card.Title>{product.title}</Card.Title>
            </Card.Container>
            <Card.Container className="flex items-center justify-start gap-5">
              <Button size="sm" type="outlineGray" onClick={() => addCarrito(product)}>
                <span className="pr-2">
                  <ShoppingCart size={24} />
                </span>
                Añadir al carrito
              </Button>
            </Card.Container>
          </Card.Container>
        </Card>
</>
  );
};

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/esm/Card";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "./Item.scss";
import { useState } from "react";

function Item({ data }) {
  const { id, photo, title, price, stock } = data;

  const [quantitySelected, setQuantitySelected] = useState(0);

  const stopProp = (e) => {
    e.preventDefault();
  };

  return (
    <Card style={{ width: "17rem" }} className="text-center m-3 shadow">
      <Link to={`/item/${id}`}>
        <Card.Img
          className="mt-2"
          variant="top"
          src={`/assets/Products/${photo}`}
        />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>

        <Card.Text style={{ fontSize: "1.5rem" }} className="mb-2 text-primary">
          $ {price}
        </Card.Text>

        <div onClick={stopProp}>
          <ItemCount
            quantitySelected={setQuantitySelected}
            stock={stock}
            productData={data}
          />
        </div>

        <Card.Text
          style={{ fontSize: "0.7rem" }}
          className={`${!stock ? "text-danger" : "text-dark"}`}
        >
          Stock: {stock}
        </Card.Text>
      </Link>
    </Card>
  );
}

export default Item;

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../redux/action";
import { Card, Button } from "react-bootstrap";
import "./index.scss";

function ProductCard(props: any, { product = [] }) {
  const { fetchData } = props;
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("props isisi", props.product);
  return (
    <div className="item-container">
      {props.product.map((item: any, index: number) => (
        <Card key={index} className="card-img">
          <Card.Img variant="top" alt="images" src={item.images[0]["url"]} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.shop.name}</Card.Text>
            <Card.Text></Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    product: state.productReducer.products,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

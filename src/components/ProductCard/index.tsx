import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../redux/action";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./index.scss";
import { ProductContent } from "../ProductContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ProductCard(props: any) {
  const [cardVisible, setCardVisible] = useState(12);
  const { fetchData } = props;
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <ProductContent />
      <Row>
        {props.product.slice(0, cardVisible).map((item: any, index: number) => (
          <Col xs={6} lg={4} sm={6} key={index}>
            <Card className="card-items">
              <Card.Img
                variant="top"
                alt="images"
                src={item.images[0]["url"]}
              />
              <div className="item-body">
                <Card.Img
                  alt="images-badge"
                  src={item.badgeImageUrl}
                  className="image-badge"
                />
                <Card.Text>{item.summary}</Card.Text>
                <Card.Text>By {item.shop.name}</Card.Text>
                <Card.Text>{item.price.formattedValue}</Card.Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ padding: "40px" }}>
        {cardVisible <= props.product.length ? (
          <Button
            size="lg"
            variant="outline-secondary"
            className="load-more-button"
            onClick={() => setCardVisible(cardVisible + 9)}
          >
            Load More <FontAwesomeIcon icon={faChevronDown} />
          </Button>
        ) : null}
      </div>
    </Container>
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

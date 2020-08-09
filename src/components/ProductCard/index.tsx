import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./index.scss";
import { fetchData } from "../../redux/action";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { TextLayout } from "../TextLayout";
import FilterProduct from "../FilterProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface ProductReducer {
  productReducer: any;
  sortType: SortType[];
  product: Product[];
}
interface Images {
  url: string;
}

interface Shop {
  name: string;
}
interface Price {
  value: number;
}
interface Item {
  images: Images[];
  name: string;
  shop: Shop;
  badgeImageUrl: string;
  price: Price;
}

interface SortType {
  code: string;
  sortType: string;
  sortName: string;
}

interface Product {
  name: string;
  shop: Shop;
  badgeImageUrl: string;
  images: Images[];
  price: Price;
}
interface Props {
  sortType: SortType[];
  fetchData: () => void;
  product: Product[];
}

function ProductCard(props: Props) {
  const [cardVisible, setCardVisible] = useState(12);
  const { fetchData } = props;
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Container>
      <TextLayout />
      <FilterProduct sortTypes={props.sortType} products={props.product} />
      <p className="item-length">{props.product.length} product found</p>
      <Row>
        {props.product
          .slice(0, cardVisible)
          .map((item: Item, index: number) => (
            <Col xs={6} lg={4} sm={6} key={index}>
              <Card className="card-items">
                <Card.Img
                  variant="top"
                  alt="images"
                  src={item.images[2]["url"]}
                />
                <div className="item-body">
                  <Card.Img
                    alt="images-badge"
                    src={item.badgeImageUrl}
                    className="image-badge"
                  />
                  <Card.Text>{item.name}</Card.Text>
                  <Card.Text>By {item.shop.name}</Card.Text>
                  <Card.Text>£{item.price.value}</Card.Text>
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

const mapStateToProps = (state: ProductReducer) => {
  return {
    product: state.productReducer.products,
    sortType: state.productReducer.sortTypes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

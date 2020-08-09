import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { filterData } from "../../redux/action";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Product {
  name: string;
  price: Price;
}

interface Price {
  value: number;
}

interface SortTypes {
  code: string;
  sortType: string;
  sortName: string;
}

interface Props {
  filterData: (sort: string, products: Product[]) => void;
  products: Product[];
  sortTypes: SortTypes[];
}

function FilterProduct(props: Props) {
  const [OpenDropdown, setOpenDropdown] = useState(false);

  const handleSortType = (sort: string) => {
    props.filterData(sort, props.products);
  };

  return (
    <div className="Filter-box">
      <p onClick={() => setOpenDropdown(!OpenDropdown)}>
        Sort By{" "}
        {OpenDropdown ? (
          <FontAwesomeIcon icon={faChevronLeft} />
        ) : (
          <FontAwesomeIcon icon={faChevronRight} />
        )}
      </p>
      {OpenDropdown ? (
        <>
          {props.sortTypes.slice(1).map((sort, index) => (
            <Col key={index}>
              <p onClick={(e) => handleSortType(sort.code)}>{sort.sortName}</p>
            </Col>
          ))}
        </>
      ) : null}
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    filterData: (sort: string, products: Product[]) =>
      dispatch(filterData(sort, products)),
  };
};

export default connect(null, mapDispatchToProps)(FilterProduct);

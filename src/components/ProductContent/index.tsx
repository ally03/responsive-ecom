import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const ProductContent = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="subtite-text">
      <h3>New In Men’s Clothing</h3>
      <p>
        The new season brings with it a new collection. For men looking for new
        in clothing pieces that are rugged, handsome, and stylish, the hunt is
        over.
        {showMore
          ? "Our classic pieces of quality clothing are here to help you stand out from the crowd. With everything you need for the season ahead, here you’ll find something you want to wear over and over again. For those finishing touches to your outfit be sure to check out our men’s new in footwear and accessories."
          : "..."}
      </p>
      <div onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <h4>
            Read Less <FontAwesomeIcon icon={faChevronUp} />
          </h4>
        ) : (
          <h4>
            Read More <FontAwesomeIcon icon={faChevronDown} />
          </h4>
        )}
      </div>
    </div>
  );
};

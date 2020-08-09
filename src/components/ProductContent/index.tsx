import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const ProductContent = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="subtite-text">
      <h3 className="subtitle-title">Up to 60% Off In The Women’s Sale</h3>
      <p>
        Save up to 60% off in the Joules women’s clothes sale and refresh your
        wardrobe for less. Choose from a beautiful array of ladies’ sale
        clothing including shoes
        {showMore
          ? ", outerwear and accessories all finished with typical Joules attention to detail and thoughtful styling choices. If you’re looking for our latest collections, our new women’s clothing collection is filled with fashionable prints and luxurious materials."
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

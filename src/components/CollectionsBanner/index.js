import { HeaderTextColor } from "utils";

import "./styles.scss";
export const CollectionsBanner = ({ collections }) => {
  return (
    <div className="collections-banner">
      {collections?.map((item, index) => (
        <div key={index} className="collections-banner__item">
          <HeaderTextColor modifiers={["h4"]}>Title</HeaderTextColor>
          <img
            src={item.baseimageurl}
            alt={item.alttext ? item.alttext : "No alt"}
          />
        </div>
      ))}
    </div>
  );
};

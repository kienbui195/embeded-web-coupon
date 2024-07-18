import "./App.css";
import qs from "qs";
import * as React from "react";
import ListProds from "./components/List";
import GridCard from "./components/GridCard";
import CardH from "./components/CardHorizontal";
import CardV from "./components/CardVertical";
import { useLocation } from "react-router-dom";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function App() {
  const query = useQuery();

  // Chuyển query parameters thành object
  const queryObject = Object.fromEntries(query.entries());
  const [prods, setProds] = React.useState([]);

  const handleGetDataProds = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products${
          queryObject.category && queryObject.category !== ""
            ? `/category/${queryObject.category}`
            : ""
        }${queryObject.limit ? `?limit=${queryObject.limit}` : ""}`
      );
      const data = await response.json();
      setProds(data.products);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderOptions = () => {
    let res = <></>;
    switch (queryObject.layout) {
      case "grid":
        res = (
          <GridCard
            data={prods}
            webKey={queryObject.webKey}
            numberCardShow={+queryObject.limit}
          />
        );
        break;
      case "single":
        if (queryObject.cardDirection === "horizontal") {
          res = <CardH prod={prods[0]} webKey={queryObject.webKey} />;
        } else {
          res = <CardV prod={prods[0]} webKey={queryObject.webKey} />;
        }
        break;
      case "list":
        res = (
          <ListProds
            webKey={queryObject.webKey}
            data={prods}
            numberCardShow={+queryObject.limit}
          />
        );
        break;
      default:
        break;
    }
    return res;
  };

  React.useEffect(() => {
    handleGetDataProds();
  }, []);

  return <div className="container m-auto gap-2">{renderOptions()}</div>;
}

export default App;

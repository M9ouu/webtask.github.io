import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { LinkContainer } from "react-router-bootstrap";

export default function Products() {
  const [products, SetProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://myapireact.000webhostapp.com/ViewProduct.php")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setIsLoading(false);
        console.log(json);
        SetProduct(json);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="container-fluid bg-white ">
        <Container>
          <div className="row mt-4 ">
            {isLoading && (
              <h1 style={{ color: "black" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
                  style={{ width: "200px" }}
                />{" "}
                Loading...
              </h1>
            )}
            {products &&
              products.map((item) => (
                <div className="card" style={{ width: "20rem" }}>
                  <div className="bor">
                    <img
                      src={`https://myapireact.000webhostapp.com/Uploads/${item.image}`}
                      className="card-img-top mb-3"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <span>adidas</span>
                    <LinkContainer to={`single/${item.id}`}>
                      <h5 className="card-title mt-2">{item.pname}</h5>
                    </LinkContainer>
                    <div className="star mb-2">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="pri">
                      <div className="price">
                        <h4>${item.price}</h4>
                      </div>
                      <div className="cart">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DLT, add, REMOVE } from "../redux/actions/action";

const CardsDetail = () => {
  const [data, setData] = useState([]);

  const dispatch= useDispatch();

  const navigate= useNavigate();

  const { id } = useParams();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const send=(ele)=>{
    dispatch(add(ele));
  }

  const dlt = (id) => {
    dispatch(DLT(id));
    navigate('/');
  };
  const remove = (ele) => {
    dispatch(REMOVE(ele));
  }

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">Iteams Details Page</h2>

        <section className="container mt-5">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            {" "}
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            {" "}
                            <strong>Price</strong> : ₹{ele.price}
                          </p>
                          <p>
                            {" "}
                            <strong>Dishes</strong> : {ele.address}
                          </p>
                          <p>
                            {" "}
                            <strong>Total</strong> :₹ {ele.price * ele.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={()=>send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ★{" "}
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>{ele.somedata} </span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={()=>dlt(ele.id)}
                              ></i>{" "}
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetail;

import { fetchReviews } from "../apiService/apiService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

export default function Reviews() {
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [reviews, setReviews] = useState();

  useEffect(() => {
    setStatus("loading");
    fetchReviews(id).then((res) => {
      const data = res.results;
      setReviews(data);
      setStatus(data[0] ? "ok" : "notFound");
    });
  }, [id]);

  return (
    <>
      {status === "loading" && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      {status === "ok" && (
        <ul>
          {reviews.map((el) => (
            <li key={el.id}>
              <h2>{`Author: ${el.author}`}</h2>
              <p>{`${el.content}`}</p>
            </li>
          ))}
        </ul>
      )}
      {status === "notFound" && <p>Couldn't find any reviews for this movie</p>}
    </>
  );
}

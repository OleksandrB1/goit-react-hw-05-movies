import { fetchCast } from "../apiService/apiService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState();
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus("loading");
    fetchCast(id).then((res) => {
      const mas = res.cast;
      setCast(mas);
      setStatus(mas[0] ? "ok" : "notFound");
    });
  }, [id]);

  return (
    <>
      {status === "loading" && (
        <Loader
          type="Grid"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={2000}
        />
      )}
      {status === "ok" && (
        <ul className="castList">
          {cast.map((el) => (
            <li className="castItem" key={el.id}>
              {el.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                  alt={el.original_name}
                  width={250}
                />
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
                  alt="No available"
                  width={250}
                />
              )}
              <p>{el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      )}
      {status === "notFound" && <p>Couldn't find movie cast</p>}
    </>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function RestaurantList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    api.get("/restaurants")
      .then((res) => setList(res.data || []))
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch restaurants. Is json-server running?");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Nearby Restaurants</h2>
          <div className="small">User: {localStorage.getItem("fastor_mobile") || "Guest"}</div>
        </div>

        {loading ? (
          <p className="small">Loading...</p>
        ) : (
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 12 }}>
            {list.map((r) => (
              <div key={r.id} className="card restaurant-card" style={{ cursor: "pointer" }} onClick={() => navigate(`/restaurants/${r.id}`)}>
                <img src={r.image} alt={r.name} />
                <h4 style={{ marginTop: 8 }}>{r.name}</h4>
                <div className="small">Lat: {r.lat} • Lng: {r.lng}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

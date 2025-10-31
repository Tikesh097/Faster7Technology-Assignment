import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import Header from "../components/Header";


export default function RestaurantList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
   const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setLoading(true);

    api
    .get("/restaurants")
      .then((res) => {
        setList(res.data || []);
        setFiltered(res.data || []);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch restaurants. Is json-server running?");
      })
      .finally(() => setLoading(false));
  }, []);

  // Handle search and filter
  useEffect(() => {
    let filteredList = [...list];

    // search by name
    if (search.trim()) {
      filteredList = filteredList.filter((r) =>
        r.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // filter by cuisine type (example)
    if (filter !== "all") {
      filteredList = filteredList.filter((r) => r.cuisine === filter);
    }

    setFiltered(filteredList);
  }, [search, filter, list]);


  return (
    <>
      <Header /> 
    <div className="container">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Nearby Restaurants</h2>
          <div className="small">User: {localStorage.getItem("fastor_mobile") || "Guest"}</div>
        </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search restaurants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full sm:w-1/3 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="all">All Cuisines</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
            </select>
          </div>

  {/* Restaurant List */}
          {loading ? (
            <p className="small text-gray-400">Loading...</p>
          ) : filtered.length === 0 ? (
            <p className="text-gray-400">No restaurants found.</p>
          ) : (
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                marginTop: 12,
              }}
            >
              {filtered.map((r) => (
                <div
                  key={r.id}
                  className="card restaurant-card"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/restaurants/${r.id}`)}
                >
                  <img src={r.image} alt={r.name} />
                  <h4 style={{ marginTop: 8 }}>{r.name}</h4>
                  <div className="small">
                    Lat: {r.lat} • Lng: {r.lng}
                  </div>
                  {r.cuisine && (
                    <div
                      className="small"
                      style={{ color: "#60a5fa", marginTop: 4 }}
                    >
                      Cuisine: {r.cuisine}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

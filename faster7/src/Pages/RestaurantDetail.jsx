import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import { Stage, Layer, Image as KImage } from "react-konva";
import useImage from "use-image";
import Header from "../components/Header";

function KonvaImage({ src, width, height, onLoad }) {
  const [image] = useImage(src, "anonymous");

  useEffect(() => {
    if (image) {
      onLoad && onLoad();
    }
  }, [image]);

  if (!image) return null;

  return <KImage image={image} width={width} height={height} />;
}

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rest, setRest] = useState(null);
  const [loading, setLoading] = useState(true);

  const stageRef = useRef(null);
  const [stageSize, setStageSize] = useState({ width: 800, height: 600 });

  const [logo] = useImage("/fastor-logo.png", "Anonymous");
  const [logoPos, setLogoPos] = useState({ x: 320, y: 220 });
  const [logoSize, setLogoSize] = useState({ width: 160, height: 160 });

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const incLoaded = () => setImagesLoaded((v) => v + 1);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/restaurants/${id}`)
      .then((res) => {
        setRest(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch restaurant. Is json-server running?");
      })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    const update = () => {
      const maxWidth = Math.min(900, window.innerWidth - 32);
      const width = maxWidth;
      const height = Math.round((width * 600) / 900);
      setStageSize({ width, height });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const onShare = async () => {
    if (!imagesLoaded) {
      alert("Please wait until images load.");
      return;
    }

    const dataUrl = stageRef.current.toDataURL({ pixelRatio: 2 });
    if (navigator.canShare && navigator.canShare({ files: [] }) && navigator.share) {
      try {
        const res = await fetch(dataUrl);
        const blob = await res.blob();
        const file = new File([blob], `${rest.name.replace(/\s+/g, "_")}_fastor.jpg`, { type: blob.type });
        await navigator.share({
          files: [file],
          title: rest.name,
          text: `Sharing ${rest.name} - created with Fastor demo`
        });
      } catch (e) {
        console.warn(e);
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "fastor.jpg";
        a.click();
      }
    } else if (navigator.share) {
      try {
        await navigator.share({ title: rest.name, text: "Shared from Fastor demo", url: dataUrl });
      } catch (e) {
        console.warn(e);
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "fastor.jpg";
        a.click();
      }
    } else {
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "fastor.jpg";
      a.click();
    }
  };

  if (loading) return <div className="container"><div className="card center">Loading...</div></div>;
  if (!rest) return <div className="container"><div className="card center">Restaurant not found</div></div>;

  return (
    <>
      <Header />
      <div className="container">
        <div className="card" style={{ padding: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h2>{rest.name}</h2>
              <div className="small">Lat: {rest.lat} • Lng: {rest.lng}</div>
            </div>
            <div className="row">
              <button className="secondary" onClick={() => navigate("/restaurants")}>Back</button>
              <button onClick={onShare}>Share / Download</button>
            </div>
          </div>

          <div style={{ marginTop: 12, display: "flex", justifyContent: "center" }}>
            <Stage width={stageSize.width} height={stageSize.height} ref={stageRef}>
              <Layer>
                <KonvaImage src={rest.image} width={stageSize.width} height={stageSize.height} onLoad={incLoaded} />
                {logo && (
                  <KImage
                    image={logo}
                    x={logoPos.x}
                    y={logoPos.y}
                    width={logoSize.width}
                    height={logoSize.height}
                    draggable
                    onDragEnd={(e) => setLogoPos({ x: e.target.x(), y: e.target.y() })}
                  />
                )}
              </Layer>
            </Stage>
          </div>

          <div style={{ marginTop: 12, display: "flex", gap: 12, alignItems: "center" }}>


            <div style={{ marginLeft: "auto" }}>
              {!imagesLoaded && <span className="small">Preparing images...</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
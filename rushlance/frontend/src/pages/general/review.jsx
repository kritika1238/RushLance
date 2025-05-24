import NavigationBar from "../users/components/navigation";
import SideBar from "../users/components/sidebar";

const reviews = [
  {
    user: "Anonymous User",
    date: "04/07/2025 08:38:49 PM",
    rating: 5,
    text: "",
    edited: false,
  },
  {
    user: "Anonymous User",
    date: "04/07/2025 08:38:06 PM",
    rating: 4,
    text: "",
    edited: true,
  },
  {
    user: "Anonymous User",
    date: "04/07/2025 08:37:38 PM",
    rating: 5,
    text: "They are very skilled at their work. Very satisfied!",
    edited: false,
  },
];

const distribution = [33.3, 33.3, 33.3, 0.0, 0.0];

function Reviews() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavigationBar />

      <div style={{ display: "flex", flex: 1 }}>
        <SideBar />

        <main
          style={{
            flex: 1,
            padding: "40px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Rating & Reviews
          </h1>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              width: "100%",
              maxWidth: "700px",
              boxShadow: "0 4px 8px #6a6a6b",
              marginBottom: "30px",
            }}
          >
      
          <div style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
            4.0
            <span style={{ fontSize: "15px", color: "#666" }}> &nbsp; 15 users</span>
          </div>

            {distribution.map((percent, idx) => (
              <div
                key={5 - idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span style={{ width: "20px" }}>{5 - idx}</span>
                <div
                  style={{
                    height: "10px",
                    background: "#eee",
                    width: "100%",
                    margin: "0 10px",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${percent}%`,
                      background: "#bbb",
                      height: "100%",
                    }}
                  ></div>
                </div>
                <span>{percent.toFixed(1)}%</span>
              </div>
            ))}
          </div>

          <div style={{ width: "100%", maxWidth: "700px" }}>
            <h3 style={{ marginBottom: "10px" }}>
              All Reviews ({reviews.length}){" "}
              <a href="#" style={{ fontSize: "12px" }}>
                &nbsp; + Add Review
              </a>
            </h3>
            {reviews.map((r, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  boxShadow: "0 2px 5px #8e8d8f",
                }}
              >
                <div style={{ fontSize: "14px", color: "#444", marginBottom: "5px" }}>
                  <strong>{r.user}</strong> – {r.date} {r.edited && <em>(Edited)</em>}
                </div>
                <div style={{ fontSize: "18px", color: "grey" }}>
                  {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                </div>
                {r.text && (
                  <div style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
                    {r.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Reviews;

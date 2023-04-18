import { useNavigate } from "react-router-dom";

function Match({ match }) {
  const navigate = useNavigate();
  return (
    <div className="" style={{ width: "50%", float: "left" }}>
      <div className="">
        <div className="">
          <div className="card m-3">
            <h3 style={{ textAlign: "center", marginTop: "3px" }}>
              Match Number : {match.number}
            </h3>
            <hr></hr>
            <div style={{ margin: "5px 5px", padding: "5px 40px" }}>
              <div style={{ width: "33%", float: "left" }}>
                <p className="text-sm" style={{ fontWeight: "bold" }}>
                  Home Team
                </p>
                <p className="text-sm">{match.team1}</p>
              </div>
              <div style={{ width: "33%", float: "left" }}>
                <p className="text-sm" style={{ fontWeight: "bold" }}>
                  Away Team
                </p>
                <p className="text-sm">{match.team2}</p>
              </div>

              <div style={{ float: "right" }}>
                <p className="text-sm" style={{ fontWeight: "bold" }}>
                  Place
                </p>
                <p className="text-sm">{match.place}</p>
              </div>

              <div>
                <p className="text-sm" style={{ fontWeight: "bold" }}>
                  Capacity
                </p>
                <p className="text-sm">{match.capacity}</p>
              </div>

              <div style={{ width: "33%", float: "left" }}>
                <p className="text-sm" style={{ fontWeight: "bold" }}>
                  Date
                </p>
                <p className="text-sm">{match.date}</p>
              </div>

              <div style={{ width: "33%", float: "left" }}>
                <p className="text-sm" style={{ fontWeight: "bold" }}>
                  Time
                </p>
                <p className="text-sm">{match.time}</p>
              </div>

              <div style={{ width: "33%", float: "right" }}>
                <p className="text-sm" style={{ fontWeight: "bold" }}>
                  Fare
                </p>
                <p className="text-sm">{match.fare}</p>
              </div>
              <div style={{ textAlign: "center", paddingTop: "80px" }}>
                <button
                  className="primary-btn"
                  onClick={() => {
                    navigate(`/book-now/${match._id}`);
                  }}
                >
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;

import { message, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MatchForm from "../../components/MatchForm";
import PageTitle from "../../components/PageTitle";
import { axiosInstance } from "../../helper/axiosInstance";
import { HideLoading, ShowLoading } from "../../redux/alertsSlice";
function AdminMatches() {
  const [showMatchForm, setMatchForm] = useState(false);
  const [matches, setMatches] = useState(null);
  const [seletedMatch, setSeletedMatch] = useState(null);
  const dispatch = useDispatch();
  const getMatchess = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post(
        "http://localhost:5000/matches/get-all-matches",
        {}
      );
      dispatch(HideLoading());
      // console.log({r1 : response.data.success});
      if (response.data.success) {
        setMatches(response.data.data);
        // dispatch(HideLoading());
        // console.log({r2:matchess});
        console.log({ r3: response.data.data });
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const deleteMatch = async (id) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post(
        "http://localhost:5000/matches/delete-match",
        {_id : id}
      );
      dispatch(HideLoading());
      // console.log({r1 : response.data.success});
      if (response.data.success) {
        message.success(response.data.message);
        getMatchess();
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  const columns = [
    // {
    //   title: "Match",
    //   dataIndex: "number",
    //   key:"number"
    // },
    // {
    //   title: "Stadium Capacity",
    //   dataIndex: "capacity",
    //   key: "capacity",
    // },
    {
      title: "Home Team",
      dataIndex: "team1",
      key: "team1",
    },
    {
      title: "Away Team",
      dataIndex: "team2",
      key: "team2",
    },
    // {
    //   title: "Place",
    //   dataIndex: "place",
    //   key: "place",
    // },
    // {
    //   title: "Date",
    //   dataIndex: "date",
    //   key: "date",
    // },
    // {
    //   title: "Time",
    //   dataIndex: "time",
    //   key: "time",
    // },

    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   key: "status",
    // },
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   key: "action",
    // },
  ];
  const dataset = [
    {
      // "_id": "643bd4c20a57184236f1adbf",
      // "number": "1",
      // "capacity": "100",
      team1: "RCB",
      team2: "CSK",
      // "place": "BANGALORE",
      // "date": "2023-04-19",
      // "time": "15:30",
      // "fare": "2000",
      // "seatBooked": [],
      // "seatsAvailable": "Yet to start",
      // "__v": 0
    },
    {
      // "_id": "643bf0d340fcf165fb18d0c3",
      // "number": "2",
      // "capacity": "100",
      team1: "RCB",
      team2: "MI",
      // "place": "BANGALORE",
      // "date": "2023-04-21",
      // "time": "15:30",
      // "fare": "2000",
      // "seatBooked": [],
      // "seatsAvailable": "Yet to start",
      // "__v": 0
    },
  ];

  useEffect(() => {
    getMatchess();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <PageTitle title="Matches"></PageTitle>
        <button
          className="primary-btn"
          onClick={() => {
            setMatchForm(true);
          }}
        >
          Add Matches
        </button>
      </div>
      {/* <Table columns={columns} dataSources = {dataset} ></Table> */}
      <table
        style={{
          backgroundColor: "white",
          padding: "20px",
          marginLeft: "-.2%",
        }}
      >
        <thead>
          <tr>
            <th class="smaller alignLeft">Match Number</th>
            {/* <th className='col-2'></th> */}
            <th className="smaller alignLeft">Home Team</th>
            <th className="smaller alignLeft">Away Team</th>
            <th className="smaller alignLeft">Capacity</th>
            <th className="smaller alignLeft">Place</th>
            <th className="smaller alignLeft">Date</th>
            <th className="smaller alignLeft">Status</th>
            <th className="smaller alignLeft">Action</th>
          </tr>
        </thead>
        <tbody>
          <>
            {" "}
            {matches &&
              matches.length > 0 &&
              matches.map((player,index) => (
                <>
                  <tr>
                    <td class="alignLeft highlighted">{player.number}</td>
                    <td class="alignLeft highlighted">{player.team1}</td>
                    <td class="alignLeft highlighted">{player.team2}</td>
                    <td class="alignLeft highlighted">{player.capacity}</td>
                    <td class="alignLeft highlighted">{player.place}</td>
                    <td class="alignLeft highlighted">{player.date}</td>
                    <td class="alignLeft highlighted">{player.seatsAvailable
}</td>
                    <td class="alignLeft highlighted">
                      
                        <div className="d-flex gap-3">
                          <button style={{border:"none" , background:"none"}} onClick={()=>{
                            setMatchForm(true);
                            setSeletedMatch(player);
                          }}><i className="ri-pencil-line"></i></button>
                          <button style={{border:"none" , background:"none"}} onClick={()=>{
                            deleteMatch(player._id);
                          }}><i className="ri-delete-bin-line"></i></button>
                        </div>
                      
                    </td>
                  </tr>
                </>
              ))}{" "}
          </>
        </tbody>
      </table>

      {showMatchForm && (
        <MatchForm
          showMatchForm={showMatchForm}
          setShowMatchForm={setMatchForm}
          type={seletedMatch ? "edit":"add"}
          seletedMatch={seletedMatch}
          getMatchess = {getMatchess}
          setSeletedMatch = {setSeletedMatch}
        ></MatchForm>
      )}
    </div>
  );
}

export default AdminMatches;

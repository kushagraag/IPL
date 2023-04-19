import { message, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../../helper/axiosInstance";
import { HideLoading, ShowLoading } from "../../redux/alertsSlice";

function AdminUsers() {
  const [showMatchForm, setMatchForm] = useState(false);
  const [users, setUsers] = useState(null);
  const [seletedUser, setSeletedSelect] = useState(null);
  const dispatch = useDispatch();
  const getUsers = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post(
        "http://localhost:5000/user/get-all-users",
        {}
      );
      dispatch(HideLoading());
      if (response.data.success) {
        setUsers(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const updateUserPermission = async (user, action) => {
    try {
      let payLoad = null;
      if(action === 'block'){
        payLoad = {
          ...user,
          isBlocked : true
        }
      }
      else if(action === 'unblock'){
        payLoad = {
          ...user,
          isBlocked : false
        }
      }
      else if(action === 'Make Admin'){
        payLoad = {
          ...user,
          isadmin : true
        }
      }
      else if(action === 'Remove Admin'){
        payLoad = {
          ...user,
          isadmin : false
        }
      }
      dispatch(ShowLoading());
      const response = await axiosInstance.post(
        "http://localhost:5000/user/update-user-permission",
        payLoad
      );
      dispatch(HideLoading());
      if (response.data.success) {
        getUsers();
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <table
        style={{
          backgroundColor: "white",
          padding: "20px",
          marginLeft: "-.2%",
        }}
      >
        <thead>
          <tr>
            <th class="smaller alignLeft">User Email</th>
            {/* <th className='col-2'></th> */}
            <th className="smaller alignLeft">User Name</th>
            <th className="smaller alignLeft">Role</th>
            <th className="smaller alignLeft">Block</th>
            <th className="smaller alignLeft">Action</th>
          </tr>
        </thead>
        <tbody>
          <>
            {" "}
            {users &&
              users.length > 0 &&
              users.map((player, index) => (
                <>
                  <tr>
                    <td class="alignLeft highlighted">{player.email}</td>
                    <td class="alignLeft highlighted">{player.name}</td>
                    <td class="alignLeft highlighted">
                      {player.isadmin === true ? "Admin" : "User"}
                    </td>
                    <td class="alignLeft highlighted">
                      <div className="d-flex gap-3">
                        {player.isBlocked && (
                          <button
                            className="primary-btn"
                            style={{}}
                            onClick={() =>
                              updateUserPermission(player, "unblock")
                            }
                          >
                            {player.isBlocked === true ? "Unblock" : "Block"}
                          </button>
                        )}
                        {!player.isBlocked && (
                          <button
                            className="primary-btn"
                            style={{}}
                            onClick={() =>
                              updateUserPermission(player, "block")
                            }
                          >
                            {player.isBlocked === true ? "Unblock" : "Block"}
                          </button>
                        )}
                      </div>
                    </td>

                    <td class="alignLeft highlighted">
                      <div className="d-flex gap-3">
                        { player.isadmin && <button className="primary-btn" style={{}} onClick={()=>updateUserPermission(player,"Remove Admin")}>
                          {player.isadmin === true
                            ? "Remove Admin"
                            : "Make Admin"}
                        </button>}
                        { !player.isadmin && <button className="primary-btn" style={{}} onClick={()=>updateUserPermission(player,"Make Admin")}>
                          {player.isadmin === true
                            ? "Remove Admin"
                            : "Make Admin"}
                        </button>}
                      </div>
                    </td>
                  </tr>
                </>
              ))}{" "}
          </>
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;

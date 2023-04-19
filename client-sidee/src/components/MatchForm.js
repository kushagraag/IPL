import React, { useState } from "react";
import { Col, Form, message, Modal, Row } from "antd";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../helper/axiosInstance";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
function MatchForm({ showMatchForm, setShowMatchForm , type,getMatchess,seletedMatch,setSeletedMatch}) {
  const dispatch = useDispatch();
  const onFinish = async(values) =>{
    try{
      dispatch(ShowLoading());
      let response = null;
      if(type === 'add'){
        response = await axiosInstance.post('http://localhost:5000/matches/add-match',values)
      }
      else{
        console.log(values);
        response = await axiosInstance.post("http://localhost:5000/matches/update-match",{
          ...values,
          _id: seletedMatch._id
        });

      }
      if(response.data.success){
        message.success(response.data.message);
      }
      else{
        message.error(response.data.message);
      }
      getMatchess();
      setShowMatchForm(false);
      setSeletedMatch(null)
      dispatch(HideLoading());

    }
    catch(error){
      dispatch(HideLoading());
      message.error(error.message);
    }
  }
  return (
    <Modal
      width={800}
      title={type === 'add'? "Add Match" : "Edit Match"}
      visible={showMatchForm}
      onCancel={() =>{
        setSeletedMatch(null) 
        setShowMatchForm(false)
      }
        }
      footer={null}
    >
      <Form layout="vertical" onFinish={onFinish}  initialValues={seletedMatch}>
        <Row gutter={[10,10]}>
          <Col lg={12} xs={24}>
            <Form.Item label="Match Number" name="number">
              <input type="number"></input>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Ground Capacity" name="capacity">
              <input type="number"></input>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Home Team" name="team1">
              <input type="text"></input>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Away Team" name="team2">
              <input type="text"></input>
            </Form.Item>
          </Col>
          <Col lg={24} xs={24}>
            <Form.Item label="Place" name="place">
              <input type="text"></input>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Date" name="date">
              <input type="date"></input>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Time" name="time">
              <input type="time"></input>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Fare (in Rs)" name="fare">
              <input type="number"></input>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Status" name="seatsAvailable">
              <select name="" id="">
                <option value="Yet to start">Yet to start</option> 
                <option value="Completed">Completed</option> 
              </select>
            </Form.Item>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <button className="primary-btn" type="submit">Add match</button>
        </div>
      </Form>
    </Modal>
  );
}

export default MatchForm;

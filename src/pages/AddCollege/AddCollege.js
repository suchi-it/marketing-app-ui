import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { EditorState } from "draft-js";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OverlayLoader from "src/common/OverlayLoader";
import "./AddCollege.css";
import * as React from 'react';
import { getallcollegesrecords } from "src/services/ApiService";

export default function AddCollege() {
  const [District, setDistrict] = useState();
  const [CollegeName, setCollegeName] = useState();
  const [Collegecode, setCollegeCode] = useState();
  const [Mandal, setMandal] = useState();
  const [State, setState] = useState();
  const [POCname, setPOCName] = useState();
  const [POCPhone, setPOCPhone] = useState();
  const [POCEmail, setPOCEmail] = useState();
  const [Dateofvisit, setDateOfVisit] = useState();
  const [MOUStatus, setMOUstatus] = useState();
  const [DueDate, setDueDate] = useState();
  const [Comments, setComments] = useState();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [showLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };
  const handleCollegeNameChange = (e) => {
    setCollegeName(e.target.value);
  };
  const handleCollegeCodeChange = (e) => {
    setCollegeCode(e.target.value);
  };
  const handleMandalChange = (e) => {
    setMandal(e.target.value);
  };
  const handlestateChange = (e) => {
    setState(e.target.value);
  };
  const handlePOCnameChange = (e) => {
    setPOCName(e.target.value);
  };
  const handlePOCphoneChange = (e) => {
    setPOCPhone(e.target.value);
  };
  const handlePOCEmailChange = (e) => {
    setPOCEmail(e.target.value);
  };
  const handleDateofvisitChange = (e) => {
    setDateOfVisit(e.target.value);
  };
  const handleMOUStatuschange = (e) => {
    setMOUstatus(e.target.value);
  };

  const handleDuedateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      district: District,
      collegename: CollegeName,
      collegecode: Collegecode,
      mandal: Mandal,
      state: State,
      pocname: POCname,
      pocphone: POCPhone,
      pocemail: POCEmail,
      dateofvisit: Dateofvisit,
      moustatus: MOUStatus,
      duedate: DueDate,
      comments: Comments,

    }
     console.log(payload)


    // AddCollege(payload)
    //  . then((res)=>{
    //     console.log(res);
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   });


    //navigate('/ZonalHead') 
  };

  return (

    <div style={{ maxWidth: 1300, margin: "0 auto" }}>
      {showLoading && <OverlayLoader show={true} />}
      {/* <div>
        <Typography variant="h6">Add College</Typography>
      </div> */}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          to="/suchi/home"
          color="inherit"
          underline="hover"
          style={{ textDecoration: "none" }}
        >
          <Typography variant="label"><b>Home</b></Typography>
        </Link>
        <Typography variant="h6"><b>Add College</b></Typography>
      </Breadcrumbs>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 20,
          backgroundColor: "#fff",
          margin: 10,

        }}
      >
        <div>
          <span class="star" style={{ position:"relative" }}>*<span style={{ color: "black" }}>Required</span></span>
        </div>
        <div style={{ width: "85%"}}>
          <div className="form-property" >
            <label className="form-label"><b>District</b><span class="star">*</span></label>
            <div className="form-field">

              <select style={{ padding: "10px 338px", border: "2px solid lightgray"}} onChange={(e) => setDistrict(e.target.value)}>
                <option id="District" size="large" >Select District</option>
                <option value="AP">Districts in AP </option>
                <option value="TS">Districts in TS</option>
              </select>

            </div>
          </div>

          <div className="form-property">
            <label className="form-label"><b>College Name</b><span class="star" >*</span></label>
            {/* <span class="star">*</span> */}
            <div className="form-field">
              <TextField
                Required
                id="outlined-required"
                label="required"
                //defaultValue="Enter College Name"
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="College Name"
                value={CollegeName}
                onChange={handleCollegeNameChange}
                placeholder="Enter College Name"
              ></TextField>
            </div>
          </div>

          <div className="form-property">
            <label className="form-label"><b>College Code</b><span class="star">*</span></label>
            <div className="form-field">
              <TextField
                required
                id="outlined-required"
                label="Required"
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="College Code"
                value={Collegecode}
                onChange={handleCollegeCodeChange}
                placeholder="Enter College Code"
              ></TextField>
            </div>
          </div>

          <div className="form-property">
            <label className="form-label"><b>Mandal</b><span class="star">*</span></label>
            <div className="form-field">
              <span>

              </span>
              <TextField
                required
                id="outlined-required"
                label="Required"
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="Mandal"
                value={Mandal}
                onChange={handleMandalChange}
                placeholder="Enter Your Mandal "
              ></TextField>
            </div>
          </div>

          <div className="form-property">
            <label className="form-label"><b>State</b><span class="star">*</span></label>
            <div className="form-field">
              <select style={{ padding: "10px 335px", border: "2px solid lightgray" }} onChange={(e) => setState(e.target.value)}>
                <option id="country-state" name="country-state" size="large">Select State</option>
                <option value="AP">AndhraPradesh</option>
                <option value="TS">Telangana</option>
              </select>
              {/* <TextField
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="State"
                value={State}
                onChange={handlestateChange}

              ></TextField> */}
              {/* <select id="country-state" name="country-state" size="large">
                <option value="">Select state</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
              </select> */}
            </div>
          </div>

          <div className="form-property">
            <label className="form-label"><b>POC Name</b><span class="star">*</span></label>
            <div className="form-field">
              <TextField
                required
                id="outlined-required"
                label="Required"
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="POC Name"
                value={POCname}
                onChange={handlePOCnameChange}
                placeholder="Enter POC Name"
              ></TextField>
            </div>
          </div>

          <div className="form-property">
            <label className="form-label"><b>POC Phone</b><span class="star">*</span></label>
            <div className="form-field">
              <TextField
                required
                id="outlined-required"
                label="Required"
                type="text"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="POC Phone"
                value={POCPhone}
                onChange={handlePOCphoneChange}
                placeholder="Enter POC Phone"
              ></TextField>
            </div>
          </div>

          <div className="form-property">
            <label className="form-label"><b>POC Email</b><span class="star">*</span></label>
            <div className="form-field">
              <TextField
                required
                id="outlined-required"
                label="Required"
                type="email"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="POC Email"
                value={POCEmail}
                onChange={handlePOCEmailChange}
                placeholder="Enter POC Email"
              ></TextField>
            </div>
          </div>

          <div className="form-property">
            <label className="form-label"><b>Date of Visit</b><span class="star">*</span></label>
            {/* <input type="date" id="Date Of Visit" /> */}
            <div className="form-field">
              <TextField
                required data-readonly
                type="date"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="Date of Visit"
                value={Dateofvisit}
                onChange={handleDateofvisitChange}
              ></TextField>
            </div>
          </div>

          <div className="form-property">
            <label className="form-label" ><b>MOU Status</b><span class="star">*</span></label>
            <div className="form-field">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="none"
                  name="radio-buttons-group"
                  //onChange={handleMOUStatuschange}
                  onChange={(e) => setMOUstatus(e.target.value)}
                  placeholder="Enter MOU Status"
                >
                  <FormControlLabel value="Accepted" control={<Radio />} label="Accepted" />
                  <FormControlLabel value="Rejected" control={<Radio />} label="Rejected" />
                  <FormControlLabel value="Revisit" control={<Radio />} label="Revisit" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          <div className="form-property">
            <label className="form-label"><b>Due Date</b><span class="star">*</span></label>
            <div className="form-field">
              <TextField
                required data-readonly
                type="date"
                size="small"
                fullWidth
                sx={{ mb: 1 }}
                name="Due Date"
                value={DueDate}
                onChange={handleDuedateChange}
              ></TextField>
            </div>
          </div>

          <div className="form-property">
            <label className="form-label"><b>Comments</b><span class="star">*</span></label>
            <div className="form-field">
              <TextField
                id="outlined-multiline-flexible"
                // label="Multiline"
                multiline
                maxRows={5}
                fullWidth
                onChange={(e) => setComments(e.target.value)}
                placeholder="Write Your Comments Here"
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <button className="btn btn-primary" onClick={handleSubmit} >
          <b>Submit</b>
        </button>
        {/* <button className="btn btn-primary" onClick={() => handleSubmit(true)}>
          Sign and Submit
        </button> */}
      </div>
    </div>
  );
}

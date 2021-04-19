import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MuiPhoneNumber from "material-ui-phone-number";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FileUploader from "react-firebase-file-uploader";
import { storage } from "../services/firebase";
import FileUploadField from "./FileUploadField";
const NATIONALITY = [
  {
    value: "Pakistani",
    label: "Pakistani",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const RELIGION = [
  {
    value: "Islam",
    label: "Islam",
  },
  {
    value: "Christianity",
    label: "Christianity",
  },
  {
    value: "Budhist",
    label: "Budhist",
  },
  {
    value: "Other",
    label: "Other",
  },
];
const CONTRACTSITUATION = [
  {
    value: "Finished",
    label: "Finished",
  },
  {
    value: "Broken Contract",
    label: "Broken Contract",
  },
  {
    value: "Terminated",
    label: "Terminated",
  },
  {
    value: "Unemployed/Job Less",
    label: "Unemployed",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

export default function (props) {
  const classes = useStyles();
  return (
    <div className="container-fluid">
      <form className={classes.root} autoComplete="off" fullWidth="true">
        <TextField
          id="standard-basic"
          label="Full Name*"
          fullWidth="true"
          onChange={(e) => props.setFullName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Title of My Offer*"
          fullWidth="true"
          required
          onChange={(e) => {
            props.settitleOfOffer(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Define your needs*"
          fullWidth="true"
          onChange={(e) => {
            props.setdefineyourneeds(e.target.value);
          }}
          required
        />
        <TextField
          id="standard-basic"
          label="Please Enter your Complete Address*"
          fullWidth="true"
          onChange={(e) => {
            props.setcompleteAddress(e.target.value);
          }}
          required
        />
        <MuiPhoneNumber defaultCountry={"pk"} onChange={(e)=>props.MuiPhone(e)}/>

        <TextField
          id="standard-select-currency-native"
          select
          label="Select"
          value={props.nationality}
          onChange={props.handleNationlaity}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your Nationality"
        >
          {NATIONALITY.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Select"
          value={props.religion}
          onChange={props.handleReligion}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your Religion"
        >
          {RELIGION.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Select"
          onChange={(e) => {
            console.log(e.target.value);
            props.setContractSituation(e.target.value);
          }}
          SelectProps={{
            native: true,
          }}
          helperText="Contract Situation"
        >
          {CONTRACTSITUATION.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-basic"
          label="Monthly Salary*"
          fullWidth="true"
          onChange={(e) => props.setmonthlySalary(e.target.value)}
        />
        <h5>Make sure you offer minimum salary to the worker expectations.</h5>
        <div className="col-lg-6 mb-3">
          <div
            className="card text-center "
            style={{ width: "400px", height: "210px" }}
          >
            {/* {console.log(props.image1Ur)} */}
            <img
              src={props.image1Ur}
              alt
              className="img-fluid"
              style={{ width: "400px", height: "210px" }}
            />
            <div className="doctor-book-card-content tile-card-content-1">
              <div style={{ marginTop: "4rem", color: "white" }}>
                <FileUploader
                  accept="image/*"
                  name="avatar"
                  randomizeFilename
                  storageRef={storage.ref("images")}
                  onUploadSuccess={props.handleUploadSucces}
                  style={{ color: "white", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.handleSubmit()}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../store/optionsSlice";
import FileDownload from "js-file-download";
import Button from "../Button";
import "./selectOptions.css";

const SelectOptions = ({ where }) => {
  const navigate = useNavigate();
  const options = useSelector((state) => state.options.options);
  const dispatch = useDispatch();
  const [option1, setOption1] = useState(options[0]);
  const [option2, setOption2] = useState(options[1]);

  const downloadJson = (e) => {
    e.preventDefault();
    axios({
      url: "//localhost:5000/download",
      method: "POST",
      responseType: "blob",
    }).then((response) => {
      FileDownload(response.data, "output.json");
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (option1 === option2) {
      toast.error("Choose different option");
      return;
    }
    const data = [option1, option2];
    dispatch(change(data));
    if (where === "uploader") {
      axios.post("//localhost:5000/runPy").then((response) => {
        toast.success("Run Success");
        navigate("/elegant", { state: { data: response.data } });
      });
    }
  };
  return (
    <>
      <form className="options">
        <p className="options_cmd">Select 2 options</p>
        <hr />
        <span>x:</span>
        <select value={option1} onChange={(e) => setOption1(e.target.value)}>
          <option value="score">Score</option>
          <option value="conditionals">Conditionals</option>
          <option value="loops">Loops</option>
          <option value="functions">Functions</option>
          <option value="functions_recursion">Functions recursion</option>
          <option value="max_depth">Max depth</option>
          <option value="avg_depth">Average depth</option>
          <option value="sum_depth">Sum depth</option>
        </select>
        <span>y:</span>
        <select value={option2} onChange={(e) => setOption2(e.target.value)}>
          <option value="score">Score</option>
          <option value="conditionals">Conditionals</option>
          <option value="loops">Loops</option>
          <option value="functions">Functions</option>
          <option value="functions_recursion">Functions recursion</option>
          <option value="max_depth">Max depth</option>
          <option value="avg_depth">Average depth</option>
          <option value="sum_depth">Sum depth</option>
        </select>
        <hr />
        <br />
        <Button onClick={onSubmit}>Check Elegance</Button>
        <Button onClick={downloadJson}>Download JSON</Button>
      </form>
    </>
  );
};

export default SelectOptions;

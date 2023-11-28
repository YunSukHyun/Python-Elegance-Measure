import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./fileUploader.css";
import SelectOptions from "../SelectOptions";

const FileUploader = () => {
  const [files, setFiles] = useState({});
  const [fileInputText, setFileInputText] = useState("form-control noShow");
  const [showOptions, setShowOptions] = useState(false);

  const onInputChange = (e) => {
    setFiles(e.target.files);
    setFileInputText("form-control");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.values(files).forEach((file) => data.append("file", file));

    if (files.length === 0) {
      toast.error("Upload at least one file");
      return;
    }

    data.append("file", files);

    axios
      .post("//localhost:5000/upload", data)
      .then((e) => {
        toast.success("Upload Success", e);
        setShowOptions(true);
      })
      .catch((e) => {
        toast.error("Upload Error", e);
      });
  };

  return (
    <>
      <form method="post" action="#" id="#" onSubmit={onSubmit}>
        <div className="form-group files">
          <input
            type="file"
            accept=".py"
            onChange={onInputChange}
            className={fileInputText}
            multiple
          />
        </div>
        <button className="btn">submit code</button>
      </form>
      {showOptions && <SelectOptions where="uploader" />}
    </>
  );
};

export default FileUploader;

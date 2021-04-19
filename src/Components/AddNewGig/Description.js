import React, { useState } from "react";
import { storage } from "../../services/firebase";
import HomeNav from "../HomeNav";
import { Editor,EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";

const Description = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    convertContentToHTML();
    props.history.push("/gig/Gallery",{...props.history.location.state,description:convertedContent})
  };

  // console.log()
  const [editorState, setEditorState] = useState("");
  const [convertedContent, setConvertedContent] = useState();
  const [conform,setConform]=useState(false)
  const convertContentToHTML = () => {
    if(editorState.getCurrentContent()){
      let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
      setConvertedContent(currentContentAsHTML);
      setConform(true)
    }
    
  };

  return (
    <>
      <HomeNav history={props.history}/>

      <div className="page-wrapper" style={{ width: "90%", margin: "auto" }}>
        <div className="page-header" style={{ marginTop: "1rem" }}>
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Description</h3>
              <p>Briefly Describe Your Gig</p>
            </div>
          </div>
        </div>
        <nav aria-label="breadcrumb" style={{ marginTop: "1rem" }}>
          <ol class="breadcrumb" style={{ padding: "20px" }}>
            <li class="breadcrumb-item active" aria-current="page">
              <a href="#">Overview</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Pricing</a>
            </li>
            <li class="breadcrumb-item ">Description</li>
          </ol>
        </nav>

        <div className="row">
          <Editor
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={(e) => {
              setEditorState(e);
            }}
          />
        </div>
        <div className="submit-section" style={{ marginTop: "5rem" }}>
          <button
            className="btn btn-primary submit-btn"
            type="submit"
            name="form_submit"
            value="submit"
            onClick={()=>convertContentToHTML()}
            disabled={conform}
          >
            Confirm
          </button>
        </div>
        <div className="submit-section" style={{ marginTop: "0rem",transform:"translate(10rem,-3rem)" }}>
          <button
            className="btn btn-success submit-btn"
            type="submit"
            name="form_submit"
            value="submit"
            disabled={!conform}
            onClick={handleSubmit}

          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Description;

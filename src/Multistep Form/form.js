import { useState } from "react";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    class: "",
    language: "",
    hobby: "",
    feedback: "",
  });

  const formTitles = ["Sign Up", "Personal Info", "Other"];

  const pageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else {
      return;
    }
  };

  return (
    <div className="form">
      <div className="header">
        <h1>{formTitles[page]} </h1>
      </div>
      <div className="body"> {pageDisplay()} </div> <br />
      <div className="footer">
        <button
          disabled={page === 0}
          onClick={() => {
            setPage((curr) => curr - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (page === formTitles.length - 1) {
              alert("Form Submited");
              console.log(formData);
            }
            setPage((currPage) => currPage + 1);
          }}
        >
          {page === formTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Form;

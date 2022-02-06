import React from "react";
import FormCreate from "./FormCreate";

class FormAdd extends React.Component {
  state = {
    formDetails: [
      {
        index: Math.random(),
        email: "",
        fullName: "",
        userName: "",
      },
    ],
  };
  handleChange = (e) => {
    if (["email", "fullName", "userName"].includes(e.target.name)) {
      let formDetails = [...this.state.formDetails];
      formDetails[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addNewCard = (e) => {
    this.setState((prevState) => ({
      formDetails: [
        ...prevState.formDetails,
        {
          index: Math.random(),
          email: "",
          fullName: "",
          userName: "",
        },
      ],
    }));
  };

  deteteCard= (index) => {
    this.setState({
      formDetails: this.state.formDetails.filter(
        (s, sindex) => index !== sindex
      ),
    });
  };

  clickOnDelete(record) {
    this.setState({
      formDetails: this.state.formDetails.filter((r) => r !== record),
    });
  }
  
  render() {
    let { formDetails } = this.state; 
    return (
      <div>
        <FormCreate
          add={this.addNewCard}
          delete={this.clickOnDelete.bind(this)}
          formDetails={formDetails}
        />
      </div>
    );
  }
}
export default FormAdd;

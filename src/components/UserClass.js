import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); //used to call parent class and set internel state and functionalities properly
  }

  //component did mount is as same as use effect call the function after rendering component
  componentDidMount() {
    console.log("component didmount");
  }

  render() {
    return (
      <div>
        <h1>THis is class component</h1>
      </div>
    );
  }
}

export default UserClass;

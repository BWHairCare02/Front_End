import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FileInput from "../FileInput";
import styled from "styled-components";
import axios from "axios";
import {
  postCustomer,
  updateLocation,
  // updateEmail,
  updateSignupPass,
  updateSignupUser
} from "../../actions";
const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 20%;
  width: 50%;
`;
class CustomerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      submitted: true
    });
  }
  // deleteInfo = reviewId => {
  //   console.log(this.state.submitted.id);
  //   axios.delete(`/customer/${this.props.id}/reviews/${reviewId}`).then(res => {
  //     console.log(res);
  //     this.props.history.push("/");
  //   });
  // };

  // componentDidMount() {
  //   this.fetchInfo(this.props.match.params.id);
  // }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
  //     this.fetchInfo(newProps.match.params.id);
  //   }
  // }

  // fetchInfo = id => {
  //   axios
  //     .put(`/customer/:customerId/reviews/:reviewId${id}`)
  //     .then(res => this.setState({ id: res.data }))
  //     .catch(err => console.log(err.response));
  // };

  // saveInfo = () => {
  //   const update = this.props.update;
  //   update(this.state.props.submitted);
  // };
  render() {
    if (this.state.submitted) {
      return <h1>Thanks for contacting us</h1>;
    } else {
      return (
        <Container>
          <form action="send_mail" method="post">
            Profile
            <div>
              <input
                type="text"
                name="customer-description"
                placeholder="Search Stylist..."
                required
              ></input>
              <label for="message">Search Stylist</label>
            </div>{" "}
            <Link to="/search"> search for stylist in your Area</Link>
            <div>
              <textarea
                type="text"
                name="customer-description"
                required
              ></textarea>
              <label for="message">Description</label>
            </div>
            <FileInput />
            <div>
              <button onClick={this.state.handleClick} type="submit">
                {/* <i class="material-icons">Update Profile</i> */}
                <div className="material-icons" onClick={this.props}>
                  Save Profile
                </div>
              </button>

              <button onClick={this.handleClick} type="submit">
                <i class="material-icons">add</i>
              </button>
              {/* <button onClick={this.handleClick} type="submit">
                <i class="material-icons">delete</i>
              </button> */}

              {/* <div className="save-button" onClick={this.props}>
                Save
              </div> */}
            </div>
          </form>
        </Container>
      );
    }
  }
}
const mapDispatchToProps = {
  postCustomer,
  updateLocation,
  // updateEmail,
  updateSignupPass,
  updateSignupUser
};
const mapStateToProps = state => {
  return {
    id: state.id
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile);

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dashboard from "../../Dashboard";
import { connect } from "react-redux";
// export default reviewCard;
import { Delete, Update } from "../../actions/index";

const ReviewCard = props => {
  const { content, Delete, Update } = props;
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState({
    description: "",
    rating: 0,
    image_1: "",
    image_2: "",
    image_3: "",
    customer_id: 0,
    stylist_id: 1
  });
  console.log(content);

  // const deleteInfo = reviewId => {
  // axios.delete(`/customer/${id}/reviews/${reviewId}`).then(res => {
  //   console.log(res);
  //   this.props.history.push("/");
  // });
  // };

  const handleChange = e => {
    return setText({
      ...text,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          Update(text);
          setText({
            description: "",
            rating: 0,
            image_1: "",
            image_2: "",
            image_3: "",
            customer_id: 0,
            stylist_id: 1
          });
        }}
      >
        Profile
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="description"
            value={text.description}
            placeholder="Review"
            required
          ></input>
          {/* <label for="message">Add Review</label> */}
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="card" key={content.id}>
        <figure>
          <img src=""></img>
        </figure>
        <div className="info">
          {/* <link to={Dashboard}> */}

          <h3>{content.description}</h3>
          {/* </link> */}
        </div>
        <button
          onClick={() => {
            setText(content);
          }}
        >
          Update
        </button>
        <button onClick={() => Delete(content.id)}> Delete </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    id: state.id
  };
};
export default connect(mapStateToProps, { Delete, Update })(ReviewCard);

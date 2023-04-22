import React from "react";
import Table from "react-bootstrap/Table";
import dateFormat from "dateformat";

const DishComment = (props) => {
  return props.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Author</th>
              <th>Comment</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{comment.id}</td>
              <td>{comment.author}</td>
              <td>{comment.comment}</td>
              <td>
                {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  });
};

export default DishComment;

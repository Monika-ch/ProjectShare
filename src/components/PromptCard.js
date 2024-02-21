import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  CardBody,
  CardSubtitle,
  CardHeader,
} from "reactstrap";
import PromptPage from "./PromptModal";
import "../styled-components/PromptCard.css";
// import Tags from './Tags.js'; // Uncomment this when you have Tags.js file

const Prompt = ({ title, tags, text, response }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const truncateText = (text, wordLimit) => {
    return text
      ? text.split(" ").length > wordLimit
        ? text.split(" ").slice(0, wordLimit).join(" ") + "..."
        : text
      : "No text";
  };
  const tag = tags
    ? tags.map((tag) => <span className='PromptTag'>{tag}</span>)
    : "No tags";

  return (
    <div className='PromptCard col-md-4'>
      <Card body onClick={toggleDialog} style={{ cursor: "pointer" }}>
        <CardHeader>
          <CardTitle tag='h5'>{title}</CardTitle>
          <CardSubtitle style={{ color: "#555" }}>
            {tag}
            {/* Tags: {tags ? tags.join(" ") : "No tags"} */}
          </CardSubtitle>
          {/* <CardSubtitle>
          {tags ? tags.map((tag) => <Button>{tag}</Button>) : "No tags"}
        </CardSubtitle>{" "} */}
          {/* Replace this with <Tags tags={tags} /> when you have Tags.js file */}
        </CardHeader>
        <CardBody>
          <CardText>
            {truncateText(text, 50)}{" "}
            {text.split(" ").length > 50 && <a href='./PromptPage.js'>More</a>}
          </CardText>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} toggle={toggleDialog}>
        <ModalHeader toggle={toggleDialog}>{title}</ModalHeader>
        <ModalBody>
          <CardText>{tags ? tags.join(", ") : "No tags"}</CardText>{" "}
          {/* Replace this with <Tags tags={tags} /> when you have Tags.js file */}
          <CardText className='PromptText'>{text}</CardText>
          <CardText className='PromptResponse'>{response}</CardText>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Prompt;

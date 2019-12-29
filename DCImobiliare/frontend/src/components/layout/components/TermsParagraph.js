import React, { Component } from "react";

export default class TermsParagraph extends Component {
  render() {
    const paragraphs = this.props.paragraphs;
    const Bold = ({ children }) => (
      <Text style={{ fontWeight: "bold" }}>{children}</Text>
    );
    return (
      <div>
        <h3>{this.props.subTitle}</h3>
        {paragraphs.map((paragraph, ids) => (
          <p key={ids}>{paragraph}</p>
        ))}
      </div>
    );
  }
}

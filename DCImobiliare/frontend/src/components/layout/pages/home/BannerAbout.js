import React, { Component } from "react";

export default class BannerAbout extends Component {
  render() {
    return (
      <section id={"aboutSection"} className="p-0 w-100 inline-block mt-3">
        <Title
          title="Despre"
          anchor="#home"
          yValue="100"
          customID="aboutTitle"
        ></Title>
        <CardsContainer
          anchor="#aboutTitle"
          yValue="100"
          customID="about"
        ></CardsContainer>
      </section>
    );
  }
}

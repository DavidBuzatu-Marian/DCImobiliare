import React, { Component } from "react";
import Title from "../../components/Title";
import CardsContainer from "../../components/CardsContainer";
export default class BannerAbout extends Component {
  render() {
    return (
      <section id={"aboutSection"} className="p-0 w-100 inline-block mt-3">
        <Title title="Despre mine" customID="aboutTitle"></Title>
        <CardsContainer customID="about"></CardsContainer>
      </section>
    );
  }
}

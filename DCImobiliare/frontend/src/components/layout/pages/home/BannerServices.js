import React, { Component } from "react";
import BannerTableServices from "./BannerTableServices";
import CardInfo from "../../components/CardInfo";
import Title from "../../components/Title";
import CardForm from "../../components/CardForm";

export default class BannerServices extends Component {
  render() {
    return (
      <section id={"services"} className=" p-0 w-100 inline-block mt-3">
        <Title title="Serviciile mele" yValue="100"></Title>
        <BannerTableServices></BannerTableServices>
        <Title title="Despre" anchor="#last-td" yValue="80"></Title>
        <div className="container mt-5rem">
          <div className="row">
            <CardInfo
              title={"Despre mine"}
              body={
                "Sunt un tânăr ambițios, disciplinat, orientat către rezultate și pasionat de lumea antreprenoriatului."
              }
              img={"/static/manager.svg"}
            ></CardInfo>
            <CardInfo
              title={"Experiență"}
              body={
                "Am facut parte din singura agenție arădeană care a fost nominalizată la Gala Profesionistilor in Imobiliare, de două ori consecutiv, pentru premiul de investiție continuă în profesionalism"
              }
              img={"/static/award.svg"}
            ></CardInfo>
            <CardInfo
              title={"De ce Daniel Chițu Imobiliare?"}
              body={
                "Am ales să continui mai departe ca şi agent independent tocmai pentru clienții mei. Pentru a vă putea oferi aceleaşi servicii profesioniste dar la comisioane mult mai accesibile"
              }
              img={"/static/deal.svg"}
            ></CardInfo>
            <CardInfo
              title={"Voluntariate"}
              body={
                "Sunt implicat în voluntariate şi sunt preşedintele unei organizații ce sprijină oamenii. Acest aspect m-a atras şi în acest domeniu, să ajut oamenii să-şi vândă proprietățile fără stres şi să câştige timp pentru ei şi familia lor."
              }
              img={"static/volunteer.svg"}
            ></CardInfo>
            <CardInfo
              title={"Clienții tăi"}
              body={
                "Imi place ca totul să fie perfect, astfel că indiferent dacă te intereseaza să vinzi sau să dai în chirie, voi preselecta cu mare atenție clienții potențiali şi ii voi alege pe cei mai potriviți pentru tine."
              }
              img={"static/loupe.svg"}
            ></CardInfo>
            <CardInfo
              title={"Afilieri"}
              body={
                "Am experiența şi timpul necesar pentru a te ajuta să ai parte de o tranzacție cât mai placută. Având colaborare cu notari, bănci, firme şi persoane de care ai nevoie într-o tranzacție imobiliară, te asigur că totul va decurge bine."
              }
              img={"static/relationship.svg"}
            ></CardInfo>
          </div>
        </div>
        <div className="bg-parallax bg-overlay-black-8 " id="form-toggle"></div>

        <div className="h-100 left-0 top-0 w-100 background-full-width-section2">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 col-xl-7 col-sm-12 col-md-12 col-xs-12 text-center-md">
              <Title
                title="Servicii profesionale, la pret real"
                anchor="#form-toggle"
                textColor="text-white"
                yValue="100"
              ></Title>
            </div>
            <CardForm anchor="#form-toggle"></CardForm>
            <span className="bg-base-color d-block mt-4 sep-line-extra-thick-long"></span>
          </div>
        </div>
      </section>
    );
  }
}

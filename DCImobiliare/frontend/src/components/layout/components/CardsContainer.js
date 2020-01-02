import React, { Component } from "react";
import CardInfo from "./CardInfo";

export default class CardsContainer extends Component {
  render() {
    return (
      <div id={this.props.customID} className="container mt-5rem">
        <div className="row">
          <CardInfo
            title={"Despre mine"}
            body={
              "Sunt un tânăr ambițios, disciplinat, orientat către rezultate și pasionat de lumea antreprenoriatului."
            }
            img={"/static/manager.svg"}
            yValue="100"
            anchor="#servicesTitle"
          ></CardInfo>
          <CardInfo
            title={"Experiență"}
            body={
              "Am facut parte din singura agenție arădeană care a fost nominalizată la Gala Profesionistilor in Imobiliare, de două ori consecutiv, pentru premiul de investiție continuă în profesionalism"
            }
            img={"/static/award.svg"}
            yValue="100"
            anchor="#servicesTitle"
          ></CardInfo>
          <CardInfo
            title={"De ce Daniel Chițu Imobiliare?"}
            body={
              "Am ales să continui mai departe ca şi agent independent tocmai pentru clienții mei. Pentru a vă putea oferi aceleaşi servicii profesioniste dar la comisioane mult mai accesibile"
            }
            img={"/static/deal.svg"}
            yValue="100"
            anchor="#servicesTitle"
          ></CardInfo>
          <CardInfo
            title={"Voluntariate"}
            body={
              "Sunt implicat în voluntariate şi sunt preşedintele unei organizații ce sprijină oamenii. Acest aspect m-a atras şi în acest domeniu, să ajut oamenii să-şi vândă proprietățile fără stres şi să câştige timp pentru ei şi familia lor."
            }
            img={"static/volunteer.svg"}
            yValue="100"
            anchor="#servicesTitle"
          ></CardInfo>
          <CardInfo
            title={"Clienții mei"}
            body={
              "Imi place ca totul să fie perfect, astfel că indiferent dacă te intereseaza să vinzi sau să dai în chirie, voi preselecta cu mare atenție clienții potențiali şi ii voi alege pe cei mai potriviți pentru tine."
            }
            img={"static/loupe.svg"}
            yValue="100"
            anchor="#servicesTitle"
          ></CardInfo>
          <CardInfo
            title={"Afilieri"}
            body={
              "Am experiența şi timpul necesar pentru a te ajuta să ai parte de o tranzacție cât mai placută. Având colaborare cu notari, bănci, firme şi persoane de care ai nevoie într-o tranzacție imobiliară, te asigur că totul va decurge bine."
            }
            img={"static/relationship.svg"}
            yValue="100"
            anchor="#servicesTitle"
          ></CardInfo>
        </div>
      </div>
    );
  }
}

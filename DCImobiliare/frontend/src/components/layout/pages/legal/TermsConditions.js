import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import TermsParagraph from "../../components/TermsParagraph";

export default class TermsConditions extends Component {
  state = {
    termsLink: "active",
    personalLink: ""
  };

  onClick = e => {
    this.setState({
      termsLink: "",
      personalLink: ""
    });
    this.setState({ [e.target.id]: "active" });
  };

  render() {
    const { termsLink, personalLink } = this.state;

    return (
      <div className="container mt-10">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xl-4">
            <div className="sticky-ul">
              <h3>Cuprins</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link
                    id="termsLink"
                    smooth
                    className={`nav-link ${termsLink}`}
                    to="/terms-and-conditions/#terms"
                    onClick={this.onClick}
                  >
                    Termeni și condiții
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    id="personalLink"
                    smooth
                    className={`nav-link ${personalLink}`}
                    to="/terms-and-conditions/#personal"
                    onClick={this.onClick}
                  >
                    Prelucrarea datelor cu caracter personal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-xl-8">
            <h1 id="terms">Termeni și condiții</h1>
            <h3>1.Definiții</h3>
            <p className="terms-paragraph">
              Termenii și condițiile generale prevăzute în continuare se vor
              aplica tuturor vânzărilor de bunuri de către{" "}
              <strong>DC Imobiliare</strong> și partenerii săi, prin intermediul
              magazinului virtual www.dcimobiliare.ro către Cumpărător și pot fi
              modificate oricând de către <strong>DC Imobiliare</strong> fără
              notificare prealabilă.
            </p>
            <p className="terms-paragraph">
              {" "}
              Astfel, următorii termeni vor însemna:
            </p>
            <p>
              Cumpărător – persoană fizică / persoană juridică sau altă entitate
              juridică ce emite o Comandă.
            </p>
            <p className="terms-paragraph">
              Vânzător – <strong>DC Imobiliare</strong>, cu denumirea comercială
              <strong>SC DC INDEP AGENT SRL</strong>, având sediul social în
              Arad, Arad, Randunicii, 48, CUI 41927757, nr. de înregistrare la
              Registrul Comerțului . Bunuri – orice produs, inclusiv documentele
              și serviciile menționate în Comandă, care urmează a fi furnizate
              de către Vânzător Cumpărătorului.
            </p>
            <p className="terms-paragraph">
              Comandă – un document electronic ce intervine ca formă de
              comunicare între Vânzător și Cumpărător, prin care Vânzătorul este
              de acord să livreze Bunurile și Cumpărătorul este de acord să
              primească aceste Bunuri și să facă plată acestora.
            </p>
            <p className="terms-paragraph">
              {" "}
              Contract – o Comandă confirmată de către Vânzător.{" "}
            </p>
            <p className="terms-paragraph">
              Drepturi de Proprietate Intelectuală – toate drepturile imateriale
              cum ar fi know-how, dreptul de autor și drepturi în natură de
              autor, drepturile de bază de date, drepturi de proiectare,
              drepturi de model, patente, mărci înregistrate și înregistrări ale
              numelor de domenii pentru oricare din cele de mai sus.
            </p>
            <p className="terms-paragraph">
              Site – domeniul www.dcimobiliare.ro și subdomeniile acestuia.
            </p>
            <hr />
            <h3>2.Documente Contractuale</h3>
            <p className="terms-paragraph">
              Prin lansarea unei Comenzi electronice pe site-ul
              www.dcimobiliare.ro, Cumpărătorul este de acord cu forma de
              comunicare (e-mail, telefon) prin care Vânzatorul își derulează
              operațiunile. Comanda va fi compusă din următoarele documente:
            </p>
            <p className="terms-paragraph">
              Comanda (împreună cu mențiunile clare asupra datelor de livrare și
              facturare) și condițiile sale specifice.
            </p>
            <p className="terms-paragraph">
              Termeni și condiții <br />
              Daca Vânzătorul confirmă Comanda, acest lucru implică o acceptare
              completă a termenilor Comenzii. Acceptarea Comenzii de către
              Vânzător se consideră finalizată atunci când există o confirmare
              electronică (e-mail) din partea Vânzătorului către Cumpărător,
              fără a necesita o confirmare de primire din partea acestuia.
              Vânzătorul nu consideră în nici un moment o comandă neconfirmată
              ca având valoarea unui Contract. Confirmarea Comenzii se face
              electronic (e-mail). Prețurile produselor din comandă sunt
              valabile 3 zile lucrătoare de la data înregistrării comenzii.
              Termenii și condițiile generale de vânzare vor sta la baza
              Contractului astfel încheiat
            </p>
            <hr />
            <h3>3.Obligațiile Vânzătorului</h3>
            <p className="terms-paragraph">
              • Vânzătorul își va utiliza cunoștințele sale profesionale și
              tehnice pentru a atinge rezultatul stipulat în Comandă și va livra
              Bunurile care îndeplinesc cerințele și specificațiile
              Cumpărătorului exprimate în Comandă;
            </p>
            <p className="terms-paragraph">
              • Informațiile prezentate pe site-urile Vânzătorului au caracter
              informativ și pot fi modificate de către Vânzător, fără o anunțare
              prealabilă. Descrierile produselor pot fi incomplete, însă
              vânzătorul face eforturi de a prezenta informațiile cele mai
              relevante, pentru ca produsul să fie utilizat în parametrii pentru
              care a fost achiziționat;
            </p>
            <hr />
            <h3>4.Dreptul de proprietate intelectuală și industrială</h3>
            <p className="terms-paragraph">
              Utilizatorul/Cumpărătorul înțelege dreptul de proprietate
              intelectuală și nu va dezvălui unei terțe părți sau va face
              publice nici una dintre informările primite de la Vânzător.
            </p>
            <p className="terms-paragraph">
              Toate desenele, elementele de grafică și design care apar pe site,
              numele site-ului precum și însemnele grafice sunt mărci
              înregistrate în proprietatea <strong>DC Imobiliare</strong> și nu
              pot fi preluate, copiate sau folosite, fără acordul scris al
              proprietarului. Toate elementele de conținut cum sunt descrierile,
              desenele, elementele de grafică și design care apar pe site,
              incluzând dar nelimitându-se la logo-uri, reprezentări stilizate,
              simboluri comerciale, imagini statice, imagini dinamice, text
              și/sau conținut multimedia prezentate pe site, sunt proprietatea
              exclusivă a <strong>DC Imobiliare</strong>, acestuia fiindu-i
              rezervate toate drepturile obținute în acest sens în mod direct
              sau indirect prin licențe de utilizare și/sau publicare.
              Utilizatorului/Cumpărătorului nu îi este permisă copierea,
              distribuirea, publicarea, transferul către terțe părți,
              modificarea și/sau altfel alterarea, utilizarea, legarea la,
              expunerea, includerea oricărui element conținut de mai sus în
              orice alt context decât cel original intenționat de{" "}
              <strong>DC Imobiliare</strong>, includerea oricărui element de
              conținut în afara Site-ului, îndepărtarea însemnelor care
              semnifică dreptul de autor al <strong>DC Imobiliare</strong>{" "}
              asupra elementelor de conținut precum și participarea la
              transferul, vânzarea, distribuția unor materiale realizate prin
              reproducerea, modificarea sau afișarea elementelor de conținut,
              decât cu acordul scris expres al <strong>DC Imobiliare</strong>.
            </p>
            <hr />
            <h3>5.Drepturile asupra conținutului site-ului</h3>
            <p className="terms-paragraph">
              Întreg continutul site-ului si elementele de grafica, inclusiv dar
              fara a se limita la acestea, respectiv tot continutul in format
              text, precum si sursele tehnice ale tuturor serviciilor si
              facilitatilor prezente si viitoare – cu exceptia cazului cand este
              mentionat expres un alt proprietar – sursele paginilor dar si
              orice alt material, transmis sub orice forma de si catre
              Utilizatori (prin vizualizare directa pe site, prin newslettere
              etc.) aparțin <strong>DC Imobiliare</strong>. Continutul
              site-ului, indiferent de zona in care se afla in site si
              indiferent de tip, poate fi utilizat exclusiv in scopuri
              personale. Orice utilizare de continut de catre terte persoane in
              alte scopuri decat cel personal, se poate face numai cu acordul
              scris, expres si prealabil al <strong>DC Imobiliare</strong>. Prin
              urmare, este interzisa copierea, preluarea, reproducerea,
              publicarea, transmiterea, vanzarea, distributia partiala,
              integrala sau modificata a continutului acestui site sau a
              oricarei parti a acestuia efectuate in alte scopuri decat cel
              personal, cu urmatoarele exceptii: (i) este permisa reproducerea
              (pe site-uri noncomerciale, forumuri, articole din presa etc.) a
              unor mici fragmente din articolele publicate (max. 400 de
              caractere), fiind obligatorie specificarea sursei informatiilor
              preluate, cu link, sub urmatoarea forma: (Sursa: nume site – link
              catre continutul site-ului).
            </p>
            <p className="terms-paragraph">
              (ii) sunt permise link-urile catre site-ul www.dcimobiliare.ro,
              iar specificarea sursei informatiilor se va face dupa fiecare link
              sau in finalul articolului, dupa cum urmeaza: „Informatii
              furnizate prin amabilitatea <strong>DC Imobiliare</strong> – link
              către conținutul site-ului) Utilizatorii se obliga sa respecte
              toate drepturile de autor si toate drepturile conexe acestuia si
              orice alte drepturi de proprietate intelectuala pe care
              Administratorul site-ului si partenerii sai le detin asupra/in
              legatura cu site-ul www.dcimobiliare.ro.
            </p>
            <p className="terms-paragraph">
              <strong>DC Imobiliare</strong> își rezerva dreptul de a actiona in
              instanta orice persoana si/sau entitate care incalca in orice mod
              prevederile de mai sus. Cererile de utilizare a continutului
              site-ului in orice scop altul decat cel personal pot fi facute
              prin e-mail la adresa mail @ <strong>DC Imobiliare</strong>.ro, cu
              specificația „In atentia agenției”. Orice persoana care transmite
              sau publica in orice mod informatii ori materiale catre site isi
              asuma obligatia de a nu prejudicia in nici un mod drepturile de
              autor pe care o terta persoana le-ar putea invoca in legatura cu
              materialele si informatiile transmise in orice mod catre site, iar
              persoanele care expediaza in orice mod informatii ori materiale
              inteleg si accepta ca incalcarea in orice mod a acestei obligatii
              nu poate angaja in niciun mod raspunderea{" "}
              <strong>DC Imobiliare</strong>, ci numai raspunderea persoanelor
              respective.
              <strong>DC Imobiliare</strong> poate derula in orice moment
              campanii publicitare si/sau promotii in orice sectiune din site,
              fara ca aceasta operatiune sa necesite acordul Utilizatorilor
              site-ului. Spatiile si dimensiunea campaniilor publicitare si
              promotiilor nu necesita acordul Utilizatorilor site-ului si pot fi
              schimbate oricand fara a necesita anuntarea prealabila.
              <strong>DC Imobiliare</strong> nu isi asuma responsabilitatea
              pentru prejudiciile sau pierderile rezultate din campaniile
              publicitare sau promotiile organizate in site, altele decat cele
              organizate strict pe site.
            </p>
            <hr />
            <h3>6.Limitarea răspunderii administratorului site-ului</h3>
            <p className="terms-paragraph">
              <strong>DC Imobiliare</strong> nu isi asuma obligatia si nu
              garanteaza implicit sau expres, pentru continutul site-ului,
              respectiv pentru continutul oferit de partenerii sai sau de
              Utilizatorii site-ului. Cu toate acestea{" "}
              <strong>DC Imobiliare</strong> va depune toate eforturile
              rezonabile pentru a asigura acuratetea si maniera profesionista in
              care vor fi furnizate informatiile pe site, pentru a dobandi si
              mentine increderea Utilizatorilor in site. In acest sens,{" "}
              <strong>DC Imobiliare</strong> va incerca sa corecteze in cel mai
              scurt timp posibil erorile si omisiunile semnalate.
              Administratorul site-ului nu ofera niciun fel de garantii pentru
              continutul site-ului si in nicio situatie nu poate fi tinut
              raspunzator pentru nicio pierdere sau prejudiciu ce ar putea
              rezulta din utilizarea oricarei parti/secvente/pagini de pe site
              sau din imposibilitatea utilizarii acesteia, indiferent de cauza
              acesteia ori din interpretarea eronata a oricaror prevederi ale
              continutului site-ului.
            </p>
            <p className="terms-paragraph">
              Informatiile furnizate prin intermediul site-ului sunt oferite cu
              buna-credinta, din surse apreciate ca fiind de incredere. In cazul
              in care vreunul din articolele publicate sau orice alta informatie
              intra sub incidenta legii dreptului de autor, rugam Utilizatorii
              sa ne contacteze la adresa de e-mail{" "}
              <strong>daniel.chitu886@yahoo.com</strong>, pentru a putea lua
              masurile ce se impun. Totodată, Utilizatorii trebuie sa aibă în
              vedere faptul ca informatia prezentata poate include eventuale
              informatii inexacte (de ex.: date de ordin tehnic sau erori de
              tastat). Administratorul site-ului va face toate diligentele
              necesare pentru a corecta in cel mai scurt timp posibil aceste
              aspecte. Utilizatorii inteleg si accepta faptul ca{" "}
              <strong>DC Imobiliare</strong> nu garanteaza:
              <br /> • ca informatiile continute pe site sunt pe deplin
              complete;
            </p>
            <p className="terms-paragraph">
              • ca informatiile introduse de Utilizatorii website-ului sunt
              reale, corecte si nu isi asuma raspunderea pentru modul in care
              vizitatorii le folosesc;
            </p>
            <p className="terms-paragraph">
              • ca informatiile sau serviciile de pe site vor satisface toate
              cerintele Utilizatorilor, iar pentru folosirea inadecvata a
              acestora Utilizatorii isi asuma intreaga responsabilitate;
            </p>
            <p className="terms-paragraph">
              • pentru rezultatele obtinute de Utilizatori ca urmare a folosirii
              informatiilor sau serviciilor disponibile prin intermediul
              site-ului utilizarea informatiilor si a serviciilor facandu-se de
              catre Utilizatori pe propria raspundere;
            </p>
            <p className="terms-paragraph">
              • ca serviciile disponibile prin intermediul site-ului vor
              functiona constant, neintrerupt, fara erori – fata de acest
              aspect, <strong>DC Imobiliare</strong> nu isi asuma
              responsabilitatea pentru eventualele pagube pe care Utilizatorii
              le-ar putea avea din cauza nefunctionarii temporare sau
              defectuoase a site-ului sau pentru folosirea informatiilor
              obtinute prin utilizarea link-urilor de pe site catre alte
              site-uri (utilizarea lor este la latitudinea Utilizatorilor). De
              asemenea, Utilizatorii inteleg si accepta faptul ca{" "}
              <strong>DC Imobiliare</strong> nu este responsabila pentru
              eventuale inadvertente, erori sau omisiuni in cadrul informatiilor
              furnizate pe site de catre Utilizatori. Totodata, Utilizatorii
              inteleg si accepta ca <strong>DC Imobiliare</strong> este
              absolvita de orice raspundere pentru mesajele publicitare postate
              pe site sau prin intermediul serviciilor oferite prin site, precum
              si pentru bunurile sau serviciile furnizate de catre autorii
              acestor mesaje publicitare. In mod expres, Utilizatorii site-ului
              sunt de acord sa exonereze de raspundere{" "}
              <strong>DC Imobiliare</strong> pentru orice actiune judiciara sau
              extrajudiciara, care provine ca urmare a utilizarii incorecte sau
              frauduloase a site-ului. Pentru cazuri de forta majora,{" "}
              <strong>DC Imobiliare</strong> si/sau operatorii, directorii,
              angajatii, sucursalele, filialele si reprezentantii sai, este
              exonerata total de orice raspundere. Cazurile de forta majora
              includ, dar nu se limiteaza la, erori de functionare ale
              echipamentului tehnic al <strong>DC Imobiliare</strong> , lipsa
              functionarii conexiunii la internet, lipsa functionarii
              conexiunilor de telefon, virusii informatici, accesul neautorizat
              in sistemele Site-ului, erorile de operare, etc. Utilizatorii sunt
              de acord sa protejeze si sa asigure <strong>DC Imobiliare</strong>{" "}
              si/sau pe operatorii, directorii, angajatii, sucursalele,
              filialele si reprezentantii sai de si impotriva oricaror cereri,
              pretentii, actiuni, impuneri, pierderi, daune, costuri (incluzand,
              fara nici un fel de limitare, onorariile avocatilor), cheltuieli,
              judecati, decizii, amenzi, regularizari sau alte obligatii
              rezultate sau relationate cu orice alta actiune a Utilizatorilor
              in legatura cu utilizarea site-ului sau a serviciilor oferite prin
              intermediul acestuia.
              <strong>DC Imobiliare</strong> nu ofera nicio garantie, nici in
              mod expres si nici implicit, in ceea ce priveste inclusiv, dar
              fara limitare la functionarea site-ului www.dcimobiliare.ro,
              informatia, continutul, materialele sau produsele de pe site,
              precum si potrivirea lor pentru un anumit scop. Utilizatorii sunt
              de acord in mod expres ca folosirea acestui site si aplicarea
              informatiilor se face pe propriul lor risc.
            </p>
            <hr />
            <h3>7.Legea aplicabilă</h3>
            <p className="terms-paragraph">
              Prezentul contract este supus legii Române. Eventualele litigii
              apărute între <strong>DC Imobiliare</strong> și
              utilizatori/clienți/cumpărători se vor rezolva pe cale amiabilă
              sau, în cazul în care aceasta nu va fi posibilă, litigiile vor fi
              soluționate de instanțele judecătorești Române competente.
            </p>
            <hr />
            <h3>8.Oferte speciale</h3>
            <p className="terms-paragraph">
              <strong>DC Imobiliare</strong> nu are în desfășurare campanii cu
              oferte speciale.{" "}
            </p>
            <hr />
            <h3>9.Modificarea termenilor și condițiilor</h3>
            <p className="terms-paragraph">
              <strong>DC Imobiliare</strong> are dreptul de a modifica oricând
              și în orice mod oricare dintre prevederile cuprinse în Termeni și
              condiții sau Termenii și Condițiile în întregime, fără nicio
              notificare prealabila și fără a fi obligata sa îndeplinească vreo
              alta formalitate fata de Utilizatori. Orice modificare este
              acceptata deplin și necondiționat de către Utilizatorii site-ului
              prin simpla utilizare sau accesare a site-ului sau a oricărei
              facilitați oferite de site, intervenite oricând după operarea
              modificării, iar neacceptarea oricărei modificări atrage obligația
              respectivului Utilizator de a înceta de îndată accesarea site-ului
              și/sau utilizarea în orice mod a serviciilor oferite prin
              intermediul acestuia.
            </p>
            <hr />
            <h1 id="personal">Prelucrarea datelor cu caracter personal</h1>
            <p className="terms-paragraph">
              Pentru a asigura respectarea dreptului utilizatorilor site-ului la
              protecția datelor cu caracter personal, am implementat măsuri
              specifice de protecție, luând în considerare legislația română,
              precum și cerințele stabilite de Regulamentul (UE) 2017/679 –
              aplicabil în întreaga Uniune Europeană începând cu data de 25 mai
              2018 („Regulamentul”).
            </p>
            <p className="terms-paragraph">
              Datele cu caracter personal reprezintă orice informație prin care
              dvs. puteți fi identificat, în special printr-un element de
              identificare cum ar fi un nume, un număr de identificare, date de
              localizare, un identificator online sau unul sau mai multe
              elemente aflate în legătură cu identitatea dvs. fizică,
              fiziologică, genetică, psihică, economică, culturală sau socială.
            </p>
            <p className="terms-paragraph">
              Societatea noastră <strong>ia toate măsurile necesare</strong>{" "}
              pentru a asigura respectarea dreptului dvs. la protecția datelor
              cu caracter personal, iar prezentele condiţii reprezintă{" "}
              <strong>notificarea</strong> stabilită de art. 13 sau 14 din
              Regulament prin care explicăm de ce colectăm datele dvs. cu
              caracter personal, modul în care protejăm aceste date, precum și
              care sunt drepturile dvs. în legătură cu această colectare de
              date.
              <strong>
                Vă încurajăm să citiți cu atenție documentul și să ne solicitați
                orice informație suplimentară sau orice lămurire pe care o
                considerați necesară, cu privire la conținutul acestei
                informări.
              </strong>
            </p>
            <h3>
              1) Considerații generale privind datele dumneavoastră personale
            </h3>
            <p className="terms-paragraph">
              In conformitate cu Regulamentul (UE) 2017/679,{" "}
              <strong>DC Imobiliare</strong> va administra in conditii de
              siguranta si numai pentru scopurile specificate, datele personale
              furnizate de Utilizatori. Prin Termeni si Conditii Utilizatorii
              sunt informati ca datele personale pe care le furnizeaza urmeaza a
              fi prelucrate in scopul oferirii in conditii optime de catre{" "}
              <strong>DC Imobiliare</strong> a serviciilor pe internet, a
              serviciilor de furnizare bunuri si servicii, a serviciilor de
              reclama, marketing si publicitate si a serviciilor de statistica.
              <strong>DC Imobiliare</strong> realizează următoarele operaţiuni
              de prelucrare: colectarea, inregistrarea, organizarea, stocarea,
              adaptarea, modificarea, extragerea, consultarea, utilizarea si, in
              unele cazuri, transmiterea catre terti, in baza exclusiva si
              reglementata a unui contract comercial care asigura securitatea si
              confidentialitatea datelor, precum si respectarea drepturilor
              utilizatorului, a datelor personale ale Utilizatorilor site-ului
              pentru a administra, mentine, imbunatati si obtine informaţii cu
              privire la serviciile pe care le ofera, precum si pentru a preveni
              erori si scurgeri de informatii prin reteaua IT proprie, incalcari
              ale legii sau termenilor contractuali. Datele personale ce urmeaza
              a fi colectate vor putea fi folosite, inclusiv prin crearea
              automată de profiluri (pentru acei Utilizatori care şi-au exprimat
              consimţământul explicit) si pentru a personaliza intr-un grad cat
              mai mare serviciile oferite Utilizatorilor prin intermediul
              site-ului precum si in scopuri de marketing.{" "}
              <strong>
                Crearea automată de profiluri nu va viza datele minorilor
              </strong>
              , datele personale ale acestora nefiind prelucrate în acest scop.
              Datele personale vor fi furnizate de catre Utilizatori, la
              optiunea lor proprie, in momentul crearii unui cont valabil pe
              site sau abonarii la un serviciu disponibil pe site, pentru a
              beneficia de serviciile si produsele oferite prin intermediul
              acestuia. La inregistrarea in site sunt solicitate Utilizatorului
              anumite date personale, precum numele si prenumele, sexul, data
              nasterii, adresa de e-mail, telefon, profesie,
              obisnuinte/preferinte/comportament, dar si alte informatii cu
              caracter personal.
            </p>
            <p className="terms-paragraph">
              Utilizatorul este <strong>singurul raspunzator</strong> de toate
              datele furnizate la momentul crearii contului de utilizator pe
              site. Pentru confirmarea datelor si contului, Utilizatorul va fi
              anuntat la adresa de e-mail declarata la crearea contului. Acest
              e-mail de confirmare are rolul stoparii actiunilor frauduloase ale
              unor utilizatori care folosesc adrese de e-mail ale altor persoane
              pentru a crea conturi fictive. Daca primiti un asemenea mesaj, in
              conditiile in care nu v-ati inregistrat personal pe site va rugam
              sa ne trimiteti un e-mail la adresa{" "}
              <strong>daniel.chitu886@yahoo.com</strong> pentru a sterge contul
              respectiv in maximum 3 zile lucratoare.{" "}
              <strong>
                E-mailul va conţine, în format pdf şi versiunea în vigoare a
                prezentului Contract.
              </strong>
              Formularul de profil al Utilizatorului contine campuri care pot fi
              editate in cazul in care se doreste modificarea sau completarea
              datelor furnizate la crearea contului.
            </p>
            <p className="terms-paragraph">
              Utilizatorul{" "}
              <strong>nu este obligat sa furnizeze aceste date</strong>, ele
              fiind necesare i) evidentei despre folosirea site-ului si ii) al
              oferirii in conditii optime a serviciilor prin intermediul
              acestuia, pentru aducerea la cunostinta a campaniilor
              promotionale, in scop de reclama, pentru actiuni de marketing si
              publicitate personalizate si pentru accesul Utilizatorului la
              facilitati suplimentare. Refuzul Utilizatorului de a furniza
              datele solicitate determina neparticiparea la actiunile
              promotionale organizate prin intermediul site-ului si nefolosirea
              facilitatilor, serviciilor suplimentare oferite exclusiv
              Utilizatorilor cu un cont in acest website. Website-ul{" "}
              <strong>
                va putea fi utilizat şi dacă Utilizatorul decide să nu creeze un
                profil
              </strong>{" "}
              prin furnizarea datelor personale, cu excepţiile stabilite în
              cadrul Politicii de Cookies (parte integrantă a prezentului
              Contract) Conform Regulamentul (UE) 2017/679 si Legii nr.
              677/2001, Utilizatorii beneficiaza de dreptul de acces, de
              interventie asupra datelor, dreptul de a nu fi supus unei decizii
              individuale si dreptul de a se adresa justitiei. Totodata,
              Utilizatorii au dreptul sa se opuna prelucrarii datelor personale
              care ii privesc si sa solicite stergerea datelor.
            </p>
            <p className="terms-paragraph">
              Pentru exercitarea acestor drepturi, Utilizatorii pot face o
              cerere in scris in acest sens, pe care o vor trimite prin e-mail
              la adresa <strong>daniel.chitu886@yahoo.com</strong> cu
              specificația „Solicitare date cu caracter personal”. Site-ul se
              angajează sa <strong>nu</strong> trimită mesaje spam (mesaje
              comerciale pentru care nu are acceptul prealabil explicit al
              Utilizatorului) si sa întreprindă toate mijloacele tehnice
              accesibile pentru a asigura securitatea si confidențialitatea
              datelor utilizatorului. Site-ul își rezerva dreptul de a
              desființa, fără aviz prealabil, conturile si accesul membrilor
              care încalcă Termenii și condițiile, care întreprind activități
              dovedite de frauda, calomnie sau atac la securitatea și
              confidențialitatea informațiilor din cadrul site-ului sau a
              companiei operatoare a site-ului.
            </p>
            <h3>
              2) Datele având caracter personal pe care le colectăm, temeiurile
              colectării și scopurile colectării
            </h3>
            <p className="terms-paragraph">
              În cadrul raportului de comunicare online stabilit intre site și
              utilizator, colectăm și prelucrăm datele dvs. având caracter
              personal, colectarea și prelucrarea acestor date fiind necesară
              furnizării de conținut informativ si promoțional către utilizator,
              în urma completării, de către acesta, a datelor cu caracter
              personal în mod voluntar, în cadrul site-ului, prin accesarea
              uneia sau mai multora dintre secțiunile: creare cont, actualizare
              cont, abonare la newsletter, completare chestionar online,
              completare formular online, pentru obținerea de informații
              personalizate sau beneficii comerciale, în cadrul campaniilor
              promovate pe site.
            </p>
            <p className="terms-paragraph">
              Temeiurile colectării de date cu caracter personal pe site pot fi
              următoarele:
              <br />
              1. persoana vizata și-a dat consimțământul pentru prelucrarea
              datelor cu caracter personal pentru unul sau mai multe scopuri
              specifice
              <br />
              2. prelucrarea este necesara pentru executarea unui contract la
              care persoana vizata este parte sau pentru a face demersuri la
              cererea persoanei vizate înainte de încheierea unui contract.
              <br />
              3. prelucrarea este necesara în vederea îndeplinirii unei
              obligații legale care ii revine operatorului.
              <br />
              4. prelucrarea este necesara pentru a proteja interesele vitale
              ale persoanei vizate sau ale altei persoane fizice
              <br />
              5. prelucrarea este necesara pentru îndeplinirea unei sarcini care
              servește unui interes public sau care rezulta în exercitarea
              autorității publice cu care este investit operatorul.
              <br />
              6. prelucrarea este necesara în scopul intereselor legitime
              urmărite de operator sau de o parte terța, cu excepția cazului în
              care prevalează interesele sau drepturile și libertățile
              fundamentale ale persoanei vizate, care necesita protejarea
              datelor cu caracter personal, în special atunci când persoana
              vizata este un copil.
            </p>
            <p className="terms-paragraph">
              În enumerările de mai jos vă prezentăm în mod detaliat ce date cu
              caracter personal colectate precum și temeiul, scopul și durata
              colectării acestora. Furnizarea datelor indicate mai jos nu este
              obligatorie pentru a vizualiza Website-ul, cu excepția celor care
              vizează Cookies.
              <br />
              Datele indicate sunt necesare numai pentru a presta servicii
              specifice pentru Utilizatorii care le transmit.
            </p>
            <p className="terms-paragraph">
              <strong>Date având caracter personal pe care le colectăm:</strong>
              Nume, prenume, adresa de e-mail, număr de telefon{" "}
            </p>
            <p className="terms-paragraph">
              Temeiurile colectării acestor date: 1), 6)
              <br />
              Scopurile colectării datelor având caracter personal:
              <br />
              Pentru furnizarea accesului la conținut și răspunsuri la întrebări
              și solicitări transmise de către utilizator online, pentru
              transmiterea de comunicări, oferte și beneficii constând în acces
              la servicii și produse
              <br />
              Modalitatea si perioada de colectare a datelor:
              <br />
              In cadrul bazei de date securizate, pana la exprimarea dorinței
              explicite de ștergere de către utilizator sau pana la 10 ani de la
              ultima activitate a utilizatorului pe site. După cei 10 ani,
              datele vor fi anonimitate electronic.
            </p>
            <h3>
              3) Modul de păstrare a datelor dvs. având caracter personal,
              locație, perioadă de păstrare
            </h3>
            <p className="terms-paragraph">
              Vom stoca datele dvs. cu caracter personal pentru o perioadă care{" "}
              <strong>
                nu depășește perioada necesară îndeplinirii scopurilor în care
                sunt prelucrate datele
              </strong>
              , iar, în cazurile în care avem o obligația legală de a păstra
              datele dvs. cu caracter personal o anumită perioadă de timp,
              perioada de păstrare va fi cea prevăzută de lege. În funcție de
              situația concretă, această perioadă va varia, putând fi cuprinsă
              între <strong>1 zi</strong> și <strong>10 ani</strong>. Pentru o
              bună înțelegere a modului de păstrare, a locației în care datele
              dvs. cu caracter personal vor fi păstrate și a perioadei exacte
              pentru care aceste date vor fi păstrate în evidențele sau în
              sistemele noastre, vă rugăm să consultați tabelul de mai sus. În
              scopul garantării dreptului utilizatorului de a fi protejat în
              ceea ce privește prelucrarea datelor cu caracter personal,
              implementam, pentru anumite categorii de date având un caracter
              sensibil sau care sunt apte să afecteze drepturile într-o manieră
              semnificativă,{" "}
              <strong>
                măsuri speciale de natură tehnică și organizatorică
              </strong>
              , care să protejeze aceste categorii de date cu caracter personal.
            </p>
            <h3>
              4) Drepturile utilizatorilor cu privire la datele cu caracter
              personal și exercitarea acestora
            </h3>
            <p className="terms-paragraph">
              În vederea protejării la un standard cât mai ridicat a datelor
              utilizatorul are serie de drepturi reglementate de lege, pe care
              le prezentăm pe scurt în cele ce urmează, rugându-vă ca pentru
              orice detalii suplimentare să nu ezitați să contactați
              responsabilul cu protecția datelor cu caracter personal din cadrul
              Societății noastre, utilizând detaliile de contact următoare:{" "}
              <strong>daniel.chitu886@yahoo.com</strong>, Arad, Arad,
              Randunicii, 48, telefon 0746672949.
            </p>
            <p className="terms-paragraph">
              • <strong>Dreptul de acces</strong>
              Utilizatorul are dreptul de a obține accesul la datele sale cu
              caracter personal pe care le prelucrăm, precum și dreptul de a
              obține copii ale acestora. La solicitarea utilizatorului, prima
              astfel de copie vă va fi oferită de către noi în mod{" "}
              <strong>gratuit</strong>, urmând ca eventualele copii suplimentare
              pe care le veți solicita să poată fi supuse unei taxe
              corespunzătoare efortului necesar de extragere si formatare pentru
              transmitere. Copia datelor având caracter personal vă poate fi
              oferită fie în format electronic, fie în format fizic, în funcție
              de solicitarea dvs. şi de natura datei solicitate. Pentru
              solicitarea informațiilor despre datele cu caracter personal
              existente în site, precum si pentru a solicita ștergerea parțiala
              sau totala a acestor date, este nevoie sa fie adresata cererea
              folosind adresa de e-mail{" "}
              <strong>daniel.chitu886@yahoo.com</strong> sau sa fie expediata o
              scrisoare prin posta sau curierat la sediul social al{" "}
              <strong>DC Imobiliare</strong>. De asemenea, utilizatorul are
              dreptul să obțina orice informații suplimentare relevante (cum ar
              fi motivul prelucrării datelor cu caracter personal, categoriile
              de date cu caracter personal pe care le colectăm, informații
              privind prelucrarea și divulgarea acestor date și orice alte
              asemenea informații).
            </p>
            <p className="terms-paragraph">
              • <strong>Dreptul la rectificarea datelor</strong>
              Utilizatorul are dreptul de a obține rectificarea oricăror
              inexactități ce vizează datele sale cu caracter personal
              prelucrate de către noi. De asemenea, are dreptul de a obține
              completarea oricăror date cu caracter personal care sunt
              incomplete. Orice utilizator este incurajat sa contacteze site-ul
              la adresa <strong>daniel.chitu886@yahoo.com</strong> ori de câte
              ori observa că există o inexactitate în privința datelor sale cu
              caracter personal sau că datele sale cu caracter personal
              prelucrate de către <strong>DC Imobiliare</strong> sunt
              incomplete.
            </p>
            <p className="terms-paragraph">
              • <strong>Dreptul la ștergerea datelor</strong>
              Utilizatorul are dreptul la ștergerea datelor având caracter
              personal. Acest drept nu este un drept absolut, ceea ce înseamnă
              că legea instituie anumite limitări în privința exercitării
              acestui drept („<strong>dreptul de a fi uitat</strong> „).
            </p>
            <p className="terms-paragraph">
              • <strong>Dreptul la restricționarea prelucrării datelor</strong>
              Utilizatorul are dreptul de a obține restricționarea prelucrării
              datelor sale cu caracter personal pe care le colectăm și
              prelucrăm, în special în cazul în care contesta exactitatea
              datelor, în cazul în care prelucrarea datelor este ilegală ori în
              cazul în care prelucrarea acestor date nu mai este necesară,
              potrivit legii.
            </p>
            <p className="terms-paragraph">
              • <strong>Dreptul de a obiecta</strong>
              Utilizatorul are dreptul de a obiecta la prelucrarea datelor având
              caracter personal de către noi, în special în cazul în care
              prelucrarea se realizează în scopuri de marketing sau din motive
              legate de situația particulară în care se afla acesta, caz in care
              datele acestuia trebuie anonimitate în cel mai scurt timp de la
              sesizarea obiectării din baza de date a site-ului și anonimizarea
              acestora trebuie confirmata utilizatorului.
            </p>
            <p className="terms-paragraph">
              • <strong>Dreptul la retragerea consimțământului</strong>
              Pentru datele cu caracter personal prelucrate pe baza
              consimțământului, utilizatorul are dreptul de a isi retrage
              consimțământul in orice moment, la fel de ușor cum l-a și acordat
              inițial. Retragerea consimțământului nu va afecta însă legalitatea
              prelucrării datelor pe care am realizat-o înainte de retragerea
              consimțământului. Dreptul la retragerea consimțământului nu este
              unul absolut, ceea ce înseamnă că există cazuri în care datele nu
              vor fi șterse ca urmare a retragerii consimțământului (de exemplu
              în cazul în care datele având caracter personal sunt folosite
              pentru ca site-ul să se conformeze unei obligații legale).
              Aplicarea retragerii consimțământului se aplica din momentul
              înregistrării acesteia si operarea retragerii consimțământului se
              va realiza in maximum 3 zile lucrătoare de la înregistrare.
            </p>
            <p className="terms-paragraph">
              •{" "}
              <strong>
                Dreptul de a depune o plângere în fața autorității competente
              </strong>
              Utilizatorul are dreptul de a depune o plângere la Autoritatea
              Națională de Supraveghere a Prelucrării Datelor cu Caracter
              Personal cu referire la aspectele ce privesc prelucrarea datelor
              cu caracter personal de către Societatea noastră.
            </p>
            <p className="terms-paragraph">
              •{" "}
              <strong>
                Procesul decizional automatizat, inclusiv crearea de profiluri
                și dreptul de a solicita ca deciziile bazate pe prelucrarea
                automată a datelor sau care afectează într-o măsură
                semnificativă să fie luate de persoane fizice, nu exclusiv de
                computere
              </strong>
            </p>
            <p className="terms-paragraph">
              Datele cu caracter personal sunt colectate și prelucrate printr-un
              proces decizional automatizat în vederea personalizării
              informațiilor şi comunicărilor comerciale adresare dumneavoastră.
              Procesul decizional automatizat ce implică datele de sănătate are
              la bază consimțământul dumneavoastră expres.
            </p>
            <p className="terms-paragraph">
              În cadrul acestor procese datele dumneavoastră sunt protejate prin
              măsuri de securizare specială de tipul criptării datelor și
              securității avansate la nivel de server al bazei de date.
            </p>
            <p className="terms-paragraph">
              Aveți dreptul de a solicita modificarea modului în care sunt
              prelucrate automat datele dumneavoastră personale, solicitând
              verificarea procesului automatizat prin intervenție umană. În
              acest scop vă rugăm să ne contactați la adresa de email{" "}
              <strong>daniel.chitu886@yahoo.com. </strong>
            </p>
            <h3>5) Exercitarea drepturilor</h3>
            <p className="terms-paragraph">
              Pentru ca utilizatorul sa își poată exercita drepturile precizate
              mai sus, pentru a ne adresa orice întrebare referitoare la aceste
              drepturi sau pentru a ne cere lămuriri cu privire la oricare
              dintre prevederile acestei informări, vă rugăm să ne contactați
              oricând, utilizând informațiile de contact.
              <br />
              Cum se pot transmite cererile sau plângerile – persoana de contact
              <br />
              Pentru a afla mai multe informații cu privire la datele cu
              caracter personal, cu privire la modul în care datele sunt
              colectate, prelucrate și protejate sau pentru a cere orice
              lămuriri referitoare la cele menționate în acești Temeri și
              Condiții orice utilizator poate contacta la orice moment
              responsabilul cu protecția datelor cu caracter personal din cadrul
              companiei, adresându-se prin mail la{" "}
              <strong>daniel.chitu886@yahoo.com</strong> sau prin corespondenta
              postala la Arad, Arad, Randunicii, 48.
              <br />
              16 Forță majoră
              <br />
              Nici una din părți nu va fi răspunzătoare pentru neexecutarea
              obligațiilor sale contractuale, dacă o astfel de neexecutare este
              datorată unui eveniment de forță majoră. Forța majoră este
              evenimentul imprevizibil, în afara controlului părților și care nu
              poate fi evitat.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

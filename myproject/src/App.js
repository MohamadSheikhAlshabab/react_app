import React, { useState } from "react";
import "./style.css";
import Card from "./Card";
import faker from "faker";
import styled from "styled-components";
const Button=styled.button`
 border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color:${props=>props.length<=3?'#4CAF50':'#4C0050'} ;
`
function App() {
  const styles = {
    outerDiv: {
      padding: "40px 0",
      textAlign: "center",
      backgroundColor: "purple",
    },
    innerDiv: {
      backgroundColor: "gray",
      textAlign: "center",
      padding: "40px 0",
      width: "50%",
      margin: "auto",
    },
  };
  const [name, setName] = useState("Mohamd Alshabab");
  const [showCard, setShowCard] = useState(true);
  const toggleShowCard=()=>setShowCard(!showCard); 
  const ChangeName = Name => setName(Name);
  const changeInput = event => setName (event.target.value);
  const ChangeAllName=(event,id)=>{
    const cardsIndex=cards.findIndex(card=> card.id===id);
    const cardsCopy=[...cards];
    cardsCopy[cardsIndex].first_name=event.target.value;
    setCards(cardsCopy);
  }
  const [cards,setCards]=useState([{
    "id":"qqqqqq",
  "first_name": "Dulciana Grinaugh",
  "title": "Programmer Analyst II",
  "img": "http://dummyimage.com/133x138.jpg/5fa2dd/ffffff"
}, {
  "id":"wwww",
  "first_name": "Jayme Apted",
  "title": "Developer I",
  "img": "http://dummyimage.com/222x170.bmp/ff4444/ffffff"
}, {
  "id":"eeeee",
  "first_name": "Claudetta Frontczak",
  "title": "General Manager",
  "img": "http://dummyimage.com/240x142.bmp/cc0000/ffffff"
}, {
  "id":"rrrrrr",
  "first_name": "Deeyn Foakes",
  "title": "Analog Circuit Design manager",
  "img": "http://dummyimage.com/121x231.png/5fa2dd/ffffff"
}, {
  "id":"ttttt",
  "first_name": "Ferdinand Battie",
  "title": "Junior Executive",
  "img": "http://dummyimage.com/242x181.png/ff4444/ffffff"
}, {
  "id":"qyyyy",
  "first_name": "Donnell Fannon",
  "title": "Senior Cost Accountant",
  "img": "http://dummyimage.com/111x159.bmp/dddddd/000000"
}, {
  "id":"uuuuuu",
  "first_name": "Nedda Ogan",
  "title": "Clinical Specialist",
  "img": "http://dummyimage.com/112x106.png/cc0000/ffffff"
}, {
  "id":"iiiii",
  "first_name": "Lu Escalera",
  "title": "Executive Secretary",
  "img": "http://dummyimage.com/108x151.png/5fa2dd/ffffff"
}, {
  "id":"ooooo",
  "first_name": "Wendye Colthurst",
  "title": "Speech Pathologist",
  "img": "http://dummyimage.com/175x102.png/5fa2dd/ffffff"
}, {
  "id":"pppppp",
  "first_name": "Kahaleel Rattray",
  "title": "Developer III",
  "img": "http://dummyimage.com/162x230.png/dddddd/000000"
}, {
  "id":"aaaa",
  "first_name": "Torrance Rangell",
  "title": "Teacher",
  "img": "http://dummyimage.com/183x128.png/ff4444/ffffff"
}, {
  "id":"ssss",
  "first_name": "Joleen Driscoll",
  "title": "Technical Writer",
  "img": "http://dummyimage.com/113x237.png/5fa2dd/ffffff"
}, {
  "id":"dddq",
  "first_name": "Anne-marie Roose",
  "title": "Junior Executive",
  "img": "http://dummyimage.com/221x153.jpg/5fa2dd/ffffff"
}, {
  "id":"gggg",
  "first_name": "Hort Muddiman",
  "title": "Nuclear Power Engineer",
  "img": "http://dummyimage.com/155x244.jpg/5fa2dd/ffffff"
}, {
  "id":"ffff",
  "first_name": "Quinta Tredwell",
  "title": "Administrative Assistant I",
  "img": "http://dummyimage.com/207x219.bmp/dddddd/000000"
}, {
  "id":"hhhhh",
  "first_name": "Mariel McHale",
  "title": "Civil Engineer",
  "img": "http://dummyimage.com/122x119.png/cc0000/ffffff"
}, {
  "id":"jjjjj",
  "first_name": "Joby Heinschke",
  "title": "Chief Design Engineer",
  "img": "http://dummyimage.com/131x114.bmp/cc0000/ffffff"
}, {
  "id":"kk",
  "first_name": "Herta Longdon",
  "title": "Sales Representative",
  "img": "http://dummyimage.com/190x197.jpg/5fa2dd/ffffff"
}, {
  "id":"lllll",
  "first_name": "Brittani Shickle",
  "title": "Account Coordinator",
  "img": "http://dummyimage.com/114x207.png/cc0000/ffffff"
}, {
  "id":"zzzz",
  "first_name": "Robbie Houlison",
  "title": "Registered Nurse",
  "img": "http://dummyimage.com/201x173.jpg/ff4444/ffffff"
}, {
  "id":"xxx",
  "first_name": "Sammy Bantock",
  "title": "Staff Accountant II",
  "img": "http://dummyimage.com/110x200.bmp/dddddd/000000"
}, {
  "id":"ccc",
  "first_name": "Mayor Phillip",
  "title": "Quality Engineer",
  "img": "http://dummyimage.com/199x104.png/5fa2dd/ffffff"
}, {
  "id":"vvv",
  "first_name": "Vernon Collabine",
  "title": "Nuclear Power Engineer",
  "img": "http://dummyimage.com/214x245.jpg/cc0000/ffffff"
}, {
  "id":"bbbb",
  "first_name": "Delora Himsworth",
  "title": "General Manager",
  "img": "http://dummyimage.com/164x128.jpg/5fa2dd/ffffff"
}, {
  "id":"sadad",
  "first_name": "Zared Blanchard",
  "title": "Health Coach I",
  "img": "http://dummyimage.com/188x105.png/cc0000/ffffff"
}, {
  "id":"qddddq",
  "first_name": "Kendell McGlashan",
  "title": "Dental Hygienist",
  "img": "http://dummyimage.com/230x183.jpg/cc0000/ffffff"
}, {
  "id":"qqggq",
  "first_name": "Torry Altamirano",
  "title": "Executive Secretary",
  "img": "http://dummyimage.com/104x150.png/5fa2dd/ffffff"
}, {
  "id":"qqjjq",
  "first_name": "Morgan Buckmaster",
  "title": "Food Chemist",
  "img": "http://dummyimage.com/148x140.jpg/cc0000/ffffff"
}, {
  "id":"qqoooq",
  "first_name": "Sella Eggerton",
  "title": "Structural Engineer",
  "img": "http://dummyimage.com/167x175.bmp/5fa2dd/ffffff"
}, {
  "id":"qqqppp",
  "first_name": "Celestine Grodden",
  "title": "Web Designer II",
  "img": "http://dummyimage.com/158x191.jpg/dddddd/000000"
}, {
  "id":"qqiiii",
  "first_name": "Andrus Valasek",
  "title": "Assistant Professor",
  "img": "http://dummyimage.com/185x159.bmp/5fa2dd/ffffff"
}, {
  "id":"qwwww",
  "first_name": "Ninon Finnan",
  "title": "Community Outreach Specialist",
  "img": "http://dummyimage.com/242x229.bmp/ff4444/ffffff"
}, {
  "id":"qquyu",
  "first_name": "Othilie MacAscaidh",
  "title": "VP Marketing",
  "img": "http://dummyimage.com/159x226.png/ff4444/ffffff"
}, {
  "id":"qqsadsa",
  "first_name": "Lane Kinghorn",
  "title": "Senior Developer",
  "img": "http://dummyimage.com/128x175.bmp/cc0000/ffffff"
}, {
  "id":"qqssdsdsdsd",
  "first_name": "Sherrie Crowest",
  "title": "Director of Sales",
  "img": "http://dummyimage.com/150x122.png/5fa2dd/ffffff"
}, {
  "id":"qqqsdsadadsadsad",
  "first_name": "Bartel Winram",
  "title": "Account Executive",
  "img": "http://dummyimage.com/175x150.png/cc0000/ffffff"
}, {
  "id":"qqqcxcxzcxzcxzcq",
  "first_name": "Giulio Cambden",
  "title": "Database Administrator III",
  "img": "http://dummyimage.com/204x167.jpg/dddddd/000000"
}, {
  "id":"qasdsadsadsad",
  "first_name": "Lucho Naire",
  "title": "Executive Secretary",
  "img": "http://dummyimage.com/136x180.jpg/cc0000/ffffff"
}, {
  "id":"qqqwwwuuwuw",
  "first_name": "Merwin Reisen",
  "title": "Senior Quality Engineer",
  "img": "http://dummyimage.com/202x245.bmp/dddddd/000000"
}, {
  "id":"qqsdsadsadsadllc",
  "first_name": "Fulvia Goodinge",
  "title": "Environmental Tech",
  "img": "http://dummyimage.com/141x213.png/ff4444/ffffff"
}, {
  "id":"qqqqqqasssssss",
  "first_name": "Rock Ximenez",
  "title": "Information Systems Manager",
  "img": "http://dummyimage.com/205x229.jpg/dddddd/000000"
}, {
  "id":"qqqqqqqqqqqq",
  "first_name": "Akim Willder",
  "title": "Professor",
  "img": "http://dummyimage.com/141x126.bmp/dddddd/000000"
}, {
  "id":"qqqqqqwwwwwwwww",
  "first_name": "Joletta Divisek",
  "title": "Engineer IV",
  "img": "http://dummyimage.com/194x192.bmp/5fa2dd/ffffff"
}, {
  "id":"qqqqqqrrrrrrrrrr",
  "first_name": "Brigitte Puttnam",
  "title": "Human Resources Assistant I",
  "img": "http://dummyimage.com/108x186.png/dddddd/000000"
}, {
  "id":"qqqqqqsssssss",
  "first_name": "Flint Hurles",
  "title": "Social Worker",
  "img": "http://dummyimage.com/123x215.jpg/dddddd/000000"
}, {
  "id":"qqqqqqxxxxxxxx",
  "first_name": "Carlin O'Nowlan",
  "title": "Media Manager II",
  "img": "http://dummyimage.com/129x236.jpg/dddddd/000000"
}, {
  "id":"qqqqqqbbbbbb",
  "first_name": "Aveline Clemenzi",
  "title": "Media Manager III",
  "img": "http://dummyimage.com/226x101.jpg/dddddd/000000"
}, {
  "id":"qqqqqqkkkk",
  "first_name": "Jamesy Boxill",
  "title": "Nurse",
  "img": "http://dummyimage.com/112x240.bmp/ff4444/ffffff"
}, {
  "id":"qqqqqqzzzzzz",
  "first_name": "Kaitlynn MacGuffie",
  "title": "Assistant Professor",
  "img": "http://dummyimage.com/205x200.bmp/ff4444/ffffff"
}, {
  "id":"qqqqqqpppppp",
  "first_name": "Shirleen Draisey",
  "title": "Quality Engineer",
  "img": "http://dummyimage.com/250x233.png/cc0000/ffffff"
}, {
  "id":"qqqqqqggggggggg",
  "first_name": "Eileen Dybald",
  "title": "Financial Advisor",
  "img": "http://dummyimage.com/134x212.jpg/5fa2dd/ffffff"
}, {
  "id":"qqqqqq0000",
  "first_name": "Marita Allcoat",
  "title": "Human Resources Manager",
  "img": "http://dummyimage.com/161x244.bmp/ff4444/ffffff"
}, {
  "id":"qqqqqq11111",
  "first_name": "Victoria Romanin",
  "title": "Registered Nurse",
  "img": "http://dummyimage.com/126x209.jpg/cc0000/ffffff"
}, {
  "id":"qqqqqq2222",
  "first_name": "Charlie Kliemann",
  "title": "Desktop Support Technician",
  "img": "http://dummyimage.com/150x151.jpg/cc0000/ffffff"
}, {
  "id":"qqqqqq33333",
  "first_name": "Jacinthe Dukelow",
  "title": "Desktop Support Technician",
  "img": "http://dummyimage.com/108x244.png/ff4444/ffffff"
}, {
  "id":"qqqqqq444444",
  "first_name": "Cozmo Tenney",
  "title": "Account Representative III",
  "img": "http://dummyimage.com/181x161.bmp/dddddd/000000"
}, {
  "id":"qqqqqq555555",
  "first_name": "Kandy Till",
  "title": "Executive Secretary",
  "img": "http://dummyimage.com/189x224.jpg/5fa2dd/ffffff"
}, {
  "id":"qqqqqq6666666",
  "first_name": "Ransom Zoppo",
  "title": "Research Nurse",
  "img": "http://dummyimage.com/110x169.jpg/5fa2dd/ffffff"
}, {
  "id":"qqqqqq77777",
  "first_name": "Lulu Lutwidge",
  "title": "Dental Hygienist",
  "img": "http://dummyimage.com/148x110.jpg/5fa2dd/ffffff"
}, {
  "id":"qqqqqq88888",
  "first_name": "Orton Cogle",
  "title": "Desktop Support Technician",
  "img": "http://dummyimage.com/156x143.png/cc0000/ffffff"
}, {
  "id":"qqqqqq999",
  "first_name": "Hermon Curry",
  "title": "Account Representative IV",
  "img": "http://dummyimage.com/203x238.jpg/cc0000/ffffff"
}, {
  "id":"qqqqqq10",
  "first_name": "Marice Fritschel",
  "title": "Developer IV",
  "img": "http://dummyimage.com/204x173.jpg/5fa2dd/ffffff"
}, {
  "id":"qqqqqq12",
  "first_name": "Bobby Behnecken",
  "title": "Paralegal",
  "img": "http://dummyimage.com/209x228.jpg/cc0000/ffffff"
}, {
  "id":"qqqqqq13",
  "first_name": "Gina Cristofol",
  "title": "Help Desk Technician",
  "img": "http://dummyimage.com/167x198.png/ff4444/ffffff"
}, {
  "id":"qqqqqq14",
  "first_name": "Niko Sarle",
  "title": "Health Coach III",
  "img": "http://dummyimage.com/187x151.png/cc0000/ffffff"
}, {
  "id":"qqqqqq15",
  "first_name": "Virginia Verdie",
  "title": "VP Accounting",
  "img": "http://dummyimage.com/165x169.jpg/ff4444/ffffff"
}, {
  "id":"qqqqqq16",
  "first_name": "Kira Santino",
  "title": "Software Engineer I",
  "img": "http://dummyimage.com/206x235.bmp/dddddd/000000"
}, {
  "id":"qqqqqq17",
  "first_name": "Clemmie McPake",
  "title": "Assistant Professor",
  "img": "http://dummyimage.com/107x111.png/cc0000/ffffff"
}, {
  "id":"qqqqqq18",
  "first_name": "Eddie Dady",
  "title": "Accountant I",
  "img": "http://dummyimage.com/185x239.bmp/ff4444/ffffff"
}, {
  "id":"qqqqqq19",
  "first_name": "Meade Matushevitz",
  "title": "Operator",
  "img": "http://dummyimage.com/102x120.png/dddddd/000000"
}, {
  "id":"qqqqqq20",
  "first_name": "Cozmo Gantz",
  "title": "Dental Hygienist",
  "img": "http://dummyimage.com/135x165.png/cc0000/ffffff"
}, {
  "id":"qqqqqq21",
  "first_name": "Merrily Bartunek",
  "title": "Structural Engineer",
  "img": "http://dummyimage.com/160x109.png/5fa2dd/ffffff"
}, {
  "id":"qqqqqq22",
  "first_name": "Al Lafford",
  "title": "Statistician IV",
  "img": "http://dummyimage.com/131x108.jpg/dddddd/000000"
}, {
  "id":"qqqqqq23",
  "first_name": "Rodney Childs",
  "title": "Human Resources Assistant III",
  "img": "http://dummyimage.com/243x222.png/ff4444/ffffff"
}, {
  "id":"qqqqqq24",
  "first_name": "Anallese Chree",
  "title": "Operator",
  "img": "http://dummyimage.com/191x239.jpg/dddddd/000000"
}, {
  "id":"qqqqqq25",
  "first_name": "Cornela Muck",
  "title": "Senior Sales Associate",
  "img": "http://dummyimage.com/235x250.bmp/cc0000/ffffff"
}, {
  "id":"qqqqqq26",
  "first_name": "Tatiana Holywell",
  "title": "Chief Design Engineer",
  "img": "http://dummyimage.com/236x137.jpg/ff4444/ffffff"
}, {
  "id":"qqqqqq27",
  "first_name": "Felizio Dundendale",
  "title": "Chemical Engineer",
  "img": "http://dummyimage.com/239x121.bmp/5fa2dd/ffffff"
}, {
  "id":"qqqqqq28",
  "first_name": "Chastity Badman",
  "title": "Internal Auditor",
  "img": "http://dummyimage.com/140x135.bmp/dddddd/000000"
}, {
  "id":"qqqqqq29",
  "first_name": "Omero Tredget",
  "title": "Web Developer III",
  "img": "http://dummyimage.com/126x133.jpg/ff4444/ffffff"
}, {
  "id":"qqqqqq30",
  "first_name": "Afton Huguenet",
  "title": "VP Marketing",
  "img": "http://dummyimage.com/243x169.png/dddddd/000000"
}, {
  "id":"qqqqqq31",
  "first_name": "Reynolds Golde",
  "title": "Analyst Programmer",
  "img": "http://dummyimage.com/156x116.bmp/dddddd/000000"
}, {
  "id":"qqqqqq32",
  "first_name": "Kaitlynn Bythell",
  "title": "Actuary",
  "img": "http://dummyimage.com/216x157.png/5fa2dd/ffffff"
}, {
"id":"qqqqqq33",
  "first_name": "Bab Edison",
  "title": "Media Manager III",
  "img": "http://dummyimage.com/111x215.bmp/dddddd/000000"
}, {
"id":"qqqqqq34",
  "first_name": "Karlik Zuenelli",
  "title": "Geologist IV",
  "img": "http://dummyimage.com/108x238.jpg/5fa2dd/ffffff"
}, {
  "id":"qqqqqq35",
  "first_name": "Nevil Querrard",
  "title": "Research Assistant III",
  "img": "http://dummyimage.com/208x172.jpg/5fa2dd/ffffff"
}, {
  "id":"qqqqqq36",
  "first_name": "Alika Gerner",
  "title": "Engineer III",
  "img": "http://dummyimage.com/140x126.jpg/5fa2dd/ffffff"
}, {
  "id":"qqqqqq37",
  "first_name": "Alameda Burl",
  "title": "Product Engineer",
  "img": "http://dummyimage.com/184x228.png/ff4444/ffffff"
}, {
  "id":"qqqqqq38",
  "first_name": "Brina McCritichie",
  "title": "Mechanical Systems Engineer",
  "img": "http://dummyimage.com/108x238.jpg/5fa2dd/ffffff"
}, {
  "id":"qqqqqq39",
  "first_name": "Alden McKune",
  "title": "GIS Technical Architect",
  "img": "http://dummyimage.com/232x145.bmp/dddddd/000000"
}, {
  "id":"qqqqqq40",
  "first_name": "Domingo Brackpool",
  "title": "Sales Associate",
  "img": "http://dummyimage.com/121x240.bmp/ff4444/ffffff"
}, {
  "id":"qqqqqq41",
  "first_name": "Gwendolin Haysom",
  "title": "Research Assistant III",
  "img": "http://dummyimage.com/201x196.jpg/cc0000/ffffff"
}, {
  "id":"qqqqqq42",
  "first_name": "Grier Zammett",
  "title": "Data Coordiator",
  "img": "http://dummyimage.com/165x184.jpg/ff4444/ffffff"
}, {
  "id":"qqqqqq43",
  "first_name": "Benito Sperry",
  "title": "Developer I",
  "img": "http://dummyimage.com/192x187.png/ff4444/ffffff"
}, {
  "id":"qqqqqq44",
  "first_name": "Thacher Puckham",
  "title": "Physical Therapy Assistant",
  "img": "http://dummyimage.com/200x125.png/5fa2dd/ffffff"
}, {
  "id":"qqqqqq45",
  "first_name": "Bernetta Woolvett",
  "title": "Web Designer IV",
  "img": "http://dummyimage.com/186x206.bmp/cc0000/ffffff"
}, {
  "id":"qqqqqq46",
  "first_name": "Mirella Dobrowolski",
  "title": "Senior Cost Accountant",
  "img": "http://dummyimage.com/229x220.jpg/ff4444/ffffff"
}, {
  "id":"qqqqqq47",
  "first_name": "Selinda Kunzel",
  "title": "Technical Writer",
  "img": "http://dummyimage.com/223x158.png/ff4444/ffffff"
}, {
  "id":"qqqqqq48",
  "first_name": "Rhodie Ashfield",
  "title": "Senior Developer",
  "img": "http://dummyimage.com/236x192.png/dddddd/000000"
}, {
  "id":"qqqqqq49",
  "first_name": "Orin Mendus",
  "title": "Accountant II",
  "img": "http://dummyimage.com/156x128.png/5fa2dd/ffffff"
}]);
const buttonStyle ={
  backgroundColor:null
}
      const buttons = (
        <div>
          <button className="button button1"  style={buttonStyle} >Yes</button>
          <button className="button button2" style={buttonStyle} >No</button>
        </div>
      );
  const markupCard=showCard&&(
  cards.map(card=><Card
          avatar={faker.image.avatar()}
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
          onChangeName={(event)=>ChangeAllName(event,card.id)}
          // onChangeName={(card)=>ChangeAllName(card,card.id)}
        >
          {buttons}
        </Card>)
  );
  const renderCards=showCard &&(
  cards.map((card,index) => <Card
          avatar={card.img}
          name={card.first_name}
          title={card.title}
          key={card.id}
          onDelete={()=>deleteHandler(index)}
          onChangeName={(event)=>ChangeAllName(event,card.id)}
        >
          {buttons}
        </Card>)
  );
  const deleteHandler=(cardIndex)=>{
const cardsCopy =[...cards]
cardsCopy.splice(cardIndex,1)
setCards(cardsCopy)
  }
  if(cards.length<=5)buttonStyle.backgroundColor='#00ff25';
  if(cards.length<223)buttonStyle.backgroundColor='#0aaf25';
  if(cards.length<295)buttonStyle.backgroundColor='#ffff25';
  if(cards.length<290)buttonStyle.backgroundColor='#eeff25';
  if(cards.length<292)buttonStyle.backgroundColor='#0f5f25';
  if(cards.length<685)buttonStyle.backgroundColor='#005525';
  if(cards.length<692)buttonStyle.backgroundColor='#00ff25';
  if(cards.length<699)buttonStyle.backgroundColor='#00ff25';
  if(cards.length<706)buttonStyle.backgroundColor='#ff2599';
  if(cards.length<713)buttonStyle.backgroundColor='#00ffff';
  if(cards.length<720)buttonStyle.backgroundColor='#ff00ff';
  if(cards.length<727)buttonStyle.backgroundColor='#aa00ff';
  if(cards.length<734)buttonStyle.backgroundColor='#aa0025';
  if(cards.length<741)buttonStyle.backgroundColor='#ab00ff';
  if(cards.length<749)buttonStyle.backgroundColor='#2200ff25';
  if(cards.length<756)buttonStyle.backgroundColor='#5500ff25';
  if(cards.length<763)buttonStyle.backgroundColor='#9900ff25';
  if(cards.length<770)buttonStyle.backgroundColor='#0099ff25';
  if(cards.length<778)buttonStyle.backgroundColor='#00ff9925';
  if(cards.length<786)buttonStyle.backgroundColor='#00ff2599';
  if(cards.length<794)buttonStyle.backgroundColor='#00f9f925';
  if(cards.length<801)buttonStyle.backgroundColor='#00ff2995';
  if(cards.length<809)buttonStyle.backgroundColor='#9090f9';
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <div className="outer">
        this outer
        <div className="inner">this inside</div>
        <div
          style={{
            padding: "50px 0",
            backgroundColor: "blue",
            textAlign: "center",
            margin: "auto",
            width: "50%",
          }}
        >
          inline CSS
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br />
      </div>
      <div style={{ textAlign: "center" }}>
        {" "}
        curly braces
        <div style={styles.outerDiv}>
          outside Div
          <div style={styles.innerDiv}>inside Div</div>
        </div>
      </div>
      <div style={{ backgroundColor: "yellow" }}>
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br />
      </div>
      <div
        className="App"
        style={{
          padding: "50px 150px",
          textAlign: "center",
          border: " 3px solid red ",
          margin: "5px 60px",
          height: "1170px",
          width: "550px",
        }}
      >
        <Button>styled Button</Button>
        <button className="button button1"  style={buttonStyle} onClick={()=>ChangeName('allal')}>
          Change Name
        </button>
        <button className="button button1"  style={buttonStyle} onClick={toggleShowCard}>
          Toggle show/hide
        </button>
        {showCard? <Card
          avatar={faker.image.avatar()}
          name={name}
          title={faker.name.jobTitle()}
          onChangInput={changeInput}
          onChange={()=>ChangeName('alaa asaas')}
        >
          {buttons}
        </Card>:null}
        <button className="button button1"  style={buttonStyle} onClick={toggleShowCard}>
          Toggle show/hide
        </button>
        <Card
          avatar={faker.image.avatar()}
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
        >
          {buttons}
        </Card>
        <Card
          avatar={faker.image.avatar()}
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
        >
          {buttons}
        </Card>
        <Card
          avatar={faker.image.avatar()}
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
        >
          {buttons}
        </Card>
        <Card
          avatar={faker.image.avatar()}
          name={`${faker.name.firstName()} ${faker.name.lastName()}`}
          title={faker.name.jobTitle()}
        >
          {buttons}
        </Card>
        <br />
        <br />
        <br />
        <button className="button button1" onClick={toggleShowCard}>
          Toggle show/hide
        </button>
        {markupCard}
        <br />
        {renderCards}{renderCards}{renderCards}{renderCards}{renderCards}{renderCards}{renderCards}
      </div>
      <div
        className="App"
        style={{
          padding: "50px 0",
          textAlign: "center",
          border: " 3px solid red ",
          margin: "5px 6px",
          height: "370px",
          width: "450px",
          position: "absolute",
          right: 0,
        }}
      >
        <div
          className="card"
          style={{ border: "3px solid grey", borderRadius: "50%" }}
        >
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            style={{ borderRadius: " 50%", height: "200px", width: "200px" }}
          />
          <div
            className="container"
            style={{
              border: "3px solid purple",
              marginTop: "50px",
              marginBottom: "1px",
            }}
          >
            <h4>
              <b>John</b>
            </h4>
            <p>Communication Engineer</p>
          </div>
        </div>
      </div>
      <div
        className="App"
        style={{
          padding: "50px 0",
          textAlign: "center",
          border: " 3px solid red ",
          margin: "5px 6px",
          height: "370px",
          width: "450px",
          position: "absolute",
          right: 0,
        }}
      >
        <div
          className="card"
          style={{ border: "3px solid grey", borderRadius: "50%" }}
        >
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            style={{ borderRadius: " 50%", height: "200px", width: "200px" }}
          />
          <div
            className="container"
            style={{
              border: "3px solid purple",
              marginTop: "50px",
              marginBottom: "1px",
            }}
          >
            <h4>
              <b>John</b>
            </h4>
            <p>Communication & Engineer</p>
          </div>
        </div>
      </div>
      <div
        className="App"
        style={{
          padding: "50px 0",
          textAlign: "center",
          border: " 3px solid red ",
          margin: "5px 6px",
          height: "370px",
          width: "450px",
          position: "absolute",
          right: 0,
        }}
      >
        <div
          className="card"
          style={{ border: "3px solid grey", borderRadius: "50%" }}
        >
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            style={{ borderRadius: " 50%", height: "200px", width: "200px" }}
          />
          <div
            className="container"
            style={{
              border: "3px solid purple",
              marginTop: "50px",
              marginBottom: "1px",
            }}
          >
            <h4>
              <b>John</b>
            </h4>
            <p>Communication Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

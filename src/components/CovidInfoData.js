import { v4 } from "uuid";

//symptoms

import headache from "../img/headache.png";
import throat from "../img/throat.png";
import breathe from "../img/breathe.png";
import musle from "../img/musle.png";
import fever from "../img/highFever.png";
import cough from "../img/cough.png";

//prevention
import faceImg from "../img/face.png";
import handWash from "../img/handWash.png";
import hygine from "../img/hygine.png";
import distance from "../img/distance.png";

export const symptomsData = [
  {
    title: "High Fever",
    desc: "An elevated temperature. A body temperature that's higher than normal.",
    imgUrl: fever,
    id: v4(),
  },
  {
    title: "Strong Headache",
    desc: "Has moderate to severe in intensity. Causes a pulsing or pressing sensation. Occurs on both sides of your head (bilateral).",
    imgUrl: headache,
    id: v4(),
  },
  {
    title: "Cough & Sick",
    desc: "Unless it is an emergency, stay at home or call to the doctor or helpline number. Continue to monitor your health.",
    imgUrl: cough,
    id: v4(),
  },
  {
    title: "Sore Throat",
    desc: "An itchy affair with pain involved. Hard to consume food.",
    imgUrl: throat,
    id: v4(),
  },
  {
    title: "Shortness Of breath",
    desc: "It can make it hard to breath in deep. Not enough air inflow into lungs. Gasping for air. Chest may feel too tight to inhale or exhale fully.",
    imgUrl: breathe,
    id: v4(),
  },
  {
    title: "Muscle Pain",
    desc: "Its a long haul effect lingering the pain in muscles with cointinuos chills.",
    imgUrl: musle,
    id: v4(),
  },
];

export const preventionData = [
  {
    title: "Wash your hands frequently",
    desc: "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.",
    imgUrl: handWash,
    id: v4(),
  },
  {
    title: "Avoid touching face",
    desc: "Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.",
    imgUrl: faceImg,
    id: v4(),
  },
  {
    title: "Maintain social distancing",
    desc: "Maintain at least 2 metre (6 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.",
    imgUrl: distance,
    id: v4(),
  },
  {
    title: "Practice respiratory hygiene",
    desc: "Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze.",
    imgUrl: hygine,
    id: v4(),
  },
];

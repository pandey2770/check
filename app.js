const express = require("express");
const app = express();

app.get('/',(request, response)=>{
  response.json(
    {
      id:'resumeAbhishekPandey2770',
      name:'Abhishek Pandey',
      about:'I am full-stack javascript developer. I code with creativity. My expertise lies in building rich user experience on top of stable and simplified data flow in applications.',
      technicalSkills:'JavaScript(ES5, ES6), ReactJS, Flux, Redux, NodeJS, HTML5, CSS3,MongoDb, Postgres, VSCode, git, trello',
      currentlyWorking:'Currently working with Humble a software developer 2016-​Currently',
      recentProjectsOne: {
        reactReduxNodeApp: {
          reactReduxNodeApp:'React-Redux-Node-App ( ​https://github.com/pandey2770/react-redux-node-app​ )',
          description:'A Task App with User Management System',
          technologies:'ReactJS, Redux, CSS, node, postgres'
        },
        reactSetUp:{
          reduxSetUp:'Redux SetUp( ​https://github.com/pandey2770/reduxSetup​ )',
          Description:'A redux setUp',
          technologies:'React, redux'
        },
        gitUsers:{
          gitUsers:'Find Git Users( ​https://pandey2770.github.io/findgitusers/​  )',
          Description:'Find Git Users',
          technologies:'React'
        },
        reactvrRotatingBoxes:{
          reactvrRotatingBoxes:'reactvr-rotating-boxes( ​​https://pandey2770.github.io/reactvr-rotating-boxes/​ )',
          Description:'A virtual reality experiment using react-vr.',
          technologies:'JS, ReactVR'
        },
        insideNot:{
          insideNot:'Inside not ( ​​​https://www.insidenot.com/ )',
          Description:'InsideNot ​is an online marketplace and fitness platform, enabling fitness experts in various domains to offer their fitness services outside of the gym. InsideNot is based in Ottaw, Canada.',
          technologies:'ReactJS, Redux, HTML5, CSS3, Git, Travis CI, Trello'
        },
        klookerEcommApplication:{
          klookerEcommApplication:'e-comm Application( ​​​http://klooker-staging.startersquad.com )',
          Description:'E-comm frontend for Dutch startup.',
          technologies:'JS, ReactVR'
        }
      }
    }
  );
})

app.listen(1234,()=>{
    console.log("Server Start....");
})

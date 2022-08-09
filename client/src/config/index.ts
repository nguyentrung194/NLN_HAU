const local = {
  api: "http://localhost:5000/",
  firebase: {
    apiKey: "AIzaSyD8miqPtBXeW8T7Tspv5zXywRIKpSOiA6k",
    authDomain: "happy-new-yearn.firebaseapp.com",
    projectId: "happy-new-yearn",
    storageBucket: "happy-new-yearn.appspot.com",
    messagingSenderId: "1001242671986",
    appId: "1:1001242671986:web:e31d9c0a2945bcb3a87beb",
    measurementId: "G-WDWNH6F3HC",
  },
};

const staging = {
  api: "http://localhost:5000/",
  firebase: {
    apiKey: "AIzaSyD8miqPtBXeW8T7Tspv5zXywRIKpSOiA6k",
    authDomain: "happy-new-yearn.firebaseapp.com",
    projectId: "happy-new-yearn",
    storageBucket: "happy-new-yearn.appspot.com",
    messagingSenderId: "1001242671986",
    appId: "1:1001242671986:web:e31d9c0a2945bcb3a87beb",
    measurementId: "G-WDWNH6F3HC",
  },
};

let envConfig = local;

if (process.env.REACT_APP_STAGE === "staging") {
  envConfig = staging;
} else {
  envConfig = local;
}

const environment = envConfig;

export default environment;

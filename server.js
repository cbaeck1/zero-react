const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, ".")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "index.html"));
});
app.listen(8080, () => {
  console.log("Express App on port 8080!");
});

// 익스프레스 미들웨어, 라우팅
// routing
// const express = require("express");
// const path = require("path");
// const app = express();
// app.use(express.static(path.join(__dirname, "src")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "src", "main.html"));
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "src", "about.html"));
// });
// app.listen(8080, () => {
//   console.log("Express App on port 8080!");
// });

// after express install
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.listen(8080, () => {
//   console.log("Express App on port 8080!");
// });

// const http = require("http");
// const url = require("url");
// const fs = require("fs");
// http
//   .createServer((request, response) => {
//     const path = url.parse(request.url, true).pathname; // url에서 path 추출
//     if (request.method === "GET") {
//       // GET 요청이면
//       if (path === "/about") {
//         // 주소가 /about이면
//         response.writeHead(200, { "Content-Type": "text/html" }); // header 설정
//         fs.readFile(__dirname + "/src/about.html", (err, data) => {
//           // 파일 읽는 메소드
//           if (err) {
//             return console.error(err); // 에러 발생시 에러 기록하고 종료
//           }
//           response.end(data, "utf-8"); // 브라우저로 전송
//         });
//       } else if (path === "/") {
//         // 주소가 /이면
//         response.writeHead(200, { "Content-Type": "text/html" });
//         fs.readFile(__dirname + "/src/main.html", (err, data) => {
//           if (err) {
//             return console.error(err);
//           }
//           response.end(data, "utf-8");
//         });
//       } else {
//         // 매칭되는 주소가 없으면
//         response.statusCode = 404; // 404 상태 코드
//         response.end("주소가 없습니다");
//       }
//     }
//   })
//   .listen(8080);

// const http = require("http");
// http
//   .createServer((request, response) => {
//     return request
//       .on("error", (err) => {
//         // 요청에 에러가 있으면
//         console.error(err);
//       })
//       .on("data", (data) => {
//         // 요청에 데이터가 있으면
//         console.log(data);
//       })
//       .on("end", () => {
//         // 요청의 데이터가 모두 받아졌으면
//         response.on("error", (err) => {
//           // 응답에 에러가 있으면
//           console.error(err);
//         });
//         response.statusCode = 200; // 성공 상태 코드
//         response.setHeader("Content-Type", "text/plain"); // header 설정
//         response.write("hi\n"); // body에 정보 탑재
//         response.end("the end!"); // 정보 탑재 후 브라우저로 전송
//       });
//   })
//   .listen(8080);

// const http = require("http"); // 서버를 만드는 모듈 불러옴
// http
//   .createServer((request, response) => {
//     // 서버 만드는 메소드
//     console.log("server start!");
//   })
//   .listen(8080);

// 1. npm
//  # npm -v
//  # npm install -g n
//  # node -v
//  node.js download -> install
//  # nmp init
//  edit server.js
//  # node server.js
// 2. HTML 전송하기
//   main.html, about.html
// 3. Express 프레임워크
//   # npm install express
//   익스프레스 미들웨어, 라우팅
//
// 4. webpack
//   # npm i react react-dom
//   # npm i -D webpack webpack-cli
//   edit webpack.config.js
//   edit client.jsx
//   edit index.html
//   edit package.json -- scripts : "dev": "webpack"
//   npx webpack or npm run dev
//   # npm i -D @babel/core
//   # npm i -D @babel/preset-env
//   # npm i -D @babel/preset-react
//   # npm i babel-loader

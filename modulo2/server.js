const express = require("express");
const nunjucks = require("nunjucks")

const app = express();
const videos = require("./data");

app.use(express.static("public"))
app.set("view engine", "njk")

nunjucks.configure("views", {
  express: app,
  autoescape: false,
  noCache: true
})

app.get('/', function (req, res) {
  const about = {
    avatar_url: "https://avatars0.githubusercontent.com/u/53794075?s=400&u=ce8c284a8ea5dc9b3e8e7b34e17816ee26fc8a6c&v=4",
    name: "Alisson Felipe",
    role: "Programador - Full-Stack",
    description: 'Buscando novos desafios e focado em aprender novas tecnologias. Estagiário da <a href="https://fornecedor.cencosud.com.br/NewSite/">Cencosud Brasil.',
    links: [
      { name: "GitHub", url: "https://github.com/AlissonSantos17" },
      { name: "Twitter", url: "https://twitter.com/_alissx/" },
      { name: "linkedIn", url: "https://www.linkedin.com/in/alissonfelipelsantos/" }
    ]
  }
  return res.render("about", { about })
});

app.get('/portfolio', function (req, res) {
  return res.render("portfolio", { items: videos })
});

app.listen(3000, function () {
  console.log('Server is Running!')
});
const express = require("express")
const server = express()

server.use(static("public"))

const nunjucks = require("nunjucks")
configure("src/views", {
    express: server,
    nocache: true
})

server.get("/", (req, res) =>{
    return res.render("index.html", {title: "um titulo"})
})

server.get("/create-point", (req, res) =>{
    return res.render("create-point.html")
})

server.get("/search", (req, res) =>{
    return res.render("search-results.html")
})

// server.get("/page-header", (req, res) =>{
//     return res.render("/partials/page-header.html")
// })

server.listen(3000)
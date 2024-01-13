import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var blog=[];

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.post("/", (req,res)=>{
    res.render("index.ejs");
});

app.get("/view", (req,res)=>{
    res.render("view.ejs",{blog:blog, n:blog.length});
});

app.post("/view", (req,res)=>{
    res.render("view.ejs",{blog:blog, n:blog.length});
});

app.post("/create",(req,res)=>{
    if(req.body["title"])
    blog.push({ title: req.body["title"], description: req.body["description"]});
    //console.log(blog);
    res.render("create.ejs",{blog:blog, k:0, action:"create"});

})
app.post("/update",(req,res)=>{
    if(req.body["title"]){
        for(let i=0;i<blog.length;i++){
            if(blog[i].title==req.body["title"]){
                blog[i].description=req.body["description"];
            }
        }
    }
    res.render("create.ejs",{blog:blog, k:1, action:"update"});
})

app.listen(port, console.log(`The server is listening at port ${port}`));
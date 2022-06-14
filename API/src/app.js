const express=require("express"),
      http=require("http"),
      morgan=require("morgan"),
      mongoose=require("mongoose")

// Routers ---->>>>
const pptRouter=require("./routes/property.router")
const locationRouter=require("./routes/location.router");
const profileRouter = require("./routes/profile.router");

const hostname="localhost", port=5000,url="mongodb://localhost:27017/general";
const app = express();

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true})
const con=mongoose.connection
con.on('open',()=>console.log("connected"))

app.use(morgan("dev"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Started server and routing --------->>>>>
app.use(express.static(__dirname+'/public'))
app.use("/ppts",pptRouter)
app.use("/location",locationRouter)
app.use("/profiles",profileRouter)
// app.use((req,res,next)=>{
//     console.log("first")
//         res.statusCode="200";
//         res.setHeader('Content-Type', 'application/json');
//         res.end("Hi, there this is official API of KAV Housing Networks")
//     })

const server = http.createServer(app)
server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}/`);
})
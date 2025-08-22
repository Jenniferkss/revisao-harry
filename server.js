import express from "express";
import bruxos from "./src/data/bruoxs.js"

const app = express();
app.use(express.json());

const serverPort = 3000; 

app.get("/",(req,res) => {
    res.send("Servidor funcionando"); 
});
app.get("/bruxos",(req,res)=> {
res.json(bruxos);
});

app.get("/bruxos/:id",(req,res) =>{
const id = parseInt(req.params.id);
const bruxo = bruxos.find(b => b.id === id);

if(bruxo){
    res.status(200).json(bruxo);
} else {
    res.status(404).json({
        mensagem: "Bruxo(a) não encontrado"
    })
}
});

app.listen(serverPort,()=> {
    console.log("Servidor esta rodando...");
    
});
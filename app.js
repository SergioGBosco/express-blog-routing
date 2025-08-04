const express = require("express");

//inizializzo laa variabine app di express
const app = express();

//definisco la porta

const port = 3000;

//aggiungo gli asset statici

app.use(express.static(`public`))

//*definisco la rotta base del server

app.get("/", (req, res) => {
  res.send("Creata rotta base del sel server")
});

app.listen(port, () => {
  console.log(`server del blog in attesa nella porta ${port}`)

});




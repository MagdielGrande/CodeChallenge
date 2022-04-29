const PartnerController = require("./controllers/PartnersController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Partners Api welcome!"});
});

app.get("/v1/partners", (request, response) => {
    const partnersAll = PartnerController.getPartnersAll();
    response.json(partnersAll);
});

app.get("/v1/emails", (request, response) => {
    const partnersEmails = PartnerController.getPartnersEmail();
    response.json(partnersEmails);
});
app.get("/v1/credits", (request, response) => {
    const partnersCredit = PartnerController.getPartnersCredit();
    response.json(partnersCredit);
});

app.listen(port, () => {
    console.log(`code_Challenge API in localhost:${port}`);
});


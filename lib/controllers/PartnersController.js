const Reader = require("./../utils/Reader");
const VisualThinking = require("../services/VisualThinking");

class PartnersController {
    static getPartnersAll(){
        const partners = Reader.readJsonFile("visualpartners.json");
        return partners;
    }
    static getPartnersEmail(){
        const partners = Reader.readJsonFile("visualpartners.json");
        const emails = VisualThinking.getEmailByHaveCertification(partners);
        return emails;
    }
    static getPartnersCredit(){
        const partners = Reader.readJsonFile("visualpartners.json");
        const creditoMayor = VisualThinking.getPartnersWithCredits(partners);
        return creditoMayor;
    }
}
module.exports = PartnersController;
const Reader = require('../utils/Reader');
const VisualThinking = require("../services/VisualThinking")

class PartnersController {
    static getPartnersAll(part){
        const partnersAll = VisualThinking.getAllPartners(part)
        return partnersAll
    }


    static getPartnersEmail(parterts){
        const emails = VisualThinking.getEmailByHaveCertification(parterts)
        return emails
    }

    static getPartnersCredit(partners){
        const creditoMayor = VisualThinking.getPartnersWithCredits(partners)
        return creditoMayor
    }


}
module.exports = PartnersController
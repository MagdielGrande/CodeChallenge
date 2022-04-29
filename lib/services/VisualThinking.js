class VisualThinking {
    
    static getAllPartners(partners){
        const listAllPartnert = partners;
        return listAllPartnert;
    }

    static getEmailByHaveCertification(partners){
        const list_partnersCertificationtrue= partners.filter((partner) => partner.haveCertification == true);
        const parnertsEmail = list_partnersCertificationtrue.map((email) => email.email);
        return parnertsEmail;
    }

    static getPartnersWithCredits(partners){
        const list_partnerCredit= partners.filter((partner) => partner.credits > 500);
        const parnertsnames = list_partnerCredit.map((names) => names.name);
        return parnertsnames;
    } 

    
} 


module.exports = VisualThinking;
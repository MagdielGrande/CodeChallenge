const PartnersController = require("./../../../lib/controllers/PartnersController");
const Reader = require("./../../../lib/utils/Reader");

describe("Tests para VisualThinking", () => {
    test("1: Obtener todos los partners ", () => {
        const partners = Reader.readJsonFile("visualpartners.json")
        const list_partners = PartnersController.getPartnersAll(partners);
        expect(list_partners.length).toBe(51);
    });

    test("2: Obtener todos los partners emails que tienen certificacion ", () => {
        const partners = Reader.readJsonFile("visualpartners.json")
        const list_partners_Emails = PartnersController.getPartnersEmail(partners);
        expect(list_partners_Emails.length).toBe(29);
    });

    test("3: Obtener todos los partners con credito mayor ", () => {
        const partners = Reader.readJsonFile("visualpartners.json")
        const list_partners_credit = PartnersController.getPartnersCredit(partners)
        expect(list_partners_credit.length).toBe(27);
        expect(list_partners_credit).toContain("Warren")
    });

});
const VisualThinking = require("./../../lib/services/VisualThinking");
const Reader = require("./../../lib/utils/reader");

describe("Tests para VisualThinking", () => {
    test("1: Obtener todos los partners ", () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        const list_partners = VisualThinking.getAllPartners(partners);
        expect(list_partners.length).toBe(51);
    });
    test("2: Obtener todos los emails de los partners con havecertification  ", () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        const list_emails = VisualThinking.getEmailByHaveCertification(partners);
        expect(list_emails.length).toBe(29);
        expect(list_emails).toContain("Todd@visualpartnership.xyz");

    });
    test("3: Obtener todos los nombres de los partners con credito mayor a 500  ", () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        const list_names = VisualThinking.getPartnersWithCredits(partners);
        expect(list_names.length).toBe(27);
        expect(list_names).toContain("Warren");

    });

});
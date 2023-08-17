import { generateUUID } from "uuid-maker";

describe("generateUUID()", () => {
    it("should generate a random UUID string", () => {
        const uuid = generateUUID();
        expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    });
});
  
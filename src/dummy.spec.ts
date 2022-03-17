import { Hello, AnotherHello } from "./dummy";

describe("Some dummy test", () => {
	it("Should be equal", () => {
		const result = Hello();

		expect(result).toBe("Hello Typescript App");
	});
});

describe("Some more dummy testing...", () => {
	it("Should be equal", () => {
		const result = AnotherHello();

		expect(result).toBe("Well, hello again!");
	});
});
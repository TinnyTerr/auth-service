import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	target: "node16",
	ignoreWatch: ["node_modules"],
	splitting: true,
	sourcemap: true,
	clean: true,
	tsconfig: "./tsconfig.json",
});

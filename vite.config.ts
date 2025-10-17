import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import importMetaUrlPlugin from "@codingame/esbuild-import-meta-url-plugin";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["vscode"],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [importMetaUrlPlugin],
    },
    include: [
      "@codingame/monaco-vscode-standalone-languages",
      "@codingame/monaco-vscode-standalone-json-language-features",
      "langium",
      "langium/lsp",
      "langium/grammar",
      "vscode/localExtensionHost",
      "vscode-languageclient",
      "vscode-languageserver",
      "vscode-languageserver-protocol",
      "vscode-oniguruma",
      "vscode-textmate",
    ],
  },
  worker: {
    format: "es",
  },
});


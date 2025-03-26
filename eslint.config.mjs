import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off", // Ignora erro ao usar <img>
      "jsx-a11y/alt-text": "off", // Ignora erro por falta de alt
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;

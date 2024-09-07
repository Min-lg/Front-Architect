# 使用大佬封装好的eslint工作流，理念是：只使用eslint 进行格式化和代码规范，不用prettier，避免冲突和配置繁琐，且高度可定制话

## 项目地址： https://github.com/antfu/eslint-config

## 使用流程

### CLI 自动配置
* pnpm dlx @antfu/eslint-config@latest

### 手动配置
`pnpm i -D eslint @antfu/eslint-config`

```
// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu()
```

```
Add script for package.json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## IDE 保存格式化的配置 IDE Support (auto fix on save)
```
// Add the following settings to your .vscode/settings.json:
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}

```
## 此时就已经配置完了，继续搭配 vite-plugin-eslint 在项目内集成保存，以达到更明显的提示

`注意：配置完需要重启项目生效`

`npm install vite-plugin-eslint --save-dev`

在配置中添加如下代码,即可生效屏幕报错
```vite.config.js
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
})
```

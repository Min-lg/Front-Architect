# 作用：协同高质量代码规范

## 初始化eslint配置

`npm init @eslint/config`

## 将报错显示在项目内

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

## setting.js

```
{
    "eslint.alwaysShowStatus": true, // 在下框显示ESLint图标
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true // 是否开启自动保存修复
      },
    "eslint.run": "onType", // 也可以 "onSave"，保存时检查
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "html",
      "vue"
  ]
}
```

## 编辑器集成 Visual Studio Code：ESLint

在 VSCode 编辑器中直接显示错误或警告信息，明显的在开发时提供语法纠正使开发更友好。

## 常用配置

一、忽略文件及目录

```
// eslint.config.js
export default [
    {
      ignores: [".config/*", 'vue.config.js'],
    }
];

```

常见问题
1、配置冲突时如何处理？
答：当多个配置对象指定相同的规则时，规则将进行合并，后定义的配置会覆盖先定义的。覆盖也会分为完全覆盖和部分覆盖，如果是数据结构相同就会完全覆盖

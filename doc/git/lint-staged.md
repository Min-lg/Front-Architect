# lint-staged

- lint-staged 的出现允许你每次 commit 时只对当前添加到暂存区（stage）的代码进行 lint，效率大大提高。正如它的标题：不要让屎溜进你的代码库！

项目地址：https://github.com/lint-staged/lint-staged

## 使用场景

- 在前面配置好husky后，例如：每次执行npm run lint:fix，都要全项目修复，成本是很高的，所以要搭配lint-staged

- lint-staged 的配置方式有两大种，支持 `package.json` 或 JSON 和 YML 风格的 `.lintstagedrc` 。

1、安装
`npm install --save-dev lint-staged`

2、配置文件及命令，这里可以根据不同的文件进行配置

```
lint-staged.config.js

export default {
    '*' : "eslint --fix"
}

```

3、在 husky 的 pre-commit 钩子中添加 lint-staged 命令

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo -e "\033[33m ------------------- 正在对提交的代码执行操作 -------------------- \033[0m"
npx --no-install lint-staged

```

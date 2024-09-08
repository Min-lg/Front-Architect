# Husky 就是一个创建或修改 Git hooks 的工具，它在内部封装了 git hook，允许我们在提交代码时运行一些额外的脚本。比如校验规范，格式化代码等。

## 使用步骤

npx husky init

## 此时更目录下出现 .husky 目录，较为常用的就是目录下的pre-commit 命令

- pre-commit是一个脚本文件

直接修改其中的内容即可，例如 `npm run lint:fix`

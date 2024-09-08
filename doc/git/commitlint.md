# commitlint 约束提交信息

https://www.npmjs.com/package/@commitlint/config-conventional
@commitlint/config-conventional

```
npm install --save-dev @commitlint/config-conventional @commitlint/cli
echo "export default {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

此时根目录下就有了：commitlint.config.js，并且继承了默认配置，我们也可以根据需求修改配置，例如其他博主的优秀案例

## 注意，commitlint 也可以借助husky进行调用

使用如下命令，向commit-msg钩子添加代码

`echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg`

```
export default {
  ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'], // 主体前有空行
    'footer-leading-blank': [1, 'always'], // 末行前有空行
    'header-max-length': [2, 'always', 108], // 首行最大长度
    'subject-empty': [2, 'never'], // 标题不可为空
    'type-empty': [2, 'never'], // 类型不可为空
    'type-enum': [ // 允许的类型
      2,
      'always',
      [
        'wip', // 开发中
        'feat', // 新增功能
        'merge', // 代码合并
        'fix', // bug 修复
        'test', // 测试
        'refactor', // 重构
        'build', // 构造工具、外部依赖（webpack、npm）
        'docs', // 文档
        'perf', // 性能优化
        'style', // 代码风格（不影响代码含义）
        'ci', // 修改项目继续集成流程（Travis，Jenkins，GitLab CI，Circle等）
        'chore', // 不涉及 src、test 的其他修改（构建过程或辅助工具的变更）
        'workflow', // 流水线
        'revert', // 回退
        'types', // 类型声明
        'release', // 版本发布
      ],
    ],
  },
}

```

## 配置规范

参考文档：https://juejin.cn/post/6877081615357607943

- 提交格式

```
<type>: <subject>
换行
<body>
换行
<footer>

```

- 规则参数

```
'xxxxx': [级别，适用，值]
```

- 规则由名称和配置数组组成。配置数组包含： 级别 [0..2]：0禁用规则。因为1它将被视为2错误警告。 适用 always|never：never颠倒规则。 值：用于此规则的值。

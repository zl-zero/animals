// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "no-console": 0,
    "linebreak-style": 0,
    //规定注释和代码块之间是否留空行
    "lines-around-comment": 0,
    // 规定了keyword前后是否需要留一个空格
    //"keyword-spacing": [2, { "before": true, "after": true, "overrides": {} }],
    //该规则规定了在对象字面量语法中key和value之间的空白，冒号前不要留空格，冒号后面需留一个空格
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    //规定是否需要在代码注释起始符// or /*后面至少紧跟一个空格
    "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","] }],
    //禁止多余的冒号
    "no-extra-semi": 0,
    //两个可选参数，always 和never
    //默认配置always，要求在行末加上分号。
    "semi": [2, "always"],
    //在ES2015(ES6)中推荐使用模板代替以前的字符串拼接
    //"prefer-template": "error",
    // 数组和对象键值对最后一个逗号，
    // never参数：不能带末尾的逗号,
    // always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [2, "always-multiline"],
    //规定了在代码块前是否需要加空格
    "space-before-blocks": 0,
    "quotes": 0,
    //规定圆括号内部的空格。规定是否需要在(右边，或者)左边加空格。
    "space-in-parens": 0,
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [2, "never"],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

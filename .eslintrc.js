module.exports = {
  env: {
    browser: true, // browser에서 지원하는 기능들을 사용하겠다고 선언한다(에러를 안뿜는다)
    // es2021에서 지원하는 기능들을 사용하겠다고 선언한다(에러를 안뿜는다)
    // 자동으로 ecmaVersion parser option을 12으로 설정한다
    es2022: true,
  },
  // airbnb-base : airbnb에서 권장하는 rule을 가져온다
  // plugin:prettier/recommended : eslint 와 prettier를 같이 사용할때 필요한 설정들을 가져온다
  // https://www.npmjs.com/package/eslint-plugin-prettier
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module', // ECMAScript module을 사용한다(import/export)
    ecmaVersion: 'latest',
  },
  rules: {
    'no-alert': 'off', // alert을 사용해도 된다
    'import/extensions': ['error', 'always'], // import할때 확장자명을 꼭 써줘야한다
    'max-depth': ['error', 2], // code block의 depth를 2로 제한한다
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
  },
};

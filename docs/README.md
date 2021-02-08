# 자동차 경주 게임 1단계
페어프로그래밍: 심바 && 동동

## 1. 환경 설정
1. yarn을 이용하여 package 초기화: `yarn init`
2. eslint 설치: `yarn add eslint --dev`
3. prettier 설치: `yarn add prettier --dev`
4. eslint-config-prettier, eslint-plugin-prettier 설치: `yarn add eslint-config-prettier eslint-plugin-prettier --dev`
5. eslint 설정: `npx eslint --init`  prettier, cypress plugin 및 extends 추가 . eslint:recommended 컨벤션을 적용. 
6. .vscode/settings.json: 모든 파일에 대하여 저장시 eslint 및 prettier 적용됨
   ※ prettier 설정은 기본 설정 그대로.(별도로 설정하지 않음)
7. cypress 설치: `yarn add cypress --dev`
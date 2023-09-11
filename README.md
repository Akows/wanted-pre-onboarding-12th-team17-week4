# 원티드 프리온보딩 프론트엔드 인턴십 12차 - 4주 차 과제 (개인)

## 👥 Member Info

### 이유승

## 💪🏻과제의 목표와 진행 방법

출제된 과제의 범위, 요구 사항 등을 분석하여 제시된 개발 조건에 맞춰 기능을 구현.

### ✔️ 배포

- `vercel` [🔗Link](https://wanted-pre-onboarding-12th-team17-week4.vercel.app/)

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다.
  [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

- 실행 방법 (2가지 중 택 1)
  > 1. 배포 링크를 통한 접속
  > 2. ZIP 파일 다운로드 및 압축 풀기 후 코드 에디터로 실행

```
$ npm i
$ npm run start
```

## 🛠️ 사용한 기술 스택

#### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Git hub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

#### Tools

![Source Tree](https://img.shields.io/badge/SOURCE%20TREE-blue?style=for-the-badge&logo=sourcetree)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Languages

![HTML5](https://img.shields.io/badge/HTML-%23F5AF64?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-%230A82FF?style=for-the-badge&logo=css3)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=Typescript&logoColor=white)

#### Libraries & Frameworks:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black)
![Static Badge](https://img.shields.io/badge/Recharts-red?style=for-the-badge&logo=Recharts)


## 🚀 요구사항

1. [x] 시계열 차트 만들기
    - [x] 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
    - [x] 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
    - [x] Area 그래프의 기준값은 `value_area` 값을 이용해주세요
    - [x] Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
    - [x] 차트의 Y축에 대략적인 수치를 표현해주세요(예시 이미지 참고)
  
2. [x] 호버 기능 구현
    - [x] 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요
  
3. [x] 필터링 기능 구현
    - [x] 필터링 기능을 구현해주세요, 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현해주세요
    - [x] 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
    - [x] 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
    - [x] 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요

## 🔥 과제 진행 방법

- 깃 컨벤션, 브랜치 관리 전략, 코드 구조 및 작성 규칙, 컴포넌트 명명 규칙 등의 팀 코딩 표준에 따라 혼자 진행.

## 데이터 시각화 라이브러리 선택: 왜 Recharts인가?
![Static Badge](https://img.shields.io/badge/Recharts-red?style=for-the-badge&logo=Recharts)

React.js 기반의 웹 프로젝트에서 데이터 시각화를 위한 기능을 제공하는 라이브러리는 Recharts 이외에도 Chart.js, D3.js, react-chartjs-2 등이 존재한다.

#### D3.js
데이터 시각화에 필요한 요소들을 세밀하게 제어하여 정밀한 차트를 제작할 수 있다. 다만 데이터 시각화에 필요한 도구와 기능을 제공할 뿐 시각화 기능 자체는 개발자가 직접 구축해야 한다.

#### Chart.js, react-chartjs-2, Recharts 
Chart.js, react-chartjs-2, Recharts 등은 시각화 기능이 이미 완성되어 제공되고 있으며 기본 차트 형식과 관련 컴포넌트가 이미 구현되어 있어 이번 과제를 수행하는 데는 어느 것을 선택해도 무방하였다. 

그래도 어느 것 하나를 골라야하니 우선 Chart.js는 React 기반으로 개발된 것이 아니라서 제외하였다.

최종적으로 react-chartjs-2, Recharts 중 하나를 선택해야 했다. react-chartjs-2는 Chart.js를 React에서 더 잘 사용하기 위해 개발된 것으로 Chart.js에 의존성을 갖고 있는 반면에, Recharts는 단독으로 React 기반의 프로젝트를 위해 설계되어 선언적인 스타일과 컴포넌트 기반 구조로 인해 React 환경에서 사용하기 더 적합하다고 판단하였다.

따라서 Recharts를 이번 과제 수행을 위한 라이브러리로 선택하였다. 

### 코딩 컨벤션 [🔗Link](https://shorturl.at/dAO08)

## 🌲프로젝트 구조

```bash
src
 ┣ api
 ┃ ┣ DataFetchService.tsx
 ┃ ┗ httpClient.tsx
 ┣ components
 ┃ ┣ Chart
 ┃ ┃ ┣ Chart.tsx
 ┃ ┃ ┣ CustomTooltip.tsx
 ┃ ┃ ┗ FilterButtons.tsx
 ┃ ┗ ChartTitle
 ┃ ┃ ┗ ChartTitle.tsx
 ┣ context
 ┃ ┗ DataContext.tsx
 ┣ pages
 ┃ ┗ Main
 ┃ ┃ ┗ MainPage.tsx
 ┣ router
 ┃ ┗ AppRouter.tsx
 ┣ styles
 ┃ ┗ GlobalStyle.tsx
 ┣ App.css
 ┣ App.tsx
 ┣ index.css
 ┗ index.tsx
```

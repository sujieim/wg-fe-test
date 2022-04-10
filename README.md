04-09
프로젝트 환경 셋팅 완료
Eslint config
Prettier config
Tsconfig- path alliance 설정

Routing 설정
Root child route 적용
Lazy loading 적용
Service 개발
BehaviorSubject 데이터로 mock data 서빙

Component..
Product-listing-container products$ observable을 async로 property binding ?
lifecycle에 자동으로 sub/unsub
Product-listing list 레이아웃 1차

​​Tsconfig 에 작성한 path 경로 안먹고 있음
단순히 observable 을 가져와서 아무런 맵핑 없이 subscribe 하는 형태라면,
html 에서 | async 형태로 가져다 쓰면 life cycle 따라서 알아서 sub / unsub됨

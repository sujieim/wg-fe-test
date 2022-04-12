# Title

### Tasks

- [ ] Home Page
- [x] Product Listing page
- [x] products service via HTTP

### Bonus

- [x] Full component Unit Tests
- [x] Open product details in modal
- [ ] NgRx

---

<br>

## Project Directory

```
.
└── src/
    ├── app/
    │   ├── pages/
    │   │   ├── home-page
    │   │   └── product-listing-page
    │   ├── product-listing/
    │   │   ├── components/
    │   │   │   ├── product-detail
    │   │   │   ├── product-listing-container
    │   │   │   ├── product-listing-tile
    │   │   │   └── product-to-cart-modal
    │   │   └── services
    │   └── shared/
    │       ├── data
    │       ├── in-memory-data
    │       └── interfaces
    ├── assets/
    │   └── fonts
    ├── environments
    └── styles
```

### Test Cases

ProductDetailComponent

- should bind property product.title

ProductListingContainerComponent

- should return expected prodcuts from products$

ProductListingService

- should return expected products

<br>

### conventions

https://angular.io/guide/rx-library#naming-conventions-for-observables

page components

#### checkpoints history

04-09

- Angular project configuration:
  - eslint config
  - prettier config
  - tsconfig (path alliance added)
- Routing
  - Root child route 적용
  - Lazy loading 적용
- Service 개발
  - BehaviorSubject 데이터로 mock data 서빙

04-10

- product-listing component
- product-listing-tile component
- mobile first media query using breakpoints mixins
- OpenSans fonts

04-11

- unit test
- refactor product-detail component for reuse
- product-to-modal component using @ng-bootstrap

04-12
ngrx

## TIL

- products$ observable을 async로 property binding ?
  lifecycle에 자동으로 sub/unsub
  단순히 observable 을 가져와서 아무런 맵핑 없이 subscribe 하는 형태라면,
  html 에서 | async 형태로 가져다 쓰면 life cycle 따라서 알아서 sub / unsub됨

- ngFor performance
  https://angular.io/api/core/TrackByFunction
  https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5
  ngFor 관련 성능

시간이 더 주어졌더라면,

- styles on extra events, :hover..
- skeleton on loading data
- pagination
- refactor using content projection https://angular.io/guide/content-projection

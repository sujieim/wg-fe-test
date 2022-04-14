# Winning Group Angular Frontend Engineer Technical Test

> author: Sujie Im
>
> submitted date: Apr 14, 2022
>
> https://github.com/sujieim/wg-fe-test

### Tasks

- [x] Home Page
- [x] Product Listing page
- [x] products service via HTTP

### Bonus

- [x] Full component Unit Tests
- [x] Open product details in modal
- [x] NgRx store for cart state

---

<br>

### Project Directory

```
.
└── src/
    ├── app/
    │   ├── cart/
    │   │   ├── components/cart
    │   │   └── state
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
    │   ├── shared/
    │   │   ├── data
    │   │   ├── in-memory-data
    │   │   └── interfaces
    │   └── state
    ├── assets/
    │   └── fonts
    ├── environments
    └── styles
```

<br/>

### Conventions

- pages are simply flat components showing existing pages with consisting modules
- observables followed by a '$' <br>
  https://angular.io/guide/rx-library#naming-conventions-for-observables
- Action type in form of `[Source] Event`

<br/>

### Test Cases

- [x] ProductDetailComponent :: should bind property product.title

- [x] ProductListingContainerComponent :: should return expected products from products$

- [x] ProductListingService :: should return expected products

<br>

### History

04-09

- Angular project configuration:
  - eslint & prettier config, tsconfig (path alliance added)
- Routing with lazyloading components <br>
  https://angular.io/guide/lazy-loading-ngmodules
- InMemoryDataService serving mock data
- ProductListingContainer component binding with async pipe <br>
  https://angular.io/api/common/AsyncPipe#description <br>
  https://angular.io/guide/property-binding

04-10

- added components: ProductListingComponent, ProductListingTileComponent
- styles: mobile view using breakpoints mixins
- OpenSans fonts applied

04-11

- unit test cases updated
- refactor new ProductDetailComponent for reuse
- ProductToModal component using @ng-bootstrap <br>
  https://ng-bootstrap.github.io/#/home

04-12, 04-13

- ngrx store applied with `{ cart: { items: [] } }` initial state <br>
  https://ngrx.io/guide/store <br>
  https://ngrx.io/guide/store-devtools
- (add) event binding for dispatching Action:`addProduct` <br>
  https://angular.io/guide/event-binding
- sample CartComponent

 <br>

---

#### References

- TrackBy function for \*ngFor performance <br>
  https://angular.io/api/core/TrackByFunction <br>
  https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5
- testing implementations : <br>
  https://angular.io/guide/testing-components-basics <br>
  https://angular.io/guide/testing-services
- sharing data between child and parent <br>
  https://angular.io/guide/inputs-outputs

<br>

#### Future Implementations

- styles on extra events(i.e. :hover), variation class such as horizontal, mobile view etc.
- skeleton while loading data
- pagination
- refactor using content projection <br>
  https://angular.io/guide/content-projection
- ngrx advanced selector combining cart skus and products dictionary
- different configuration for dev and prod environments

export {
    add,
    subtract,
    increment,
    decrement
} from './counter';

export {
    storeResult,
    deleteResult
} from './result';

//grupuje wszystkie eksporty z innego pliku (lub wielu plików) w jednym index.js

//to dobra praktyka, która może sie przydać w przypadku dużych projektów z wieloma actionCreators w różnych plikach.
//Wtedy możemy zaimportować te akcje z tego jednego pliku nie przejmując się gdzie są dokładnie zawarte
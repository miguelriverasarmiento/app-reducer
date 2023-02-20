import { add } from './actions';

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return add(state, action);
    }
}
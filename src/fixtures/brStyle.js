import toWord from '../util/toWord';
import {brStyles} from '../validators/isBrStyle';

export const fixtures = {
    valid: [
        ...brStyles,
        ...brStyles.map(value => value.toUpperCase()),
    ],
    invalid: ['groovy'],
};

export const nodes = {
    valid: fixtures.valid.map(toWord),
    invalid: fixtures.invalid.map(toWord),
};

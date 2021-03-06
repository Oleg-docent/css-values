import toWord from '../util/toWord';
import {compositeStyles} from '../validators/isCompositeStyle';

export const fixtures = {
    valid: [
        ...compositeStyles,
        ...compositeStyles.map(value => value.toUpperCase()),
    ],
    invalid: ['clear-xor-copy'],
};

export const nodes = {
    valid: fixtures.valid.map(toWord),
    invalid: fixtures.invalid.map(toWord),
};

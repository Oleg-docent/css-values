/**
 * This file contains valid/invalid values for use in testing
 * files generated by css-values.
 */

export const angle = {
    valid: ['0', '90deg', '1turn', '100grad', '2rad'],
    invalid: ['1circle', 'halfturn', 'deg90'],
};

export const integer = {
    valid: ['10', '+10', '-10', '0', '+0', '-0'],
    invalid: ['12.0', '+---12', '3e4', '\\4E94', '_5'],
};

export const negative = {
    valid: ['-10', '-1.0', '-1000'],
    invalid: ['10', '1.0', '1000'],
};

export const number = {
    valid: ['12', '4.01', '-456.8', '0.0', '+0.0', '-0.0', '.60', '10e3', '-3.4e-2'],
    invalid: ['12.', '+-12.2', '12.1.1'],
};

export const percentage = {
    valid: ['1%', '88%', '99.99%', '+100%'],
    invalid: ['12.%', '42.2.3.4.7.8.1.2%'],
};

export const length = {
    valid: ['0', '16px', '1pc', '2.34254645654324rem'],
    invalid: ['16.px', 'px16', 'one rem'],
};

export const time = {
    valid: ['2s', '1500ms', '0.75s'],
    invalid: ['2 seconds', '1000μs', '10.s'],
};

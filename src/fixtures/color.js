import getFirstNode from '../util/getFirstNode';

export const fixtures = {
    valid: [
        'RGB(1, 2, 3)',
        'rgb(10%, 20%, 30%)',
        'rgb(400, 400, 400)',
        'rgbA(1, 2, 3, .5)',
        'rgba(10%, 20%, 30%, 0.5)',
        'rgba(400, 400, 400, 1)',
        'hsl(90, 50%, 50%)',
        'HSL(90, 50%, 50%)',
        'hsla(90, 50%, 50%, .5)',
        'hsla(90, 50%, 50%, 0.5)',
        'hslA(90, 50%, 50%, 0)',
        '#000',
        '#000F',
        '#000000',
        '#000000FF',
        'RED',
        'black',
        'currentcolor',
        'CURRENTCOLOR',
    ],
    invalid: [
        'rgb(1, 2, 3, 4, 5)',
        'rgb(1:2:3)',
        'rgb(a, b, c)',
        'rgba(10%, 20%, 30%, transparent)',
        'rgba(400: 400)',
        'rgba(400, 400, 400, 50%)',
        'hsl(50%, 50%, 50%)',
        'hsl(90, 50, 50)',
        'hsla(90, 50%, 50%)',
        'hsla(90, 50%, 50%, 50%)',
        'hsla(90%, 50%, 50%, 0.5)',
        '#ee',
        '#eeeeeee',
        '#ggg',
        'blacklight',
    ],
};

export const nodes = {
    valid: fixtures.valid.map(getFirstNode),
    invalid: fixtures.invalid.map(getFirstNode),
};

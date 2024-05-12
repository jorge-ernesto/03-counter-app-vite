import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {

    test('debe retornar un string y un número', () => {

        // 1. inicialización
        const [letters, numbers] = retornaArreglo();

        // 3. observar el comportamiento... esperado
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        // debug
        console.log('debug --', typeof letters);
        console.log('debug --', typeof numbers);
        console.log('debug --', expect.any(String));

        // implementacion con javascript
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        // implementacion con jest
        expect(letters).toStrictEqual(expect.any(String));

    });

});

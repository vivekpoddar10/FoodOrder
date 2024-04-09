import { sum } from "../component/sum";

test('return sum of two number', () => {
    const result = sum(2,3);
    expect(result).toBe(5);
})
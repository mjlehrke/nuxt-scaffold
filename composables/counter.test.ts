import { describe, expect, it } from 'vitest';
import { useCounter } from './counter';

describe('test composable', () => {
  it('should increase counter on call', () => {
    const { counter, increase } = useCounter();

    expect(counter.value).toBe(0);

    increase();

    expect(counter.value).toBe(1);
  });
});

import { expect, beforeEach, it } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '../src/stores/counter';

beforeEach(() => {
  setActivePinia(createPinia());
});

it('increment', () => {
  const store = useCounterStore();
  expect(store.count).toBe(0);
  store.increment();
  expect(store.count).toBe(1);
});

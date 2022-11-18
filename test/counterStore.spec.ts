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

it('decrement', () => {
  const store = useCounterStore();
  expect(store.count).toBe(0);
  store.decrement();
  expect(store.count).toBe(-1);
});

import { $, useSignal, implicit$FirstArg, useTask$ } from '@builder.io/qwik';

export function useTest(fn1: () => any) {
  let a = useSignal('0');
  setTimeout(() => {
    a.value = fn1();
    console.log(a.value);
  }, 100);
  return a;
}

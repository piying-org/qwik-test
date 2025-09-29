import { $, component$, noSerialize, useSignal, useStore, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import { useTest } from './useTest';

export const ExampleTest = component$((props: { flag: boolean }) => {
  let a = useTest(noSerialize(() => '123456')!);
  useTask$(({ track }) => {
    track(() => {
      return a.value;
    });
    console.log('data1', a.value);
  });
  useVisibleTask$(({ track }) => {
    track(() => {
      return a.value;
    });
    console.log('data2', a.value);
  });
  return (
    <>
      <div>{a.value}</div>
    </>
  );
});

import { $, component$, isBrowser, isServer, noSerialize, useSignal, useStore, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import { useTest } from './useTest';

export const ExampleTest = component$((props: { flag: boolean }) => {
  let value2 = useSignal('0');
  let a = useTest(() => value2.value);
  useTask$(({ track }) => {
    track(() => {
      return value2.value;
    });
    console.log('data1', value2.value);
    setTimeout(() => {
      a.value = value2.value;
      console.log('aaa',a.value);
    }, 100);
  });
  useVisibleTask$(({ track }) => {
    track(() => {
      return value2.value;
    });
    console.log('data2', value2.value);
  });
  return (
    <>
      <button
        class="change-btn"
        onClick$={() => {
          value2.value = '8888';
          console.log('onClick', value2.value);
        }}
      >
        change value1
      </button>
      <div>{a.value}1</div>
      <div>{value2.value}2</div>
    </>
  );
});

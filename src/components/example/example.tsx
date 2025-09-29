import { $, component$, noSerialize, useSignal, useStore, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import { useTest } from './useTest';

export const ExampleTest = component$((props: { flag: boolean }) => {
  let value2 = useSignal('0');
  let a = useTest(() => value2.value);
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
      <button
        class="change-btn"
        onClick$={() => {
          value2.value = '8888';
          console.log('onClick', value2.value);
        }}
      >
        change value
      </button>
      <div>{a.value}</div>
    </>
  );
});

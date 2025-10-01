import { component$, isBrowser, isServer, useSignal, useTask$, useVisibleTask$ } from '@builder.io/qwik';

export const ExampleTest = component$((props: { flag: boolean }) => {
  let value2 = useSignal('0');
  useTask$(({ track }) => {
    track(() => {
      return value2.value;
    });
    console.log('useTask:server/browser', isServer, isBrowser);
    console.log('useTask', value2.value);
  });
  useVisibleTask$(({ track }) => {
    track(() => {
      return value2.value;
    });
    console.log('useVisibleTask:server/browser', isServer, isBrowser);
    console.log('useVisibleTask', value2.value);
  });
  return (
    <>
      <button
        class="change-btn"
        onClick$={() => {
          // If setTimeout is commented out, it will work normally
          setTimeout(() => {
            value2.value = '8888';
          }, 0);
        }}
      >
        change value1
      </button>
      <div>{value2.value}2</div>
    </>
  );
});

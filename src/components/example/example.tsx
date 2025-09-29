import { $, component$, isServer, noSerialize, useSignal, useStore, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import { useTest } from './useTest';

export const ExampleTest = component$((props: { flag: boolean }) => {
  useTask$(({ track }) => {

    console.log('data1', isServer);
  });
  useVisibleTask$(({ track }) => {

    console.log('data2', isServer);
  });
  return (
    <>
      1
    </>
  );
});

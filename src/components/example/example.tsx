import { component$, noSerialize, useSignal, useStore } from '@builder.io/qwik';
import { useTest } from './useTest';

export const ExampleTest = component$((props: { flag: boolean }) => {
  let a = useTest(noSerialize(() => '123456')!);
  return (
    <>
      <div>{a.value}</div>
    </>
  );
});

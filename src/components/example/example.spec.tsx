import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { ExampleTest } from './example';

test(`test1`, async () => {
  const { screen, render } = await createDOM();
  await render(<ExampleTest flag={true} />);
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 200);
  });
  console.log(screen.outerHTML);
  expect(screen.outerHTML).toContain('123456');
});

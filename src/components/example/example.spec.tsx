import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { ExampleTest } from './example';

test(`test1`, async () => {
  const { screen, render, userEvent } = await createDOM();
  await render(<ExampleTest flag={true} />);
  let a = screen.querySelector('.change-btn');
  userEvent(a, 'click');
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 200);
  });
  console.log(screen.outerHTML);
  expect(screen.outerHTML).toContain('123456');
});

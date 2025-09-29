import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { ExampleTest } from './example';

test(`test1`, async () => {
  const { screen, render, userEvent } = await createDOM();
  await render(<ExampleTest flag={true} />);
  await userEvent(screen.querySelector('.change-btn'), 'click');
 
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });

  console.log(screen.outerHTML);
  expect(screen.outerHTML).toContain('88882');
  expect(screen.outerHTML).toContain('88881');
});

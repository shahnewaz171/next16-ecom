export const simulateDelay = (delay: number = 1000): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const getUidWithPrefix = (prefix: string, index: number | string) => `${prefix}-${index}`;

export const debounce = <F extends (...args: Parameters<F>) => void>(func: F, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), waitFor);
  };
};

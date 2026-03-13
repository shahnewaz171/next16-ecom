import Button from '@/components/ui/Button';

interface CounterProps {
  count: number;
  increment?: () => void;
  decrement?: () => void;
  reset?: () => void;
}

const Counter = ({ count = 0, increment, decrement, reset }: CounterProps) => (
  <div>
    <p data-testid="count">Count: {count}</p>

    <Button onClick={increment} className="mr-2">
      Increment
    </Button>

    <Button onClick={decrement} className="mr-2">
      Decrement
    </Button>

    <Button onClick={reset}>Reset</Button>
  </div>
);

export default Counter;

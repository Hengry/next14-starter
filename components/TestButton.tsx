import useCounterStore from '@/store/counterStore';

interface TestButtonProps {
  children: React.ReactNode;
}

const TestButton = ({ children }: TestButtonProps) => {
  const handleClick = useCounterStore((state) => state.increase);
  return (
    <button className='btn' onClick={handleClick}>
      {children}
    </button>
  );
};

export default TestButton;

import { Loader2 } from 'lucide-react';

const TagLoader = () => (
  <div className="h-fit w-fit animate-spin">
    <Loader2 aria-hidden="true" width={16} height={16} className="text-gray" />
  </div>
);

export default TagLoader;

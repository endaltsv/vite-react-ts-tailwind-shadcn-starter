import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="flex flex-col items-center p-16">
      <div className="bg-black text-white mx-auto">
        <h1 className="text-2xl">Hello World</h1>
      </div>
      <div className="flex mt-4 gap-2">
        <Link to="/other-page">
          <Button>Other page</Button>
        </Link>
        <Link to="/unknown">
          <Button>Non existing page</Button>
        </Link>
      </div>
    </div>
  );
}

import { EditProjects } from '@/components/EditComponents';
import {
  Playgrounds,
  Projects,
} from '@/components/ProfileComponents/Portfolio';

export default function PortfolioEditPage() {
  return (
    <div className='flex flex-col gap-5'>
      <Playgrounds isEditing />
      <EditProjects />
    </div>
  );
}

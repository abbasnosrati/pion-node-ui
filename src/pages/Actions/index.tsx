import ActionsSidebar from './ActionsSidebar.tsx';
import ActionsHeader from './ActionsHeader.tsx';
import ActionsContent from './ActionsContent.tsx';
import { FadeIn } from '../../animations';

const Actions = () => {
  return (
    <div className="page page--centered">
      <div className="flex flex-col w-[664px] gap-6">
        <FadeIn>
          <ActionsHeader />
          <ActionsBody />
        </FadeIn>
      </div>
    </div>
  );
};

const ActionsBody = () => {
  return (
    <div className="actions-body flex w-full gap-10">
      <ActionsSidebar />
      <ActionsContent />
    </div>
  );
};
export default Actions;

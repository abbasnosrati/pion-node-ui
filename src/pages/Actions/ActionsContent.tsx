import useActions from '../../contexts/Actions/useActions.ts';
import { ActionType } from '../../types';
import { RenderCreateBody } from './CreateAction.tsx';
import { RenderUpgradeBody } from './UpgradeAction.tsx';
import RenderMergeBody from './MergeAction.tsx';
import RenderSplitBody from './SplitAction.tsx';
import RenderTransferBody from './TransferAction.tsx';

const ActionsContent = () => {
  const { selectedAction } = useActions();

  return (
    <div className="actions-content w-full max-w-[576px] md:bg-white md:px-11 py-10 rounded-2xl flex flex-col">
      {selectedAction === ActionType.CREATE ? (
        <RenderCreateBody />
      ) : selectedAction === ActionType.UPGRADE ? (
        <RenderUpgradeBody />
      ) : selectedAction === ActionType.MERGE ? (
        <RenderMergeBody />
      ) : selectedAction === ActionType.SPLIT ? (
        <RenderSplitBody />
      ) : selectedAction === ActionType.TRANSFER ? (
        <RenderTransferBody />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ActionsContent;

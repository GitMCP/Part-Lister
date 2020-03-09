import produce from 'immer';
import { loadPartList } from '../../../egpartlist';

export default function engList(state = loadPartList(), action) {
    // eslint-disable-next-line consistent-return
    return produce(state, draft => {
        switch (action.type) {
            case 'ADD_TO_EL':
                draft.splice(action.index, 0, action.iteminfo);
                break;
            case 'REMOVE_FROM_EL':
                draft.splice(action.index, 1);
                break;
            case 'ALL_TO_PL':
                draft.splice(0, action.el.length);
                break;
            case 'ALL_TO_EL':
                draft.push(...action.pl);
                break;
            default:
                return draft;
        }
    });
}

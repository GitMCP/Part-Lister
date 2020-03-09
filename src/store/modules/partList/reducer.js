import produce from 'immer';

export default function partList(state = [], action) {
    // eslint-disable-next-line consistent-return
    return produce(state, draft => {
        const dragged = draft[action.from];
        switch (action.type) {
            case 'REMOVE_FROM_PL':
                draft.splice(action.index, 1);
                break;
            case 'ADD_TO_PL':
                draft.push(action.item);
                break;
            case 'MOVE_IN_PL':
                draft.splice(action.from, 1);
                draft.splice(action.to, 0, dragged);
                break;
            case 'ALL_TO_PL':
                draft.push(...action.el);
                break;
            case 'ALL_TO_EL':
                draft.splice(0, action.pl.length);
                break;
            default:
                return draft;
        }
    });
}

import produce from 'immer';

export default function engList(state = { state: null }, action) {
    // eslint-disable-next-line consistent-return
    return produce(state, draft => {
        switch (action.type) {
            case 'HANDLE_FOCUS':
                // eslint-disable-next-line no-param-reassign
                draft.index = action.index;
                break;
            default:
                return draft;
        }
    });
}

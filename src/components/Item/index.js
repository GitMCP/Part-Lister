import React, { useState, useRef, useContext } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { MdReorder } from 'react-icons/md';
import { useDrag, useDrop } from 'react-dnd';
import { Container } from './styles';
import MainContext from '../Main/context';

export default function Item(value) {
    let variant = useState('');
    let apn = useState('');

    function apnRegex(e) {
        const re = /^[0-9]*$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            apn = e.target.value;
        }
        e.target.value = apn;
    }
    function variantRegex(e) {
        const re = /^[A-z]*$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            variant = e.target.value;
        }
        e.target.value = variant;
    }
    const ref = useRef();
    const ref2 = useRef();
    const { moveinpl, removefromel, addtopl, handleFocus } = useContext(
        MainContext
    );

    const [{ isDragging }, dragRef, preview] = useDrag({
        item: { type: 'ITEM', value },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        end: () => {
            handleFocus(null);
        },
    });
    const [, dropRef] = useDrop({
        accept: ['ITEM', 'ENGITEM'],
        hover(item, monitor) {
            if (item.type === 'ITEM') {
                if (!item.root) {
                    // eslint-disable-next-line no-param-reassign
                    item.root = item.value;
                }
                const draggedIndex = item.value;
                const targetIndex = value;
                const targetSize = ref.current.getBoundingClientRect();
                const targetCenter = (targetSize.bottom - targetSize.top) / 2;
                if (draggedIndex.value === targetIndex.value) {
                    return;
                }

                const draggedOffset = monitor.getClientOffset();
                const draggedTop = draggedOffset.y - targetSize.top;
                if (draggedIndex < targetIndex && draggedTop < targetCenter) {
                    return;
                }
                if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                    return;
                }
                moveinpl(draggedIndex.value, targetIndex.value);
                // eslint-disable-next-line no-param-reassign
                item.value = targetIndex;
                handleFocus(item.value);
            } else if (item.type === 'ENGITEM') {
                if (!item.root) {
                    // eslint-disable-next-line no-param-reassign
                    item.root = item.value;
                }
                const targetIndex = value;
                const draggedIndex = addtopl(item.iteminfo);
                removefromel(item.iteminfo);
                const targetSize = ref.current.getBoundingClientRect();
                const targetCenter = (targetSize.bottom - targetSize.top) / 2;
                if (draggedIndex === targetIndex.value) {
                    return;
                }

                const draggedOffset = monitor.getClientOffset();
                const draggedTop = draggedOffset.y - targetSize.top;
                if (draggedIndex < targetIndex && draggedTop < targetCenter) {
                    return;
                }
                if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                    return;
                }
                if (draggedIndex >= 0) {
                    moveinpl(draggedIndex, targetIndex.value);
                }

                // eslint-disable-next-line no-param-reassign
                item.value = targetIndex;
                handleFocus(item.value);
            }
        },
    });
    dragRef(ref);
    preview(dropRef(ref2));
    return (
        <Container
            ref={ref2}
            focus={value.focus}
            index={value.value}
            isDragging={isDragging}
        >
            <form>
                <div ref={ref}>
                    <MdReorder className="material-icons" />
                </div>
                <Checkbox
                    defaultChecked={value.iteminfo.rev}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Checkbox
                    defaultChecked={value.iteminfo.nill}
                    value="checked"
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <p id="fignum">
                    {value.value === 0 ? value.value * 5 + 1 : value.value * 5}
                </p>
                <input
                    id="variant"
                    defaultValue={value.iteminfo.variant}
                    maxLength="1"
                    onKeyUp={variantRegex}
                />
                <h3 id="pn">{value.iteminfo.partnumber}</h3>
                <input
                    id="apn"
                    maxLength="3"
                    onKeyUp={apnRegex}
                    defaultValue={value.iteminfo.airlinepn}
                />
                <h3 id="indent">{value.iteminfo.indent}</h3>
                <h3 id="nom">{value.iteminfo.nomenclature}</h3>
                <h3 id="add">{value.iteminfo.addText}</h3>
                <input id="misc" defaultValue={value.iteminfo.misc} />
                <input id="eff" defaultValue={value.iteminfo.eff} />
                <input
                    id="qty"
                    type="number"
                    defaultValue={value.iteminfo.qty}
                />
            </form>
        </Container>
    );
}

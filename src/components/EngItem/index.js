import React, { useRef } from 'react';
import { MdReorder } from 'react-icons/md';
import { useDrag } from 'react-dnd';
import { Container } from './styles';

export default function EngItem({ value, iteminfo }) {
    const ref = useRef();
    const ref2 = useRef();
    const [{ isDragging }, dragRef, preview] = useDrag({
        item: { type: 'ENGITEM', value, iteminfo },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    dragRef(ref);
    preview(ref2);
    return (
        <Container ref={ref2} isDragging={isDragging}>
            <form>
                <div ref={ref}>
                    <MdReorder className="material-icons" />
                </div>
                <h3 id="pn">{iteminfo.partnumber}</h3>
                <h3 id="indent">{iteminfo.indent}</h3>
                <h3 id="nom">{iteminfo.nomenclature}</h3>
                <h3 id="qty">{iteminfo.qty}</h3>
            </form>
        </Container>
    );
}

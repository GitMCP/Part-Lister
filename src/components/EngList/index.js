import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import MainContext from '../Main/context';
import { Container } from './styles';
import EngItem from '../EngItem';

export default function EngList({ list, partlist }) {
    const { movetoel } = useContext(MainContext);

    const [{ isOver }, dropRef] = useDrop({
        accept: ['ITEM'],
        drop(item) {
            movetoel(item.value.value, item.value.iteminfo);
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    });
    return (
        <Container hover={isOver}>
            <header>
                <h1 id="pn">Part Number</h1>
                <h1 id="indent">Indent</h1>
                <h1 id="nomen">Nomenclature</h1>
                <h1 id="qty">Quantity</h1>
            </header>
            <ul
                ref={dropRef}
                style={{ height: `${(list.length + partlist.length) * 40}px` }}
            >
                <p className="message">Move back to Engineering List</p>
                {list.map((item, index) => (
                    <div className="item">
                        <EngItem key={item.id} value={index} iteminfo={item} />
                    </div>
                ))}
            </ul>
        </Container>
    );
}

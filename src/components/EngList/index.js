import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import MainContext from '../Main/context';
import { Container } from './styles';
import EngItem from '../EngItem';

export default function EngList({ list }) {
    const { movetoel } = useContext(MainContext);

    const [{ isOver }, dropRef] = useDrop({
        accept: ['ITEM', 'ENGITEM'],
        drop(item) {
            if (item.type === 'ITEM') {
                movetoel(item.root.iteminfo);
            } else if (item.type === 'ENGITEM') {
                if (item.root) {
                    movetoel(item);
                }
            }
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
            <ul ref={dropRef}>
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

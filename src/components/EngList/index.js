import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, connect } from 'react-redux';
import { Container } from './styles';
import EngItem from '../EngItem';

function EngList({ engList, partList }) {
    const dispatch = useDispatch();

    function movetoel(item, index = 0) {
        if (partList.includes(item.iteminfo)) {
            dispatch({
                type: 'REMOVE_FROM_PL',
                index: partList.indexOf(item.iteminfo),
            });
        }
        if (!engList.includes(item.iteminfo)) {
            dispatch({
                type: 'ADD_TO_EL',
                index,
                iteminfo: item.iteminfo,
            });
        }
    }

    const [{ isOver }, dropRef] = useDrop({
        accept: ['ITEM', 'ENGITEM'],
        drop(item) {
            if (item.type === 'ITEM') {
                movetoel(item.root);
            } else if (item.type === 'ENGITEM') {
                if (item.root) {
                    movetoel(item, item.root);
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
                {engList.map((item, index) => (
                    <div className="item">
                        <EngItem key={item.id} value={index} iteminfo={item} />
                    </div>
                ))}
            </ul>
        </Container>
    );
}

export default connect(state => ({
    engList: state.engList,
    partList: state.partList,
}))(EngList);

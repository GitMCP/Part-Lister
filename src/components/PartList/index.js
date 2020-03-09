import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, connect } from 'react-redux';
import { Container } from './styles';
import Item from '../Item';

function PartList({ partList, engList }) {
    const dispatch = useDispatch();

    function addtopl(item) {
        if (!partList.includes(item)) {
            dispatch({
                type: 'ADD_TO_PL',
                item,
            });
            return partList.indexOf(item);
        }
        return null;
    }
    function removefromel(item) {
        if (engList.includes(item)) {
            dispatch({
                type: 'REMOVE_FROM_EL',
                index: engList.indexOf(item),
            });
        }
    }
    const [, dropRef] = useDrop({
        accept: ['ENGITEM'],
        // hover(item, monitor) {},
        drop(item, monitor) {
            if (monitor.isOver()) {
                addtopl(item.iteminfo);
                removefromel(item.iteminfo);
            }
        },
    });

    return (
        <Container>
            <header>
                <h1 id="rev">Revised</h1>
                <h1 id="notill">Not ill.</h1>
                <h1 id="fignum">Fig. Number</h1>
                <h1 id="var">Variant</h1>
                <h1 id="pn">Part Number</h1>
                <h1 id="airpn">Airline PN</h1>
                <h1 id="indent">Indent</h1>
                <h1 id="nomen">Nomenclature</h1>
                <h1 id="addtext">Additional Text</h1>
                <h1 id="misc">Miscellaneous</h1>
                <h1 id="eff">Effectivity</h1>
                <h1 id="qty">Quantity</h1>
            </header>
            <ul ref={dropRef}>
                {partList.map((item, index) => (
                    <Item key={item.id} value={index} iteminfo={item} />
                ))}
            </ul>
        </Container>
    );
}

export default connect(state => ({
    partList: state.partList,
    engList: state.engList,
}))(PartList);

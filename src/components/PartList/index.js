import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import MainContext from '../Main/context';
import { Container } from './styles';
import Item from '../Item';

export default function PartList({ list }) {
    const { addtopl, removefromel } = useContext(MainContext);

    const [, dropRef] = useDrop({
        accept: ['ENGITEM'],
        // hover(item, monitor) {},
        drop(item, monitor) {
            if (monitor.isOver()) {
                addtopl(item.iteminfo);
                removefromel(item.value);
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
                {list.map((item, index) => (
                    <Item key={item.id} value={index} iteminfo={item} />
                ))}
            </ul>
        </Container>
    );
}

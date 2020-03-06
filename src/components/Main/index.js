/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import produce from 'immer';
import Button from '@material-ui/core/Button';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Header from '../Header';
import PartList from '../PartList';
import EngList from '../EngList';
import MainContext from './context';
import { Container } from './styles';
import { loadPartList } from '../../egpartlist';

const partList = [];
const engList = loadPartList();
export default function Main() {
    const [pl, setPl] = useState(partList);
    const [el, setEl] = useState(engList);
    const [focus, setFocus] = useState({ index: null });

    function addtopl(item) {
        if (!pl.includes(item)) {
            setPl(
                produce(pl, draft => {
                    draft.push(item);
                })
            );
        }
        return pl.indexOf(item);
    }
    function removefromel(item) {
        if (el.includes(item)) {
            setEl(
                produce(el, draft => {
                    draft.splice(el.indexOf(item), 1);
                })
            );
        }
    }
    function moveinpl(from, to) {
        setPl(
            produce(pl, draft => {
                const dragged = draft[from];
                draft.splice(from, 1);
                draft.splice(to, 0, dragged);
            })
        );
    }
    function handleFocus(index) {
        setFocus(
            produce(focus, draft => {
                // eslint-disable-next-line no-param-reassign
                draft.index = index;
            })
        );
    }
    function movetoel(item) {
        if (pl.includes(item.iteminfo)) {
            setPl(
                produce(pl, draft => {
                    draft.splice(pl.indexOf(item.iteminfo), 1);
                })
            );
        }
        if (!el.includes(item.iteminfo)) {
            setEl(
                produce(el, draft => {
                    draft.splice(item.root, 0, item.iteminfo);
                })
            );
        }
    }
    function movealltopl() {
        setPl(
            produce(pl, draft => {
                draft.push(...el);
            })
        );
        setEl(
            produce(el, draft => {
                draft.splice(0, draft.length);
            })
        );
    }
    function movealltoel() {
        setEl(
            produce(el, draft => {
                draft.push(...pl);
            })
        );
        setPl(
            produce(pl, draft => {
                draft.splice(0, draft.length);
            })
        );
    }

    return (
        <MainContext.Provider
            value={{
                pl,
                el,
                addtopl,
                removefromel,
                moveinpl,
                movetoel,
                handleFocus,
            }}
        >
            <Container>
                <Header />
                <div id="lists">
                    <PartList list={pl} focus={focus} />
                    <div
                        style={{
                            height: `${pl.length * 40}px`,
                        }}
                        className="btnAll"
                    >
                        <Button onClick={() => movealltoel()}>
                            <MdKeyboardArrowRight size="24px" />
                        </Button>
                        <Button onClick={() => movealltopl()}>
                            <MdKeyboardArrowLeft size="24px" />
                        </Button>
                    </div>
                    <EngList list={el} />
                </div>
            </Container>
        </MainContext.Provider>
    );
}

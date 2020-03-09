/* eslint-disable no-plusplus */
import React from 'react';
import Button from '@material-ui/core/Button';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { connect, useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import PartList from '../PartList';
import EngList from '../EngList';
import MainContext from './context';
import { Container } from './styles';

function Main() {
    const pl = useSelector(state => state.partList);
    const el = useSelector(state => state.engList);
    const dispatch = useDispatch();

    function movealltopl() {
        dispatch({
            type: 'ALL_TO_PL',
            el,
        });
    }
    function movealltoel() {
        dispatch({
            type: 'ALL_TO_EL',
            pl,
        });
    }

    return (
        <MainContext.Provider
            value={{
                pl,
                el,
            }}
        >
            <Container>
                <Header />
                <div id="lists">
                    <PartList list={pl} />
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
export default connect()(Main);

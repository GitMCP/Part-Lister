import styled from 'styled-components';

export const Container = styled.div`
    width: calc(26% - 15px);
    min-height: calc(100% - 200px);
    margin-left: 15px;

    header {
        margin-bottom: 4px;
        margin-left: -14px;
        height: 50px;
        display: flex;
        flex-direction: row;
        background-color: #446cb3;
        border-bottom-left-radius: 12px;
        justify-content: space-between;
        padding-left: 60px;
        padding-right: 15px;
        align-items: center;
        box-shadow: 0 1px 4px 0 #768291;

        h1 {
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
            -webkit-text-fill-color: #fff;
            text-align: center;
        }
    }
    ul {
        background-color: ${props => (props.hover ? '#cfe3fa' : '#eff3f8')};
        border: ${props =>
            props.hover ? '5px dashed rgba(150, 200, 250, 0.8)' : 'e'};
        height: calc(100% - 204px);
        width: 25.3%;
        position: absolute;
        overflow-y: scroll;
        .item {
            visibility: ${props => (props.hover ? 'hidden' : 'visible')};
        }
        .message {
            font-size: 24px;
            color: #84a8d1;
            width: 350px;
            text-align: center;
            position: fixed;
            top: 50%;
            left: calc(87.5% - 175px);
            visibility: ${props => (props.hover ? 'visible' : 'hidden')};
        }
    }
`;

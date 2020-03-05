import styled from 'styled-components';

export const Container = styled.div`
    width: 74%;
    header {
        margin-bottom: 4px;
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        background-color: #446cb3;
        border-bottom-right-radius: 12px;
        justify-content: space-between;
        padding-left: 75px;
        padding-right: 30px;
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
        height: calc(100% - 204px);
        width: 73.4%;
        position: absolute;
        overflow-y: scroll;
        overflow-x: scroll;
    }
`;

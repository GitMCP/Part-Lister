import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    #lists {
        display: flex;
        flex-direction: row;
        height: 100%;
        .btnAll {
            display: flex;
            flex-direction: column;
            position: fixed;
            margin-left: calc(75% - 20px);
            top: 50%;
            button {
                min-width: 5px;
                height: 40px;
            }
        }
    }
`;

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
            margin-left: calc(74% - 12px);
            position: fixed;
            top: 50%;
            button {
                min-width: 5px;
            }
            * {
                padding: 0;
            }
            .MuiButton-text {
                border-radius: 50px;
                border: 1px solid rgba(150, 200, 250, 0.8);
                padding: 0;
                padding-top: 20px;
                padding-bottom: 20px;
            }
        }
    }
`;

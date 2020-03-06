import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    margin: 8px;
    height: 32px;
    border: 0px;
    border-style: solid;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 #768291;
    form {
        padding-top: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        padding-left: 15px;
        .material-icons {
            font-size: 18px;
        }
        .material-icons:hover {
            cursor: grab;
        }
        h3: {
            font-size: 14px;
        }
        #pn {
            width: 150px;
            text-align: center;
            margin-left: 0px;
        }
        #indent {
            margin-left: 10px;
            text-align: center;
            width: 20px;
        }
        #nom {
            width: 120px;
            text-align: center;
            margin-left: 20px;
        }
        #qty {
            font-size: 16px;
            margin-left: 30px;
            width: 40px;
            text-align: center;
        }
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    border: ${props => {
        if (props.focus.index != null) {
            return props.focus.index.value === props.index
                ? '2px dashed #55616f'
                : 'none';
        }
        return 'none';
    }};
    margin-top: ${props => {
        if (props.focus.index != null) {
            return props.focus.index.value === props.index ? '16px' : '8px';
        }
        return '8px';
    }};
    margin-bottom: ${props => {
        if (props.focus.index != null) {
            return props.focus.index.value === props.index ? '16px' : '8px';
        }
        return '8px';
    }};
    height: ${props => {
        if (props.focus.index != null) {
            return props.focus.index.value === props.index ? '36px' : '32px';
        }
        return '32px';
    }};
    align-items: center;
    align-content: center;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 #768291;
    padding-left: 15px;
    padding-right: 15px;
    .material-icons {
        font-size: 18px;
    }
    .material-icons:hover {
        cursor: grab;
    }
    form {
        padding-top: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: flex-start;

        .MuiButtonBase-root {
            height: 18px;
            width: 18px;
            margin-left: 60px;

            input {
                font-size: inherit;
                height: 18px;
                width: 18px;
                background-color: inherit;
                border-radius: inherit;
                border: inherit;
                box-shadow: inherit;
            }
        }

        input {
            font-size: 14px;
            height: 22px;
            width: 60px;
            background-color: #fff;
            border-radius: 5px;
            border: solid #444d58 1px;
            box-shadow: none;
        }
        h3: {
            font-size: 14px;
        }
        #fignum {
            font-size: 16px;
            margin-left: 60px;
            width: 60px;
            text-align: center;
        }
        #variant {
            width: 20px;
            margin-left: 55px;
            text-align: center;
            text-transform: uppercase;
        }
        #pn {
            width: 120px;
            text-align: center;
            margin-left: 30px;
        }
        #apn {
            margin-left: 38px;
            width: 40px;
            text-align: center;
        }
        #indent {
            margin-left: 70px;
            text-align: center;
            width: 20px;
        }
        #nom {
            width: 120px;
            text-align: center;
            margin-left: 35px;
        }
        #add {
            width: 120px;
            text-align: center;
            margin-left: 25px;
        }
        #misc {
            font-size: 16px;
            margin-left: 40px;
            width: 100px;
            text-align: center;
        }
        #eff {
            font-size: 16px;
            margin-left: 50px;
            width: 40px;
            text-align: center;
        }
        #qty {
            font-size: 16px;
            margin-left: 65px;
            width: 40px;
            text-align: center;
        }
    }
`;

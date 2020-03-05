import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Orbitron:800&display=swap');
    height: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .list {
        align-items: center;
        height: 30px;
        width: 30px;
    }
    .gear {
        width: 80px;
        height: 80px;
    }
    .bot {
        background-color: #fff;
        height: 40%;
        width: 100%;
        color: #fff;
        padding-left: 15px;
        background: #55616f;
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        align-items: center;
        h1 {
            margin-left: 10px;
            font-size: 30px;
        }
    }
    .top {
        width: 100%;
        height: 60%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 30px;
        color: #55616f;
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
            height: 80px;
            border-radius: 45px;
            margin-left: 70%;
        }
        .user {
            font-size: 24px;
        }
        div {
            margin-left: 10px;
        }
    }
`;

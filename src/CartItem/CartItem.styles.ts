import styled from "styled-components";

// rerun
export const Wrapper = styled.div`
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    div {
        flex: 1;
    }
    
    .item-title {
        font-size: 1rem;
    }

    .information, .buttons {
        display: flex;
        justify-content: space-between;
    }

    .buttons {
        align-items: center;
        & > p {
            margin: 0;    
        }
    }
    
    .buttons > button {
        height: 2rem;
    }

    img {
        max-width: 80px;
        object-fit: cover;
        margin-left: 40px;
    }

    @media screen and (max-width: 768px) {
        .item-title {
            margin: 0.5rem 0;
        }
        .information {
            font-size: 0.8rem;
        }
        .buttons > button {
            height: 1.7rem;
        }
    }
    @media screen and (max-width: 425px) {
        .item-title {
            font-size: 0.7rem;
        }
        .information {
            font-size: 0.65rem;
        }
        .buttons {
            flex-direction: column;
        }
        img {
            margin-left: 15px;
        }
    }
`;
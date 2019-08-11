import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 1000px;

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;

  margin: 0 10px 20px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    h2 {
      margin-top: 5px;
      font-size: 24px;
    }

    strong,
    small {
      align-self: flex-start;
      margin-top: 5px;
      font-size: 14px;
    }

    small {
      color: #666;
    }
  }
`;

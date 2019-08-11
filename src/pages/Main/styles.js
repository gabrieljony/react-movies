import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  flex-wrap: wrap;
  h1 {
    color: #fff;
    text-transform: uppercase;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
  }
  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #606060;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      background: #444;
    }
  }
`;

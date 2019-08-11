import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  flex-wrap: wrap;
  h1 {
    font-size: 28px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  section {
    background-color: #fff;
    width: 50%;
    display: flex;
  }
  img {
  }
  button {
    height: 55px;
    padding: 0 20px;
    margin-top: 10px;
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

export const Info = styled.form`
  margin: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  color: #b3b3b3;
  font-size: 18px;
  p {
    margin-bottom: 5px;
    color: #000;
  }
  a {
    color: #000;
  }
`;

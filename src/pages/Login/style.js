import styled from "styled-components";

const WapperLogin = styled.div`
  width: 313px;
  height: 406px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img.logo {
    width: 226px;
    height: 96px;

    margin-bottom: 60px;
  }

  input {
    width: 312px;
    height: 35px;

    margin-bottom: 40px;

    border: 1px solid var(--blueLight);
    border-radius: 8px;

    font-size: 1rem;
    color: var(--white);
  }

  input:last-of-type {
    margin-bottom: 30px;
  }

  div.icons {
    width: 191px;
    height: 35px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img.icon {
      width: 35px;
    }
  }
`;

export default WapperLogin;

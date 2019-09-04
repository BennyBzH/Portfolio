import styled from 'styled-components';
import Input from '../../../../../reusecore/src/elements/Input'

export const ActiveStatus = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
  margin-right: 20px;
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #00ff24;
    border: 3px solid #fff;
    right: -2px;
    bottom: -2px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const InputCustom = styled(Input)`
  input {
    font-family: monospace;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
  @media (max-width: 575px) {
    font-size: 15px;
    margin-bottom: 12px;
  }
`

export const CardConfirm = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0.521px 2.954px 50px 0px rgba(101, 106, 160, 0.1);
  display: flex;
  align-items: center;
  width: 50%;
  margin-top: 100px;
  @media (max-width: 990px) {
    margin-top: 100px;
    width: 75%;
  }
  @media (max-width: 575px) {
    margin-top: 50px;
    width: 100%;
  }
`
export const CardDetail = styled.div`
  width: 100%;
  padding: 55px 60px 55px 60px;
  display: flex;
  align-items: center;
  justify-conten: center;
  @media (max-width: 1199px) {
    padding: 70px 45px 40px 45px;
  }
  @media (max-width: 990px) {
    padding: 30px 35px 30px 35px;
  }
  @media (max-width: 575px) {
    padding: 20px 25px 20px 25px;
  }
`
export const CardIcon = styled.div`
  flex: 0 0 130px;
  max-width: 130px;
  @media (max-width: 990px) {
    flex: 0 0 55px;
    max-width: 55px;
    margin-right: 30px;
  }
  @media (max-width: 575px) {
    flex: 0 0 45px;
    max-width: 45px;
    margin-right: 20px;
  }
`
export const CardAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
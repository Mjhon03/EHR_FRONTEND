import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseModal = styled.button`
  padding: 2% ;
  background: none;
  border: none;
`;

export const Modal = styled.div`
  width: 45%;
  outline: solid 1px black;
  padding: 0 2% 2% 2%;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
`
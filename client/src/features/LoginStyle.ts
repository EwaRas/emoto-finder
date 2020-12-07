import styled from 'styled-components';

export const Video = styled.video`
  position: fixed;
  z-index: -1;

  @media (min-aspect-ratio: 16/9) {
    width: 100wh;
  }
  @media (max-aspect-ratio: 16/9) {
    height: 100hv;
  }

  background-color: black;
`;

export const LoginDiv = styled.div`
  position: fixed;
  top: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  z-index: 1;
  margin-bottom: 5em;
`;

export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  font-size: 1.2em;
  .textfield_not_focus {
    color: white !important;
    font-weight: 600;
  }
  .textfield_focus {
    color: white !important;
    background-color: grey !important;
    opacity: 0.8 !important;
    padding: 0.25em !important;
    font-size: xx-medium !important;
    font-weight: 600;
  }
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: auto;
  color: white;
`;

import React from 'react';
import styled from 'styled-components';

export default function Loader(props) {
  return (
    <Container {...props} className={`flex items-center justify-center ${props.className}`}>
      <div className="loader"></div>
    </Container>
  );
}
export function LoaderSmall(props) {
  return (
    <Container {...props} className={`flex items-center justify-center ${props.className}`}>
      <div className="loaderSmall"></div>
    </Container>
  );
}

export function LoaderFull() {
  return (
    <Container
      className="flex items-center justify-center"
      style={{ minHeight: '80vh' }}
    >
      <div className="loader"></div>
    </Container>
  );
}

export function LoaderBtn() {
  return (
    <ButtonContainer className="flex items-center justify-center">
      <div className="loader"></div>
    </ButtonContainer>
  );
}

export function LoaderBtnSecondary() {
  return (
    <ButtonSecondary className="flex items-center justify-center">
      <div className="loader"></div>
    </ButtonSecondary>
  );
}

const Container = styled.div`
  .loader {
    border: 3px solid #555;
    border-radius: 50%;
    border-top: 3px solid transparent;
    width: 35px;
    height: 35px;
    -webkit-animation: spin 1.2s linear infinite;
    animation: spin 1.2s linear infinite;
  }
  .loaderSmall {
    border: 3px solid #555;
    border-radius: 50%;
    border-top: 3px solid transparent;
    width: 20px;
    height: 20px;
    -webkit-animation: spin 1.2s linear infinite;
    animation: spin 1.2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ButtonContainer = styled(Container)`
  .loader {
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-top: 2px solid transparent;
  }
`;

const ButtonSecondary = styled(Container)`
  .loader {
    width: 20px;
    height: 20px;
    border: 2px solid #A3A8C2;
    border-top: 2px solid transparent;
  }
`;

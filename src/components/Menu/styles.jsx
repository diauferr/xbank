import styled from 'styled-components';

export const Img = styled.img`
    margin: 0 25px 0 25px;
    transition: all 0.3s ease;
    transform: rotate3d(0,0,0,0deg);
    &:hover {
        transform: scale(1.2,1.2);
        transform: rotate3d(0,1,0,180deg)
    }
`;

export const Container = styled.div`
    width: 40px;
    height: 40px;
    margin: 0 25px 0 25px;
    transition: all 0.2s ease;
`

export const One = styled.i`
  width: 200px;
  height: 120px;
  position: relative;
  margin: 0 20px;
  background-color: red;
`;

export const Two = styled.i`
  width: 200px;
  height: 120px;
  position: relative;
  margin: 0 20px;
`;

export const Three = styled.i`
  width: 200px;
  height: 120px;
  position: relative;
  margin: 0 20px;
`;
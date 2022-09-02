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
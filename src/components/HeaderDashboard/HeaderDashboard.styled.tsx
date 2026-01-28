import styled from '../../utils/styled';
import { Box } from '@mui/material';

export const Container = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: fit-content;
    padding: 1rem;
`
export const Content = styled(Box)`
    display: flex !important; 
    align-items: center;
    color: black;
    width: 50%;
    height: 100%;
`

export const FlexBox = styled(Box)`
    width: fit-content;
    display: flex;
    align-items: center;
`
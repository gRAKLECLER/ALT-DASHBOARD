import { Link } from 'react-router-dom';
import styled from '../../utils/styled';
import { Box } from '@mui/material';
import { Bolt } from '@mui/icons-material';

export const Container = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: fit-content;
    padding: 1rem;
    border-bottom: 1.5px solid lightgray;
`
export const Content = styled(Box)`
    display: flex !important; 
    align-items: center;
    color: black;
    height: 100%;
`

export const FlexBox = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
`

export const HeaderRightItem = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
`

export const CustomLink = styled(Link)`
    text-decoration: none;
    margin-right: .8rem;
    display: flex;
    color: grey;

    &:hover {
    font-weight: bold; /* passe en gras au survol */
  }
`

export const CustomLinkLogo = styled(CustomLink)`
    margin-right: 2rem;
    text-align: center;
`

export const CustomLogo =  styled(Bolt)`
    color: white;
    background-color: #7b00d3;
    font-size: 32px;
    text-align: center;
    margin-right: .3rem;
    border-radius: 8px;
`
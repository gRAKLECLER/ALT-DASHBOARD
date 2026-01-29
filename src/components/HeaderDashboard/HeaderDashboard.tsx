import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Container, Content, CustomLink, CustomLinkLogo, CustomLogo, FlexBox } from './HeaderDashboard.styled';
import { Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderDashboard = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', alignItems: 'baseline', padding: '1rem' }} role="presentation" onClick={toggleDrawer(false)}>
        <CustomLinkLogo to="/">
        <CustomLogo/>
        <Typography variant='h6'>TechCorp</Typography>
        </CustomLinkLogo>
        <CustomLink to="/">Dashboard</CustomLink>
        <CustomLink to="/tools">Tools</CustomLink>
        <CustomLink to="/analytics">Analytics</CustomLink>
        <CustomLink to="/settings">Settings</CustomLink>
    </Box>
  );

  return (
    <Container>
      <Button onClick={toggleDrawer(true)} sx={{display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' }}}>
        <MenuIcon/>
      </Button>
      <Content  sx={{display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }}}>
        <FlexBox sx={{display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}}>
            <CustomLinkLogo to="/">
                <CustomLogo/>
                <Typography variant='h6'>TechCorp</Typography>
            </CustomLinkLogo>
            <CustomLink to="/">Dashboard</CustomLink>
            <CustomLink to="/tools">Tools</CustomLink>
            <CustomLink to="/analytics">Analytics</CustomLink>
            <CustomLink to="/settings">Settings</CustomLink>
        </FlexBox>
      </Content>
      {/* <Content  sx={{display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }}}>
        <HeaderRightItem sx={{display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}}>
            <InputField/>
            <BedtimeIcon sx={{ mr: '1rem' }}/>
            <NotificationsIcon sx={{ mr: '1rem' }}/>
            <SettingsIcon sx={{ mr: '1rem' }}/>
        </HeaderRightItem>
      </Content> */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Container>
  );
}

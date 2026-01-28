import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Container, Content, CustomLink, CustomLinkLogo, CustomLogo, FlexBox, HeaderRightItem } from './HeaderDashboard.styled';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import InputField from '../InputField/InputField';

export const HeaderDashboard = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container>
      <Button onClick={toggleDrawer(true)} sx={{display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' }}}>Open drawer</Button>
      <Content  sx={{display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }}}>
        <FlexBox>
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
      <Content  sx={{display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }}}>
        <HeaderRightItem>
            <InputField/>
            <BedtimeIcon sx={{ mr: '1rem' }}/>
            <NotificationsIcon sx={{ mr: '1rem' }}/>
            <SettingsIcon sx={{ mr: '1rem' }}/>
        </HeaderRightItem>
      </Content>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Container>
  );
}

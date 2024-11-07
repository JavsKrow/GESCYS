import React from 'react';
import '../components/css/Home.css';
import { List, ListItem, ListItemText, Divider, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Home() {
  return (
    <div className="home-container">
      {/* Barra lateral */}
      <Box className="sidebar" sx={{ width: 250, bgcolor: '#f5f5f5', height: '100vh', padding: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Portal ML</Typography>
        <List component="nav">
          <ListItem button>
            <DashboardIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <HomeIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <SchoolIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Curso" />
          </ListItem>
          <ListItem button>
            <EventNoteIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Planificación" />
          </ListItem>
          <ListItem button>
            <AccessAlarmIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Pomodoro" />
          </ListItem>
          <ListItem button>
            <NotificationsIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Notificación" />
          </ListItem>
        </List>
      </Box>

      {/* Contenido principal */}
      <Box className="main-content" sx={{ flex: 1, padding: 4 }}>
        <Typography variant="h3" gutterBottom>¡Bienvenido!</Typography>
        <Divider sx={{ marginY: 2 }} />
        {/* Aquí puedes añadir cualquier contenido adicional */}
        <Box className="content-box" sx={{ padding: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="body1">
            Aquí puedes incluir información adicional o elementos que desees mostrar en esta sección.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Home;

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from '../ui/Logo.jsx';

const NAV_LINKS = ['꽃꽂이', '베이킹', '글라스아트', '호스트 지원'];

function Header() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
        px: { xs: 2, md: 4 },
        py: { xs: 1.5, md: 2 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Logo />

      {isDesktop && (
        <Stack direction="row" spacing={4}>
          {NAV_LINKS.map((link) => (
            <Button
              key={link}
              sx={{
                color: 'text.primary',
                fontSize: '0.85rem',
                fontWeight: 700,
                minWidth: 'auto',
                p: 0,
                '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
              }}
            >
              {link}
            </Button>
          ))}
        </Stack>
      )}

      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: 0, px: { xs: 2, md: 3 }, fontSize: '0.8rem' }}
      >
        지금 예약하기
      </Button>
    </Box>
  );
}

export default Header;

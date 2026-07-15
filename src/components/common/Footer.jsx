import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Logo from '../ui/Logo.jsx';

const FOOTER_LINKS = ['이용약관', '개인정보처리방침', '호스트 지원', '고객센터'];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        sx={{
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
        }}
      >
        <Logo size={24} />

        <Stack direction="row" spacing={{ xs: 2, md: 3 }} sx={{ flexWrap: 'wrap' }}>
          {FOOTER_LINKS.map((link) => (
            <Typography
              key={link}
              component="span"
              sx={{ fontSize: '0.8rem', color: 'text.secondary', cursor: 'pointer' }}
            >
              {link}
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', mt: { xs: 3, md: 4 } }}>
        올데이클래스 · 사업자등록번호 000-00-00000 · 대표 000 · 서울특별시
      </Typography>
    </Box>
  );
}

export default Footer;

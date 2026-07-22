import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { getCategoryBySlug } from '../../data/categories.jsx';
import { useHostClasses } from '../../hooks/useHostClasses.js';
import { mapHostClassToCategory } from '../../utils/mapHostClass.jsx';

const CATEGORY_NAV_LINKS = [
  { label: '꽃꽂이', slug: 'flower' },
  { label: '베이킹', slug: 'baking' },
  { label: '글라스아트', slug: 'glass-art' },
  { label: '연극', slug: 'theater' },
  { label: '액티비티', slug: 'activity' },
  { label: '뷰티', slug: 'beauty' },
  { label: '춤', slug: 'dance' },
  { label: '음악', slug: 'music' },
];

const navButtonSx = {
  color: 'text.primary',
  fontSize: '0.85rem',
  fontWeight: 700,
  minWidth: 'auto',
  p: 0,
  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
};

/**
 * HeaderCategoryMenu 컴포넌트
 *
 * 헤더의 카테고리 메뉴(꽃꽂이, 베이킹 등)를 누르면 같은 종류의 클래스를
 * 바로 고를 수 있는 선택창(드롭다운)을 보여줍니다.
 *
 * Example usage:
 * <HeaderCategoryMenu />
 */
function HeaderCategoryMenu() {
  const { hostClasses } = useHostClasses();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeSlug, setActiveSlug] = useState(null);

  const openMenu = (event, slug) => {
    setAnchorEl(event.currentTarget);
    setActiveSlug(slug);
  };
  const closeMenu = () => setAnchorEl(null);

  const baseCategory = activeSlug ? getCategoryBySlug(activeSlug) : null;
  const matchingHostClasses = activeSlug
    ? hostClasses.map(mapHostClassToCategory).filter((hostClass) => hostClass.categorySlug === activeSlug)
    : [];
  const items = baseCategory ? [baseCategory, ...matchingHostClasses] : matchingHostClasses;

  return (
    <>
      {CATEGORY_NAV_LINKS.map(({ label, slug }) => (
        <Button
          key={slug}
          onClick={(event) => openMenu(event, slug)}
          endIcon={<KeyboardArrowDownRoundedIcon sx={{ fontSize: '1rem !important' }} />}
          sx={navButtonSx}
        >
          {label}
        </Button>
      ))}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        slotProps={{ paper: { sx: { borderRadius: 0, minWidth: 240 } } }}
      >
        {items.length === 0 && <MenuItem disabled>등록된 클래스가 없어요.</MenuItem>}
        {items.map((item) => (
          <MenuItem key={item.slug} component={Link} to={`/class/${item.slug}`} onClick={closeMenu}>
            <Box>
              <Typography sx={{ fontSize: '0.88rem', fontWeight: 700 }}>{item.detailTitle}</Typography>
              <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                {item.duration} · {item.price.toLocaleString('ko-KR')}원~
              </Typography>
            </Box>
          </MenuItem>
        ))}
        {items.length > 0 && <Divider />}
        <MenuItem
          component={Link}
          to={`/category/${activeSlug}`}
          onClick={closeMenu}
          sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.85rem' }}
        >
          전체 보기
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderCategoryMenu;

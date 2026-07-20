import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import { useAuth } from '../hooks/useAuth.js';
import { useHostClasses } from '../hooks/useHostClasses.js';
import { supabase } from '../lib/supabase.js';

const BENEFITS = [
  {
    title: '나만의 클래스 개설',
    description: '내가 잘하는 것을 원데이 클래스로 만들어 참가자를 모집하세요.',
  },
  {
    title: '자유로운 일정 운영',
    description: '원하는 날짜와 시간에만 클래스를 열 수 있어요.',
  },
  {
    title: '수익 정산 지원',
    description: '예약과 정산을 올데이가 관리해드립니다.',
  },
];

const EMPTY_POST_FORM = {
  detailTitle: '',
  categoryLabel: '',
  price: '',
  duration: '',
  location: '',
  hostName: '',
  description: '',
  schedule: '',
};

const inputSx = { '& .MuiOutlinedInput-root': { borderRadius: 0 } };

/**
 * HostApply 컴포넌트
 *
 * 올데이 클래스의 호스트로 지원할 수 있는 안내 페이지입니다.
 * 로그인/회원가입 후 직접 클래스 게시물을 등록할 수 있습니다.
 *
 * Example usage:
 * <HostApply />
 */
function HostApply() {
  const { user, loading: authLoading, signUp, signIn, signOut } = useAuth();
  const { refresh } = useHostClasses();

  const [authMode, setAuthMode] = useState('login');
  const [authForm, setAuthForm] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [authNotice, setAuthNotice] = useState('');
  const [authSubmitting, setAuthSubmitting] = useState(false);

  const [postForm, setPostForm] = useState(EMPTY_POST_FORM);
  const [postError, setPostError] = useState('');
  const [postSubmitting, setPostSubmitting] = useState(false);
  const [createdClassId, setCreatedClassId] = useState(null);

  const handleAuthSubmit = async (event) => {
    event.preventDefault();
    setAuthError('');
    setAuthNotice('');
    setAuthSubmitting(true);

    const { email, password } = authForm;
    const { data, error } =
      authMode === 'signup' ? await signUp(email, password) : await signIn(email, password);

    setAuthSubmitting(false);

    if (error) {
      setAuthError(error.message);
      return;
    }

    if (authMode === 'signup' && !data.session) {
      setAuthNotice('가입 확인 이메일을 보냈어요. 메일함에서 인증 후 로그인해주세요.');
      setAuthMode('login');
      setAuthForm({ email, password: '' });
    }
  };

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    setPostError('');

    const price = Number(postForm.price);
    const hasEmptyField = Object.entries(postForm).some(
      ([key, value]) => key !== 'schedule' && !value,
    );
    if (hasEmptyField || !price) {
      setPostError('일정을 제외한 모든 항목을 입력해주세요.');
      return;
    }

    setPostSubmitting(true);
    const { data, error } = await supabase
      .from('host_classes')
      .insert({
        host_id: user.id,
        detail_title: postForm.detailTitle,
        category_label: postForm.categoryLabel,
        price,
        duration: postForm.duration,
        location: postForm.location,
        host_name: postForm.hostName,
        description: postForm.description,
        schedule: postForm.schedule
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),
      })
      .select()
      .single();
    setPostSubmitting(false);

    if (error) {
      setPostError(error.message);
      return;
    }

    setCreatedClassId(data.id);
    setPostForm(EMPTY_POST_FORM);
    refresh();
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="section" sx={{ px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 }, flex: 1 }}>
        <Typography
          sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'primary.main', mb: 1 }}
        >
          [ HOST ]
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Black Han Sans', sans-serif",
            fontSize: { xs: '2rem', md: '3rem' },
            lineHeight: 1.2,
            mb: { xs: 3, md: 4 },
            textWrap: 'balance',
          }}
        >
          당신의 하루를
          <br />
          클래스로 만들어보세요
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 3 },
            mb: { xs: 5, md: 6 },
          }}
        >
          {BENEFITS.map((benefit) => (
            <Box key={benefit.title} sx={{ border: '1px solid', borderColor: 'divider', p: { xs: 2.5, md: 3 } }}>
              <Typography sx={{ fontSize: '1rem', fontWeight: 700, mb: 1 }}>{benefit.title}</Typography>
              <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', lineHeight: 1.6 }}>
                {benefit.description}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ maxWidth: '520px' }}>
          {authLoading ? null : !user ? (
            <Box
              component="form"
              onSubmit={handleAuthSubmit}
              sx={{ border: '1px solid', borderColor: 'divider', p: { xs: 2.5, md: 3.5 } }}
            >
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 2 }}>
                {authMode === 'signup' ? '호스트 회원가입' : '호스트 로그인'}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2.5 }}>
                <TextField
                  type="email"
                  label="이메일"
                  required
                  size="small"
                  sx={inputSx}
                  value={authForm.email}
                  onChange={(event) => setAuthForm((prev) => ({ ...prev, email: event.target.value }))}
                />
                <TextField
                  type="password"
                  label="비밀번호"
                  required
                  size="small"
                  sx={inputSx}
                  value={authForm.password}
                  onChange={(event) => setAuthForm((prev) => ({ ...prev, password: event.target.value }))}
                />
              </Box>

              {authError && (
                <Typography sx={{ fontSize: '0.82rem', color: 'error.main', mb: 2 }}>{authError}</Typography>
              )}
              {authNotice && (
                <Typography sx={{ fontSize: '0.82rem', color: 'primary.main', mb: 2 }}>{authNotice}</Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={authSubmitting}
                sx={{ borderRadius: 0, mb: 1.5 }}
              >
                {authMode === 'signup' ? '회원가입' : '로그인'}
              </Button>

              <Typography
                component="button"
                type="button"
                onClick={() => {
                  setAuthMode((mode) => (mode === 'signup' ? 'login' : 'signup'));
                  setAuthError('');
                  setAuthNotice('');
                }}
                sx={{
                  font: 'inherit',
                  fontSize: '0.82rem',
                  color: 'text.secondary',
                  bgcolor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  p: 0,
                }}
              >
                {authMode === 'signup' ? '이미 계정이 있으신가요? 로그인' : '처음이신가요? 회원가입'}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ border: '1px solid', borderColor: 'divider', p: { xs: 2.5, md: 3.5 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 700 }}>클래스 게시물 등록</Typography>
                <Button
                  size="small"
                  onClick={signOut}
                  sx={{ color: 'text.secondary', fontSize: '0.8rem', minWidth: 'auto' }}
                >
                  로그아웃
                </Button>
              </Box>

              {createdClassId && (
                <Box sx={{ border: '1px solid', borderColor: 'primary.main', p: 2, mb: 2.5 }}>
                  <Typography sx={{ fontSize: '0.88rem', mb: 0.5 }}>게시물이 등록되었어요!</Typography>
                  <Typography
                    component={Link}
                    to={`/class/${createdClassId}`}
                    sx={{ fontSize: '0.85rem', color: 'primary.main', textDecoration: 'none' }}
                  >
                    등록한 클래스 보러가기 →
                  </Typography>
                </Box>
              )}

              <Box component="form" onSubmit={handlePostSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="클래스 제목"
                  required
                  size="small"
                  sx={inputSx}
                  value={postForm.detailTitle}
                  onChange={(event) => setPostForm((prev) => ({ ...prev, detailTitle: event.target.value }))}
                />
                <TextField
                  label="카테고리 라벨 (예: 캘리그라피 원데이 클래스)"
                  required
                  size="small"
                  sx={inputSx}
                  value={postForm.categoryLabel}
                  onChange={(event) => setPostForm((prev) => ({ ...prev, categoryLabel: event.target.value }))}
                />
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                  <TextField
                    type="number"
                    label="1인 참가비(원)"
                    required
                    size="small"
                    sx={inputSx}
                    value={postForm.price}
                    onChange={(event) => setPostForm((prev) => ({ ...prev, price: event.target.value }))}
                  />
                  <TextField
                    label="소요시간 (예: 2시간)"
                    required
                    size="small"
                    sx={inputSx}
                    value={postForm.duration}
                    onChange={(event) => setPostForm((prev) => ({ ...prev, duration: event.target.value }))}
                  />
                </Box>
                <TextField
                  label="장소"
                  required
                  size="small"
                  sx={inputSx}
                  value={postForm.location}
                  onChange={(event) => setPostForm((prev) => ({ ...prev, location: event.target.value }))}
                />
                <TextField
                  label="호스트 이름"
                  required
                  size="small"
                  sx={inputSx}
                  value={postForm.hostName}
                  onChange={(event) => setPostForm((prev) => ({ ...prev, hostName: event.target.value }))}
                />
                <TextField
                  label="클래스 소개"
                  required
                  multiline
                  minRows={3}
                  size="small"
                  sx={inputSx}
                  value={postForm.description}
                  onChange={(event) => setPostForm((prev) => ({ ...prev, description: event.target.value }))}
                />
                <TextField
                  label="예약 가능 일정 (쉼표로 구분, 예: 7월 19일(토) 14:00, 7월 20일(일) 11:00)"
                  size="small"
                  sx={inputSx}
                  value={postForm.schedule}
                  onChange={(event) => setPostForm((prev) => ({ ...prev, schedule: event.target.value }))}
                />

                {postError && <Typography sx={{ fontSize: '0.82rem', color: 'error.main' }}>{postError}</Typography>}

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={postSubmitting}
                  sx={{ borderRadius: 0 }}
                >
                  게시물 등록
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default HostApply;

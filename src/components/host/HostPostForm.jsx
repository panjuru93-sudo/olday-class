import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
 * HostPostForm 컴포넌트
 *
 * 클래스 게시물을 등록하거나 수정할 때 공통으로 쓰는 입력 폼입니다.
 *
 * Props:
 * @param {object} initialValues - 폼 초기값, 없으면 신규 등록 모드 [Optional]
 * @param {string} submitLabel - 제출 버튼 텍스트 [Required]
 * @param {function} onSubmit - 제출 시 실행할 함수. { error } 형태를 반환/resolve해야 함 [Required]
 * @param {function} onCancel - 취소 버튼 클릭 시 실행할 함수, 있으면 취소 버튼이 보임 [Optional]
 *
 * Example usage:
 * <HostPostForm submitLabel="게시물 등록" onSubmit={handleCreate} />
 */
function HostPostForm({ initialValues, submitLabel, onSubmit, onCancel }) {
  const [form, setForm] = useState(initialValues ?? EMPTY_POST_FORM);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const price = Number(form.price);
    const hasEmptyField = Object.entries(form).some(
      ([key, value]) => key !== 'schedule' && !value,
    );
    if (hasEmptyField || !price) {
      setError('일정을 제외한 모든 항목을 입력해주세요.');
      return;
    }

    setSubmitting(true);
    const result = await onSubmit({
      detailTitle: form.detailTitle,
      categoryLabel: form.categoryLabel,
      price,
      duration: form.duration,
      location: form.location,
      hostName: form.hostName,
      description: form.description,
      schedule: form.schedule
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
    });
    setSubmitting(false);

    if (result?.error) {
      setError(result.error.message);
      return;
    }

    if (!initialValues) {
      setForm(EMPTY_POST_FORM);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="클래스 제목"
        required
        size="small"
        sx={inputSx}
        value={form.detailTitle}
        onChange={updateField('detailTitle')}
      />
      <TextField
        label="카테고리 라벨 (예: 캘리그라피 원데이 클래스)"
        required
        size="small"
        sx={inputSx}
        value={form.categoryLabel}
        onChange={updateField('categoryLabel')}
      />
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
        <TextField
          type="number"
          label="1인 참가비(원)"
          required
          size="small"
          sx={inputSx}
          value={form.price}
          onChange={updateField('price')}
        />
        <TextField
          label="소요시간 (예: 2시간)"
          required
          size="small"
          sx={inputSx}
          value={form.duration}
          onChange={updateField('duration')}
        />
      </Box>
      <TextField label="장소" required size="small" sx={inputSx} value={form.location} onChange={updateField('location')} />
      <TextField
        label="호스트 이름"
        required
        size="small"
        sx={inputSx}
        value={form.hostName}
        onChange={updateField('hostName')}
      />
      <TextField
        label="클래스 소개"
        required
        multiline
        minRows={3}
        size="small"
        sx={inputSx}
        value={form.description}
        onChange={updateField('description')}
      />
      <TextField
        label="예약 가능 일정 (쉼표로 구분, 예: 7월 19일(토) 14:00, 7월 20일(일) 11:00)"
        size="small"
        sx={inputSx}
        value={form.schedule}
        onChange={updateField('schedule')}
      />

      {error && <Typography sx={{ fontSize: '0.82rem', color: 'error.main' }}>{error}</Typography>}

      <Box sx={{ display: 'flex', gap: 1.5 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={submitting}
          sx={{ borderRadius: 0 }}
        >
          {submitLabel}
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outlined"
            size="large"
            onClick={onCancel}
            sx={{ borderRadius: 0, borderColor: 'text.primary', color: 'text.primary' }}
          >
            취소
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default HostPostForm;

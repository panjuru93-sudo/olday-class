import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { supabase } from '../../lib/supabase.js';
import { useHostClasses } from '../../hooks/useHostClasses.js';
import HostPostForm from './HostPostForm.jsx';

function rowToFormValues(row) {
  return {
    category: row.category ?? '',
    detailTitle: row.detail_title,
    categoryLabel: row.category_label,
    price: String(row.price),
    duration: row.duration,
    location: row.location,
    hostName: row.host_name,
    description: row.description,
    schedule: (row.schedule ?? []).join(', '),
  };
}

/**
 * MyClassManager 컴포넌트
 *
 * 로그인한 호스트가 자신이 등록한 클래스 게시물 목록을 보고 수정할 수 있는 영역입니다.
 *
 * Props:
 * @param {string} userId - 현재 로그인한 호스트의 id [Required]
 *
 * Example usage:
 * <MyClassManager userId={user.id} />
 */
function MyClassManager({ userId }) {
  const { hostClasses, loading, refresh } = useHostClasses();
  const [editingId, setEditingId] = useState(null);
  const [updateNotice, setUpdateNotice] = useState('');

  const myClasses = hostClasses.filter((row) => row.host_id === userId);
  const editingRow = myClasses.find((row) => row.id === editingId);

  if (loading) {
    return <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>불러오는 중...</Typography>;
  }

  if (editingRow) {
    return (
      <HostPostForm
        initialValues={rowToFormValues(editingRow)}
        submitLabel="수정 완료"
        onCancel={() => setEditingId(null)}
        onSubmit={async (values) => {
          const { error } = await supabase
            .from('host_classes')
            .update({
              category: values.category,
              detail_title: values.detailTitle,
              category_label: values.categoryLabel,
              price: values.price,
              duration: values.duration,
              location: values.location,
              host_name: values.hostName,
              description: values.description,
              schedule: values.schedule,
            })
            .eq('id', editingRow.id);

          if (!error) {
            setUpdateNotice('수정되었어요.');
            setEditingId(null);
            refresh();
          }
          return { error };
        }}
      />
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {updateNotice && <Typography sx={{ fontSize: '0.82rem', color: 'primary.main' }}>{updateNotice}</Typography>}

      {myClasses.length === 0 ? (
        <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>등록한 게시물이 없어요.</Typography>
      ) : (
        myClasses.map((row) => (
          <Box
            key={row.id}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700 }}>{row.detail_title}</Typography>
              <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>{row.category_label}</Typography>
            </Box>
            <Button
              size="small"
              variant="outlined"
              onClick={() => {
                setEditingId(row.id);
                setUpdateNotice('');
              }}
              sx={{ borderRadius: 0, borderColor: 'text.primary', color: 'text.primary', flexShrink: 0 }}
            >
              수정
            </Button>
          </Box>
        ))
      )}
    </Box>
  );
}

export default MyClassManager;

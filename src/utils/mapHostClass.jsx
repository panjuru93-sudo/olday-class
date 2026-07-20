import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

/**
 * mapHostClassToCategory 함수
 *
 * Supabase host_classes 테이블의 한 행을, 기존 정적 카테고리(data/categories.jsx)와
 * 동일한 모양으로 변환합니다. ClassList / ClassDetail에서 두 데이터를 함께 렌더링하기 위함입니다.
 *
 * @param {object} row - host_classes 테이블의 한 행 [Required]
 *
 * Example usage:
 * const category = mapHostClassToCategory(row);
 */
export function mapHostClassToCategory(row) {
  return {
    slug: row.id,
    eyebrow: row.eyebrow,
    posterTitle: row.detail_title,
    detailTitle: row.detail_title,
    categoryLabel: row.category_label,
    browseCaption: row.category_label,
    icon: <AutoAwesomeRoundedIcon fontSize="inherit" />,
    price: row.price,
    duration: row.duration,
    location: row.location,
    host: row.host_name,
    description: row.description,
    schedule: row.schedule ?? [],
    reviews: [],
  };
}

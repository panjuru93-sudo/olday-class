import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import TheaterComedyRoundedIcon from '@mui/icons-material/TheaterComedyRounded';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';

export const CATEGORIES = [
  {
    slug: 'flower',
    eyebrow: 'FLOWER',
    posterTitle: '지루하면,\n꽂아라.',
    detailTitle: '제철 꽃으로 완성하는 계절 부케',
    categoryLabel: '꽃꽂이 원데이 클래스',
    browseCaption: '꽃꽂이 클래스 보러가기',
    icon: <LocalFloristRoundedIcon fontSize="inherit" />,
    price: 60000,
    duration: '2시간',
    location: '서울 성수동 스튜디오 블룸',
    host: '플로리스트 김소이',
    description:
      '제철 꽃으로 나만의 부케와 리스를 만드는 클래스입니다. 꽃말과 배색 기초부터 손질법까지 강사가 1:1로 봐드려요.',
    schedule: ['7월 19일(토) 14:00', '7월 20일(일) 11:00', '7월 26일(토) 14:00'],
    reviews: [
      { name: 'najin_h', rating: 5, comment: '꽃 향기 맡으면서 힐링했어요. 결과물도 예뻐서 만족!' },
      { name: 'doyoon22', rating: 4, comment: '초보인데 강사님이 친절하게 알려주셔서 좋았습니다.' },
    ],
  },
  {
    slug: 'baking',
    eyebrow: 'BAKING',
    posterTitle: '무기력하면,\n구워라.',
    detailTitle: '생크림 케이크 데코레이션 클래스',
    categoryLabel: '베이킹 원데이 클래스',
    browseCaption: '베이킹 클래스 보러가기',
    icon: <CakeRoundedIcon fontSize="inherit" />,
    price: 50000,
    duration: '2시간 30분',
    location: '서울 연남동 베이크랩',
    host: '파티시에 이한울',
    description:
      '반죽부터 데코레이션까지 직접 완성하는 홈베이킹 클래스. 완성한 케이크는 예쁜 박스에 포장해 드립니다.',
    schedule: ['7월 19일(토) 10:00', '7월 20일(일) 14:00', '7월 27일(일) 10:00'],
    reviews: [
      { name: 'sweet_jam', rating: 5, comment: '생크림 짜는 법부터 꼼꼼하게 알려주셔서 결과물이 카페 케이크 같았어요.' },
      { name: 'minz', rating: 5, comment: '재료가 다 준비돼 있어서 몸만 가면 돼요. 데이트 코스로 강추!' },
    ],
  },
  {
    slug: 'glass-art',
    eyebrow: 'GLASS ART',
    posterTitle: '밋밋하면,\n녹여라.',
    detailTitle: '유리 성형으로 만드는 나만의 잔',
    categoryLabel: '글라스아트 원데이 클래스',
    browseCaption: '글라스아트 클래스 보러가기',
    icon: <DiamondRoundedIcon fontSize="inherit" />,
    price: 70000,
    duration: '1시간 30분',
    location: '서울 문래동 글라스팩토리',
    host: '글라스아티스트 정하빈',
    description:
      '고온의 유리를 직접 녹이고 성형해 나만의 컵과 소품을 만드는 클래스. 안전 장비와 1:1 보조 강사가 함께합니다.',
    schedule: ['7월 19일(토) 13:00', '7월 20일(일) 15:00', '7월 26일(토) 13:00'],
    reviews: [
      { name: 'flame_o', rating: 5, comment: '유리가 녹는 걸 눈앞에서 보는 게 신기했어요. 안전하게 잘 알려주셨습니다.' },
      { name: 'jiyul', rating: 4, comment: '생각보다 뜨거워서 놀랐지만 결과물이 너무 예뻐요.' },
    ],
  },
  {
    slug: 'dance',
    eyebrow: 'DANCE',
    posterTitle: '몸이 굳으면,\n흔들어라.',
    detailTitle: 'K-POP 커버 안무 원데이 클래스',
    categoryLabel: '댄스 원데이 클래스',
    browseCaption: '댄스 클래스 보러가기',
    icon: <MusicNoteRoundedIcon fontSize="inherit" />,
    price: 35000,
    duration: '1시간 30분',
    location: '서울 홍대 스튜디오 무브',
    host: '댄서 하루',
    description:
      'K-POP 커버 안무를 기초 동작부터 배워 한 곡을 완성하는 클래스. 운동 신경과 상관없이 누구나 참여할 수 있어요.',
    schedule: ['7월 19일(토) 19:00', '7월 20일(일) 16:00', '7월 25일(금) 20:00'],
    reviews: [
      { name: 'groove_k', rating: 5, comment: '몸치인데 파트별로 천천히 알려주셔서 따라갈 수 있었어요.' },
      { name: 'yeeun_d', rating: 5, comment: '끝나고 다 같이 영상 찍어서 추억 남기기 좋아요.' },
    ],
  },
  {
    slug: 'solo-party',
    eyebrow: 'SOLO PARTY',
    posterTitle: '혼자라면,\n나와라.',
    detailTitle: '혼자 와도 괜찮은 소셜 파티',
    categoryLabel: '솔로파티 원데이 클래스',
    browseCaption: '솔로파티 보러가기',
    icon: <CelebrationRoundedIcon fontSize="inherit" />,
    price: 45000,
    duration: '3시간',
    location: '서울 이태원 라운지 나우',
    host: '파티 호스트 준&리',
    description:
      '혼자 온 사람들끼리 게임과 대화로 자연스럽게 친해지는 소셜 파티. 매 회차 8~10명 소규모로 진행합니다.',
    schedule: ['7월 19일(토) 19:00', '7월 26일(토) 19:00', '8월 2일(토) 19:00'],
    reviews: [
      { name: 'alone_ok', rating: 5, comment: '혼자 갔는데 어색하지 않게 계속 게임으로 이어줘서 좋았어요.' },
      { name: 'friday_night', rating: 4, comment: '연령대 비슷하게 매칭해주셔서 대화가 잘 통했습니다.' },
    ],
  },
  {
    slug: 'beauty',
    eyebrow: 'BEAUTY',
    posterTitle: '칙칙하면,\n빛내라.',
    detailTitle: '퍼스널 컬러 데일리 메이크업',
    categoryLabel: '뷰티 원데이 클래스',
    browseCaption: '뷰티 클래스 보러가기',
    icon: <SpaRoundedIcon fontSize="inherit" />,
    price: 55000,
    duration: '2시간',
    location: '서울 압구정 뷰티스튜디오 글로우',
    host: '메이크업 아티스트 서다인',
    description:
      '퍼스널 컬러 진단부터 데일리 메이크업까지 배우는 셀프 뷰티 클래스. 사용한 제품은 미니 사이즈로 챙겨가실 수 있어요.',
    schedule: ['7월 20일(일) 13:00', '7월 27일(일) 13:00', '8월 3일(일) 13:00'],
    reviews: [
      { name: 'glow_up', rating: 5, comment: '퍼스널 컬러를 알고 나니 화장품 고르기가 훨씬 쉬워졌어요.' },
      { name: 'nana_b', rating: 5, comment: '1:1로 봐주셔서 제 얼굴형에 맞는 팁을 많이 얻었어요.' },
    ],
  },
  {
    slug: 'theater',
    eyebrow: 'THEATER',
    posterTitle: '답답하면,\n연기하라.',
    detailTitle: '발성부터 즉흥연기까지, 미니 연극 체험',
    categoryLabel: '연극 원데이 클래스',
    browseCaption: '연극 클래스 보러가기',
    icon: <TheaterComedyRoundedIcon fontSize="inherit" />,
    price: 40000,
    duration: '2시간 30분',
    location: '서울 대학로 소극장 판',
    host: '배우 남도현',
    description:
      '짧은 대본으로 발성과 즉흥 연기를 체험하는 연극 클래스. 마지막엔 소규모 무대에서 장면을 발표합니다.',
    schedule: ['7월 19일(토) 15:00', '7월 26일(토) 15:00', '8월 2일(토) 15:00'],
    reviews: [
      { name: 'stage_fear', rating: 5, comment: '발성 연습만으로도 스트레스가 풀렸어요. 발표 무대도 뿌듯했습니다.' },
      { name: 'drama_lee', rating: 4, comment: '즉흥극이 처음엔 어색했는데 금방 몰입하게 되네요.' },
    ],
  },
  {
    slug: 'activity',
    eyebrow: 'ACTIVITY',
    posterTitle: '지친다면,\n뛰어라.',
    detailTitle: '초보자를 위한 실내 클라이밍 체험',
    categoryLabel: '액티비티 원데이 클래스',
    browseCaption: '액티비티 보러가기',
    icon: <LocalActivityRoundedIcon fontSize="inherit" />,
    price: 65000,
    duration: '2시간',
    location: '서울 성수동 클라임베이스',
    host: '액티비티 가이드 최준',
    description:
      '실내 클라이밍부터 서바이벌까지, 매달 바뀌는 액티비티를 초보자 눈높이에 맞춰 안내합니다.',
    schedule: ['7월 19일(토) 11:00', '7월 20일(일) 11:00', '7월 26일(토) 11:00'],
    reviews: [
      { name: 'adrenaline', rating: 5, comment: '초보자용 코스도 있어서 무섭지 않게 시작할 수 있었어요.' },
      { name: 'weekend_run', rating: 5, comment: '장비를 다 대여해줘서 몸만 가면 돼요. 스트레스 풀기 좋습니다.' },
    ],
  },
];

export function getCategoryBySlug(slug) {
  return CATEGORIES.find((category) => category.slug === slug);
}

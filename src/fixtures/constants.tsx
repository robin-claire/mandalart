export const HomePage = {
  title: '가제: 만다라트로 계획 세우기',
  description: {
    first: '나만의 인생 목표를',
    second: '세워 볼까요?',
  },
}

export const SignInPage = {
  title: '가제: 만다라트로 계획 세우기',
  description: {
    first: '나만의 인생 목표를',
    second: '세워 볼까요?',
  },
  buttons: {
    platform: [
      {
        title: '카카오',
        color: {
          container: '#FEE500',
          symbol: '#000000 85%',
        },
        icon: '',
      },
      {
        title: '구글',
        color: {
          container: '#FFFFFF',
        },
        icon: '',
      },
      {
        title: '트위터',
        color: {
          container: '#1DA1F2',
        },
        icon: '',
      },
    ],
    text: '로 시작하기',
  },
}

export const SignUpPage = {
  title: '회원가입',
  inputs: {
    nickName: '닉네임',
    email: '이메일(선택)',
  },
  buttons: {
    agreeAll: '전체 동의',
    agreeAge: {
      title: '만 14세 이상',
      description: '',
    },
    agreeUsage: {
      title: '이용약관 및 개인정보 수집 동의',
      description: '',
    },
    submit: '계정 만들기',
  },
}

export const tutorial = [
  {
    text: [
      '만다라트의 중심이 될',
      '핵심 목표를 적어주세요.',
    ],
    button: [
      '핵심 목표',
      '추가',
    ],
  },
  {
    text: [
      '핵심 목표를 이루기 위한',
      '세부 목표를 적어주세요.',
    ],
  },
  {
    text: [
      "제목을 수정할 수도 있습니다!",
      "테마 색상을 바꿀 수도 있어요.",
    ],
  },
];


export const GoalPage = {
  title: '2023년 목표',
  finish: '완성하기',
}

export const SharePage = {
  description: {
    fist: '이제 목표를 향해 나아가요!',
    second: '커밍 순...',
  },
  buttons: {
    share: '공유하기',
    save: '이미지 저장하기',
    createNewImage: '새로 만들기',
  },
}

export const AccountSettingPage = {
  title: '계정 설정',
  signout: '로그아웃',
  deleteAccount: '회원탈퇴',
}

export const MenuSidebar = {
  signIn: {
    accountSetting: '계정 설정',
    goal: '내 만다라트 보러가기',
  },
  default: {
    signIn: '로그인/회원가입',
  },
  ask: '문의하기',
  aboutDevelopers: '개발자 소개',
}
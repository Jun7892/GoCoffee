
import { CafeInfo, MenuItem } from './types';

export const CAFE_INFO: CafeInfo = {
  name: "GO GOFFEE",
  taglines: [
    "인스타 감성 카페",
    "고급 원두",
    "느낌있는 음악",
    "공부하기 좋은 카페",
    "다양한 메뉴들"
  ],
  location: "인천광역시 미추홀구 인주대로 125-1 1층",
  phone: "010-4528-9802",
  email: "yusin3507@naver.com",
  hours: "매일 10:00 - 22:00",
  rentalInfo: "대관 및 광고 문의는 이메일 또는 전화를 통해 가능합니다. 최소 1주일 전 예약 필수.",
  instagramUrl: "https://www.instagram.com/go_coffee_inha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
};

export const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: "아메리카노", description: "고소하고 진한 풍미의 시그니처 블랙", price: "4.5", image: "", category: 'coffee' },
  { id: 2, name: "카페 라떼", description: "부드러운 우유와 에스프레소의 조화", price: "5.0", image: "", category: 'coffee' },
  { id: 3, name: "바닐라 빈 라떼", description: "수제 바닐라 빈으로 만든 깊은 달콤함", price: "5.5", image: "", category: 'coffee' },
  { id: 4, name: "아인슈페너", description: "쫀득한 수제 크림이 올라간 시그니처", price: "6.0", image: "", category: 'coffee' },
  { id: 5, name: "수제 자몽 에이드", description: "생자몽을 직접 착즙하여 상큼한 맛", price: "6.5", image: "", category: 'special' },
  { id: 6, name: "요거트 스무디", description: "과일이 듬뿍 들어간 건강한 달콤함", price: "6.5", image: "", category: 'special' },
  { id: 7, name: "초코 브라우니", description: "꾸덕한 식감의 진한 초콜릿 디저트", price: "6.0", image: "", category: 'dessert' },
  { id: 8, name: "수제 쿠키", description: "매일 아침 직접 굽는 고소한 쿠키", price: "3.5", image: "", category: 'dessert' },
];

export const IMAGES = {
  hero: "https://gocoffeeimg.netlify.app/main_pic.jpg",
  aboutMain: "https://gocoffeeimg.netlify.app/indoor_pretty.jpg",
  aboutSub: "https://gocoffeeimg.netlify.app/indoor_pretty2.jpg",
  interiorDetail: "https://gocoffeeimg.netlify.app/indoorwall_dayview.jpg",
  menuBoard: "https://gocoffeeimg.netlify.app/price.jpg",
  menuGroup: "https://gocoffeeimg.netlify.app/menu_group.jpg",
  foodShot: "https://gocoffeeimg.netlify.app/main_pic.jpg",
  displayCase: "https://gocoffeeimg.netlify.app/display_case_pretty.jpg"
};

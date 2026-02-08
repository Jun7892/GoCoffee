
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
  rentalInfo: "대관 및 광고 문의는 이메일 또는 전화를 통해 가능합니다. 최소 3일전 예약",
  instagramUrl: "https://www.instagram.com/go_coffee_inha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
};

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  { id: 1, name: "에스프레소", description: "진한 원두의 풍미를 그대로 담은 한 잔", price: "3.5", image: "", category: 'coffee' },
  { id: 2, name: "아메리카노", description: "고소하고 깔끔한 맛의 정석", price: "4.0", image: "", category: 'coffee' },
  { id: 3, name: "카페 라떼", description: "부드러운 우유와 에스프레소의 조화", price: "4.3", image: "", category: 'coffee' },
  { id: 4, name: "바닐라 라떼", description: "천연 바닐라 빈의 깊은 달콤함", price: "4.8", image: "", category: 'coffee' },
  { id: 5, name: "카페 모카", description: "진한 초콜릿과 커피의 완벽한 밸런스", price: "4.6", image: "", category: 'coffee' },
  
  // SPECIAL (Latte, Aide, Blended, Tea)
  { id: 6, name: "초콜릿", description: "부드럽고 진한 초콜릿 라떼", price: "4.5", image: "", category: 'special' },
  { id: 7, name: "오곡 라떼", description: "건강하고 고소한 곡물의 풍미", price: "4.5", image: "", category: 'special' },
  { id: 8, name: "오렌지 에이드", description: "상큼한 오렌지 과즙이 톡톡", price: "5.0", image: "", category: 'special' },
  { id: 10, name: "초코칩 블랜디드", description: "초코칩이 씹히는 달콤 시원한 맛", price: "5.8", image: "", category: 'special' },
  { id: 11, name: "쿠키 블랜디드", description: "바삭한 쿠키가 듬뿍 들어간 블랜디드", price: "5.8", image: "", category: 'special' },
  { id: 12, name: "요거트 스무디", description: "신선한 요거트의 상큼함이 가득", price: "5.5", image: "", category: 'special' },
  { id: 13, name: "얼그레이", description: "우아한 향의 프리미엄 홍차", price: "4.5", image: "", category: 'special' },
  { id: 14, name: "아이스티", description: "시원하고 달콤한 복숭아 향", price: "4.0", image: "", category: 'special' },
  
  // DESSERT
  { id: 15, name: "수제 쿠키", description: "매일 아침 직접 굽는 고소한 쿠키", price: "3.0", image: "", category: 'dessert' },
  { id: 16, name: "허니브래드", description: "달콤한 허니 시럽과 생크림의 조화", price: "6.0", image: "", category: 'dessert' },
  { id: 17, name: "초코 케익", description: "진한 풍미의 꾸덕한 초코 케익", price: "4.7", image: "", category: 'dessert' },
  { id: 18, name: "티라미슈 케익", description: "입안에서 사르르 녹는 부드러움", price: "4.7", image: "", category: 'dessert' },
  { id: 19, name: "치즈 케익", description: "깊고 진한 치즈의 풍미", price: "4.7", image: "", category: 'dessert' },
];

export const IMAGES = {
  hero: "https://gocoffeeimg.netlify.app/main_pic.jpg",
  aboutMain: "https://gocoffeeimg.netlify.app/indoor_pretty.jpg",
  aboutSub: "https://gocoffeeimg.netlify.app/indoor_pretty2.jpg",
  interiorDetail: "https://gocoffeeimg.netlify.app/indoorwall_dayview.jpg",
  menuBoard: "https://gocoffeeimg.netlify.app/price2.jpg",
  menuGroup: "https://gocoffeeimg.netlify.app/menu_group.jpg",
  foodShot: "https://gocoffeeimg.netlify.app/coffee2_cake1_good.jpg",
  displayCase: "https://gocoffeeimg.netlify.app/display_case_pretty.jpg"
};

/*
 * recipe-data.js
 * 모든 레시피 데이터를 여기서 중앙 관리합니다.
 * 새 레시피 추가 시 이 파일에만 데이터를 추가하면 됩니다.
 
 * 필드 설명:
 *  id          : data-recipe-id 와 일치하는 고유 번호 (숫자)
 *  title       : 레시피 제목
 *  author      : 작성자 이름
 *  subtitle    : 레시피 부제목
 *  image       : 대표 이미지 경로
 *  servings    : 인원 (예: "4인분")
 *  time        : 조리 시간 (예: "30분 이내")
 *  level       : 난이도 (예: "초급")
 *  category    : 카테고리 (breadcrumb용)
 *  tags        : 태그 배열
 *  ingredients : 재료 배열 { group, items: [{name, amount}] }
 *  steps       : 조리순서 배열 { title, subtitle, tip, image }
 *  reviews     : 후기 배열 { username, stars, date, text }
 *  questions   : 질문 배열 { username, date, text, answer(없으면 null) }
*/

var RECIPES = {
// 1001
  1001: {
    id: 1001,
    categories: {
      type:       "basic-banchan",
      ingredient: "egg",
      method:     "simmer",
      situation:  ["speed","lunchbox"],
      health:     "intestine"
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 34,
    likes:        "8.7K",
    author_img:   "images_10000_recipes/chef_images/chef_01.jpg",
    title: "메추리알 장조림",
    author: "시크제이맘",
    subtitle: "한입 쏙 들어가는 국민반찬 메추리알 장조림. 간장 베이스의 달콤짭조름한 맛이 밥도둑이에요.",
    image: "images_10000_recipes/recipe_card_img/banchan_01.png",
    servings: "3인분",
    time: "30분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "밑반찬",
    tags: ["#조림", "#도시락 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "깐메추리알", amount: "1kg" },
          { name: "청양고추", amount: "3개" }
        ]
      },
      {
        group: "양념",
        items: [
          { name: "간장", amount: "5숟가락" },
          { name: "설탕", amount: "4숟가락" },
          { name: "매실액", amount: "2숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "깨", amount: "1 꼬집" },
          { name: "물", amount: "3컵" }
        ]
      }
    ],
    steps: [
      {
        title: "깐메추리알 준비",
        subtitle: "깐메추리알은 흐르는 물에 헹궈서 물에 잠시 담궈주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1001_step_01.png"
      },
      {
        title: "양념장 만들기",
        subtitle: "간장, 설탕, 매실액, 다진마늘, 물을 냄비에 넣고 끓여 줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1001_step_02.png"
      },
      {
        title: "조리기",
        subtitle: "양념장을 중불로 끓이다가 삶은 메추리알과 청양고추를 넣고 국물이 자박해질 때까지 조려 줍니다.",
        tip: "청양고추는 마지막 5분에 넣어야 아삭함이 살아요",
        image: "images_10000_recipes/recipe_steps_img/1001_step_03.png"
      },
      {
        title: "마무리",
        subtitle: "불을 끄고 깨 한 꼬집 뿌리면 완성입니다.",
        tip: null,
        image: "images_10000_recipes/recipe_card_img/banchan_01.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 아이들이 밥 한 그릇 뚝딱했어요", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음엔 고추를 더 넣어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "매실액 대신 올리고당 써도 되나요?", answer: "네! 올리고당으로 대체하셔도 됩니다. 양은 동일하게 사용하세요!" },
      { username: "초보주부", date: "1일 전", text: "청양고추 없으면 생략해도 되나요?", answer: null }
    ]
  },

// 1002
  1002: {
    id: 1002,
    categories: {
      type:       "basic-banchan",
      ingredient: ["seafood","vegetable", "flour"],
      method:     "pan",
      situation:  "holiday",
      health:     "stomach"
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 52,
    likes:        "8.2K",
    author_img:   "images_10000_recipes/chef_images/chef_02.jpg",
    title: "크래미 깻잎전",
    author: "조밍키♥",
    subtitle: "향긋한 깻잎향과 색감까지 침샘을 자극하는 맛있는 반찬",
    image: "images_10000_recipes/recipe_card_img/banchan_02.png",
    servings: "2인분",
    time: "20분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "밑반찬",
    tags: ["#부침", "#간식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "깻잎", amount: "6장" },
          { name: "크래미", amount: "4개" }
        ]
      },
      {
        group: "반죽",
        items: [
          { name: "부침가루", amount: "4숟가락" },
          { name: "물", amount: "3숟가락" },
          { name: "달걀", amount: "1개" },
          { name: "소금", amount: "1 꼬집" },
          { name: "식용유", amount: "적당량" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 손질",
        subtitle: "깻잎은 씻어 물기를 제거하고 꼭지를 잘라서 준비해줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1002_step_01.png"
      },
      {
        title: "깻잎으로 크래미를 감싸 말아줍니다.",
        subtitle: null,
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1002_step_02.png"
      },
      {
        title: "반죽 만들기",
        subtitle: "부침가루, 물, 달걀, 소금을 섞어 묽은 반죽을 만들어 줍니다.",
        tip: "반죽이 너무 되면 물을 조금씩 더 추가하세요",
        image: "images_10000_recipes/recipe_steps_img/1002_step_03.png"
      },
      {
        title: "말아둔 깻잎을 부침가루에 가볍게 굴려요.",
        subtitle: null,
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1002_step_04.png"
      },
      {
        title: "전 부치기",
        subtitle: "깻잎에 크래미를 올리고 반죽을 묻혀 기름 두른 팬에 앞뒤로 노릇하게 구워 줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1002_step_05.png"
      }
    ],
    reviews: [
      { username: "맛집탐방", stars: 5, date: "5일 전", text: "깻잎 향이 정말 좋아요! 막걸리 안주로도 최고입니다.", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음엔 깻잎을 더 넣어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }

    ],
    questions: []
  },

  //  1003
  1003: {
    id: 1003,
    categories: {
      type:       "basic-banchan",
      ingredient: ["vegetable","egg"],
      method:     "pan",
      situation:  ["speed","lunchbox"],
      health:     "stomach"
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       5.0,
    review_count: 55,
    likes:        "7.9K",
    author_img:   "images_10000_recipes/chef_images/chef_03.jpg",
    title: "쪽파 계란말이",
    author: "김진옥요리가좋다",
    subtitle: "쪽파를 송송 썰어 색감이 예쁜 계란말이",
    image: "images_10000_recipes/recipe_card_img/banchan_03.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "반찬",
    subcategory: "밑반찬",
    tags: ["#계란요리", "#도시락"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "달걀", amount: "4개" },
          { name: "쪽파", amount: "10줄기" }
        ]
      },
      {
        group: "부재료",
        items: [
          { name: "참치액", amount: "1/2 티스푼" },
          { name: "미림", amount: "1/2 티스푼" },
          { name: "식용유", amount: "적당량" }
        ]
      }
    ],
    steps: [
      {
        title: "달걀물 만들기",
        subtitle: "달걀 4개를 풀어 줍니다.",
        tip: "거품기로 풀어주면 편해요",
        image: "images_10000_recipes/recipe_steps_img/1003_step_01.png"
      },
      {
        title: "달걀물 만들기",
        subtitle: "잘게 썬 쪽파와 소금을 넣어 고루 섞어 줍니다.",
        tip: "체에 걸러주면 알끈이 제거돼 더 부드러워집니다.",
        image: "images_10000_recipes/recipe_steps_img/1003_step_02.png"
      },
      {
        title: "계란말이",
        subtitle: "약불로 달군 팬에 기름을 얇게 두르고, 달걀물을 조금씩 부어가며 돌돌 말아 줍니다.",
        tip: "약불 유지가 핵심! 강불이면 겉이 타요. 너무 많이 익기전에 말아야 잘 붙어요.",
        image: "images_10000_recipes/recipe_steps_img/1003_step_03.png"
      },
      {
        title: "성형 및 완성",
        subtitle: "김발이나 랩으로 감싸 모양을 잡고 식힌 뒤 칼로 잘라요.",
        tip: "계란말이 중간 중간 포크로 콕콕 찔러주면 내용물이 흐르지않고 잘 익어요",
        image: "images_10000_recipes/recipe_steps_img/1003_step_04.png"
      }
    ],
    reviews: [
      { username: "도시락퀸", stars: 5, date: "3일 전", text: "도시락에 넣으니 아이가 너무 좋아해요!" },
      { username: "계란러버", stars: 5, date: "2주 전", text: "쪽파 덕분에 향이 살아있어요 최고입니다" }
    ],
    questions: [
      { username: "초보맘", date: "1일 전", text: "아이 이유식에도 넣어도 될까요?", answer: null }
    ]
  },
  1004: {
    id: 1004,
    categories: {
      type:       "main-banchan",
      ingredient: "vegetable",
      method:     "seasoned",
      situation:  ["speed","lunchbox"],
      health:     "blood-sugar"
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       5.0,
    review_count: 550,
    likes:        "12K",
    author_img:   "images_10000_recipes/chef_images/chef_04.png",
    title: "봄동 겉절이",
    author: "뿅림이",
    subtitle: "아삭하고 밥 비벼먹기 좋은 봄동 겉절이",
    image: "images_10000_recipes/recipe_card_img/banchan_04.png",
    servings: "2인분",
    time: "15분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "메인반찬",
    tags: ["#조림", "#도시락 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "봄동", amount: "1다발" }
          
        ]
      },
      {
        group: "양념",
        items: [
          { name: "고춧가루", amount: "3숟가락" },
          { name: "매실액", amount: "2숟가락" },
          { name: "멸치액젓", amount: "2숟가락" },
          { name: "다진마늘", amount: "1/2숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "참기름", amount: "2숟가락" },
          { name: "깨", amount: "듬뿍" },
          { name: "소금", amount: "1꼬집" }
        ]
      }
    ],
    steps: [
      {
        title: "봄동 준비",
        subtitle: "봄동은 잎을 하나씩 떼어 흐르는 물에 여러번 씻어 주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1004_step_01.png"
      },
      {
        title: "봄동 자르기",
        subtitle: "뿌리쪽은 짤라내고 잎 사이즈에 따라 3등분에서 6등분으로 잘라주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1004_step_02.png"
      },
      {
        title: "양념 만들기",
        subtitle: "다진마늘 ½T, 멸치액젓 2T, 매실액2T, 참기름 2T, 설탕 1수저, 고춧가루3T, 통깨 듬뿍, 소금 살짝 넣어주세요.	",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1004_step_03.png"
      },
      {
        title: "버무리기",
        subtitle: "조물조물 버무려 주세요.",
        tip: "겉절이할때 소금에 절이지 않고 바로 무치면 아삭한 식감을 살릴 수 있어요:)",
        image: "images_10000_recipes/recipe_steps_img/1004_step_04.png"
      },
      {
        title: "완성",
        subtitle: "아삭아삭 봄동 겉절이 완성입니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1004_step_05.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "바로 먹기에 딱좋네요.전 내일 먹을꺼라 소금조금 더넣구 고춧가루도 조금더넣었어요^^덕분에 맛있게 무쳤네요", image: "images_10000_recipes/recipe_review_img/1004_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "와 너무 맛있어요! 소금 대신 간장으로 간을 맞췄는데 괜찮았습니다. 레시피 감사해요!", image: "images_10000_recipes/recipe_review_img/1004_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "이 양념그대로 봄동대신 상추넣어서 상추재래기로 먹어도 괜찮을까요?", answer: "네 양념의 양을 상추에 맞게 조절해 주시면 좋을것 같아요.😊" },
      { username: "초보주부", date: "1일 전", text: "이 레시피가 맛있어서 자주 해먹다보니 매실액을 다썼는데 매실액 대신 대체할만한게 머가있을까요? 요리당(올리고당)? 아님 설탕?", answer: null }
    ]
  },
  1005: {
    id: 1005,
    categories: {
      type:       "basic-banchan",
      ingredient: "vegetable",
      method:     "seasoned",
      situation:  ["speed", "diet"],
      health:     "liver"
    },
    badge:        null,
    badge_class:  "",
    rating:       3.7,
    review_count: 237,
    likes:        "7K",
    author_img:   "images_10000_recipes/chef_images/chef_05.jpg",
    title: "고추쌈장무침",
    author: "뽀유TV",
    subtitle: "아삭아삭한 식감이 참 좋은 고추쌈장무침",
    image: "images_10000_recipes/recipe_card_img/banchan_05.png",
    servings: "2인분",
    time: "5분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "밑반찬",
    tags: ["#조림", "#도시락 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "오이고추", amount: "6~7개" }
          
        ]
      },
      {
        group: "양념",
        items: [
          { name: "쌈장", amount: "1숟가락" },
          { name: "고춧가루", amount: "1/2숟가락" },
          { name: "올리고당", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "다진마늘", amount: "1/2숟가락" },
          { name: "깨", amount: "1숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "오이고추 준비",
        subtitle: "먼저 오이고추를 깨끗이 씻어 물기를 제거합니다. 매콤한것 좋아하시면 청양고추도 몇개 섞어주셔도 돼요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1005_step_01.png"
      },
      {
        title: "오이고추 자르기",
        subtitle: "깨끗이 씻은 고추는 먹기 좋은 사이즈로 썰어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1005_step_02.png"
      },
      {
        title: "양념 만들기",
        subtitle: "쌈장 1스푼에 고춧가루1/2,깨1,올리고당1,참기름1,다진마늘1/2를 넣고 잘 섞어줘요.",
        tip: "성인숟가락 기준 모든 양념은 깍아서",
        image: "images_10000_recipes/recipe_steps_img/1005_step_03.png"
      },
      {
        title: "버무리기",
        subtitle: "썰어놓은 고추에 양념을 넣고 조물조물 잘 섞어주시면 끝입니다^0^",
        tip: "양념은 한번에 다 넣지 마시고 조금씩 넣어가며 기호에 맞게 간을 맞쳐 주세요",
        image: "images_10000_recipes/recipe_steps_img/1005_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "뚝딱 만들어주니 아내와 아이들이 맛있다고 하네요. 감사합니다. 간단한 요리 레시피 부탁드립니다!", image: "images_10000_recipes/recipe_review_img/1005_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "5분만에 밥도둑 완성이네요 ㅎㅎㅎ 저희집 쌈장이 된장 간장 베이스가 강해서 고춧가루 좀 더 넣었더니 아주 딱이에요!!", image: "images_10000_recipes/recipe_review_img/1005_review_02.png" }
    ],
    questions: [ ]
  },
  1006: {
    id: 1006,
    categories: {
      type:       "basic-banchan",
      ingredient: ["seafood","flour"],
      method:     "stir",
      situation:  ["speed","lunchbox"],
      health:     "liver"
    },
    badge:        null,
    badge_class:  "",
    rating:       3.5,
    review_count: 28,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_06.png",
    title: "어묵볶음",
    author: "엘린84",
    subtitle: "짭짤한 밑반찬으로 딱인 간장 어묵볶음",
    image: "images_10000_recipes/recipe_card_img/banchan_06.png",
    servings: "3인분",
    time: "10분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "밑반찬",
    tags: ["#조림", "#도시락 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "어묵", amount: "4장" },
          { name: "양파", amount: "반 개" },
          { name: "파프리카", amount: "1/3개" },
          { name: "대파", amount: "1/2줄기" },
          
        ]
      },
      {
        group: "양념",
        items: [
          { name: "진간장", amount: "2.5숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "올리고당", amount: "1.5숟가락" },
          { name: "깨", amount: "1꼬집" },
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "일반적인 네모난 어묵 4장이랑 양파반개,파프리카 1/3개를 원하시는 모양으로 먹기좋게 썰어 주세용^~^ 사진엔 없지만 대파 반줄기도 같이 썰어 주셔요~~",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1006_step_01.png"
      },
      {
        title: "어묵볶기",
        subtitle: "10초정도만 볶으시다가 다진마늘 한스푼이랑 준비한 파프라카랑 양파 를 넣고 볶아 주셔용^~^",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1006_step_02.png"
      },
      {
        title: "어묵볶기",
        subtitle: "다진마늘 ½T, 멸치액젓 2T, 매실액2T, 참기름 2T, 설탕 1수저, 고춧가루3T, 통깨 듬뿍, 소금 살짝 넣어주세요.	",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1006_step_03.png"
      },
      {
        title: "볶아주기",
        subtitle: "그다음 진간장2.5T,설탕1T를 넣어 볶다 양파가 살짝 투명해지면 대파 반줄기 넣어주고 잔열로 볶아주세요.	",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1006_step_04.png"
      },
      {
        title: "완성",
        subtitle: "마지막으로 올리고당1.5T 넣고 볶아 깨소금 소솔 뿌려 주심 끝이에용^~^",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1006_step_05.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "바로 먹기에 딱좋네요.덕분에 맛있게 먹었어요!", image: "images_10000_recipes/recipe_review_img/1006_review_01.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "1T면 한숟가락이예요?", answer: "네 밥수저 기준입니다.😊" }
    ]
  },
  1007: {
    id: 1007,
    categories: {
      type:       "main-banchan",
      ingredient: "vegetable",
      method:     "seasoned",
      situation:  ["speed","diet"],
      health:     "blood-sugar"
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       3.5,
    review_count: 122,
    likes:        "5.1K",
    author_img:   "images_10000_recipes/chef_images/chef_07.png",
    title: "세발나물 겉절이",
    author: "살찌우는엄마",
    subtitle: "봄철 대표 세발나물! 집나간 입맛이 돌아오는 맛",
    image: "images_10000_recipes/recipe_card_img/banchan_07.png",
    servings: "4인분",
    time: "15분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "메인반찬",
    tags: ["#조림", "#도시락 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "세발나물", amount: "200g" },          
          { name: "양파", amount: "20g" },          
          { name: "당근", amount: "10g" },          
        ]
      },
      {
        group: "양념",
        items: [
          { name: "간장", amount: "1/3작은숟가락" },
          { name: "간마늘", amount: "1/2숟가락" },
          { name: "고춧가루", amount: "2숟가락" },
          { name: "참치액젓", amount: "1작은숟가락" },
          { name: "식초", amount: "3숟가락" },
          { name: "매실액", amount: "1.5 작은숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "깨", amount: "1숟가락" },
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "흐르는 물에 가볍게 2차례 정도 세척해 주고 물에 식초 1큰술을 넣어 식초물을 만들어 주세요. 1분 후 흐르는 물로 2차례정도 헹궈 식초향을 제거합니다. ",
        tip: "이 상태로 1분간 놔두면 잔여 농약이 제거됩니다.",
        image: "images_10000_recipes/recipe_steps_img/1007_step_01.png"
      },
      {
        title: "양념 만들기",
        subtitle: "매실액 1/2작은술, 참치액젓 1작은술, 간장 1/3작은술, 고춧가루 2큰술, 식초 2큰술, 물 1큰술을 넣어 양념을 섞어주세요",
        tip: "약 5분간 양념을 불려주세요. 더 부드러운 양념장이 됩니다.",
        image: "images_10000_recipes/recipe_steps_img/1007_step_02.png"
      },
      {
        title: "채소 손질",
        subtitle: "양파 20g, 당근도 채썰어 주세요. 손질한 채소를 볼에 담은 후 양념장을 넣어 버무려 줍니다.",
        tip: "손에 힘을 뺀 상태로 털어주듯 무쳐야 나물 식감이 살아있어요",
        image: "images_10000_recipes/recipe_steps_img/1007_step_03.png"
      },
      {
        title: "버무리기",
        subtitle: " 참기름 1큰술과 깨 1큰술을 넣어 마지막으로 버무려줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1007_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "바로 먹기에 딱좋네요.덕분에 맛있게 먹었어요!", image: "" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "1T면 한숟가락이예요?", answer: "네 밥수저 기준입니다.😊" }
    ]
  },
  1008: {
    id: 1008,
    categories: {
      type:       "main-banchan",
      ingredient: ["beef","vegetable"],
      method:     ["stir","pickle"],
      situation:  ["special", "pregnancy","diet"],
      health:     ["anti-cancer","liver"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 94,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_08.png",
    title: "소고기 오이볶음",
    author: "밥차리라",
    subtitle: "아이 밑반찬이나 밥에 비벼먹어도 좋은",
    image: "images_10000_recipes/recipe_card_img/banchan_08.png",
    servings: "2인분",
    time: "60분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "메인반찬",
    tags: ["#아삭아삭 단짠", "#도시락 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "오이", amount: "1개" },          
          { name: "소고기 다짐육", amount: "100g" },          
          { name: "다진 파", amount: "1숟가락" },          
          { name: "다진 마늘", amount: "1/2숟가락" },          
        ]
      },
      {
        group: "양념",
        items: [
          { name: "간장", amount: "1숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "생강술", amount: "1숟가락" },
          { name: "배즙", amount: "1작은숟가락" },
          { name: "후춧가루", amount: "적당량" }
          
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "소고기는 미리 키친타올에 올려 핏물을 제거해주세요.",
        tip: "오이는 굵은 소금 반줌 정도 쥐고 문지른 후 물에 세척하기",
        image: "images_10000_recipes/recipe_steps_img/1008_step_01.png"
      },
      {
        title: "소고기 재워놓기",
        subtitle: "고기 양념장 재료 모두 섞은 후 소고기 재워놓기",
        tip: "약 5분간 양념을 불려주세요. 더 부드러운 양념장이 됩니다.",
        image: "images_10000_recipes/recipe_steps_img/1008_step_02.png"
      },
      {
        title: "채소 손질",
        subtitle: "세척한 오이 동그란 모양대로 최대한 얇게 썰고 소금 1/3큰술 넣어 40분정도 절이기",
        tip: "40분 이상 절인 오이를 보면 흐물흐물할거에요. 물에 2~3정도 헹궈 물기 꽉 짜서 준비",
        image: "images_10000_recipes/recipe_steps_img/1008_step_03.png"
      },
      {
        title: "볶기",
        subtitle: " 팬에 기름 조금 두른 후 재운 소고기, 다진마늘, 다진 파 넣어 센불에서 볶기",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1008_step_04.png"
      },
      {
        title: "볶기",
        subtitle: "고기가 완전히 익고 국물이 없어지면 물기 제거한 오이 넣어 볶기",
        tip: "참기름 넣기 전 맛을 보고 단맛이 부족하면 설탕 반큰술정도 추가, 싱거우면 소금 추가해주세요. 전 설탕만 반큰술 추가하니 딱 맞더라고요.",
        image: "images_10000_recipes/recipe_steps_img/1008_step_05.png"
      },
      {
        title: "완성",
        subtitle: "접시에 이쁘게 담고 통깨 솔솔 뿌려주면 소고기오이볶음 완성~!",
        tip: "참기름 넣기 전 맛을 보고 단맛이 부족하면 설탕 반큰술정도 추가, 싱거우면 소금 추가해주세요. 전 설탕만 반큰술 추가하니 딱 맞더라고요.",
        image: "images_10000_recipes/recipe_card_img/banchan_08.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "처음해 보는데 맛있게 잘됐어요 우리 손자, 손녀가 잘 먹었으면 바랍입니다 레시피 감사합니다  ", image: "images_10000_recipes/recipe_review_img/1008_review_01.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "혹시 생강술.배즙이 없으면 대신할꺼 혹시 있나요?", answer: "생강술, 배즙 대신 소주나 청주, 배즙은 맛술로 대체하면 돼요~" }
    ]
  },
  1009: {
    id: 1009,
    categories: {
      type:       "basic-banchan",
      ingredient: ["seafood", "vegetable"],
      method:     ["stir","blanch"],
      situation:  "diet",
      health:     ["anti-cancer","intestine","blood-sugar"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 142,
    likes:        "3.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "브로콜리 새우볶음",
    author: "밥차리라",
    subtitle: "몸에 좋은 브로콜리와 파프리카를 새우와 함께",
    image: "images_10000_recipes/recipe_card_img/banchan_09.png",
    servings: "3인분",
    time: "15분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "메인반찬",
    tags: ["#건강식", "#아이 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "브로콜리", amount: "2송이" },          
          { name: "냉동 새우", amount: "취향껏" },          
          { name: "빨강 파프리카", amount: "1/3개" },          
          { name: "노랑 파프리카", amount: "1/3개" },          
          { name: "다진 마늘", amount: "1숟가락" },          
        ]
      },
      {
        group: "양념",
        items: [
          { name: "다진 마늘", amount: "1숟가락" },          
          { name: "맛술", amount: "1숟가락" },
          { name: "소금", amount: "0.5숟가락" },
          { name: "굴소스", amount: "1숟가락" },
          { name: "참기름", amount: "약간" },
          { name: "후춧가루", amount: "적당량" }
          
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "브로콜리는 끓는물에 소금을 넣고 1분정도 데쳐낸 후 찬물에 헹궈 체에 받쳐 물기를 빼주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1009_step_01.png"
      },
      {
        title: "재료 준비",
        subtitle: "파프리카는 먹기좋은 크기로 썰어주세요. 파프리카는 생략하셔도 됩니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1009_step_02.png"
      },
      {
        title: "냉동새우 준비",
        subtitle: "냉동 새우는 흐르는 물에 씻어 주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1009_step_03.png"
      },
      {
        title: "볶기",
        subtitle: " 팬에 기름 두르고 달군 후 먼저 다진마늘 1t 넣고 볶아주세요. 마늘을 편썰어 노릇하게 볶으셔도 됩니다~ 그 다음 새우 넣고 맛술 1t, 후추 톡톡 뿌려 볶아주세요. 센불에서~",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1009_step_04.png"
      },
      {
        title: "볶기",
        subtitle: "브로콜리와 파프리카 넣고 굴소스 1t 넣어 휘리릭 재빨리 볶아주세요~ ",
        tip: "부족한 간은 소금으로 해 주시고, 참기름, 통깨 뿌려 마무리 하면 끝",
        image: "images_10000_recipes/recipe_steps_img/1009_step_05.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "마침 냉동실에 새우랑 데친 브로콜리가 있어서 남편 점심 도시락 반찬으로 만들었는데 맛있네요~^^", image: "images_10000_recipes/recipe_review_img/1009_review_01.png" }
    ],
    questions: [    ]
  },
  1010: {
    id: 1010,
    categories: {
      type:       "basic-banchan",
      ingredient: "vegetable",
      method:     "simmer",
      situation:  ["speed","lunchbox","diet"],
      health:     ["anti-cancer","intestine","blood-sugar"]
    },
    badge:        "NEW",
    badge_class:  "",
    rating:       4.8,
    review_count: 38,
    likes:        "4.8K",
    author_img:   "images_10000_recipes/chef_images/chef_10.png",
    title: "애호박구이 간장조림",
    author: "꼬순내집밥",
    subtitle: "부드럽고 들큰짭조름한 맛",
    image: "images_10000_recipes/recipe_card_img/banchan_10.png",
    servings: "2인분",
    time: "60분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "밑반찬",
    tags: ["#간단", "#애호박구이"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "애호박", amount: "1/2개" },          
          { name: "대파", amount: "1/3개" },          
                
        ]
      },
      {
        group: "양념",
        items: [
          { name: "간장", amount: "2숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "물", amount: "1숟가락" },
          { name: "들기름", amount: "1숟가락" },
          { name: "통깨", amount: "적당량" }
          
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "파는 다져주시고 애호박은 0.5센티 정도 동글게 썰어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1010_step_01.png"
      },
      {
        title: "애호박 굽기",
        subtitle: "달군 팬에 기름을 두르고 애호박을 넣어줍니다. 불은 중불로 줄여줍니다.",
        tip: "약 5분간 양념을 불려주세요. 더 부드러운 양념장이 됩니다.",
        image: "images_10000_recipes/recipe_steps_img/1010_step_02.png"
      },
      {
        title: "양념 만들기",
        subtitle: "굽는 동안 양념을 해줍니다. 간장, 파, 마늘, 들기름, 물 한 큰 술을 섞어줍니다",
        tip: "양념에 설탕을 한티 스푼 넣어 주셔도 좋아요",
        image: "images_10000_recipes/recipe_steps_img/1010_step_03.png"
      },
      {
        title: "양념 붓고 굽기",
        subtitle: "양념 잘 묻게 골고루 묻혀 주세요. 불은 약불로 줄여주고 한 번씩 뒤집어 줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1010_step_04.png"
      },
      {
        title: "완성",
        subtitle: "접시에 이쁘게 담고 통깨 솔솔 뿌려주면 맛있는 애호박 간장구이 완성입니다.",
        tip: null,
        image: "images_10000_recipes/recipe_card_img/banchan_10.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "처음해 보는데 맛있게 잘됐어요 우리 손자, 손녀가 잘 먹었으면 바랍입니다 레시피 감사합니다  ", image: "images_10000_recipes/recipe_review_img/1008_review_01.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "혹시 생강술.배즙이 없으면 대신할꺼 혹시 있나요?", answer: "생강술, 배즙 대신 소주나 청주, 배즙은 맛술로 대체하면 돼요~" }
    ]
  },
  1011: {
    id: 1011,
    categories: {
      type:       "basic-banchan",
      ingredient: "grain",
      method:     "simmer",
      situation:  ["speed","lunchbox","diet"],
      health:     ["anti-cancer","intestine","blood-sugar"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 112,
    likes:        "3.1K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "간장 두부조림",
    author: "밥차리라",
    subtitle: "초간단 쉬운 간장 두부조림",
    image: "images_10000_recipes/recipe_card_img/banchan_11.png",
    servings: "1인분",
    time: "10분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "밑반찬",
    tags: ["#간장조림", "#아이 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "두부", amount: "1/2모" },          
                
        ]
      },
      {
        group: "양념",
        items: [
          { name: "간장", amount: "1숟가락" },
          { name: "굴소스", amount: "1작은숟가락" },
          { name: "올리고당", amount: "1숟가락" },
          { name: "카놀라유", amount: "조금" }
          
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "두부 먹기 좋은 크기로 썰어 키친타올로 물기를 제거해 주세요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1011_step_01.png"
      },
      {
        title: "두부 굽기",
        subtitle: "팬에 기름을 두르고 앞 뒤 노릇노릇하게 구워준 후",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1011_step_02.png"
      },
      {
        title: "양념 만들기",
        subtitle: "위 양념 간장,굴소스,올리고당,물 1 큰 술 넣고 고루 슥슥 저어가며",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1011_step_03.png"
      },
      {
        title: "양념 붓고 굽기",
        subtitle: "두부에 양념이 베이도록 뒤집어 가며 조려줍니다",
        tip: "불은 약불로 해주세요",
        image: "images_10000_recipes/recipe_steps_img/1011_step_04.png"
      },
      {
        title: "완성",
        subtitle: "접시에 이쁘게 담고 통깨 솔솔 뿌려주면 맛있는 간장두부조림 완성입니다.",
        tip: null,
        image: "images_10000_recipes/recipe_card_img/banchan_11.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "처음해 보는데 맛있게 잘됐어요 우리 손자, 손녀가 잘 먹었으면 바랍입니다 레시피 감사합니다  ", image: "images_10000_recipes/recipe_review_img/1008_review_01.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "혹시 생강술.배즙이 없으면 대신할꺼 혹시 있나요?", answer: "생강술, 배즙 대신 소주나 청주, 배즙은 맛술로 대체하면 돼요~" }
    ]
  },
  1012: {
    id: 1012,
    categories: {
      type:       "main-banchan",
      ingredient: ["pork","vegetable"],
      method:     ["stir","grill"],
      situation:  ["speed","lunchbox","late-night"],
      health:     "intestine"
    },
    badge:        null,
    badge_class:  "",
    rating:       5.0,
    review_count: 82,
    likes:        "5.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "팽이버섯 베이컨말이",
    author: "밥차리라",
    subtitle: "초간단 팽이버섯 베이컨말이",
    image: "images_10000_recipes/recipe_card_img/banchan_12.png",
    servings: "2인분",
    time: "10분 이내",
    level: "초급",
    category: "반찬",
    subcategory: "메인반찬",
    tags: ["#초간단", "#아이 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "베이컨", amount: "180g" },
          { name: "팽이버섯", amount: "2봉지" },
                
        ]
      },
      {
        group: "부재료",
        items: [
          { name: "올리브유", amount: "조금" }
          
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "팽이버섯 밑 동을 잘라 준비합니다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1012_step_01.png"
      },
      {
        title: "베이컨 말기",
        subtitle: "베이컨 위에 원하시는 양만큼 팽이버섯을 올리고 도르르 말아 준비합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1012_step_02.png"
      },
      {
        title: "굽기",
        subtitle: "달군 약한 불에서 오일을 조금 두르고 베이컨이 말린 끝 부분 쪽으로 먼저 구워준다",
        tip: "약불로 구워주세요",
        image: "images_10000_recipes/recipe_steps_img/1012_step_03.png"
      },
      {
        title: "완성",
        subtitle: "뒤집어 가면서 노릇 노릇 구워 주시면 완성입니다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1012_step_04.png"
      },
      
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "처음해 보는데 맛있게 잘됐어요 우리 손자, 손녀가 잘 먹었으면 바랍입니다 레시피 감사합니다  ", image: "images_10000_recipes/recipe_review_img/1008_review_01.png" }
    ],
    questions: [
    ]
  },
// 1013
  1013: {
    id: 1013,
    categories: {
      type:       "guk",
      ingredient: "vegetable",
      method:     "boil",
      situation:  ["speed","lunchbox","hangover"],
      health:     ["stomach","intestine","liver"]
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 34,
    likes:        "8.7K",
    author_img:   "images_10000_recipes/chef_images/chef_01.jpg",
    title: "콩나물국",
    author: "시크제이맘",
    subtitle: "매운맛을 달래줄 수 있는 맑은 콩나물국",
    image: "images_10000_recipes/recipe_card_img/guk_01.png",
    servings: "4인분",
    time: "15분 이내",
    level: "중급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#맑은국", "#해장국"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "콩나물", amount: "200g" },
          { name: "멸치육수", amount: "3컵" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "국간장", amount: "1숟가락" },
          { name: "다진마늘", amount: "0.5숟가락" },
          { name: "소금", amount: "약간" },
          { name: "대파", amount: "1/4대" }
        ]
      }
    ],
    steps: [
      {
        title: "콩나물 손질",
        subtitle: "콩나물은 꼬리를 다듬고 흐르는 물에 깨끗이 씻어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1013_step_01.png"
      },
            {
        title: "육수 끓이기",
        subtitle: "냄비에 멸치육수를 넣고 끓어오르면 콩나물을 넣어줍니다.",
        tip: "뚜껑을 열지 않고 끓여야 콩나물 비린내가 나지 않아요",
        image:"images_10000_recipes/recipe_steps_img/1013_step_02.png"
      },
            {
        title: "간 맞추기",
        subtitle: "국간장, 다진마늘을 넣고 소금으로 간을 맞춘 뒤 대파를 넣어 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1013_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1014
  1014: {
    id: 1014,
    categories: {
      type:       "guk",
      ingredient: ["seafood","vegetable"],
      method:     ["boil","blanch"],
      situation:  ["baby","pregnancy"],
      health:     ["stomach","intestine","liver","anti-caner"]
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 52,
    likes:        "8.2K",
    author_img:   "images_10000_recipes/chef_images/chef_02.jpg",
    title: "건새우 시금치 된장국",
    author: "조밍키♥",
    subtitle: "시금치와 건새우, 두부를 넣고 끓인 건새우 시금치국",
    image: "images_10000_recipes/recipe_card_img/guk_02.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#향긋", "#도시락 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "시금치", amount: "100g" },
          { name: "건새우", amount: "20g" },
          { name: "두부", amount: "1/4모" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "된장", amount: "1.5숟가락" },
          { name: "다진마늘", amount: "0.5숟가락" },
          { name: "멸치육수", amount: "3컵" },
          { name: "대파", amount: "1/4대" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "시금치는 깨끗이 씻고 두부는 먹기 좋게 깍둑 썰어줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1014_step_01.png"
      },
            {
        title: "육수에 된장 풀기",
        subtitle: "끓는 멸치육수에 된장을 풀고 건새우를 넣어 끓여줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1014_step_02.png"
      },
            {
        title: "재료 넣기",
        subtitle: "두부와 다진마늘을 넣고 한소끔 끓인 뒤 시금치와 대파를 넣어 완성합니다.",
        tip: "시금치는 마지막에 넣어야 색이 살아요",
        image:  "images_10000_recipes/recipe_steps_img/1014_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1015
  1015: {
    id: 1015,
    categories: {
      type:       "jjigae",
      ingredient: ["vegetable","pork","grain"],
      method:     "boil",
      situation:  ["hangover","late-night"],
      health:     ""
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       5.0,
    review_count: 55,
    likes:        "7.9K",
    author_img:   "images_10000_recipes/chef_images/chef_03.jpg",
    title: "애호박 돼지고기찌개",
    author: "김진옥요리가좋다",
    subtitle: "휴가지에서 맛있게 즐길 수 있는 애호박 돼지고기찌개",
    image: "images_10000_recipes/recipe_card_img/guk_03.png",
    servings: "3인분",
    time: "10분 이내",
    level: "초급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#간편", "#도시락 반찬"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "애호박", amount: "1/2개" },
          { name: "돼지고기(앞다리)", amount: "150g" },
          { name: "두부", amount: "1/4모" },
          { name: "느타리버섯", amount: "50g" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고추장", amount: "1숟가락" },
          { name: "고춧가루", amount: "1숟가락" },
          { name: "된장", amount: "0.5숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "국간장", amount: "1숟가락" },
          { name: "멸치육수", amount: "3컵" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 손질",
        subtitle: "돼지고기는 한입 크기로, 애호박과 두부는 먹기 좋게 썰어줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1015_step_01.png"
      },
            {
        title: "볶기",
        subtitle: "냄비에 돼지고기와 고추장, 고춧가루를 넣고 볶아줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1015_step_02.png"
      },
            {
        title: "육수 넣고 끓이기",
        subtitle: "멸치육수를 붓고 끓어오르면 애호박, 두부, 버섯, 된장, 다진마늘을 넣고 끓여줍니다.",
        tip: "국간장으로 간을 맞춰주세요",
        image:  "images_10000_recipes/recipe_steps_img/1015_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1016
  1016: {
    id: 1016,
    categories: {
      type:       "jjigae",
      ingredient: ["seafood","grain","vegetable"],
      method:     "boil",
      situation:  ["special","hangover"],
      health:     ""
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       5.0,
    review_count: 550,
    likes:        "12K",
    author_img:   "images_10000_recipes/chef_images/chef_04.png",
    title: "새우젓 두부찌개",
    author: "뿅림이",
    subtitle: "칼칼하고 뜨끈한 것이 요즘같은 날씨에 딱 맞는 찌개!",
    image: "images_10000_recipes/recipe_card_img/guk_04.png",
    servings: "2인분",
    time: "10분 이내",
    level: "초급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#매콤 칼칼", "#초간단"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "두부", amount: "1/2모" },
          { name: "애호박", amount: "1/3개" },
          { name: "양파", amount: "1/4개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "새우젓", amount: "1숟가락" },
          { name: "고춧가루", amount: "1숟가락" },
          { name: "다진마늘", amount: "0.5숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "멸치육수", amount: "2.5컵" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 썰기",
        subtitle: "두부는 2cm 두께로, 애호박과 양파는 먹기 좋게 썰어줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1016_step_01.png"
      },
            {
        title: "끓이기",
        subtitle: "멸치육수에 새우젓, 고춧가루, 다진마늘을 넣고 끓이다가 두부와 채소를 넣어줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1016_step_02.png"
      },
            {
        title: "마무리",
        subtitle: "한소끔 더 끓인 뒤 참기름을 둘러 완성합니다.",
        tip: "새우젓은 국물 간을 하기 전에 먼저 넣어야 감칠맛이 살아요",
        image:  "images_10000_recipes/recipe_steps_img/1016_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1017
  1017: {
    id: 1017,
    categories: {
      type:       ["jjigae","noodle"],
      ingredient: ["pork","vegetable","grain"],
      method:     "boil",
      situation:  ["special","hangover","late-night"],
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.7,
    review_count: 237,
    likes:        "7K",
    author_img:   "images_10000_recipes/chef_images/chef_05.jpg",
    title: "얼큰 부대찌개",
    author: "뽀유TV",
    subtitle: "햄, 야채 등 남은 재료를 넣고 김치와 김칫국물을 넣어 얼큰하고 시원한 국물 맛",
    image: "images_10000_recipes/recipe_card_img/guk_05.png",
    servings: "3인분",
    time: "5분 이내",
    level: "초급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#얼큰시원", "#부대찌개"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "스팸", amount: "1/2캔" },
          { name: "소시지", amount: "3개" },
          { name: "김치", amount: "200g" },
          { name: "두부", amount: "1/4모" },
          { name: "라면사리", amount: "1개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고추장", amount: "1숟가락" },
          { name: "고춧가루", amount: "1숟가락" },
          { name: "김칫국물", amount: "3숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "물", amount: "3컵" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "스팸과 소시지는 먹기 좋게 썰고, 김치는 2cm 크기로 썰어줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1017_step_01.png"
      },
            {
        title: "육수 끓이기",
        subtitle: "냄비에 물, 김칫국물, 고추장, 고춧가루, 다진마늘을 넣고 끓여줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1017_step_02.png"
      },
            {
        title: "재료 넣기",
        subtitle: "스팸, 소시지, 김치, 두부를 넣고 끓이다가 마지막에 라면사리를 넣어 완성합니다.",
        tip: "라면사리는 거의 다 끓었을 때 넣어야 퍼지지 않아요",
        image:  "images_10000_recipes/recipe_steps_img/1017_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1018
  1018: {
    id: 1018,
    categories: {
      type:       "guk",
      ingredient: "seafood",
      method:     "boil",
      situation:  ["speed","hangover"],
      health:     ["anti-cancer","liver","stomach","intestine","blood-sugar"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.5,
    review_count: 28,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_06.png",
    title: "바지락 미역국",
    author: "엘린84",
    subtitle: "바지락을 넣고 끓인 국물이 개운한 바지락 미역국을 소개합니다",
    image: "images_10000_recipes/recipe_card_img/guk_06.png",
    servings: "2인분",
    time: "10분 이내",
    level: "초급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#간편", "#깔끔 개운"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "바지락", amount: "200g" },
          { name: "미역(불린 것)", amount: "100g" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "참기름", amount: "1숟가락" },
          { name: "국간장", amount: "1숟가락" },
          { name: "다진마늘", amount: "0.5숟가락" },
          { name: "소금", amount: "약간" },
          { name: "물", amount: "4컵" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 손질",
        subtitle: "바지락은 해감하고 불린 미역은 먹기 좋게 잘라줍니다.",
        tip: "바지락은 소금물에 30분 해감해주세요",
        image:  "images_10000_recipes/recipe_steps_img/1018_step_01.png"
      },
            {
        title: "참기름에 볶기",
        subtitle: "냄비에 참기름을 두르고 미역을 먼저 볶다가 바지락을 넣어 함께 볶아줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1018_step_02.png"
      },
            {
        title: "끓이기",
        subtitle: "물을 붓고 끓어오르면 국간장, 다진마늘, 소금으로 간하여 완성합니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_card_img/guk_06.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1019
  1019: {
    id: 1019,
    categories: {
      type:       "guk",
      ingredient: ["seafood","vegetable"],
      method:     ["boil","boil-soft"],
      situation:  ["speed","hangover"],
      health:     "anti-cancer"
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       3.5,
    review_count: 122,
    likes:        "5.1K",
    author_img:   "images_10000_recipes/chef_images/chef_07.png",
    title: "칼칼한 오징어뭇국",
    author: "살찌우는엄마",
    subtitle: "쌀쌀한 날씨에 딱인 오징어뭇국",
    image: "images_10000_recipes/recipe_card_img/guk_07.png",
    servings: "3인분",
    time: "5분 이내",
    level: "초급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#칼칼", "#겨울에 생각나는"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "오징어", amount: "1마리" },
          { name: "무", amount: "150g" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고춧가루", amount: "1.5숟가락" },
          { name: "국간장", amount: "1숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "대파", amount: "1/2대" },
          { name: "소금", amount: "약간" },
          { name: "멸치육수", amount: "4컵" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 손질",
        subtitle: "오징어는 내장을 제거하고 링 모양으로 썰고, 무는 나박나박 썰어줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1019_step_01.png"
      },
            {
        title: "무 먼저 끓이기",
        subtitle: "멸치육수에 무를 넣고 끓이다가 고춧가루, 다진마늘을 넣어줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1019_step_02.png"
      },
            {
        title: "오징어 넣기",
        subtitle: "무가 익으면 오징어와 대파를 넣고 국간장, 소금으로 간하여 완성합니다.",
        tip: "오징어는 오래 끓이면 질겨지니 마지막에 넣어주세요",
        image:  "images_10000_recipes/recipe_steps_img/1019_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1020
  1020: {
    id: 1020,
    categories: {
      type:       "jjigae",
      ingredient: ["beaf","vegetable","grain"],
      method:     "boil",
      situation:  ["special","diet","late-night"],
      health:     "intestine"
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 94,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_08.png",
    title: "소고기 버섯전골",
    author: "판교댁쏭아",
    subtitle: "술안주로도 좋고, 밥이랑 먹어도 맛있는 얼큰한 소고기버섯전골",
    image: "images_10000_recipes/recipe_card_img/guk_08.png",
    servings: "3인분",
    time: "30분 이내",
    level: "중급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#얼큰칼칼", "#술안주"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "소고기(불고기용)", amount: "150g" },
          { name: "표고버섯", amount: "3개" },
          { name: "새송이버섯", amount: "1개" },
          { name: "팽이버섯", amount: "1봉" },
          { name: "두부", amount: "1/4모" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "간장", amount: "3숟가락" },
          { name: "고추장", amount: "1숟가락" },
          { name: "고춧가루", amount: "1숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "육수", amount: "3컵" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 손질",
        subtitle: "버섯은 먹기 좋게 찢고 소고기는 양념에 밑간해둡니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1020_step_01.png"
      },
            {
        title: "전골냄비 세팅",
        subtitle: "전골냄비에 재료를 가지런히 담고 양념장을 넣어줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1020_step_02.png"
      },
            {
        title: "끓이기",
        subtitle: "육수를 붓고 끓이면서 먹으면 완성입니다.",
        tip: "소고기가 잘 익도록 밑에 깔아주세요",
        image:  "images_10000_recipes/recipe_steps_img/1020_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1021
  1021: {
    id: 1021,
    categories: {
      type:       "jjigae",
      ingredient: ["pork","vegetable","grain"],
      method:     "boil",
      situation:  ["special","late-night"],
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 142,
    likes:        "3.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "김치짜글이",
    author: "밥차리라",
    subtitle: "국물이 진하고 얼큰한 맛에 밥도둑에 술 한잔 생각나는",
    image: "images_10000_recipes/recipe_card_img/guk_09.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#밥도둑", "#술안주"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "김치", amount: "300g" },
          { name: "돼지고기", amount: "150g" },
          { name: "두부", amount: "1/2모" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고춧가루", amount: "1숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "국간장", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "김칫국물", amount: "4숟가락" },
          { name: "물", amount: "1컵" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 볶기",
        subtitle: "냄비에 참기름을 두르고 돼지고기를 볶다가 김치를 넣어 함께 볶아줍니다.",
        tip: "김치는 묵은지를 써야 더 맛있어요",
        image:  "images_10000_recipes/recipe_steps_img/1021_step_01.png"
      },
            {
        title: "육수 넣기",
        subtitle: "김칫국물과 물을 넣고 끓이다가 두부를 넣어줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1021_step_02.png"
      },
            {
        title: "마무리",
        subtitle: "국간장, 고춧가루, 다진마늘로 간을 맞추고 자박하게 졸여 완성합니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1021_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1022
  1022: {
    id: 1022,
    categories: {
      type:       "jjigae",
      ingredient: ["pork","grain","vegetable"],
      method:     "boil",
      situation:  ["special","late-night"],
      health:     ""
    },
    badge:        "NEW",
    badge_class:  "",
    rating:       4.8,
    review_count: 38,
    likes:        "4.8K",
    author_img:   "images_10000_recipes/chef_images/chef_10.png",
    title: "흑백요리사 두부찌개",
    author: "꼬순내집밥",
    subtitle: "흑백요리사 두부찌개를 조금 변형해서 만들어봤어요.",
    image: "images_10000_recipes/recipe_card_img/guk_10.png",
    servings: "2인분",
    time: "30분 이내",
    level: "초급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#흑백요리사", "#시원 칼칼"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "두부", amount: "1모" },
          { name: "돼지고기 다짐육", amount: "100g" },
          { name: "김치", amount: "100g" },
          { name: "애호박", amount: "1/4개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고추장", amount: "1숟가락" },
          { name: "고춧가루", amount: "1숟가락" },
          { name: "된장", amount: "0.5숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "멸치육수", amount: "3컵" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "두부는 깍둑 썰고 김치와 애호박은 먹기 좋게 썰어줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1022_step_01.png"
      },
            {
        title: "볶기",
        subtitle: "냄비에 다짐육을 볶다가 김치와 고추장, 고춧가루를 넣어 함께 볶아줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1022_step_02.png"
      },
            {
        title: "끓이기",
        subtitle: "멸치육수를 붓고 두부, 애호박, 된장, 다진마늘을 넣어 끓이면 완성입니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1022_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1023
  1023: {
    id: 1023,
    categories: {
      type:       "guk tteok",
      ingredient: ["seafood","grain","egg"],
      method:     ["boil","pan"],
      situation:  ["special","holiday"],
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 112,
    likes:        "3.1K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "명란떡국",
    author: "밥차리라",
    subtitle: "전참시에 나온 레시피",
    image: "images_10000_recipes/recipe_card_img/guk_11.png",
    servings: "2인분",
    time: "15분 이내",
    level: "초급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#전참시", "#명란"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "떡국떡", amount: "200g" },
          { name: "명란젓", amount: "2줄" },
          { name: "달걀", amount: "1개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "국간장", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "대파", amount: "1/4대" },
          { name: "멸치육수", amount: "4컵" }
        ]
      }
    ],
    steps: [
      {
        title: "육수 끓이기",
        subtitle: "멸치육수를 끓이고 떡국떡을 넣어 익혀줍니다.",
        tip: "떡국떡은 찬물에 미리 불려두면 더 빨리 익어요",
        image:  "images_10000_recipes/recipe_steps_img/1023_step_01.png"
      },
            {
        title: "명란 손질",
        subtitle: "명란젓은 껍질을 제거하고 알만 분리해줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1023_step_02.png"
      },
            {
        title: "마무리",
        subtitle: "떡이 익으면 국간장으로 간하고 명란, 달걀, 대파를 넣어 완성합니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1023_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1024
  1024: {
    id: 1024,
    categories: {
      type:       "guk",
      ingredient: ["seafood","egg","grain"],
      method:     "boil",
      situation:  ["hangover","speed"],
      health:     ["liver","anti-cancer"]
    },
    badge:        null,
    badge_class:  "",
    rating:       5.0,
    review_count: 82,
    likes:        "5.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "북엇국",
    author: "밥차리라",
    subtitle: "시원하면서도 한그릇 먹고나면 속이 든든하고 편안한 북어국",
    image: "images_10000_recipes/recipe_card_img/guk_12.png",
    servings: "3인분",
    time: "15분 이내",
    level: "초급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#초간단", "#해장국"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "북어채", amount: "30g" },
          { name: "달걀", amount: "1개" },
          { name: "두부", amount: "1/4모" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "참기름", amount: "1숟가락" },
          { name: "국간장", amount: "1숟가락" },
          { name: "다진마늘", amount: "0.5숟가락" },
          { name: "소금", amount: "약간" },
          { name: "대파", amount: "1/4대" },
          { name: "물", amount: "4컵" }
        ]
      }
    ],
    steps: [
      {
        title: "북어채 손질",
        subtitle: "북어채는 물에 불린 뒤 먹기 좋게 잘라줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1024_step_01.png"
      },
            {
        title: "참기름에 볶기",
        subtitle: "냄비에 참기름을 두르고 북어채를 볶다가 물을 붓고 끓여줍니다.",
        tip: "북어를 참기름에 볶아야 고소한 맛이 살아요",
        image:  "images_10000_recipes/recipe_steps_img/1024_step_02.png"
      },
            {
        title: "재료 넣고 마무리",
        subtitle: "두부, 달걀, 다진마늘, 대파를 넣고 국간장, 소금으로 간하여 완성합니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1024_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1025
  1025: {
    id: 1025,
    categories: {
      type:       "bap",
      ingredient: ["pork","egg","vegetable"],
      method:     "stir",
      situation:  ["speed","lunchbox","baby"],
      health:     ""
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 34,
    likes:        "8.7K",
    author_img:   "images_10000_recipes/chef_images/chef_01.jpg",
    title: "스팸볶음밥",
    author: "시크제이맘",
    subtitle: "냉장고 속 스팸으로 만드는 간단하고 맛있는 볶음밥",
    image: "images_10000_recipes/recipe_card_img/bap_01.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "밥/죽/떡",
    subcategory: "밥",
    tags: ["#간편", "#볶음밥"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "밥", amount: "2공기" },
          { name: "스팸", amount: "1/2캔" },
          { name: "달걀", amount: "2개" },
          { name: "대파", amount: "1/4대" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "간장", amount: "1숟가락" },
          { name: "굴소스", amount: "0.5숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "식용유", amount: "적당량" }
        ]
      }
    ],
    steps: [
      {
        title: "스팸 굽기",
        subtitle: "스팸을 깍둑 썰어 팬에 노릇하게 구워줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1025_step_01.png"
      },
            {
        title: "볶기",
        subtitle: "달걀을 스크램블 하듯 볶다가 밥과 대파를 넣고 센불에서 볶아줍니다.",
        tip: "센불에서 빠르게 볶아야 밥이 뭉치지 않아요",
        image:  "images_10000_recipes/recipe_steps_img/1025_step_02.png"
      },
            {
        title: "간 맞추기",
        subtitle: "간장, 굴소스, 참기름을 넣고 고루 볶아 완성합니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1025_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1026
  1026: {
    id: 1026,
    categories: {
      type:       "bap",
      ingredient: ["pork","vegetable"],
      method:     "stir",
      situation:  ["speed","lunchbox","late-night"],
      health:     ""
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 52,
    likes:        "8.2K",
    author_img:   "images_10000_recipes/chef_images/chef_02.jpg",
    title: "백종원 김치볶음밥",
    author: "조밍키♥",
    subtitle: "백종원 레시피로 만드는 황금 김치볶음밥",
    image: "images_10000_recipes/recipe_card_img/bap_02.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "밥/죽/떡",
    subcategory: "밥",
    tags: ["#백종원", "#김치볶음밥"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "밥", amount: "2공기" },
          { name: "김치", amount: "200g" },
          { name: "돼지고기", amount: "100g" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고추장", amount: "1숟가락" },
          { name: "간장", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "버터", amount: "1숟가락" },
          { name: "식용유", amount: "적당량" }
        ]
      }
    ],
    steps: [
      {
        title: "돼지고기 볶기",
        subtitle: "팬에 식용유를 두르고 돼지고기를 볶아줍니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1026_step_01.png"
      },
            {
        title: "김치 볶기",
        subtitle: "돼지고기가 익으면 김치를 넣고 고추장, 간장을 넣어 볶아줍니다.",
        tip: "김치는 묵은지일수록 맛있어요",
        image:  "images_10000_recipes/recipe_steps_img/1026_step_02.png"
      },
            {
        title: "밥 볶기",
        subtitle: "밥을 넣고 센불에서 볶다가 버터와 참기름을 넣어 마무리합니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1026_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1027
  1027: {
    id: 1027,
    categories: {
      type:       "bap",
      ingredient: ["grain","pork","vegetable"],
      method:     "stir",
      situation:  ["special","late-night"],
      health:     ""
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       5.0,
    review_count: 55,
    likes:        "7.9K",
    author_img:   "images_10000_recipes/chef_images/chef_03.jpg",
    title: "마파두부 덮밥",
    author: "김진옥요리가좋다",
    subtitle: "매콤하고 부드러운 마파두부를 밥 위에 얹은 덮밥",
    image: "images_10000_recipes/recipe_card_img/bap_03.png",
    servings: "2인분",
    time: "10분 이내",
    level: "초급",
    category: "밥/죽/떡",
    subcategory: "밥",
    tags: ["#간편", "#덮밥"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "밥", amount: "2공기" },
          { name: "두부", amount: "1/2모" },
          { name: "돼지고기 다짐육", amount: "100g" },
          { name: "양파", amount: "1/2개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "두반장", amount: "1숟가락" },
          { name: "간장", amount: "1숟가락" },
          { name: "굴소스", amount: "0.5숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "전분물", amount: "2숟가락" },
          { name: "참기름", amount: "1숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "두부 손질",
        subtitle: "두부는 깍둑 썰어 키친타올로 물기를 제거합니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1027_step_01.png"
      },
            {
        title: "마파소스 만들기",
        subtitle: "팬에 기름을 두르고 다짐육, 양파를 볶다가 두반장, 간장, 굴소스를 넣어 볶습니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1027_step_02.png"
      },
            {
        title: "마무리",
        subtitle: "두부를 넣고 전분물로 농도를 맞춘 뒤 참기름을 둘러 밥 위에 올려 완성합니다.",
        tip: null,
        image:  "images_10000_recipes/recipe_steps_img/1027_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1028
  1028: {
    id: 1028,
    categories: {
      type:       "bap",
      ingredient: ["pork","vegetable"],
      method:     ["boil","stir","boil-soft"],
      situation:  ["speed","late-night"]
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       5.0,
    review_count: 550,
    likes:        "12K",
    author_img:   "images_10000_recipes/chef_images/chef_04.png",
    title: "카레덮밥",
    author: "뿅림이",
    subtitle: "향긋한 카레 소스로 만드는 간단 덮밥",
    image: "images_10000_recipes/recipe_card_img/bap_04.png",
    servings: "3인분",
    time: "10분 이내",
    level: "초급",
    category: "밥/죽/떡",
    subcategory: "밥",
    tags: ["#카레", "#초간단"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "밥", amount: "2공기" },
          { name: "카레가루", amount: "3숟가락" },
          { name: "감자", amount: "1개" },
          { name: "당근", amount: "1/4개" },
          { name: "양파", amount: "1/2개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "식용유", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "물", amount: "2컵" }
        ]
      }
    ],
    steps: [
      {
        title: "채소 썰기",
        subtitle: "브로콜리, 표고버섯, 양파 작게 썰어서 준비하기.",
        tip: " 브로콜리는 최대한 작은 송이로 나누고, 표고버섯, 양파도 1~2cm 정도로 작게 썰오놓으면 조리시간 단축돼요! ",
        image: "images_10000_recipes/recipe_steps_img/1028_step_01.png"
      },
      {
        title: "카레 가루 준비하기",
        subtitle: "한살림에서 구입한 2가지 카레를 20g씩 반반 섞어서 사용했어요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1028_step_02.png"
      },
      {
        title: "카레 가루 풀기",
        subtitle: "카레 물에 생수 450ml 넣고 끓이기",
        tip: " 3분 정도 끓이기. (강불)",
        image: "images_10000_recipes/recipe_steps_img/1028_step_03.png"
      },
      {
        title: "카레 넣기",
        subtitle: "채소가 익으면 카레가루를 넣고 잘 풀어 걸쭉해질 때까지 끓인 뒤 밥 위에 얹어 완성합니다.",
        tip: "카레는 약불에서 천천히 저어야 뭉치지 않아요",
        image: "images_10000_recipes/recipe_steps_img/1028_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1029
  1029: {
    id: 1029,
    categories: {
      type:       "juk",
      ingredient: ["seafood","vegetable"],
      method:     "boil",
      situation:  ["speed","hangover","pregnancy","baby"],
      health:     ["stomach","intestine","liver","blood-sugar","anti-cancer"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.7,
    review_count: 237,
    likes:        "7K",
    author_img:   "images_10000_recipes/chef_images/chef_05.jpg",
    title: "야채참치죽",
    author: "뽀유TV",
    subtitle: "부드럽고 영양 가득한 야채참치죽",
    image: "images_10000_recipes/recipe_card_img/bap_05.png",
    servings: "2인분",
    time: "5분 이내",
    level: "초급",
    category: "밥/죽/떡",
    subcategory: "죽",
    tags: ["#죽", "#영양식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "불린 쌀", amount: "1컵" },
          { name: "참치캔", amount: "1개" },
          { name: "당근", amount: "1/4개" },
          { name: "양파", amount: "1/4개" },
          { name: "애호박", amount: "1/4개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "참기름", amount: "1숟가락" },
          { name: "국간장", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "물", amount: "6컵" }
        ]
      }
    ],
    steps: [
      {
        title: "채소 다지기",
        subtitle: "당근, 양파, 애호박을 잘게 다져줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1029_step_01.png"
      },
            {
        title: "볶기",
        subtitle: "냄비에 참기름을 두르고 채소와 참치를 볶다가 불린 쌀을 넣어 함께 볶아줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1029_step_02.png"
      },
            {
        title: "끓이기",
        subtitle: "물을 붓고 약불에서 저어가며 끓이다가 국간장, 소금으로 간하여 완성합니다.",
        tip: "죽은 바닥이 타기 쉬우니 자주 저어주세요",
        image: "images_10000_recipes/recipe_steps_img/1029_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1030
  1030: {
    id: 1030,
    categories: {
      type:       "juk",
      ingredient: ["vegetable","flour","grain"],
      method:     ["boil","boil-soft"],
      situation:  ["pregnancy","baby"],
      health:     ["stomach","intestine","liver","anti-cancer"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.5,
    review_count: 28,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_06.png",
    title: "늙은호박죽",
    author: "엘린84",
    subtitle: "달콤하고 부드러운 전통 늙은호박죽",
    image: "images_10000_recipes/recipe_card_img/bap_06.png",
    servings: "3인분",
    time: "10분 이내",
    level: "초급",
    category: "밥/죽/떡",
    subcategory: "죽",
    tags: ["#전통죽", "#달콤"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "늙은호박", amount: "300g" },
          { name: "불린 쌀", amount: "0.5컵" },
          { name: "새알심(찹쌀가루 반죽)", amount: "적당량" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "소금", amount: "약간" },
          { name: "설탕", amount: "1숟가락" },
          { name: "물", amount: "5컵" }
        ]
      }
    ],
    steps: [
      {
        title: "호박 손질",
        subtitle: "꼭지가 아래로 가도록 뒤집어 결데로 잘라 주세요 호박 밑동을 자르는게 손다칠 염려도 없고 쉬워요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1030_step_01.png"
      },
            {
        title: "호박씨 우리기",
        subtitle: "호박씨 우려낸 물에 호박을 삶으면 고소한 맛과 풍미가 더 좋아진답니다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1030_step_02.png"
      },
            {
        title: "호박 익히기",
        subtitle: "완전히 익었으면 핸드믹서로 갈아 주세요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1030_step_03.png"
      },
      {
        title: "호박 갈기",
        subtitle: "썰은 호박과 호박씨 육수를 호박이 잠기지 않게 부어 익혀주세요 호박이 익으면서 물이 흥근하게 나옵니다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1030_step_04.png"
      },
      {
        title: "찹쌀 넣고 끓이기",
        subtitle: "곱게 간 호박죽에 불을 켜고 호박죽이 보글보글 끓을때 곱게 간 찹쌀을 넣고 저어주며 농도를 마춰 2분정도 약불에서 끓여 줍니다",
        tip: "죽은 오래 두면 되직해지기 때문에 조금 묽게 끓여야 됩니다",
        image: "images_10000_recipes/recipe_steps_img/1030_step_05.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1031
  1031: {
    id: 1031,
    categories: {
      type:       "juk",
      ingredient: "grain",
      method:     "boil",
      situation:  ["speed","pregnancy","baby"],
      health:     ["stomach","intestine","liver","blood-sugar","anti-cancer"]
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       3.5,
    review_count: 122,
    likes:        "5.1K",
    author_img:   "images_10000_recipes/chef_images/chef_07.png",
    title: "죽 황금레시피",
    author: "살찌우는엄마",
    subtitle: "누구나 쉽게 만드는 죽 황금레시피",
    image: "images_10000_recipes/recipe_card_img/bap_07.png",
    servings: "2인분",
    time: "5분 이내",
    level: "초급",
    category: "밥/죽/떡",
    subcategory: "죽",
    tags: ["#황금레시피", "#죽"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "불린 쌀", amount: "1컵" },
          { name: "참기름", amount: "1숟가락" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "소금", amount: "약간" },
          { name: "국간장", amount: "1숟가락" },
          { name: "물", amount: "6컵" }
        ]
      }
    ],
    steps: [
      {
        title: "전복 손질",
        subtitle: "전복은 입(이빨)을 제거하고 잘 개 썰어 준 뒤 참기름(들기름)을 넣고 볶아줍니다",
        tip: "내장은 절대 버리지 마시고 죽 끓일 때 꼭 넣어 주세요~",
        image: "images_10000_recipes/recipe_steps_img/1031_step_01.png"
      },
      {
        title: "야채 손질",
        subtitle: "양파와 당근도 잘게 썰어서 넣어주세요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1031_step_02.png"
      },
      {
        title: "찹쌀 불려주기 ",
        subtitle: "살짝 볶은 전복에 불린 찹쌀을 넣고 잘 볶다가 물을 넣고 끓여줍니다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1031_step_03.png"
      },
      {
        title: "내장 넣고 끓이기",
        subtitle: "내장은 체에 밭쳐서 부드럽게 만들어 넣습니다",
        tip: "약한 불에서 바닥이 눌지 않게 잘 저어주면 서 끓여줍니다",
        image: "images_10000_recipes/recipe_steps_img/1031_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1032
  1032: {
    id: 1032,
    categories: {
      type:       "juk",
      ingredient: ["flour","grain"],
      method:     ["boil","boil-soft"],
      situation:  ["special","holiday","pregnancy","baby"],
      health:     ["stomach","intestine","liver","anti-cancer"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 94,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_08.png",
    title: "동지팥죽",
    author: "판교댁쏭아",
    subtitle: "동지에 먹는 전통 팥죽 레시피",
    image: "images_10000_recipes/recipe_card_img/bap_08.png",
    servings: "4인분",
    time: "30분 이내",
    level: "중급",
    category: "밥/죽/떡",
    subcategory: "죽",
    tags: ["#전통", "#동지"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "팥", amount: "200g" },
          { name: "찹쌀가루", amount: "1컵" },
          { name: "소금", amount: "약간" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "설탕", amount: "2숟가락" },
          { name: "소금", amount: "약간" },
          { name: "물", amount: "8컵" }
        ]
      }
    ],
    steps: [
      {
        title: "팥 삶기",
        subtitle: "팥을 씻어 냄비에 넣고 물을 자박하게 부어 한 번 끓인 뒤 물을 버리고 다시 물을 넣어 푹 삶아줍니다.",
        tip: "첫 물을 버려야 쓴맛이 빠져요",
        image: "images_10000_recipes/recipe_steps_img/1032_step_01.png"
      },
            {
        title: "새알심 만들기",
        subtitle: "찹쌀가루에 소금과 뜨거운 물을 조금씩 넣어가며 반죽해 새알심을 빚어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1032_step_02.png"
      },
            {
        title: "팥죽 완성",
        subtitle: "핸드 블랜드로 간 팥물은 고운 체에 밭쳐 앙금을 내려 주고 거친 껍질은 걸러서 버립니다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1032_step_03.png"
      },
            {
        title: "팥죽 완성",
        subtitle: "바닥에 눋지 않게 잘 저어 쌀을 익혀 주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1032_step_04.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1033
  1033: {
    id: 1033,
    categories: {
      type:       "tteok",
      ingredient: "grain",
      method:     "stir",
      situation:  ["snack","lunchbox",'diet'],
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 142,
    likes:        "3.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "라이스페이퍼 떡볶이",
    author: "밥차리라",
    subtitle: "라이스페이퍼로 만드는 색다른 떡볶이",
    image: "images_10000_recipes/viral_food_img/viral_food_img03.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "밥/죽/떡",
    subcategory: "떡",
    tags: ["#라이스페이퍼", "#떡볶이"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "라이스페이퍼", amount: "10장" },
          { name: "어묵", amount: "100g" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고추장", amount: "2숟가락" },
          { name: "고춧가루", amount: "1숟가락" },
          { name: "간장", amount: "1숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "물", amount: "2컵" },
          { name: "대파", amount: "1/4대" }
        ]
      }
    ],
    steps: [
      {
        title: "라이스페이퍼 불리기",
        subtitle: "라이스페이퍼4장을 불려가며 겹친 후 돌돌 말아 떡볶이를 만든다.",
        tip: "너무 오래 불리면 풀어지니 살짝만 불려주세요. 치즈떡 준비시, 2장을 불려 치즈를 올려 돌돌 말아 치즈떡을 만들어주세요.",
        image: "images_10000_recipes/recipe_steps_img/1033_step_01.png"
      },
            {
        title: "양념장 끓이기",
        subtitle: "냄비에 물, 고추장, 고춧가루, 간장, 설탕을 넣고 끓여 양념장을 만들어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1033_step_02.png"
      },
            {
        title: "조리하기",
        subtitle: "라이스페이퍼와 어묵을 양념장에 넣고 졸이다가 대파를 넣어 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1033_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1034
  1034: {
    id: 1034,
    categories: {
      type:       "tteok",
      ingredient: "grain",
      method:     "fry",
      situation:  "snack",
      health:     ""
    },
    badge:        "NEW",
    badge_class:  "",
    rating:       4.8,
    review_count: 38,
    likes:        "4.8K",
    author_img:   "images_10000_recipes/chef_images/chef_10.png",
    title: "떡꼬치",
    author: "꼬순내집밥",
    subtitle: "길거리 간식으로 인기 만점 떡꼬치",
    image: "images_10000_recipes/recipe_card_img/bap_10.png",
    servings: "2인분",
    time: "30분 이내",
    level: "초급",
    category: "밥/죽/떡",
    subcategory: "떡",
    tags: ["#간식", "#떡꼬치"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "떡볶이떡", amount: "200g" },
          { name: "어묵", amount: "100g" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고추장", amount: "2숟가락" },
          { name: "간장", amount: "1숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "물", amount: "1.5컵" },
          { name: "꼬치", amount: "적당량" }
        ]
      }
    ],
    steps: [
      {
        title: "떡 굽기",
        subtitle: "떡 20개를 기름을 조금 두른 팬에 아주 약불로 구어주세요.",
        tip: "기름을 많이 넣으면 떡이 튀는 사고가 나요. 기름은 조금만 넣어주세요!",
        image: "images_10000_recipes/recipe_steps_img/1034_step_01.png"
      },
            {
        title: "양념장 만들기",
        subtitle: "고추장 1/2T, 설탕 1T, 올리고당 2T, 케찹 2T를 넣어 소스를 만들어주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1034_step_02.png"
      },
            {
        title: "완성",
        subtitle: "떡이 다 익었다면 젓가락(꼬치)에 낀 후 만든 소스를 발라주세요.",
        tip: "양념을 여러 번 덧발라야 맛이 배어요",
        image: "images_10000_recipes/recipe_steps_img/1034_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1035
  1035: {
    id: 1035,
    categories: {
      type:       "tteok",
      ingredient: "grain",
      method:     ["fry","stir"],
      situation:  "snack",
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 112,
    likes:        "3.1K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "꿀떡볶이",
    author: "밥차리라",
    subtitle: "달콤한 꿀떡볶이 초간단 레시피",
    image: "images_10000_recipes/recipe_card_img/bap_11.png",
    servings: "2인분",
    time: "15분 이내",
    level: "초급",
    category: "밥/죽/떡",
    subcategory: "떡",
    tags: ["#초간단", "#아이들 간식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "떡볶이떡", amount: "300g" },
          { name: "어묵", amount: "100g" },
          { name: "대파", amount: "1/4대" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고추장", amount: "2숟가락" },
          { name: "간장", amount: "1숟가락" },
          { name: "설탕", amount: "1.5숟가락" },
          { name: "꿀", amount: "1숟가락" },
          { name: "물", amount: "2컵" },
          { name: "다진마늘", amount: "0.5숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "떡굽기",
        subtitle: "먼저 달궈진 팬에 기름을 두르고 떡을 노릇노릇 구워 줍니다",
        tip: "너무 오래 구우면 떡이 딱딱해지니 겉면이 노릇해질까지만 구워 주세요.",
        image: "images_10000_recipes/recipe_steps_img/1035_step_01.png"
      },
            {
        title: "꿀 넣고 떡 볶아주기",
        subtitle: "버터를 넣고 녹여서 잘 볶아주세요. 그 다음 꿀을 넣어주시면 되는데 본인 기호에 맞게 꿀을 조절하셔서 잘 섞어주심 완성!!!",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1035_step_02.png"
      },
            {
        title: "완성",
        subtitle: ".으깬 땅콩을 넣어주시면 고소함이 두배가 된답니다^^",
        tip: null,
        image: "images_10000_recipes/recipe_card_img/bap_11.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1036
  1036: {
    id: 1036,
    categories: {
      type:       ["main-banchan","tteok"],
      ingredient: ["beef","grain"],
      method:     "grill",
      situation:  ["snack","lunchbox"],
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       5.0,
    review_count: 82,
    likes:        "5.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "떡갈비",
    author: "밥차리라",
    subtitle: "촉촉하고 부드러운 떡갈비 레시피",
    image: "images_10000_recipes/recipe_card_img/bap_12.png",
    servings: "3인분",
    time: "15분 이내",
    level: "초급",
    category: "밥/죽/떡",
    subcategory: "떡",
    tags: ["#초간단", "#명절"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "소고기 다짐육", amount: "200g" },
          { name: "두부", amount: "1/4모" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "간장", amount: "2숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "다진파", amount: "1숟가락" },
          { name: "후추", amount: "약간" },
          { name: "식용유", amount: "적당량" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 섞기",
        subtitle: "큰 볼에 다진 쇠고기와, 잣, 대파, 고기양념재료를 넣고 충분히 치대어 주세요. 새송이 버섯은 윗부분은 잘라내고 버섯의 하얀 밑동을 세로로 4등분 해주세요",
        tip: "다진 쇠고기는 키친타월로 핏물을 모두 제거해주세요",
        image: "images_10000_recipes/recipe_steps_img/1036_step_01.png"
      },
            {
        title: "모양 만들기",
        subtitle: "치댄 고기는 동그랗고 넓게 만드신 후 새송이 버섯에 감아서 떡갈비를 만들어 주세요. 볼에 참기름을 제외한 떡갈비 소스재료를 고루 섞어주신 후 마지막에 참기름 1작은술을 넣어 고루 섞어주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1036_step_02.png"
      },
            {
        title: "굽기",
        subtitle: "팬에 기름을 두르고 떡갈비를 올린 후 솔을 이용하여 떡갈비 소스를 발라가며 노릇하게 구워주세요.",
        tip: "약불에서 천천히 구워야 속까지 잘 익어요",
        image: "images_10000_recipes/recipe_steps_img/1036_step_03.png"
      },
      {
        title: "완성",
        subtitle: "잘 익은 떡갈비는 그릇에 담아 주시고 다진 잣과, 다진 쪽파를 올려주세요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1036_step_04.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1037
  1037: {
    id: 1037,
    categories: {
      type:       ["noodle","western"],
      ingredient: ["seafood","flour","vegetable","dairy"],
      method:     ["boil","boil-soft"],
      situation:  ["special","speed"],
      health:     ""
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 34,
    likes:        "8.7K",
    author_img:   "images_10000_recipes/chef_images/chef_01.jpg",
    title: "투움바파스타",
    author: "시크제이맘",
    subtitle: "아웃백 스타일 크림 투움바파스타",
    image: "images_10000_recipes/recipe_card_img/noodle_01.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "면",
    subcategory: "면",
    tags: ["#크림파스타", "#아웃백"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "파스타면", amount: "160g" },
          { name: "새우", amount: "100g" },
          { name: "양파", amount: "1/4개" },
          { name: "마늘", amount: "3쪽" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "생크림", amount: "200ml" },
          { name: "올리브오일", amount: "2숟가락" },
          { name: "버터", amount: "1숟가락" },
          { name: "고춧가루", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "소스 만들기",
        subtitle: "휘핑크림 250ml 우유50ml 간장 2스푼 + 청주 1스푼 간장을 한스푼 넣어주세요.",
        tip: "간장은 기호에 따라 더 넣어주심 됩니다.",
        image: "images_10000_recipes/recipe_steps_img/1037_step_01.png"
      },
      {
        title: "소스 숙성시키기",
        subtitle: "파를 넣고 잘 섞어줍니다. 랩씌워놓고 반나절정도 넣어두세요",
        tip: "이렇게 숙성해주는게 뽀인트!",
        image: "images_10000_recipes/recipe_steps_img/1037_step_02.png"
      },
            {
        title: "새우 양념",
        subtitle: "해동된 새우에 고추가루 1스푼 다진마늘 한스푼 미림 혹은 청주 한스푼 후추 조금 휙휙 넣고 버물버물~",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1037_step_03.png"
      },
      {
        title: "면 삶기",
        subtitle: "10분정도 삶아줬어요 다 익은 면은 물기 제거하고 식용유 한스푼 넣고 버물버물~",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1037_step_04.png"
      },
      {
        title: "면과 소스 섞어 끓이기",
        subtitle: "소스가 보글보글 끓기 시작하면 페투치니면을 넣고 나머지 야채들도 함게 넣고 5분정도 자작~하게 양념이 잘베이도록 졸여줍니다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1037_step_05.png"
      },
      {
        title: "완성",
        subtitle: "이때 맛을 보고 좀 싱겁다 싶으면 간장을 한스푼 정도 넣어주세요. 다 됐으면 그릇에 예쁘게 담아주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1037_step_06.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1038
  1038: {
    id: 1038,
    categories: {
      type:       "noodle salad",
      type:       ["noodle","salad","western"],
      ingredient: ["seafood","flour","vegetable","vegetable"],
      method:     ["boil","boil-soft"],
      situation:  ["special","speed"],
      health:     ["stomach","blood-sugar","liver"]
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 52,
    likes:        "8.2K",
    author_img:   "images_10000_recipes/chef_images/chef_02.jpg",
    title: "새우파스타 샐러드",
    author: "조밍키♥",
    subtitle: "탱글한 새우와 파스타로 만드는 샐러드",
    image: "images_10000_recipes/recipe_card_img/noodle_02.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "면",
    subcategory: "면",
    tags: ["#샐러드", "#새우"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "파스타면(짧은 것)", amount: "150g" },
          { name: "새우", amount: "100g" },
          { name: "방울토마토", amount: "8개" },
          { name: "아보카도", amount: "1/2개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "올리브오일", amount: "3숟가락" },
          { name: "레몬즙", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" },
          { name: "파슬리", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "샐러드 준비",
        subtitle: "샐러드야채와 방울토마토는 흐르는 물에 깨끗이 씻어 먹기좋은 크기로 잘라주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1038_step_01.png"
      },
      {
        title: "샐러드 드레싱 준비",
        subtitle: "드레싱 재료들(식초 2큰술, 간장 3큰술, 쯔유 2큰술, 올리고당 1큰술, 매실청 1큰술, 다진마늘 1/4큰술, 참기름 2큰술, 소금 약간, 후춧가루 약간)을 잘 섞어 준비해주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1038_step_02.png"
      },
      {
        title: "파스타 삶기",
        subtitle: "끓는물에 소금 1/4큰술과 후춧가루, 올리브유 1큰술을 넣은 후 파스타를 넣고 8-10분정도 삶은 후 찬물에 씻고 물기를 제거해주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1038_step_03.png"
      },
            {
        title: "새우 굽기",
        subtitle: "팬에 올리브오일을 두르고 새우를 소금, 후추로 간해 구워줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1038_step_04.png"
      },
            {
        title: "버무리기",
        subtitle: "모든 재료를 올리브오일, 레몬즙, 소금, 후추로 버무려 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1038_step_05.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1039
  1039: {
    id: 1039,
    categories: {
      type:       "noodle",
      type:       ["noodle","western"],
      ingredient: ["pork","flour","vegetable"],
      method:     ["stir","boil-soft"],
      situation:  ["special","speed","late-night"],
      health:     ""
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       5.0,
    review_count: 55,
    likes:        "7.9K",
    author_img:   "images_10000_recipes/chef_images/chef_03.jpg",
    title: "나포리탄 파스타",
    author: "김진옥요리가좋다",
    subtitle: "케첩 베이스의 달콤한 나포리탄 파스타",
    image: "images_10000_recipes/recipe_card_img/noodle_03.png",
    servings: "2인분",
    time: "10분 이내",
    level: "초급",
    category: "면",
    subcategory: "면",
    tags: ["#간편", "#나포리탄"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "파스타면", amount: "160g" },
          { name: "소시지", amount: "3개" },
          { name: "양파", amount: "1/4개" },
          { name: "피망", amount: "1/4개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "케첩", amount: "4숟가락" },
          { name: "우스터소스", amount: "1숟가락" },
          { name: "버터", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" },
          { name: "올리브오일", amount: "1숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "파스타 삶기",
        subtitle: "물 1.5L 정도에 소금을 40g 정도 넣었어요. 바닷물 처럼 짜야 파스타가 맛있습니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1039_step_01.png"
      },
            {
        title: "채소 볶기",
        subtitle: "팬에 버터와 올리브오일을 두르고 소시지, 양파, 피망을 볶아줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1039_step_02.png"
      },
            {
        title: "소스 만들기",
        subtitle: "케첩, 우스터소스를 넣고 볶다가 파스타를 넣어 버무려 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1039_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1040
  1040: {
    id: 1040,
    categories: {
      type:       "noodle",
      type:       ["noodle"],
      ingredient: ["flour"],
      method:     ["boil"],
      situation:  ["hangover","speed","late-night"],
      health:     ""
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       5.0,
    review_count: 550,
    likes:        "12K",
    author_img:   "images_10000_recipes/chef_images/chef_04.png",
    title: "해장라면",
    author: "뿅림이",
    subtitle: "칼칼하고 시원한 해장에 딱인 라면",
    image: "images_10000_recipes/recipe_card_img/noodle_04.png",
    servings: "1인분",
    time: "10분 이내",
    level: "초급",
    category: "면",
    subcategory: "면",
    tags: ["#해장", "#라면"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "라면", amount: "1개" },
          { name: "달걀", amount: "1개" },
          { name: "대파", amount: "1/4대" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고춧가루", amount: "0.5숟가락" },
          { name: "다진마늘", amount: "0.5숟가락" },
          { name: "국간장", amount: "0.5숟가락" },
          { name: "물", amount: "500ml" }
        ]
      }
    ],
    steps: [
      {
        title: "채소 준비",
        subtitle: "대파와 청양고추는 송송, 양파는 얇게 채 썰고, 부추는 4cm 길이로 썬다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1040_step_01.png"
      },
      {
        title: "재료 볶기",
        subtitle: "냄비에 식용유, 대파, 불린 황태채, 고춧가루, 굴소스, 라면 건더기스프, 분말스프를 모두 넣고 약불에서 타지 않게 볶는다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1040_step_02.png"
      },

            {
        title: "라면 끓이기",
        subtitle: "물을 넣고 강불에서 끓이다가 끓기 시작하면 라면, 양파, 콩나물을 넣고 면이 익을 때까지 끓인다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1040_step_03.png"
      },
            {
        title: "마무리",
        subtitle: "청양고추, 부추, 계란을 넣고 후추를 톡톡 뿌리면 완성",
        tip: "달걀은 반숙으로 올리면 더 맛있어요",
        image: "images_10000_recipes/recipe_card_img/noodle_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1041
  1041: {
    id: 1041,
    categories: {
      type:       ["noodle"],
      ingredient: ["pork","flour","vegetable"],
      method:     ["stir","boil-soft"],
      situation:  ["special","speed","late-night"],
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.7,
    review_count: 237,
    likes:        "7K",
    author_img:   "images_10000_recipes/chef_images/chef_05.jpg",
    title: "짜장면",
    author: "뽀유TV",
    subtitle: "집에서 만드는 진한 춘장 짜장면",
    image: "images_10000_recipes/recipe_card_img/noodle_05.png",
    servings: "2인분",
    time: "5분 이내",
    level: "초급",
    category: "면",
    subcategory: "면",
    tags: ["#짜장면", "#중식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "생면 또는 중면", amount: "2인분" },
          { name: "돼지고기 다짐육", amount: "150g" },
          { name: "양파", amount: "1/2개" },
          { name: "양배추", amount: "100g" },
          { name: "감자", amount: "1개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "춘장", amount: "3숟가락" },
          { name: "굴소스", amount: "1숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "식용유", amount: "2숟가락" },
          { name: "전분물", amount: "3숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "채소 볶기",
        subtitle: "팬에 기름을 두르고 다짐육을 볶다가 감자, 양파, 양배추를 넣어 볶아줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1041_step_01.png"
      },
            {
        title: "춘장 소스",
        subtitle: "야채가 숨이죽고 수분이 나오면 짜장가루를 조금씩 나눠 넣으며 덩어리지지않게 볶아줍니다.",
        tip: "춘장은 미리 기름에 볶아두면 쓴맛이 줄어요",
        image: "images_10000_recipes/recipe_steps_img/1041_step_02.png"
      },
            {
        title: "면 삶기 및 완성",
        subtitle: "면을 삶아 그릇에 담고 짜장 소스를 얹어 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1041_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1042
  1042: {
    id: 1042,
    categories: {
      type:       ["noodle"],
      ingredient: ["flour","vegetable","egg"],
      method:     ["boil","boil-soft"],
      situation:  ["special","speed"],
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.5,
    review_count: 28,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_06.png",
    title: "잔치국수",
    author: "엘린84",
    subtitle: "시원하고 깔끔한 국물의 잔치국수",
    image: "images_10000_recipes/recipe_card_img/noodle_06.png",
    servings: "2인분",
    time: "10분 이내",
    level: "초급",
    category: "면",
    subcategory: "면",
    tags: ["#잔치국수", "#시원"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "소면", amount: "2인분" },
          { name: "애호박", amount: "1/4개" },
          { name: "당근", amount: "1/4개" },
          { name: "달걀", amount: "1개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "국간장", amount: "2숟가락" },
          { name: "다진마늘", amount: "0.5숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "멸치육수", amount: "4컵" }
        ]
      }
    ],
    steps: [
      {
        title: "고명 준비",
        subtitle: "애호박과 당근은 채 썰어 볶고 달걀은 지단을 부쳐 채 썰어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1042_step_01.png"
      },
            {
        title: "육수 만들기",
        subtitle: "멸치육수팩을 이용해서 육수를 내주었어요~ 진하게 우리고싶어서 육수팩2개넣어주고 끓였구요 국간장0.5와 소금으로 간을해주세요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1042_step_02.png"
      },
            {
        title: "면 삶기 및 완성",
        subtitle: "소면을 삶아 그릇에 담고 국물을 붓고 고명을 올려 완성합니다.",
        tip: "면은 찬물에 여러 번 헹궈야 쫄깃해요",
        image: "images_10000_recipes/recipe_steps_img/1042_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1043
  1043: {
    id: 1043,
    categories: {
      type:       ["noodle"],
      ingredient: ["flour","vegetable","egg"],
      method:     ["boil","boil-soft","bibim"],
      situation:  ["snack","speed"],
      health:     ""
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       3.5,
    review_count: 122,
    likes:        "5.1K",
    author_img:   "images_10000_recipes/chef_images/chef_07.png",
    title: "비빔국수",
    author: "살찌우는엄마",
    subtitle: "새콤달콤 양념장으로 버무린 비빔국수",
    image: "images_10000_recipes/recipe_card_img/noodle_07.png",
    servings: "2인분",
    time: "5분 이내",
    level: "초급",
    category: "면",
    subcategory: "면",
    tags: ["#비빔국수", "#여름"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "소면", amount: "2인분" },
          { name: "오이", amount: "1/2개" },
          { name: "당근", amount: "1/4개" },
          { name: "삶은 달걀", amount: "1개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고추장", amount: "2숟가락" },
          { name: "식초", amount: "2숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "간장", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "통깨", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "양념장 만들기",
        subtitle: "고추장, 식초, 설탕, 간장, 참기름을 고루 섞어 양념장을 만들어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1043_step_01.png"
      },
            {
        title: "면 삶기",
        subtitle: "소면 1인분을 삶아 주신 뒤 찬물에 비벼가며 행궈 주세요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1043_step_02.png"
      },
            {
        title: "버무리기",
        subtitle: "삶은 소면에 채소와 양념장을 넣고 고루 버무려 달걀을 올려 완성합니다.",
        tip: "면은 차갑게 헹궈야 더 맛있어요",
        image: "images_10000_recipes/recipe_steps_img/1043_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1044
  1044: {
    id: 1044,
    categories: {
      type:       ["noodle","yangnyeom"],
      ingredient: ["flour","vegetable"],
      method:     ["boil","boil-soft"],
      situation:  ["snack","speed"],
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 94,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_08.png",
    title: "열무비빔국수",
    author: "판교댁쏭아",
    subtitle: "아삭한 열무김치로 만드는 열무비빔국수",
    image: "images_10000_recipes/recipe_card_img/noodle_08.png",
    servings: "2인분",
    time: "30분 이내",
    level: "중급",
    category: "면",
    subcategory: "면",
    tags: ["#열무", "#비빔국수"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "소면", amount: "2인분" },
          { name: "열무김치", amount: "200g" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "고추장", amount: "1숟가락" },
          { name: "식초", amount: "1숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "통깨", amount: "약간" },
          { name: "열무김치 국물", amount: "3숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "양념장 만들기",
        subtitle: "열무김치 국물, 고추장, 식초, 설탕, 참기름을 섞어 양념장을 만들어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1044_step_01.png"
      },
            {
        title: "면 삶기",
        subtitle: "소면을 삶아 찬물에 헹궈 물기를 빼줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1044_step_02.png"
      },
            {
        title: "버무리기",
        subtitle: "면에 열무김치와 양념장을 넣고 고루 버무려 통깨를 뿌려 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1044_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1045
  1045: {
    id: 1045,
    categories: {
      type:       ["noodle"],
      ingredient: ["seafood","flour","vegetable"],
      method:     ["boil","boil-soft"],
      situation:  ["speed"],
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 142,
    likes:        "3.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "바지락 칼국수",
    author: "밥차리라",
    subtitle: "바지락으로 우려낸 진한 국물의 칼국수",
    image: "images_10000_recipes/recipe_card_img/noodle_09.png",
    servings: "3인분",
    time: "15분 이내",
    level: "중급",
    category: "면",
    subcategory: "면",
    tags: ["#칼국수", "#바지락"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "칼국수면", amount: "2인분" },
          { name: "바지락", amount: "200g" },
          { name: "애호박", amount: "1/4개" },
          { name: "대파", amount: "1/4대" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "다진마늘", amount: "1숟가락" },
          { name: "국간장", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "물", amount: "6컵" }
        ]
      }
    ],
    steps: [
      {
        title: "야채 손질",
        subtitle: "우선 감자는 나박하게 썰어놔주시고 호박과 양파는 채썰어놔주시고 대파는 어슷썰어놔주시고 청양고추는 곱게 다져놔주세요~.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1045_step_01.png"
      },
            {
        title: "다데기 만들기",
        subtitle: "다져놓은 청양고추는 고춧가루(2), 간장(2), 설탕(0.2), 매실액(1), 다진마늘(0.2), 후춧가루(0.2)를넣고 다데기를 만들어 놔주시고요~",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1045_step_02.png"
      },
            {
        title: "면 넣기",
        subtitle: "끓일 물을 냄비에 올려주시고 물이 끓으면 칼국수면의 익힘정도를 약 1/3정도만 삶아주세요~",
        tip: "면을 따로 끓이면 국물에서 밀가루 풀내가 안나요!",
        image: "images_10000_recipes/recipe_steps_img/1045_step_03.png"
      },
      {
        title: "마무리",
        subtitle: "바지락살과 감자, 호박, 양파를 모두다 넣고 끓이다가 옆에 삶아놓은 면을 같이 넣고 좀 더 끓여주세요~",
        tip: "이때 국간장(3), 소금(2), 간마늘(1), 후춧가루(0.3)으로 국물간을 맞춰주세요",
        image: "images_10000_recipes/recipe_steps_img/1045_step_04.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1046
  1046: {
    id: 1046,
    categories: {
      type:       ["noodle"],
      ingredient: ["grain","flour","vegetable"],
      method:     ["boil","boil-soft"],
      situation:  ["snack","speed"],
      health:     ""
    },
    badge:        "NEW",
    badge_class:  "",
    rating:       4.8,
    review_count: 38,
    likes:        "4.8K",
    author_img:   "images_10000_recipes/chef_images/chef_10.png",
    title: "콩국수",
    author: "꼬순내집밥",
    subtitle: "고소하고 시원한 여름 별미 콩국수",
    image: "images_10000_recipes/recipe_card_img/noodle_10.png",
    servings: "2인분",
    time: "30분 이내",
    level: "초급",
    category: "면",
    subcategory: "면",
    tags: ["#콩국수", "#여름"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "소면", amount: "2인분" },
          { name: "콩(불린 것)", amount: "200g" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "소금", amount: "약간" },
          { name: "얼음", amount: "적당량" },
          { name: "오이", amount: "1/4개" }
        ]
      }
    ],
    steps: [
      {
        title: "콩물 만들기",
        subtitle: "먼저 두부1모, 땅콩버터1.5T, 깨5T, 물400ML, 설탕1/2T,소금1/2T를 믹서에 넣고 갈아주세요!",
        tip: "콩물은 차갑게 해야 더 맛있어요. 두부는 잘라 넣어주세요!",
        image: "images_10000_recipes/recipe_steps_img/1046_step_01.png"
      },
            {
        title: "면 삶기",
        subtitle: "소면을 삶아 찬물에 헹궈 그릇에 담아줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1046_step_02.png"
      },
            {
        title: "완성",
        subtitle: "차가운 콩물을 면 위에 붓고 오이채와 얼음을 올려 소금으로 간하여 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1046_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1047
  1047: {
    id: 1047,
    categories: {
      type:       ["noodle"],
      ingredient: ["flour","vegetable"],
      method:     ["boil","boil-soft"],
      situation:  ["special","speed"],
      health:     "diet"
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 112,
    likes:        "3.1K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "냉메밀국수",
    author: "밥차리라",
    subtitle: "쫄깃한 메밀면에 새콤한 쯔유 소스의 냉메밀",
    image: "images_10000_recipes/recipe_card_img/noodle_11.png",
    servings: "2인분",
    time: "15분 이내",
    level: "초급",
    category: "면",
    subcategory: "면",
    tags: ["#초간단", "#여름"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "메밀면", amount: "2인분" },
          { name: "무", amount: "50g" },
          { name: "대파", amount: "1/4대" },
          { name: "김", amount: "약간" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "쯔유", amount: "4숟가락" },
          { name: "물", amount: "4숟가락" },
          { name: "얼음", amount: "적당량" },
          { name: "고추냉이", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "쯔유 소스 만들기",
        subtitle: "냄비에 구운 양파, 구운 대파, 디포리와 멸치 1 주먹 물 5 컵을 넣어 줍니다. 간장 2 컵, 설탕 1 컵, 맛술 1/2 컵도 넣어 봅니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1047_step_01.png"
      },
      {
        title: "쯔유 소스 만들기",
        subtitle: "센 불에서 끓여 끓어오르면 약불로 줄여 40 분간 졸여 줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1047_step_02.png"
      },
      {
        title: "무 갈기",
        subtitle: "무는 잘게 썰어 물과 함께 믹서기에 넣고 갈아 거즈에 올려 물기를 짜줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1047_step_03.png"
      },
            {
        title: "면 삶기",
        subtitle: "메밀면을 삶아 찬물에 여러 번 헹궈 쫄깃하게 만들어줍니다.",
        tip: "메밀면은 찬물에 빠르게 헹궈야 찰기가 살아요",
        image: "images_10000_recipes/recipe_steps_img/1047_step_04.png"
      },
            {
        title: "완성",
        subtitle: "면을 그릇에 담고 얼음을 올린 뒤 소스와 고추냉이를 곁들여 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1047_step_05.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1048
  1048: {
    id: 1048,
    categories: {
      type:       ["noodle"],
      ingredient: ["flour","vegetable"],
      method:     ["boil","boil-soft"],
      situation:  ["special","speed"],
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       5.0,
    review_count: 82,
    likes:        "5.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "일본 우동",
    author: "밥차리라",
    subtitle: "일본식 진한 국물 우동 레시피",
    image: "images_10000_recipes/recipe_card_img/noodle_12.png",
    servings: "2인분",
    time: "15분 이내",
    level: "초급",
    category: "면",
    subcategory: "면",
    tags: ["#우동", "#일식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "우동면", amount: "2인분" },
          { name: "어묵", amount: "100g" },
          { name: "대파", amount: "1/4대" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "쯔유", amount: "3숟가락" },
          { name: "국간장", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "다시마", amount: "1장" },
          { name: "물", amount: "4컵" }
        ]
      }
    ],
    steps: [
      {
        title: "육수 만들기",
        subtitle: "2인분 기준으로 디포리 2마리와 국멸치, 건새우, 다시마 2장으로 육수를 우린다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1048_step_01.png"
      },
            {
        title: "간 맞추기",
        subtitle: "육수에 쯔유, 국간장으로 간하고 어묵을 넣어 끓여줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1048_step_02.png"
      },
            {
        title: "완성",
        subtitle: "우동면을 삶아 그릇에 담고 국물과 어묵, 대파를 올려 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1048_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1049
  1049: {
    id: 1049,
    categories: {
      type:       "jang yangnyeom",
      ingredient: "",
      method:     "",
      situation:  [""],
      health:     ""
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 34,
    likes:        "8.7K",
    author_img:   "images_10000_recipes/chef_images/chef_01.jpg",
    title: "간장양념",
    author: "만개의 레시피",
    subtitle: "만능으로 활용 가능한 간장 양념 레시피",
    image: "images_10000_recipes/recipe_card_img/jang_01.png",
    servings: "누구나",
    time: "15분 이내",
    level: "누구나",
    category: "장류/양념",
    subcategory: "장류",
    tags: ["#만능양념", "#간장"],
    ingredients: [
      {
        group: "조림 양념장 재료",
        items: [
          { name: "간장", amount: "1컵" },
          { name: "물", amount: "1컵" },
          { name: "설탕", amount: "1/2숟가락" },
          { name: "물엿", amount: "1숟가락" }
        ]
      },
      {
        group: "데리야끼 양념장 재료",
        items: [
          { name: "간장", amount: "3숟가락" },
          { name: "설탕", amount: "3숟가락" },
          { name: "다시마육수", amount: "4숟가락" },
          { name: "청주", amount: "3숟가락" },
          { name: "생강즙", amount: "1숟가락" }
        ]
      },
      {
        group: "맑은간장 양념장 재료",
        items: [
          { name: "양조간장", amount: "2숟가락" },
          { name: "다진파", amount: "1숟가락" },
          { name: "다진마늘", amount: "1/2숟가락" },
          { name: "참기름", amount: "1숟가락" }
        ]
      },
      {
        group: "초간장 양념장 재료",
        items: [
          { name: "간장", amount: "2숟가락" },
          { name: "물", amount: "2숟가락" },
          { name: "식초", amount: "1숟가락" },
          { name: "설탕", amount: "1/2ㄴ숟가락" }
        ]
      },
    ],
    steps: [
      {
        title: "조림용 양념장",
        subtitle: "진간장 8 / 설탕 1/ 물 4/ 물엿 4 ",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1049_step_01.png"
      },
      {
        title: "무침용 양념장",
        subtitle: "양조간장 4 / 다진파 2/ 다진마늘 1/ 참기름 4 ",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1049_step_02.png"
      },
      {
        title: "데리야끼용 양념장",
        subtitle: "간장 3 / 설탕 3/ 다시마육수 4/ 청주 3/ 생강즙 1 ",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1049_step_03.png"
      },
      {
        title: "초간장 양념장",
        subtitle: "간장 4 / 식초 2/ 물 4/ 설탕 1 ",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1049_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1050
  1050: {
    id: 1050,
    categories: {
      type:       "jang",
      ingredient: "pork",
      method:     "boil simmer",
      situation:  "",
      health:     ""
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 52,
    likes:        "8.2K",
    author_img:   "images_10000_recipes/chef_images/chef_02.jpg",
    title: "만능 간장",
    author: "조밍키♥",
    subtitle: "다양한 요리에 활용하는 만능 간장 만들기",
    image: "images_10000_recipes/recipe_card_img/jang_02.png",
    servings: "4인분",
    time: "15분 이내",
    level: "중급",
    category: "장류/양념",
    subcategory: "장류",
    tags: ["#만능간장", "#양념"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "간장", amount: "6컵" },
          { name: "간 돼지고기", amount: "3컵" },
        ]
      },
            {
        group: "양념",
        items: [
          { name: "설탕", amount: "1컵" },
         
        ]
      }
    ],
    steps: [
      {
        title: "고기 준비",
        subtitle: "갈아놓은 돼지고기를 종이컵으로 3컵을 준비합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1050_step_01.png"
      },
            {
        title: "조려서 만들기",
        subtitle: "간장 6컵과 설탕 1컵을 돼지고기에 함께 부어 주시구요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1050_step_02.png"
      },
            {
        title: "완성",
        subtitle: "만능간장 재료는 5분동안 끓여 주시면 돼요",
        tip: "각종 볶음, 조림, 나물에 활용 가능해요",
        image: "images_10000_recipes/recipe_steps_img/1050_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1051
  1051: {
    id: 1051,
    categories: {
      type:       "jang yangnyeom",
      ingredient: "",
      method:     "",
      situation:  "",
      health:     ""
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       5.0,
    review_count: 55,
    likes:        "7.9K",
    author_img:   "images_10000_recipes/chef_images/chef_03.jpg",
    title: "만능 고추장 양념",
    author: "김진옥요리가좋다",
    subtitle: "볶음, 무침 등 다용도로 쓰는 만능 고추장 양념",
    image: "images_10000_recipes/recipe_card_img/jang_03.png",
    servings: "4인분",
    time: "10분 이내",
    level: "초급",
    category: "장류/양념",
    subcategory: "장류",
    tags: ["#고추장", "#만능양념"],
    ingredients: [
      {
        group: "구이볶음용 양념 재료",
        items: [
          { name: "고추장", amount: "6숟가락" },
          { name: "설탕", amount: "2숟가락" },
          { name: "간장", amount: "1/2숟가락" },
          { name: "물", amount: "3숟가락" },
          { name: "다진마늘", amount: "1숟가락" },
          { name: "술", amount: "1숟가락" }
        ]
      },
      {
        group: "초고추장 양념장 재료",
        items: [
          { name: "고추장", amount: "3숟가락" },
          { name: "식초", amount: "2숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "물", amount: "1숟가락" },
          { name: "다진마늘", amount: "0.5숟가락" },
          { name: "깨소금", amount: "0.5숟가락" }
        ]
      },
      {
        group: "초회양념장 재료",
        items: [
          { name: "고추장", amount: "4숟가락" },
          { name: "식초", amount: "4숟가락" },
          { name: "설탕", amount: "2숟가락" },
          { name: "연겨자", amount: "1/2숟가락" },
          { name: "물엿", amount: "1숟가락" },
          { name: "소금", amount: "0.5숟가락" },
          { name: "통깨", amount: "0.5숟가락" },
          { name: "참기름", amount: "0.5숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "구이볶음용양념 만들기",
        subtitle: "고추장 12/ 설탕 4/ 간장 1/ 물 6/ 술 2/ 다진마늘 2",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1051_step_01.png"
      },
      {
        title: "초고추장 양념장 만들기",
        subtitle: "고추장 3/ 식초 2/ 물 1/ 설탕 6/ 깨소금 약간/ 다진마늘 약간",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1051_step_02.png"
      },
      {
        title: "초회용 양념장 만들기",
        subtitle: "고추장 8/ 설탕 4/ 물엿 2/소금 약간/ 통깨 약간/ 참기름 약간/ 식초 8/ 연겨자 1",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1051_step_03.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1052
  1052: {
    id: 1052,
    categories: {
      type:       "jang",
      ingredient: "",
      method:     "",
      situation:  "",
      health:     ""
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       5.0,
    review_count: 550,
    likes:        "12K",
    author_img:   "images_10000_recipes/chef_images/chef_04.png",
    title: "오래된 고추장 살리기",
    author: "뿅림이",
    subtitle: "묵은 고추장을 맛있게 되살리는 방법",
    image: "images_10000_recipes/recipe_card_img/jang_04.png",
    servings: "4인분",
    time: "10분 이내",
    level: "초급",
    category: "장류/양념",
    subcategory: "장류",
    tags: ["#고추장", "#초간단"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "오래된 고추장", amount: "500g" },
          { name: "조청", amount: "적당량" }
        ]
      },
            {
        group: "양념",
        items: [
        ]
      }
    ],
    steps: [
      {
        title: "오래된 고추장 준비",
        subtitle: "오래된 고추장에 조청을 넣어줍니다.",
        tip: "매실청으로 농도 조절해줘도 됩니다.",
        image: "images_10000_recipes/recipe_steps_img/1052_step_01.png"
      },
            {
        title: "재료 추가",
        subtitle: "조청이 따로 놀지 않도록 꼼꼼하게 잘 섞어주세요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1052_step_02.png"
      },
            {
        title: "발효시키기",
        subtitle: "고추장을 떨어뜨려 보아서 무겁게 흘러내릴 정도의 농도면 완성입니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1052_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1053
  1053: {
    id: 1053,
    categories: {
      type:       "jang yangnyeom",
      ingredient: "grain vegetable",
      method:     "boil",
      situation:  "speed diet",
      health:     "stomach intestine liver"
    },
    badge:        null,
    badge_class:  "",
    rating:       3.7,
    review_count: 237,
    likes:        "7K",
    author_img:   "images_10000_recipes/chef_images/chef_05.jpg",
    title: "강된장",
    author: "뽀유TV",
    subtitle: "구수하고 진한 강된장 레시피",
    image: "images_10000_recipes/recipe_card_img/jang_05.png",
    servings: "3인분",
    time: "5분 이내",
    level: "초급",
    category: "장류/양념",
    subcategory: "장류",
    tags: ["#된장", "#밥도둑"],
    ingredients: [
      {
        group: "주재료",
        items: [
          
          { name: "두부", amount: "1/4모" },
          { name: "호박", amount: "1/4개" },
          { name: "표고버섯", amount: "2개" },
          { name: "감자", amount: "1개" },
        ]
      },
            {
        group: "양념",
        items: [
          { name: "집된장", amount: "4숟가락" },
          { name: "미소된장", amount: "2숟가락" },
          { name: "고추장", amount: "1숟가락" },
          { name: "고추가루", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "설탕", amount: "1숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "채소 손질",
        subtitle: "두부, 호박, 버섯을 잘게 다져줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1053_step_01.png"
      },
            {
        title: "볶기",
        subtitle: "냄비에 참기름을 두르고 다진 채소를 볶다가 된장.고추장.설탕등을 다같이 넣고 볶아주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1053_step_02.png"
      },
            {
        title: "조리기",
        subtitle: "뚝배기나 유리그릇에 담아 식힌뒤 냉장고에 넣고 드심 맛나게 드실수 있습니다",
        tip: "많이 짠 된장은 양조절을 하셔야됩니다. 짠맛이 강하면 전분물을 만들어 섞어주세요",
        image: "images_10000_recipes/recipe_steps_img/1053_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1054
  1054: {
    id: 1054,
    categories: {
      type:       "jang yangnyeom",
      ingredient: "",
      method:     "",
      situation:  "",
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.5,
    review_count: 28,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_06.png",
    title: "만능 된장 양념",
    author: "엘린84",
    subtitle: "국, 찌개, 무침에 모두 쓰는 만능 된장 양념",
    image: "images_10000_recipes/recipe_card_img/jang_06.png",
    servings: "4인분",
    time: "10분 이내",
    level: "초급",
    category: "장류/양념",
    subcategory: "양념",
    tags: ["#된장", "#만능양념"],
    ingredients: [
      {
        group: "무침양념장 재료",
        items: [
          { name: "된장", amount: "2숟가락" },
          { name: "맛술", amount: "1숟가락" },
          { name: "부순깨", amount: "1숟가락" },
          { name: "참기름", amount: "1/2숟가락" }
        ]
      },
      {
        group: "볶음양념장 재료",
        items: [
          { name: "된장", amount: "2숟가락" },
          { name: "고추장", amount: "1숟가락" },
          { name: "맛술", amount: "1숟가락" },
          { name: "올리고당", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" }
        ]
      },
      {
        group: "된장조림양념장 재료",
        items: [
          { name: "된장", amount: "4숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "청주", amount: "1숟가락" },
          { name: "맛술", amount: "2숟가락" },
        ]
      },
    ],
    steps: [
      {
        title: "나물무침용 양념장",
        subtitle: "된장 4/ 맛술 2/ 부순 깨 2/ 참기름 1",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1054_step_01.png"
      },
      {
        title: "볶음용 양념장",
        subtitle: "된장 2/ 고추장 1/ 맛술 1/ 올리고당 1/ 참기름 1",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1054_step_02.png"
      },
      {
        title: "조림용 양념장",
        subtitle: "된장 4/ 설탕 1/ 청주 1/ 맛술 2",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1054_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1055
  1055: {
    id: 1055,
    categories: {
      type:       "yangnyeom",
      ingredient: "",
      method:     "bibim",
      situation:  "speed",
      health:     ""
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       3.5,
    review_count: 122,
    likes:        "5.1K",
    author_img:   "images_10000_recipes/chef_images/chef_07.png",
    title: "비빔국수 양념장",
    author: "살찌우는엄마",
    subtitle: "새콤달콤 비빔국수 양념장 황금비율",
    image: "images_10000_recipes/recipe_card_img/jang_07.png",
    servings: "2인분",
    time: "5분 이내",
    level: "초급",
    category: "장류/양념",
    subcategory: "양념",
    tags: ["#비빔국수", "#양념장"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "고추장", amount: "2숟가락" },
          { name: "간장", amount: "1숟가락" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "식초", amount: "1.5숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "통깨", amount: "약간" },
          { name: "다진마늘", amount: "0.5숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "오이 썰기",
        subtitle: "먼저 오이 촥촥 채 썰어 뒀어요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1055_step_01.png"
      },
      {
        title: "양념장 준비",
        subtitle: "준비한 양념장 몽땅 넣어서 풀어주면 된답니다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1055_step_02.png"
      },
      {
        title: "면과 함께 섞어주세요",
        subtitle: "면을 삶은 뒤 양념장과 함께 들들 섞어주면 완성~!",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1055_step_03.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1056
  1056: {
    id: 1056,
    categories: {
      type:       "yangnyeom",
      ingredient: "vegetable",
      method:     "seasoned bibim",
      situation:  "speed",
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 94,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_08.png",
    title: "달래양념장",
    author: "판교댁쏭아",
    subtitle: "봄 향기 가득한 달래양념장 만들기",
    image: "images_10000_recipes/recipe_card_img/jang_08.png",
    servings: "3인분",
    time: "30분 이내",
    level: "중급",
    category: "장류/양념",
    subcategory: "양념",
    tags: ["#달래", "#봄나물"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "달래", amount: "100g" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "간장", amount: "2숟가락" },
          { name: "고춧가루", amount: "1숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "식초", amount: "1숟가락" },
          { name: "설탕", amount: "0.5숟가락" },
          { name: "통깨", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "달래 손질",
        subtitle: "달래는 뿌리 부분을 잘 씻고 3cm 길이로 썰어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1056_step_01.png"
      },
            {
        title: "양념 만들기",
        subtitle: "간장, 고춧가루, 참기름, 식초, 설탕을 섞어 양념장을 만들어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1056_step_02.png"
      },
            {
        title: "버무리기",
        subtitle: "달래에 양념장을 넣고 살살 버무려 통깨를 뿌려 완성합니다.",
        tip: "달래는 오래 무치면 숨이 죽어요. 먹기 직전에 버무려주세요",
        image: "images_10000_recipes/recipe_steps_img/1056_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1057
  1057: {
    id: 1057,
    categories: {
      type:       "yangnyeom",
      ingredient: "vegetable",
      method:     "boil",
      situation:  "snack",
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 142,
    likes:        "3.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "탕수육 소스",
    author: "밥차리라",
    subtitle: "찍먹/부먹 모두 맛있는 탕수육 소스",
    image: "images_10000_recipes/recipe_card_img/jang_09.png",
    servings: "3인분",
    time: "15분 이내",
    level: "중급",
    category: "장류/양념",
    subcategory: "양념",
    tags: ["#탕수육", "#소스"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "진간장", amount: "3숟가락" },
          { name: "설탕", amount: "2숟가락" },
          { name: "식초", amount: "2숟가락" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "물", amount: "1컵" },
          { name: "전분물", amount: "3숟가락" },
          { name: "파인애플", amount: "50g" },
          { name: "당근", amount: "30g" },
          { name: "피망", amount: "30g" }
        ]
      }
    ],
    steps: [
      {
        title: "채소 손질",
        subtitle: "사과, 양파, 당근, 쪽파 등을 먹기 좋게 썰어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1057_step_01.png"
      },
            {
        title: "소스 끓이기",
        subtitle: "냄비에 감자전분물을 붓고 간장3큰술, 황설탕 3큰술, 식초 5큰술 넣고 섞다가",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1057_step_02.png"
      },
            {
        title: "마무리",
        subtitle: "채소와 파인애플을 넣고 완성합니다.",
        tip: "찍먹이냐 부먹이냐는 취향대로!",
        image: "images_10000_recipes/recipe_steps_img/1057_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1058
  1058: {
    id: 1058,
    categories: {
      type:       "salad yangnyeom",
      ingredient: "dairy",
      method:     "bibim",
      situation:  "lunchbox",
      health:     ""
    },
    badge:        "NEW",
    badge_class:  "",
    rating:       4.8,
    review_count: 38,
    likes:        "4.8K",
    author_img:   "images_10000_recipes/chef_images/chef_10.png",
    title: "일식 양배추 샐러드 드레싱",
    author: "꼬순내집밥",
    subtitle: "일본식 레스토랑 양배추 샐러드 드레싱",
    image: "images_10000_recipes/recipe_card_img/jang_10.png",
    servings: "3인분",
    time: "30분 이내",
    level: "초급",
    category: "장류/양념",
    subcategory: "양념",
    tags: ["#드레싱", "#일식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "마요네즈", amount: "4숟가락" },
          { name: "우유", amount: "2숟가락" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "설탕", amount: "1숟가락" },
          { name: "식초", amount: "0.5숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "양배추 썰기",
        subtitle: "양배추는 얇게 채 썰어 얼음 물에 담가 놓는다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1058_step_01.png"
      },
            {
        title: "소스 준비",
        subtitle: "소스 재료를 믹서기에 넣어 갈아 완성한다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1058_step_02.png"
      },
            {
        title: "간 맞추기",
        subtitle: "소금과 후추로 간을 맞추어 완성합니다.",
        tip: "냉장 보관하면 3일까지 사용 가능해요",
        image: "images_10000_recipes/recipe_steps_img/1058_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1059
  1059: {
    id: 1059,
    categories: {
      type:       " salad yangnyeom",
      ingredient: "fruit",
      method:     "bibim",
      situation:  "speed lunchbox",
      health:     "stomach"
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 112,
    likes:        "3.1K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "키위 드레싱",
    author: "밥차리라",
    subtitle: "상큼한 키위로 만드는 과일 드레싱",
    image: "images_10000_recipes/recipe_card_img/jang_11.png",
    servings: "2인분",
    time: "15분 이내",
    level: "초급",
    category: "장류/양념",
    subcategory: "양념",
    tags: ["#드레싱", "#키위"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "키위", amount: "2개" },
          { name: "올리브오일", amount: "3숟가락" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "식초", amount: "1숟가락" },
          { name: "꿀", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "키위 손질",
        subtitle: "키위는 껍질을 벗겨 한 입 크기로썬다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1059_step_01.png"
      },
      {
        title: "양파 손질",
        subtitle: "양파는 한 입 크기로 썬 후 찬물에 15분 담가 건진다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1059_step_02.png"
      },
            {
        title: "드레싱 만들기",
        subtitle: "믹서기에 모든 재료를 넣고 간다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1059_step_03.png"
      },
            {
        title: "마무리",
        subtitle: "샐러드 위에 드레싱을 뿌려 완성한다.",
        tip: "원하는 과일을 올려보세요",
        image: "images_10000_recipes/recipe_steps_img/1059_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1060
  1060: {
    id: 1060,
    categories: {
      type:       "jam",
      ingredient: "fruit",
      method:     "boil simmer",
      situation:  "snack lunchbox",
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       5.0,
    review_count: 82,
    likes:        "5.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "딸기잼",
    author: "밥차리라",
    subtitle: "신선한 딸기로 만드는 수제 딸기잼",
    image: "images_10000_recipes/recipe_card_img/jang_12.png",
    servings: "4인분",
    time: "15분 이내",
    level: "초급",
    category: "장류/양념",
    subcategory: "잼",
    tags: ["#잼", "#딸기"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "딸기", amount: "500g" },
          { name: "소금", amount: "0.3스푼" },
          { name: "베이킹 소다", amount: "250g" },
          { name: "설탕", amount: "250g" }
        ]
      },
            {
        group: "양념",
        items: [
        ]
      }
    ],
    steps: [
      {
        title: "딸기 손질",
        subtitle: "딸기에 베이킹소다를 뿌려주고 물을 담아 5분 정도 담가놓아요.",
        tip: "물기가 남아 있으면 잼이 묽어질 수 있으니 물은 제거해 주세요.",
        image: "images_10000_recipes/recipe_steps_img/1060_step_01.png"
      },
            {
        title: "으깨기",
        subtitle: "딸기잼 만들 웍에 손질한 딸기를 넣고 포크나 으깨기로 대충 으깨주세요.",
        tip: "딸기잼에 약간의 덩어리가 남아 있으면 오히려 씹는 식감이 좋아요",
        image: "images_10000_recipes/recipe_steps_img/1060_step_02.png"
      },
      {
        title: "끓이기",
        subtitle: "분량의 설탕을 담고, 중불에서 설탕이 녹을 때까지 저어가면서 끓여주세요.	",
        tip: "이때 올라오는 거품은 걷어내 주세요. 소금 0.3T 넣어주세요.",
        image: "images_10000_recipes/recipe_steps_img/1060_step_03.png"
      },
            {
        title: "마무리",
        subtitle: "소독한 유리병에 담아 식힌 후 냉장 보관해 주세요",
        tip: " 딸기잼이 흩어지지 않고 동글 뭉쳐 있으면 적당한 딸기잼 농도가 된 거예요.",
        image: "images_10000_recipes/recipe_steps_img/1060_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1061
  1061: {
    id: 1061,
    categories: {
      type:       "salad western",
      ingredient: "grain vegetable egg pork",
      method:     "bibim boil-soft",
      situation:  "lunchbox speed diet",
      health:     "stomach liver blood-sugar"
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 34,
    likes:        "8.7K",
    author_img:   "images_10000_recipes/chef_images/chef_01.jpg",
    title: "콥샐러드",
    author: "시크제이맘",
    subtitle: "다양한 재료가 가득한 든든한 콥샐러드",
    image: "images_10000_recipes/recipe_card_img/salad_01.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#샐러드", "#다이어트"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "옥수수콘", amount: "100g" },
          { name: "로메인", amount: "100g" },
          { name: "방울토마토", amount: "5개" },
          { name: "삶은 달걀", amount: "1개" },
          { name: "베이컨", amount: "3줄" },
          { name: "아보카도", amount: "1/2개" }
        ]
      },
            {
        group: "드레싱",
        items: [
          { name: "올리브오일", amount: "2숟가락" },
          { name: "레몬즙", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "드레싱 만들기",
        subtitle: "렌치 드레싱은 계량해 놓은 모든 재료를 볼에 넣고 섞어주기만 하면 돼요. 소금은 1/2t, 후추는 톡톡톡 세 번, 파슬리는 보기 좋게 뿌려주시면 된답니다.	",
        tip: "이렇게 만든 드레싱은 2번 정도 사용할 수 있는 양이에요. 냉장보관해서 1주일은 드실 수 있어요.",
        image: "images_10000_recipes/recipe_steps_img/1061_step_01.png"
      },
      {
        title: "재료 손질",
        subtitle: "로메인은 한 입 크기로 뜯고 토마토, 아보카도, 계란, 베이컨은 먹기 좋게 잘라줍니다.",
        tip: "샐러드 재료의 크기가 비슷하면 이뻐요",
        image: "images_10000_recipes/recipe_steps_img/1061_step_02.png"
      },
      {
        title: "마무리",
        subtitle: "재료들을 일렬로 색감을 고려하며 진열합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1061_step_03.png"
      },
            
            
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1062
  1062: {
    id: 1062,
    categories: {
      type:       "salad western",
      ingredient: "vegetable dairy",
      method:     "",
      situation:  "diet speed",
      health:     ["stomach","intestine","liver","blood-sugar","anti-cancer"]
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 52,
    likes:        "8.2K",
    author_img:   "images_10000_recipes/chef_images/chef_02.jpg",
    title: "카프레제",
    author: "조밍키♥",
    subtitle: "모짜렐라 치즈와 토마토의 이탈리안 카프레제",
    image: "images_10000_recipes/recipe_card_img/salad_02.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#이탈리안", "#카프레제"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "모짜렐라 치즈", amount: "200g" },
          { name: "토마토", amount: "2개" },
          { name: "바질잎", amount: "10장" }
        ]
      },
            {
        group: "드레싱",
        items: [
          { name: "올리브오일", amount: "3숟가락" },
          { name: "발사믹식초", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "모짜렐라 치즈와 토마토를 준비합니다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1062_step_01.png"
      },
      {
        title: "재료 썰기",
        subtitle: "모짜렐라 치즈와 토마토를 1cm 두께로 썰어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1062_step_02.png"
      },
            {
        title: "플레이팅",
        subtitle: "그릇에 토마토와 치즈를 번갈아 올리고 바질잎을 사이사이에 넣어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1062_step_03.png"
      },
      
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1063
  1063: {
    id: 1063,
    categories: {
      type:       "salad western",
      ingredient: "chicken vegetable fruit",
      method:     "boil-soft grill",
      situation:  "diet lunchbox speed",
      health:     ["stomach","intestine","liver","blood-sugar"]
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       5.0,
    review_count: 55,
    likes:        "7.9K",
    author_img:   "images_10000_recipes/chef_images/chef_03.jpg",
    title: "닭가슴살 샐러드",
    author: "김진옥요리가좋다",
    subtitle: "고단백 닭가슴살로 만드는 다이어트 샐러드",
    image: "images_10000_recipes/recipe_card_img/salad_03.png",
    servings: "1인분",
    time: "10분 이내",
    level: "초급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#다이어트", "#닭가슴살"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "닭가슴살", amount: "150g" },
          { name: "양상추", amount: "100g" },
          { name: "방울토마토", amount: "5개" },
          { name: "오이", amount: "1/4개" }
        ]
      },
            {
        group: "드레싱",
        items: [
          { name: "올리브오일", amount: "2숟가락" },
          { name: "레몬즙", amount: "1숟가락" },
          { name: "꿀", amount: "0.5숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "닭가슴살 준비",
        subtitle: "닭가슴살을 삶거나 구워 먹기 좋게 잘라줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1063_step_01.png"
      },
            {
        title: "채소 손질",
        subtitle: "양상추는 한 입 크기로 뜯고 방울토마토, 양파는 먹기 좋게 썰어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1063_step_02.png"
      },
            {
        title: "드레싱 뿌리기",
        subtitle: "모든 재료를 그릇에 담고 드레싱을 뿌려 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1063_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1064
  1064: {
    id: 1064,
    categories: {
      type:       "salad western",
      ingredient: "vegetable grain",
      method:     "bibim",
      situation:  "diet speed lunchbox",
      health:     ["stomach","intestine","liver","blood-sugar","anti-cancer"]
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       5.0,
    review_count: 550,
    likes:        "12K",
    author_img:   "images_10000_recipes/chef_images/chef_04.png",
    title: "양배추 샐러드",
    author: "뿅림이",
    subtitle: "아삭아삭 양배추 샐러드 레시피",
    image: "images_10000_recipes/recipe_card_img/salad_04.png",
    servings: "2인분",
    time: "10분 이내",
    level: "초급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#양배추", "#초간단"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "양배추", amount: "200g" },
          { name: "당근", amount: "1/4개" },
          { name: "옥수수캔", amount: "50g" }
        ]
      },
            {
        group: "드레싱",
        items: [
          { name: "마요네즈", amount: "3숟가락" },
          { name: "식초", amount: "1숟가락" },
          { name: "설탕", amount: "0.5숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "채소 손질",
        subtitle: "양배추 1/5통 (150g) 최대한 가늘게 채썰어 찬물에 5분간 담갔다가 물기를 빼줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1064_step_01.png"
      },
            {
        title: "드레싱 만들기",
        subtitle: "분량의 양념 재료들을 한곳에 담아 모두 잘 섞어주세요 알룰로스 or 설탕 3큰술 식초 4큰술, 맛술 1큰술 진간장 1/2큰술, 다진마늘 1/2큰술 ",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1064_step_02.png"
      },
            {
        title: "버무리기",
        subtitle: "채썬 양배추와 물기 꼭 짜낸 오이 파프리카 모두 한곳에 담아준 뒤 소스, 곱게 간 통깨 1큰술 넣어 살살 무쳐내면 완성입니다.",
        tip: "재료들의 물기는 최대한 제거한 후 한곳에 담아주세요",
        image: "images_10000_recipes/recipe_steps_img/1064_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1065
  1065: {
    id: 1065,
    categories: {
      type:       "salad western",
      ingredient: "chicken vegetable grain",
      method:     "bibim",
      situation:  "diet speed lunchbox",
      health:     ["blood-sugar"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.7,
    review_count: 237,
    likes:        "7K",
    author_img:   "images_10000_recipes/chef_images/chef_05.jpg",
    title: "케이준 치킨 샐러드",
    author: "뽀유TV",
    subtitle: "케이준 시즈닝으로 맛을 낸 치킨 샐러드",
    image: "images_10000_recipes/recipe_card_img/salad_05.png",
    servings: "2인분",
    time: "5분 이내",
    level: "초급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#케이준", "#치킨샐러드"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "닭가슴살", amount: "150g" },
          { name: "로메인", amount: "100g" },
          { name: "방울토마토", amount: "5개" }
        ]
      },
            {
        group: "양념/드레싱",
        items: [
          { name: "케이준 시즈닝", amount: "1숟가락" },
          { name: "올리브오일", amount: "3숟가락" },
          { name: "레몬즙", amount: "1숟가락" },
          { name: "소금", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: " 아무 샐러드야채 쓰셔도 좋아요. 치킨은 순살치킨과 치킨봉 남은거 사용했어요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1065_step_01.png"
      },
            {
        title: "닭가슴살 굽기",
        subtitle: "중약불에서 후라이팬에 기름없이 치킨을 바삭하게 구워주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1065_step_02.png"
      },
      {
        title: "드레싱 준비",
        subtitle: "마요네즈 1큰술, 허니머스타드 2큰술, 꿀 1큰술, 핫소스 1큰술, 레몬즙 2큰술, 후추 톡톡 넣고 잘 저어서 케이준소스 만들었어요. 핫소스는 치킨집에서 딸려오는거 쓰셔도 되고 저는 타바스코 넣었답니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1065_step_03.png"
      },
            {
        title: "플레이팅",
        subtitle: "채소를 그릇에 담고 썰어낸 닭가슴살을 올려 드레싱을 뿌려 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1065_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1066
  1066: {
    id: 1066,
    categories: {
      type:       "salad western",
      ingredient: "grain egg nuts fruit",
      method:     "boil-soft bibim",
      situation:  "diet speed lunchbox",
      health:     ["stomach","intestine"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.5,
    review_count: 28,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_06.png",
    title: "고구마 샐러드",
    author: "엘린84",
    subtitle: "달콤한 고구마로 만드는 부드러운 샐러드",
    image: "images_10000_recipes/recipe_card_img/salad_06.png",
    servings: "2인분",
    time: "10분 이내",
    level: "초급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#고구마", "#달콤"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "고구마", amount: "2개" },
          { name: "마요네즈", amount: "3숟가락" },
          { name: "삶은 달걀", amount: "1개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "설탕", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "식초", amount: "0.5숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "고구마 익히기",
        subtitle: "고구마를 내열 그릇에 담고 물 2큰술을 넣어 위로 랩을 싸거나 실리콘 뚜껑을 덮어 전자레인지에서 4분여간 돌려줍니다.",
        tip: "포크로 고구마를 찔러보아서 부드럽게 들어갈 정도로 익혀줬어요",
        image: "images_10000_recipes/recipe_steps_img/1066_step_01.png"
        
      },
      {
        title: "버무리기",
        subtitle: "우유 2큰술, 하프 마요네즈 2큰술, 올리고당 1작은술, 버터 1작은술, 소금 약간을 넣고 섞어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1066_step_02.png"
      },
      {
        title: "건포도 넣기",
        subtitle: "마지막에 건포도를 넣고 한 번 더 섞어줍니다.",
        tip: "냉장고에 차갑게 해서 먹으면 더 맛있어요",
        image: "images_10000_recipes/recipe_steps_img/1066_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1067
  1067: {
    id: 1067,
    categories: {
      type:       "salad",
      ingredient: "fruit vegetable egg",
      method:     "bibim boil-soft",
      situation:  "diet speed lunchbox",
      health:     ["stomach","intestine","liver","blood-sugar","anti-cancer"]
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       3.5,
    review_count: 122,
    likes:        "5.1K",
    author_img:   "images_10000_recipes/chef_images/chef_07.png",
    title: "사라다",
    author: "살찌우는엄마",
    subtitle: "추억의 마카로니 사라다 레시피",
    image: "images_10000_recipes/recipe_card_img/salad_07.png",
    servings: "3인분",
    time: "5분 이내",
    level: "초급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#사라다", "#추억의맛"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "마카로니", amount: "150g" },
          { name: "달걀", amount: "2개" },
          { name: "당근", amount: "1/4개" },
          { name: "오이", amount: "1/4개" }
        ]
      },
            {
        group: "드레싱",
        items: [
          { name: "마요네즈", amount: "4숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "식초", amount: "0.5숟가락" },
          { name: "소금", amount: "약간" }
        ]
      }
    ],
    steps: [

      {
        title: "재료 준비",
        subtitle: "달걀은 삶아 으깨고 감자, 브로콜리, 감, 사과, 맛살을 먹기 좋게 썰어 줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1067_step_01.png"
      },
      {
        title: "섞기",
        subtitle: "준비된 재료를 모두 양푼에 담아 주세요. 옥수수통조림은 물을 빼고 넣어주시고 건포도, 견과류도 넣어주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1067_step_02.png"
      },
      {
        title: "버무리기",
        subtitle: "올리고당1큰술을 넣고 마요네즈는 양을 조절해 넣고 주걱으로 잘 섞어주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1067_step_03.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1068
  1068: {
    id: 1068,
    categories: {
      type:       "salad western",
      ingredient: "vegetable",
      method:     "bibim",
      situation:  "diet speed lunchbox",
      health:     ["stomach","intestine","liver","blood-sugar","anti-cancer"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 94,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_08.png",
    title: "당근라페",
    author: "판교댁쏭아",
    subtitle: "프랑스식 당근 샐러드 당근라페",
    image: "images_10000_recipes/recipe_card_img/salad_08.png",
    servings: "2인분",
    time: "30분 이내",
    level: "중급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#당근라페", "#프랑스식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "당근", amount: "2개" }
        ]
      },
            {
        group: "드레싱",
        items: [
          { name: "올리브오일", amount: "3숟가락" },
          { name: "레몬즙", amount: "1숟가락" },
          { name: "꿀", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" },
          { name: "파슬리", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "당근 채 썰기",
        subtitle: "당근을 곱게 채 썰어줍니다.",
        tip: "소금 한스푼 넣고 10분 절여주세요.",
        image: "images_10000_recipes/recipe_steps_img/1068_step_01.png"
      },
            {
        title: "드레싱 만들기",
        subtitle: "올리브유3스푼, 홀그레인머스타드1스푼, 설탕1스푼반, 식초1스푼, 레몬즙 1스푼 넣고 잘섞어주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1068_step_02.png"
      },
            {
        title: "마무리",
        subtitle: "당근에 드레싱을 넣고 버무려 냉장고에 30분 이상 숙성시켜 완성합니다.",
        tip: "오래 둘수록 맛이 깊어져요",
        image: "images_10000_recipes/recipe_steps_img/1068_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1069
  1069: {
    id: 1069,
    categories: {
      type:       "salad western",
      ingredient: "vegetable",
      method:     "bibim",
      situation:  "diet speed lunchbox",
      health:     ["stomach","intestine","liver","blood-sugar","anti-cancer"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 142,
    likes:        "3.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "오이샐러드",
    author: "밥차리라",
    subtitle: "아삭하고 시원한 오이샐러드 황금레시피",
    image: "images_10000_recipes/recipe_card_img/salad_09.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#오이", "#시원한"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "오이", amount: "2개" },
          { name: "양파", amount: "1/4개" }
        ]
      },
            {
        group: "드레싱",
        items: [
          { name: "간장", amount: "1숟가락" },
          { name: "식초", amount: "1숟가락" },
          { name: "설탕", amount: "0.5숟가락" },
          { name: "참기름", amount: "1숟가락" },
          { name: "고춧가루", amount: "0.5숟가락" },
          { name: "통깨", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 손질",
        subtitle: "오이와 토마토, 맛살은 한입 크기로 썬다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1069_step_01.png"
      },
            {
        title: "드레싱 만들기",
        subtitle: "[드레싱] 간장 1T, 식초 1/2T, 연겨자 1/3T, 올리고당 1T, 포도씨유 1T",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1069_step_02.png"
      },
            {
        title: "버무리기",
        subtitle: "드레싱에 채소와 맛살을 버무린 뒤 그릇에 담아 마무리.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1069_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1070
  1070: {
    id: 1070,
    categories: {
      type:       "salad western",
      ingredient: "vegetable grain",
      method:     "bibim",
      situation:  "diet speed lunchbox",
      health:     ["stomach","intestine","liver","blood-sugar","anti-cancer"]
    },
    badge:        "NEW",
    badge_class:  "",
    rating:       4.8,
    review_count: 38,
    likes:        "4.8K",
    author_img:   "images_10000_recipes/chef_images/chef_10.png",
    title: "아보카도 두부 샐러드",
    author: "꼬순내집밥",
    subtitle: "크리미한 아보카도와 두부로 만드는 건강 샐러드",
    image: "images_10000_recipes/recipe_card_img/salad_10.png",
    servings: "2인분",
    time: "30분 이내",
    level: "초급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#아보카도", "#건강식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "아보카도", amount: "1개" },
          { name: "두부", amount: "1/2모" },
          { name: "방울토마토", amount: "5개" }
        ]
      },
            {
        group: "드레싱",
        items: [
          { name: "올리브오일", amount: "2숟가락" },
          { name: "레몬즙", amount: "1숟가락" },
          { name: "간장", amount: "0.5숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 손질",
        subtitle: "두부는 전자렌지에 1분 돌려 물기를 빼요. 키친타올로 물기를 닦아주고 한입 크기로 잘라요.",
        tip: "아보카도는 레몬즙을 뿌려두면 갈변을 막을 수 있어요",
        image: "images_10000_recipes/recipe_steps_img/1070_step_01.png"
      },
            {
        title: "쪽파 & 아보카도 준비",
        subtitle: "쩍파는 송송 썰고, 아보카도는 씨를 빼고 얇게 썰어요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1070_step_02.png"
      },
            {
        title: "드레싱 뿌리기",
        subtitle: "분량의 양념 재료를 섞어서 드레싱을 만들어요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1070_step_03.png"
      },
      {
        title: "재료 손질",
        subtitle: "접시 위에 두부와 아보카도를 번갈아 올려요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1070_step_04.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1071
  1071: {
    id: 1071,
    categories: {
      type:       "salad western",
      ingredient: "vegetable fruit grain",
      method:     "bibim",
      situation:  "diet speed lunchbox",
      health:     ["stomach","intestine","liver","blood-sugar","anti-cancer"]
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 112,
    likes:        "3.1K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "사과 코울슬로",
    author: "밥차리라",
    subtitle: "상큼한 사과가 들어간 코울슬로 샐러드",
    image: "images_10000_recipes/recipe_card_img/salad_11.png",
    servings: "3인분",
    time: "15분 이내",
    level: "초급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#코울슬로", "#사과"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "사과", amount: "1개" },
          { name: "양배추", amount: "200g" },
          { name: "당근", amount: "1/4개" }
        ]
      },
            {
        group: "드레싱",
        items: [
          { name: "마요네즈", amount: "3숟가락" },
          { name: "사과식초", amount: "1숟가락" },
          { name: "설탕", amount: "1숟가락" },
          { name: "소금", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "채소 손질",
        subtitle: "양배추와 당근은 채 썰고 사과는 얇게 썰어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1071_step_01.png"
      },
            {
        title: "드레싱 만들기",
        subtitle: "마요네즈, 사과식초, 설탕, 소금을 섞어 드레싱을 만들어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1071_step_02.png"
      },
            {
        title: "버무리기",
        subtitle: "볼에 썰어놓은 야채, 호두를 넣고 드레싱에 살살 섞은 후 그릇에 담아주세요",
        tip: "기호에 따라 모닝빵에 넣어 드셔도 맛있답니다.",
        image: "images_10000_recipes/recipe_steps_img/1071_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1072
  1072: {
    id: 1072,
    categories: {
      type:       "sala",
      ingredient: "vegetable fruit nuts",
      method:     "bibim boil-soft",
      situation:  "diet speed lunchbox",
      health:     ["stomach","intestine","liver","blood-sugar","anti-cancer"]
    },
    badge:        null,
    badge_class:  "",
    rating:       5.0,
    review_count: 82,
    likes:        "5.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "단호박 샐러드",
    author: "밥차리라",
    subtitle: "달콤하고 부드러운 단호박 샐러드",
    image: "images_10000_recipes/recipe_card_img/salad_12.png",
    servings: "2인분",
    time: "15분 이내",
    level: "초급",
    category: "샐러드",
    subcategory: "샐러드",
    tags: ["#단호박", "#달콤"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "단호박", amount: "1/4개" },
          { name: "아몬드슬라이스", amount: "2숟가락" },
          { name: "크랜베리", amount: "1숟가락" }
        ]
      },
            {
        group: "드레싱",
        items: [
          { name: "마요네즈", amount: "2숟가락" },
          { name: "꿀", amount: "1숟가락" },
          { name: "소금", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "단호박 익히기",
        subtitle: "단호박을 전자레인지에 8분 정도 돌려 부드럽게 익혀줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1072_step_01.png"
      },
            {
        title: "으깨기",
        subtitle: "익힌 단호박을 적당히 으깨줍니다.",
        tip: "완전히 으깨지 말고 식감이 살도록 조금 뭉개둬요",
        image: "images_10000_recipes/recipe_steps_img/1072_step_02.png"
      },
            {
        title: "버무리기",
        subtitle: "마요네즈 1스푼 넣어주시고 매실약1.아보카도오일1스푼 넣어서 골고루 섞어주세요. 다진계란과 야채을 넣어 골고루 섞어주세요 견과류도 넣어주세요",
        tip: "플레인요구르트 넣으셔도 됩니다",
        image: "images_10000_recipes/recipe_steps_img/1072_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1073
  1073: {
    id: 1073,
    categories: {
      type:       " main-banchan western",
      ingredient: "beef vegetable flour egg",
      method:     "grill",
      situation:  "special lunchbox",
      health:     [""]
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 34,
    likes:        "8.7K",
    author_img:   "images_10000_recipes/chef_images/chef_01.jpg",
    title: "함박스테이크",
    author: "시크제이맘",
    subtitle: "부드럽고 촉촉한 수제 함박스테이크",
    image: "images_10000_recipes/recipe_card_img/western_01.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "양식",
    subcategory: "양식",
    tags: ["#함박스테이크", "#양식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "소고기 다짐육", amount: "300g" },
          { name: "양파", amount: "1/2개" },
          { name: "빵가루", amount: "3숟가락" },
          { name: "달걀", amount: "1개" }
        ]
      },
            {
        group: "소스",
        items: [
          { name: "케첩", amount: "3숟가락" },
          { name: "우스터소스", amount: "1숟가락" },
          { name: "버터", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "야채 볶기",
        subtitle: "달군 팬에 약간의 올리브유를 두르고, 다진양파를 넣은 후 약간의 소금, 후추로 밑간하여 볶아 식혀주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1073_step_01.png"
      },
      {
        title: "패티 만들기",
        subtitle: "볶은 양파는 고기양념 재료와 섞어 충분히 치대고, 4등분하여 둥글게 빚고 가운데 부분을 살짝 납작하게 눌러주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1073_step_02.png"
      },
            {
        title: "굽기",
        subtitle: "팬에 버터를 두르고 패티를 약불에서 앞뒤로 노릇하게 구워줍니다.",
        tip: "약불에서 천천히 구워야 속까지 잘 익어요",
        image: "images_10000_recipes/recipe_steps_img/1073_step_03.png"
      },
            {
        title: "소스 만들기",
        subtitle: "케첩, 우스터소스를 넣고 소스를 만들어 패티 위에 얹어 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_card_img/western_01.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1074
  1074: {
    id: 1074,
    categories: {
      type:       "bap western",
      ingredient: "pork vegetable egg",
      method:     "boil stir",
      situation:  "special snack lunchbox",
      health:     [""]
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       4.5,
    review_count: 52,
    likes:        "8.2K",
    author_img:   "images_10000_recipes/chef_images/chef_02.jpg",
    title: "오므라이스",
    author: "조밍키♥",
    subtitle: "부드러운 계란으로 감싼 오므라이스",
    image: "images_10000_recipes/recipe_card_img/western_02.png",
    servings: "2인분",
    time: "15분 이내",
    level: "중급",
    category: "양식",
    subcategory: "양식",
    tags: ["#오므라이스", "#양식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "밥", amount: "2공기" },
          { name: "달걀", amount: "3개" },
          { name: "양파", amount: "1/4개" },
          { name: "당근", amount: "1/4개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "케첩", amount: "3숟가락" },
          { name: "버터", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" },
          { name: "식용유", amount: "적당량" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "감자,햄,표고버섯,당근,호박,양파등 모두 아주잘게 다져서 준비합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1074_step_01.png"
      },
      {
        title: "볶기",
        subtitle: "둥근 후라이팬에 식용유를 두른뒤 야채를 모두 넣고 볶아주세요.",
        tip: "양파의 색이 투명해지면 소금1/3스푼과 후추 톡톡 해서 간을 맞추어 주세요.",
        image: "images_10000_recipes/recipe_steps_img/1074_step_02.png"
      },
      {
        title: "볶기",
        subtitle: "밥과 야채가 잘섞이도록 볶아줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1074_step_03.png"
      },
            {
        title: "달걀 지단 만들기",
        subtitle: "달걀을 3개를 풀어 소금으로 간하고 팬에 얇게 부쳐줍니다.",
        tip: "달걀을 약불에서 천천히 익혀야 부드러워요",
        image: "images_10000_recipes/recipe_steps_img/1074_step_04.png"
      },
       {
        title: "소스 만들기",
        subtitle: "이제 만들어진 오므라이스 소스를 후라이팬에 옮겨 담고 한번 보글보글 끓어오르면 불을 꺼주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1074_step_05.png"
      },
            {
        title: "완성",
        subtitle: "볶음밥을 그릇에 담고 달걀로 덮어 소스 뿌려 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1074_step_06.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1075
  1075: {
    id: 1075,
    categories: {
      type:       "western noodle",
      ingredient: "dairy vegetable flour pork",
      method:     "stir boil boil-soft",
      situation:  "speed special",
      health:     [""]
    },
    badge:        "BEST",
    badge_class:  "recipe-card__badge--best",
    rating:       5.0,
    review_count: 55,
    likes:        "7.9K",
    author_img:   "images_10000_recipes/chef_images/chef_03.jpg",
    title: "크림파스타",
    author: "김진옥요리가좋다",
    subtitle: "진하고 부드러운 크림소스 파스타",
    image: "images_10000_recipes/recipe_card_img/western_03.png",
    servings: "2인분",
    time: "10분 이내",
    level: "초급",
    category: "양식",
    subcategory: "양식",
    tags: ["#크림파스타", "#양식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "파스타면", amount: "160g" },
          { name: "베이컨", amount: "3줄" },
          { name: "양파", amount: "1/4개" },
          { name: "마늘", amount: "3쪽" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "생크림", amount: "200ml" },
          { name: "파마산 치즈", amount: "2숟가락" },
          { name: "버터", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "파스타 삶기",
        subtitle: "끓는 소금물에 파스타를 알덴테로 삶아줍니다.",
        tip: "면수는 조금 남겨두세요",
        image: "images_10000_recipes/recipe_steps_img/1075_step_01.png"
      },
            {
        title: "소스 만들기",
        subtitle: "팬에 버터를 두르고 마늘, 양파, 베이컨을 볶다가 생크림을 넣어 끓여줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1075_step_02.png"
      },
            {
        title: "파스타 버무리기",
        subtitle: "파스타와 파마산 치즈를 넣고 소금, 후추로 간하여 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1075_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1076
  1076: {
    id: 1076,
    categories: {
      type:       "western",
      ingredient: "seafood vegetable",
      method:     "stir boil-soft boil",
      situation:  "special lunchbox",
      health:     [""]
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       5.0,
    review_count: 550,
    likes:        "12K",
    author_img:   "images_10000_recipes/chef_images/chef_04.png",
    title: "감바스 알아히요",
    author: "뿅림이",
    subtitle: "올리브오일에 새우를 넣은 스페인 요리",
    image: "images_10000_recipes/recipe_card_img/western_04.png",
    servings: "2인분",
    time: "10분 이내",
    level: "초급",
    category: "양식",
    subcategory: "양식",
    tags: ["#감바스", "#스페인"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "새우", amount: "200g" },
          { name: "마늘", amount: "8쪽" },
          { name: "방울토마토", amount: "8개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "올리브오일", amount: "5숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" },
          { name: "파슬리", amount: "약간" },
          { name: "바게트", amount: "적당량" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "새우는 내장을 제거하고 마늘은 편 썰어줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1076_step_01.png"
      },
            {
        title: "올리브오일에 끓이기",
        subtitle: "팬에 버터를 녹이고 편 마늘, 페페론치노를 넣어 볶다가 소금, 후추를 뿌려요",
        tip: "페페론치노 대신 청양고추를 썰어 넣어도 좋아요",
        image: "images_10000_recipes/recipe_steps_img/1076_step_02.png"
      },
            {
        title: "새우 넣기",
        subtitle: "올리브유를 붓고 새우를 넣어 새우가 익을 때 까지 약불로 끓여 완성해요.",
        tip: "취향에 따가 허브나 파슬리가루를 추가해요",
        image: "images_10000_recipes/recipe_steps_img/1076_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1077
  1077: {
    id: 1077,
    categories: {
      type:       "western noodle",
      ingredient: "vegetable",
      method:     "stir boil-soft boil",
      situation:  "special lunchbox",
    },
    badge:        null,
    badge_class:  "",
    rating:       3.7,
    review_count: 237,
    likes:        "7K",
    author_img:   "images_10000_recipes/chef_images/chef_05.jpg",
    title: "오일파스타",
    author: "뽀유TV",
    subtitle: "심플하지만 맛있는 올리브오일 파스타",
    image: "images_10000_recipes/recipe_card_img/western_05.png",
    servings: "2인분",
    time: "5분 이내",
    level: "초급",
    category: "양식",
    subcategory: "양식",
    tags: ["#오일파스타", "#간단"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "파스타면", amount: "160g" },
          { name: "마늘", amount: "5쪽" },
          { name: "페퍼론치노", amount: "3개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "올리브오일", amount: "4숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" },
          { name: "파슬리", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "새우는 미림 1 큰 술과 후추에 조물조물 해둡니다. 야채도 먹기 좋게 썰어주세요",
        tip: "마늘은 다진 마늘보다 편마늘이 맛있어요~!",
        image: "images_10000_recipes/recipe_steps_img/1077_step_01.png"
      },
      {
        title: "마늘 볶기",
        subtitle: "식용류 4~5 큰술에 마늘과 청양고추를 볶아주다 새우, 베이컨을 차례로 볶아주세요",
        tip: "이때 파스타 삶을 물도 함께 올려줍니다",
        image: "images_10000_recipes/recipe_steps_img/1077_step_02.png"
      },
      {
        title: "파스타 삶기",
        subtitle: "물이 끓어오르면 면은 8분정도 삶아 완전히 익혀주세요",
        tip: "면수 한 컵은 꼭 남겨두세요",
        image: "images_10000_recipes/recipe_steps_img/1077_step_03.png"
      },
            
            {
        title: "파스타 버무리기",
        subtitle: "면수를 조금 넣고 파스타를 넣어 버무린 뒤 소금, 후추, 파슬리로 마무리합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1077_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1078
  1078: {
    id: 1078,
    categories: {
      type:       "soup western",
      ingredient: "vegetable dairy",
      method:     "steam stir boil-soft boil",
      situation:  "speed snack lunchbox baby ",
    },
    badge:        null,
    badge_class:  "",
    rating:       3.5,
    review_count: 28,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_06.png",
    title: "감자스프",
    author: "엘린84",
    subtitle: "부드럽고 고소한 감자크림스프",
    image: "images_10000_recipes/recipe_card_img/western_06.png",
    servings: "3인분",
    time: "10분 이내",
    level: "초급",
    category: "양식",
    subcategory: "스프",
    tags: ["#스프", "#감자"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "감자", amount: "3개" },
          { name: "양파", amount: "1/2개" },
          { name: "마늘", amount: "3쪽" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "생크림", amount: "100ml" },
          { name: "버터", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" },
          { name: "육수 또는 물", amount: "2컵" }
        ]
      }
    ],
    steps: [
      {
        title: "채소 볶기",
        subtitle: "냄비에 버터를 두르고 양파를 볶아줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1078_step_01.png"
      },
      {
        title: "감자 준비",
        subtitle: "감자는 반으로 잘라서 그릇에 담으시구요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1078_step_02.png"
      },
            {
        title: "끓이기",
        subtitle: "우유는 200미리정도와 삶은감자, 소금 1스푼, 후추 약간 넣어주고 감자가 푹 익을 때까지 끓여줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1078_step_03.png"
      },
            {
        title: "끓이기",
        subtitle: " 저는 제빵기에 스프를 만들었답니다. 메뉴에 스프 메뉴 클릭하면 되구요..30분이면 된답니다.",
        tip: "냄비에 끓이셔도 돼요",
        image: "images_10000_recipes/recipe_steps_img/1078_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1079
  1079: {
    id: 1079,
    categories: {
      type:       "soup western",
      ingredient: "vegetable",
      method:     "steam stir boil-soft boil",
      situation:  "special lunchbox pregnancy baby",
    },
    badge:        "HOT",
    badge_class:  "recipe-card__badge--hot",
    rating:       3.5,
    review_count: 122,
    likes:        "5.1K",
    author_img:   "images_10000_recipes/chef_images/chef_07.png",
    title: "단호박 스프",
    author: "살찌우는엄마",
    subtitle: "달콤하고 부드러운 단호박 크림스프",
    image: "images_10000_recipes/recipe_card_img/western_07.png",
    servings: "3인분",
    time: "5분 이내",
    level: "초급",
    category: "양식",
    subcategory: "스프",
    tags: ["#단호박", "#스프"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "단호박", amount: "1/2개" },
          { name: "양파", amount: "1/4개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "생크림", amount: "100ml" },
          { name: "버터", amount: "1숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" },
          { name: "육수 또는 물", amount: "2컵" }
        ]
      }
    ],
    steps: [
      {
        title: "단호박 손질",
        subtitle: "단호박을 전자레인지에 돌려 부드럽게 익힌 뒤 껍질을 벗겨줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1079_step_01.png"
      },
            {
        title: "끓이기",
        subtitle: "볶은 양파에 손질한 단호박을 넣어주신 뒤 재료가 잠기도록 우유를 부어 끓여 주세요. 우유는농도에 맞게 조절해주시면 되고 쉽게 끓어오르거나 탈수 있으니 주걱으로 계속 저어 주셔요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1079_step_02.png"
      },
            {
        title: "갈아서 완성",
        subtitle: "더 부드러운 식감을 위해 핸드믹서로 한번더 갈아주었습니다.",
        tip: "좀 더 모양을 내시려면 크루통과 파슬리가루로 데코해주시면 돼요",
        image: "images_10000_recipes/recipe_steps_img/1079_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1080
  1080: {
    id: 1080,
    categories: {
      type:       "soup western",
      ingredient: "vegetable dairy flour",
      method:     "stir boil",
      situation:  "pregnancy baby",
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 94,
    likes:        "3.7K",
    author_img:   "images_10000_recipes/chef_images/chef_08.png",
    title: "크림 스프",
    author: "판교댁쏭아",
    subtitle: "진하고 부드러운 클래식 크림스프",
    image: "images_10000_recipes/recipe_card_img/western_08.png",
    servings: "3인분",
    time: "30분 이내",
    level: "중급",
    category: "양식",
    subcategory: "스프",
    tags: ["#크림스프", "#양식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "밀가루", amount: "3숟가락" },
          { name: "버터", amount: "3숟가락" },
          { name: "우유", amount: "2컵" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" },
          { name: "육두구", amount: "약간" },
          { name: "파마산 치즈", amount: "2숟가락" }
        ]
      }
    ],
    steps: [
      {
        title: "루 만들기",
        subtitle: "냄비에 버터를 녹이고 밀가루를 넣어 약불에서 볶아 루를 만들어줍니다.",
        tip: "루를 충분히 볶아야 밀가루 냄새가 나지 않아요",
        image: "images_10000_recipes/recipe_steps_img/1080_step_01.png"
      },
            {
        title: "우유 넣기",
        subtitle: "밀가루가 노릇노릇하게 볶아 졌으니 우유를 넣고 중불에서 끓여 주세요",
        tip: "물은 넣지않고 우유로만 끓이면 아주 고소하고 부드럽습니다",
        image: "images_10000_recipes/recipe_steps_img/1080_step_02.png"
      },
            {
        title: "간 맞추기",
        subtitle: "소금, 후추, 비프스톡으로 간하고 파마산 치즈를 넣어 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1080_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1081
  1081: {
    id: 1081,
    categories: {
      type:       "soup western",
      ingredient: "vegetable dairy",
      method:     "stir boil",
      situation:  "speed snack pregnancy baby",
      health:     ""
    },
    badge:        null,
    badge_class:  "",
    rating:       3.8,
    review_count: 142,
    likes:        "3.9K",
    author_img:   "images_10000_recipes/chef_images/chef_09.png",
    title: "양송이 스프",
    author: "밥차리라",
    subtitle: "향긋한 양송이버섯으로 만드는 크림스프",
    image: "images_10000_recipes/recipe_card_img/western_09.png",
    servings: "3인분",
    time: "15분 이내",
    level: "중급",
    category: "양식",
    subcategory: "스프",
    tags: ["#양송이", "#스프"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "양송이버섯", amount: "200g" },
          { name: "양파", amount: "1/4개" },
          { name: "마늘", amount: "3쪽" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "생크림", amount: "150ml" },
          { name: "버터", amount: "2숟가락" },
          { name: "육수", amount: "1.5컵" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "버섯 볶기",
        subtitle: "버터를 녹인 팬에 양파가 갈색이 날 때까지 볶아줍니다. 감자를 넣고 감자가 투명해질 때까지 볶아줍니다.원래 양송이버섯 스프 레시피에서는 밀가루를 볶아서 루를 만드는데 저는 감자로 대신합니다. 감자에 전분이 있어서 밀가루없이 걸쭉한 양송이스프를 만들 수 있답니다.",
        tip: "버섯은 충분히 볶아야 향이 살아요",
        image: "images_10000_recipes/recipe_steps_img/1081_step_01.png"
      },
            {
        title: "육수 넣기",
        subtitle: "생크림 또는 우유를 넣고 끓여줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1081_step_02.png"
      },
            {
        title: "갈아서 완성",
        subtitle: "믹서에 곱게 갈아 냄비에 다시 담고 생크림, 소금, 후추로 간하여 완성합니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1081_step_03.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

// 1082
  1082: {
    id: 1082,
    categories: {
      type:       "soup western",
      ingredient: "vegetable dairy",
      method:     "stir grill boil",
      situation:  "snack special pregnancy baby",
      health:     ""
    },
    badge:        "NEW",
    badge_class:  "",
    rating:       4.8,
    review_count: 38,
    likes:        "4.8K",
    author_img:   "images_10000_recipes/chef_images/chef_10.png",
    title: "맛밤 크림 스프",
    author: "꼬순내집밥",
    subtitle: "달콤한 맛밤이 들어간 부드러운 크림스프",
    image: "images_10000_recipes/recipe_card_img/western_10.png",
    servings: "2인분",
    time: "30분 이내",
    level: "초급",
    category: "양식",
    subcategory: "스프",
    tags: ["#맛밤", "#크림스프"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "맛밤", amount: "150g" },
          { name: "양파", amount: "1/4개" }
        ]
      },
            {
        group: "양념",
        items: [
          { name: "생크림", amount: "150ml" },
          { name: "버터", amount: "1숟가락" },
          { name: "육수", amount: "1.5컵" },
          { name: "설탕", amount: "0.5숟가락" },
          { name: "소금", amount: "약간" },
          { name: "후추", amount: "약간" }
        ]
      }
    ],
    steps: [
      {
        title: "맛밤 볶기",
        subtitle: "맛밤은 3등분해서 육수에 1시간 동안 담갔다 건져 체에 밭쳐 물기를 제거한 후 달군 팬에 올리브유를 두르고 2를 올려 약한 불에서 굽는다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1082_step_01.png"
      },
      {
        title: "재료 볶기",
        subtitle: "달군 냄비에 올리브유, 버터를 두르고 양파, 대파를 노릇하게 볶다가 밀가루를 넣어 연한갈색이 되도록 충분히 볶는다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1082_step_02.png"
      },
            {
        title: "끓이기",
        subtitle: "육수를 부어 끓이다가 분량의 생크림, 우유, 맛밤을 넣고 12분간 끓여 한 김 식힌 다음 블랜더에 넣고 간다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1082_step_03.png"
      },
            {
        title: "갈아서 완성",
        subtitle: "그릇에 담고 그라나파다노 치즈와 이탈리안 파슬리를 뿌린 다음 구운 식빵, 올리브유를 곁들여 완성한다.",
        tip: "달콤한 맛밤 덕분에 설탕은 조금만 넣어도 돼요",
        image: "images_10000_recipes/recipe_steps_img/1082_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1002_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1002_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },
// 1083
  1083: {
    id: 1083,
    categories: {
      type:       "guk jjigae",
      ingredient: "beef vegetable",
      method:     "boil steam",
      situation:  "special diet",
      health:     ""
    },
    title: "샤브샤브",
    author: "루던",
    subtitle: "추운 겨울엔 따뜻한 샤브샤브로 추위를 달래보아요~",
    image: "images_10000_recipes/recipe_card_img/guk_13.png",
    servings: "1인분",
    time: "60분 이내",
    level: "초급",
    category: "국/찌개",
    subcategory: "국",
    tags: ["#뜨끈", "#집들이 음식"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "배추", amount: "8장" },
          { name: "불고기용 소고기", amount: "400g" },
          { name: "깻잎", amount: "12장" },
          { name: "백만송이", amount: "적당량" },
          { name: "표고버섯", amount: "1개" },
          { name: "팽이버섯", amount: "취향껏" },
        ]
      },
            {
        group: "양념",
        items: [
          { name: "가쓰오 육수", amount: "1컵" },
         
        ]
      }
    ],
    steps: [
      {
        title: "아채 쌓기",
        subtitle: "배추-깻잎 2장-소고기 순으로 쌓아준다.",
        tip: "마지막에는 배추만 한 장 올린다",
        image: "images_10000_recipes/recipe_steps_img/1083_step_01.png"
      },
      {
        title: "자르기",
        subtitle: "배추탑을 뒤집어 냄비높이에 맞춰 등분한다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1083_step_02.png"
      },
            {
        title: "냄비에 담기",
        subtitle: "가운데를 비우고 동그랗게 냄비 안에 넣고 칼집을 낸 표고와 나머지 버섯들을 가운데에 넣는다",
        tip: "자른 단면이 위로가게 하면 깔끔해보인다",
        image: "images_10000_recipes/recipe_steps_img/1083_step_03.png"
      },
            {
        title: "육수 끓이기",
        subtitle: "재료가 적당히 잠길만큼만 육수를 붓는다. 야채가 다 익으면 드시면 됩니다~!",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1083_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1083_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1083_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "백만송이 버섯 대체 가능한 게 있나요?", answer: "없으시면 생략가능합니다 :)" }
    ]
  },
// 1084
  1084: {
    id: 1084,
    categories: {
      type:       "main-banchan",
      ingredient: "seafood vegetable egg flour",
      method:     "pan",
      situation:  "speed snack alte-night",
      health:     ""
    },
    title: "파전",
    author: "요리는소소한행복",
    subtitle: "비오는 날 해물파전, 간단한 술안주 해물파전",
    image: "images_10000_recipes/recipe_card_img/pajeon_img.png",
    servings: "2인분",
    time: "30분 이내",
    level: "초급",
    category: "부침",
    subcategory: "부치기",
    tags: ["#술안주", "#바삭 식감"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "밀가루", amount: "1공기" },
          { name: "오징어", amount: "1마리" },
        ]
      },
            {
        group: "양념",
        items: [
          { name: "물", amount: "1공기" },
          { name: "식용유", amount: "넉넉히" },
          { name: "간장", amount: "1 숟가락" },
        ]
      }
    ],
    steps: [
      {
        title: "반죽 만들기",
        subtitle: "물과 밀가루 또는 부침가루 비율은 1:1 입니다^^ 쪽파500원짜리 : 물1공기 : 밀가루1공기",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1084_step_01.png"
      },
      {
        title: "자르기",
        subtitle: "부추를 원하는 크기로 잘라주면 돼요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1084_step_02.png"
      },
            {
        title: "오징어 손질",
        subtitle: "오징어도 1마리도 깨끗이 손질해준 뒤 원하는 크기로 잘라주세요. 총총총 올려진 오징어를 상상하며^^",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1084_step_03.png"
      },
            {
        title: "마무리 부치기",
        subtitle: "완성된 반죽에 부추+오징어 섞어 주세요.(순서 3번에 4,5번을 혼합) 팬에 식용유를 두르고 달궈지면 혼합된 반죽을 올려 강불에 나두고 바삭하게 부치면 완성입니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/1083_step_04.png"
      }
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/1084_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/1084_review_02.png" }
    ],
    questions: [
      
    ]
  },
  // 2013
  2013: {
    id: 2013,
    categories: {
      type:       "",
      ingredient: "seafood vegetable",
      method:     "seasoned bibim",
      situation:  "snack speed special diet late-night",
      health:  ""
    },
    title: "연어깍두기",
    author: "뿅림이",
    subtitle: "요즘 핫한 스리라차날치알 연어깍두기",
    image: "images_10000_recipes/viral_food_img/viral_food_img04.png",
    servings: "1인분",
    time: "30분 이내",
    level: "초급",
    category: "재료별",
    subcategory: "해산물",
    tags: ["#강민경", "#연어","#스리라차"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "연어", amount: "300g" },
          { name: "날치알", amount: "60g" },
          { name: "냉동우동면", amount: "1개" },
          { name: "양상추", amount: "2장" },
          { name: "양파", amount: "1개" },
          { name: "오이", amount: "반개" },
        ]
      },
      {
        group: "양념",
        items: [
          { name: "스리라차", amount: "2큰술" },
          { name: "청주", amount: "2큰술" },
          { name: "마요네즈", amount: "3큰술" },
          { name: "고추냉이", amount: "조금" },
          { name: "소금", amount: "2큰술" },
        
        ]
      },
      
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "키친타월로 연어 표면의 물기를 닦아주십시오.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/2013_step_01.png"
      },
      {
        title: "연어 숙성",
        subtitle: "굵은 소금 한큰술씩을 듬뿍 앞뒤로 뿌려주시고 뚜껑덮어 두께가 얇은것은 15~20분 두꺼운건 25~30분 냉장고에 넣어 숙성시켜주십시오.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/2013_step_02.png"
      },
            {
        title: "연어 깍둑 썰기",
        subtitle: "얼음물에 세 번 이상 헹궈주고 물기를 깨끗하게 닦아주세요. 숙성된 연어는 이름에 걸맞게 깍뚜기 모양으로 썰어주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/2013_step_03.png"
      },
      {
        title: "섞어주기",
        subtitle: "여기에 마요네즈 듬뿍 3큰술, 날치알 60g을 넣고 스리라차 2큰술 넣어주십시오. 다 비볐을 때 원래 연어 색이 나도록 넣어주셔야 합니다.",
        tip: "불닭 소스를 넣고 싶으시면 두방울 이상 넣지 마십시오. 그 이상 넣으니 불닭맛이 모든것을 다 잡아먹어 버립니다.",
        image: "images_10000_recipes/recipe_steps_img/2013_step_04.png"
      },
      
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/3001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/3001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },
  // 3001
  3001: {
    id: 3001,
    categories: {
      type:       "",
      ingredient: "nuts dairy",
      method:     "stir grill",
      situation:  "snack special",
      health:     ""
    },
    title: "두바이 쫀득쿠키",
    author: "시크제이맘",
    subtitle: "SNS에서 가장 핫한 디저트",
    image: "images_10000_recipes/viral_food_img/viral_food_img01.png",
    servings: "1인분",
    time: "60분 이상",
    level: "고급",
    category: "간편식",
    subcategory: "간식",
    tags: ["#sns 화제", "#쫀득 바삭 식감"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "마시멜로우", amount: "150g" },
          { name: "버터", amount: "19g" },
          { name: "탈지분유", amount: "10g" },
          { name: "발로나 코코아파우더", amount: "13g" },
          { name: "피스타치오", amount: "150g" },
          { name: "설탕", amount: "1 티스푼" },
          { name: "소금", amount: "1꼬집" },
          { name: "엑스트라 버진 올리브오일", amount: "12g" },
          { name: "구운 카다이프면", amount: "150g" },
          { name: "피스타치오 페이스트", amount: "150g" },
          { name: "화이트초콜릿", amount: "32g" },
        ]
      },
      
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "피스타치오의 껍질을 다 까주세요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3001_step_01.png"
      },
      {
        title: "재료 볶기",
        subtitle: "피스타치오 알맹이 분리가 다 되면 마른팬에 한번 덖어주세요 견과류 속 수분이 날라가 바삭한 식감이 살고 피스타치오 향이 더 진해져요^^",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3001_step_02.png"
      },
            {
        title: "피스타치오 갈기",
        subtitle: "전동 초퍼에 설탕+소금+피스타치오를 갈아주세요. 화이트 초콜릿을 중탕해서 녹여 넣어주고 올리브 오일을 첨가해가며 농도를 조절해주세요",
        tip: "입자가 너무 고운것 보다는 피스타치오 씹히는 식감이 있으면 더 맛있어요 :)",
        image: "images_10000_recipes/recipe_steps_img/3001_step_03.png"
      },
      {
        title: "섞어주기",
        subtitle: "분량의 스프레드를 구운 카다이프면과 섞어주세요.",
        tip: "달콤한 맛밤 덕분에 설탕은 조금만 넣어도 돼요",
        image: "images_10000_recipes/recipe_steps_img/3001_step_04.png"
      },
      {
        title: "모양 만들기",
        subtitle: "10개로(대략33g) 둥글게 성형해서 (겨울철)냉동30분 (여름철)냉동1시간 보관해줍니다.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3001_step_05.png"
      },
      {
        title: "마시멜로우 녹이기",
        subtitle: "그사이 코팅이 잘된 팬에 실리콘주걱으로 최소한의 가장 약불에 팬을 올려 버터를 천천히 다 녹여주세요. ",
        tip: "불의 온도가 높으면 질겨지고 쫀득함이 사라지기니까 약불에 천천히 녹여주세요~",
        image: "images_10000_recipes/recipe_steps_img/3001_step_06.png"
      },
      {
        title: "코코아파우더 섞기",
        subtitle: "마쉬멜로가 전부 다 녹기전 덩어리가 약간 남아있을때 불을끄고 코코파우더 한번에 넣어 섞어주세요. 매끈하게 한덩어리로 만들어지면 완성입니다~",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3001_step_07.png"
      },
      {
        title: "쇠똥구리 작업",
        subtitle: "마시멜로우 반죽 10개로 소분해서 만들거예요.",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3001_step_08.png"
      },
      {
        title: "쇠똥구리 작업",
        subtitle: "올리브오일을 손에 골고루 바르고 호떡만들때처럼 펴서 스프레드를 넣어주세요",
        tip: "피가 얇을수록 맛있다고 하더라구요^^",
        image: "images_10000_recipes/recipe_steps_img/3001_step_09.png"
      },
      {
        title: "코코아파우더 입히기",
        subtitle: "얇게싸서 둥글게 모양을 잡아주고 코코아파우더를 골고루 묻혀주면 완성입니다!",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3001_step_10.png"
      },
      {
        title: "완성",
        subtitle: "예쁘게 포장까지 해주면 완성!",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3001_step_11.png"
      },
    ],
    reviews: [
      { username: "집밥마스터", stars: 5, date: "2일 전", text: "너무 맛있어요! 강추합니다 😋", image: "images_10000_recipes/recipe_review_img/3001_review_01.png" },
      { username: "요리초보", stars: 4, date: "1주 전", text: "간단하고 맛있네요. 다음에 또 만들어볼게요.", image: "images_10000_recipes/recipe_review_img/3001_review_02.png" }
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },
  //3002
  3002: {
    id: 3002,
    categories: {
      type:       "",
      ingredient: "vegetable flour",
      method:     "steam boil-soft fry",
      situation:  "snack",
      health:     ""
    },
    title: "길감자 튀김",
    author: "조밍키♥",
    subtitle: "바삭한 식감의 인기 간식",
    image: "images_10000_recipes/viral_food_img/viral_food_img02.png",
    servings: "3인분",
    time: "90분",
    level: "중급",
    category: "간편식",
    subcategory: "간식",
    tags: ["#간식", "#강릉 먹거리"],
    ingredients: [
      {
        group: "주재료",
        items: [
          { name: "감자", amount: "1kg" }          
        ]
      },
      {
        group: "부재료",
        items: [
          { name: "소금", amount: "1.5큰술" },
          { name: "물", amount: "95ml" },
          { name: "전분", amount: "1국자" },
          
        ]
      },
      
    ],
    steps: [
      {
        title: "재료 준비",
        subtitle: "감자 껍질을 벗기고 깍뚝썰기 해주세요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3002_step_01.png"
      },
      {
        title: "감자 갈기",
        subtitle: "믹서기에 감자와 물 소금을 넣고 갈아주세요",
        tip: "소금을 너무 많이 넣으면 많이 못 먹어요",
        image: "images_10000_recipes/recipe_steps_img/3002_step_02.png"
      },
      {
        title: "전자레인지로 감자 익히기",
        subtitle: "사진처럼 묽게 되면 전자레인지에 30초 8번 돌려주세요 한번은 50초. 그 다음 쫀득해진 감자를 볼에 넣고 감자 전분과 섞어줍니다",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3002_step_03.png"
      },
       {
        title: "짤주머니에 담기",
        subtitle: "짤쭈에 감자를 넣어 줍니다 1kg하니까 2개나 나오네요",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3002_step_04.png"
      },
      {
        title: "반죽 튀기기",
        subtitle: "중불로 하고 기름에 감자를 잘 튀겨 줍니다. 이때 불을 너무 센 불로 하지 마세요 다 탑니다. ",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3002_step_05.png"
      },
      {
        title: "완성",
        subtitle: "그럼 엄청 쫀득 빠삭한 강릉 길감자 완성!",
        tip: null,
        image: "images_10000_recipes/recipe_steps_img/3002_step_06.png"
      },
    ],
    reviews: [
      
    ],
    questions: [
      { username: "궁금이", date: "3일 전", text: "재료 대체 가능한 게 있나요?", answer: null }
    ]
  },

  //  여기에 레시피를 계속 추가하세요
  //  형식은 위와 동일하게 맞춰주시면 됩니다
};

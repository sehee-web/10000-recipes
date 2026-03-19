// document.addEventListener('DOMContentLoaded', () => {
//     const list = document.querySelector('.menu_list');
//     const prevBtn = document.querySelector('.btn.prev');
//     const nextBtn = document.querySelector('.btn.next');

//     const root = getComputedStyle(document.documentElement);
//     const iconSize = parseInt(root.getPropertyValue('--icon-size'));
//     const iconGap = parseInt(root.getPropertyValue('--icon-gap'));
//     const visibleCount = parseInt(root.getPropertyValue('--visible-count'));

//     const itemWidth = iconSize + iconGap;
//     const maxIndex = list.children.length - visibleCount;
//     let index = 0;

//     const move = () => {
//         list.style.transform = `translateX(-${index * itemWidth}px)`;
//         prevBtn.disabled = index === 0;
//         nextBtn.disabled = index === maxIndex;
//     };

//     prevBtn.addEventListener('click', () => {
//         if (index > 0) index--, move();
//     });

//     nextBtn.addEventListener('click', () => {
//         if (index < maxIndex) index++, move();
//     });

//     move(); // 초기 상태
//     });
$(function () {
    $('.menu_list').slick({
        slidesToShow: 6,     // 한 번에 보여줄 아이콘 수
        slidesToScroll: 6,   // 버튼 클릭 시 이동 개수
        infinite: true,     // 끝에서 처음으로 순환 여부
        prevArrow: $('.btn.prev'),  // 기존 prev 버튼 연결
        nextArrow: $('.btn.next'),  // 기존 next 버튼 연결
    });
});
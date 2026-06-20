const blessings = [
    "星光虽远，却从未停止为你引路。",
    "你是这暗夜里唯一的注脚。",
    "愿你的灵魂在静谧中重获自由。",
    "即使黑暗降临，你的光芒也足以照亮世界。",
    "宇宙的温柔，此刻正通过星光传递给你。"
];

// 页面切换
const startPage = document.getElementById('start-page');
const mainPage = document.getElementById('main-page');

document.getElementById('enter-btn').addEventListener('click', () => {
    startPage.classList.add('hidden');
    mainPage.classList.remove('hidden');
});

document.getElementById('back-btn').addEventListener('click', () => {
    mainPage.classList.add('hidden');
    startPage.classList.remove('hidden');
});

// 生成逻辑
document.getElementById('gen-btn').addEventListener('click', () => {
    const text = document.getElementById('blessing-text');
    text.innerText = blessings[Math.floor(Math.random() * blessings.length)];
});
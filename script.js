// 页面切换功能
const tabItems = document.querySelectorAll('.tab-item');
const pages = document.querySelectorAll('.page');

tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有tab的active类
        tabItems.forEach(item => item.classList.remove('active'));
        // 添加当前tab的active类
        tab.classList.add('active');
        
        // 隐藏所有页面
        pages.forEach(page => page.classList.remove('active'));
        // 显示对应页面
        const pageId = tab.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
    });
});

// 韩语四十音页面Tab切换
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有tab的active类
        tabs.forEach(item => item.classList.remove('active'));
        // 添加当前tab的active类
        tab.classList.add('active');
        
        // 隐藏所有内容
        tabContents.forEach(content => content.classList.remove('active'));
        // 显示对应内容
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// 快速入口卡片子Tab切换
const subTabs = document.querySelectorAll('.sub-tab');
const subTabContents = document.querySelectorAll('.sub-tab-content');

subTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有sub-tab的active类
        subTabs.forEach(item => item.classList.remove('active'));
        // 添加当前sub-tab的active类
        tab.classList.add('active');
        
        // 隐藏所有内容
        subTabContents.forEach(content => content.classList.remove('active'));
        // 显示对应内容
        const subTabId = tab.getAttribute('data-subtab');
        document.getElementById(subTabId).classList.add('active');
    });
});

// 零基础快捷入口跳转
const quickEntry = document.querySelector('.quick-entry');
quickEntry.addEventListener('click', () => {
    // 隐藏所有页面
    pages.forEach(page => page.classList.remove('active'));
    // 显示韩语四十音页面
    document.getElementById('forty-sounds').classList.add('active');
    
    // 更新底部导航栏
    tabItems.forEach(item => item.classList.remove('active'));
    // 可以选择高亮对应的导航项
});

// 学习详情页跳转
function showLearningPage(title) {
    // 隐藏所有页面
    pages.forEach(page => page.classList.remove('active'));
    // 显示学习详情页
    document.getElementById('learning-detail').classList.add('active');
    // 更新标题
    document.getElementById('learning-title').textContent = title;
}

// 返回韩语四十音页面
function showFortySoundsPage() {
    // 隐藏所有页面
    pages.forEach(page => page.classList.remove('active'));
    // 显示韩语四十音页面
    document.getElementById('forty-sounds').classList.add('active');
}

// 返回首页
function showHomePage() {
    // 隐藏所有页面
    pages.forEach(page => page.classList.remove('active'));
    // 显示首页
    document.getElementById('home').classList.add('active');
    
    // 更新底部导航栏
    tabItems.forEach(item => item.classList.remove('active'));
    // 高亮首页导航项
    document.querySelector('[data-page="home"]').classList.add('active');
}

// 模拟按钮点击效果
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // 这里可以添加点击后的逻辑
        console.log('Button clicked:', button.textContent);
    });
});

// 模拟其他可交互元素的点击效果
const interactiveElements = document.querySelectorAll('.recommendation-item, .record-item, .news-item, .game-item, .feature-item');
interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        // 这里可以添加点击后的逻辑
        console.log('Element clicked');
    });
});
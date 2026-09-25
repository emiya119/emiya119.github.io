/**
 * ============================================================
 * Emiya119 — Portfolio Website  /  i18n 中英双语模块
 * ============================================================
 */
const I18n = (function () {
    const DEFAULT_LANG = 'zh';
    const STORAGE_KEY = 'emiya119-lang';
    const VALID_LANGS = ['zh', 'en'];

    const translations = {
        site_title: { zh: 'Emiya119 — 创意开发者', en: 'Emiya119 — Creative Developer' },
        nav_home:     { zh: '首页', en: 'Home' },
        nav_about:    { zh: '关于', en: 'About' },
        nav_work:     { zh: '作品', en: 'Work' },
        nav_skills:   { zh: '技能', en: 'Skills' },
        nav_contact:  { zh: '联系', en: 'Contact' },
        nav_letstalk: { zh: '聊聊吧 →', en: "Let's Talk →" },
        hero_available:   { zh: '接受自由职业 — 2026', en: 'Available for freelance — 2026' },
        hero_helloworld:  { zh: '你好，我是', en: "Hello, I'm" },
        hero_role_full:   { zh: '创意开发者 &amp; 设计师，融合 <span class="text-white font-medium">代码</span>、<span class="text-white font-medium">设计</span> 与 <span class="text-accent font-medium">动效</span>，打造数字体验。',
                            en: 'Creative Developer &amp; Designer blending <span class="text-white font-medium">code</span>, <span class="text-white font-medium">design</span>, and <span class="text-accent font-medium">motion</span> into digital experiences.' },
        hero_viewwork:    { zh: '查看作品', en: 'View My Work' },
        hero_getintouch:  { zh: '联系我', en: 'Get in Touch' },
        hero_scroll:      { zh: '向下滚动', en: 'SCROLL' },
        marquee_cdev:   { zh: '★ 创意开发者', en: '★ CREATIVE DEVELOPER' },
        marquee_uiux:   { zh: 'UI / UX 设计师', en: 'UI / UX DESIGNER' },
        marquee_oss:    { zh: '开源贡献者', en: 'OPEN SOURCE CONTRIBUTOR' },
        marquee_motion: { zh: '动效爱好者', en: 'MOTION ENTHUSIAST' },
        about_section:  { zh: '// 02 — 关于我', en: '// 02 — About' },
        about_title_complete: {
                            zh: '构建 <span class="text-accent">有想法的</span> 数字产品。',
                            en: 'Building <span class="text-accent">thoughtful</span> digital things.' },
        about_p1_full:  { zh: '你好！我是一名热爱 <span class="text-white font-medium">工程</span> 与 <span class="text-white font-medium">设计</span> 的开发者。我相信优秀的产品诞生于美学与功能的结合。',
                          en: "Hi! I'm a passionate developer who loves the intersection of <span class=\"text-white font-medium\">engineering</span> and <span class=\"text-white font-medium\">design</span>. I believe great products are built when aesthetics meet function." },
        about_p2_full:  { zh: '我追求简洁的代码、像素级的界面和有趣的微交互，让用户真正 <span class="text-accent font-medium">享受</span> 使用这些产品。无论个人项目还是客户合作，我都注重细节、乐于尝试。',
                          en: "With a focus on clean code, pixel-perfect interfaces, and delightful micro-interactions, I create experiences that users actually <span class=\"text-accent font-medium\">enjoy</span> using. Whether it's a personal project or a client engagement, I bring attention to detail and a love for experimentation." },
        stat_years:    { zh: '年编码经验', en: 'Years Coding' },
        stat_projects: { zh: '个已上线项目', en: 'Projects Built' },
        stat_stars:    { zh: 'GitHub Stars', en: 'GitHub Stars' },
        stat_coffee:   { zh: '杯咖啡', en: 'Cups of Coffee' },
        work_section:    { zh: '// 03 — 精选作品', en: '// 03 — Selected Work' },
        work_title_complete: { zh: '最近的 <span class="text-accent">项目</span>。',
                               en: 'Recent <span class="text-accent">projects</span>.' },
        work_hover:      { zh: '// 悬停查看 →', en: '// hover to explore →' },
        work_p1_cat:     { zh: '— 01 / Web 应用', en: '— 01 / WEB APP' },
        work_p1_title:   { zh: 'Alpha 仪表盘', en: 'Project Alpha' },
        work_p1_desc:    { zh: '实时协作的现代生产力仪表盘，使用 React、TypeScript 和 WebSocket 构建。',
                          en: 'A modern productivity dashboard with real-time collaboration, built with React, TypeScript and WebSocket.' },
        work_p2_cat:     { zh: '— 02 / 命令行工具', en: '— 02 / CLI TOOL' },
        work_p2_title:   { zh: 'DevKit', en: 'DevKit' },
        work_p2_desc:    { zh: '开发者终端效率工具箱', en: 'Developer productivity toolkit for the terminal' },
        work_p3_cat:     { zh: '— 03 / 动画库', en: '— 03 / LIBRARY' },
        work_p3_title:   { zh: 'MotionFX', en: 'MotionFX' },
        work_p3_desc:    { zh: '轻量级 CSS 动画库', en: 'Lightweight CSS animation library' },
        work_p4_cat:     { zh: '— 04 / 设计系统', en: '— 04 / DESIGN SYSTEM' },
        work_p4_title:   { zh: 'Atlas UI 组件库', en: 'Atlas UI Kit' },
        work_p4_desc:    { zh: '完整的组件库 + 设计令牌，已在多个产品团队中落地使用。',
                          en: 'A comprehensive component library + design tokens, shipped across multiple product teams.' },
        work_p4_open:    { zh: '打开 ↗', en: 'OPEN ↗' },
        work_viewall:    { zh: '在 GitHub 查看全部项目', en: 'View all projects on GitHub' },
        skills_section: { zh: '// 04 — 技术栈', en: '// 04 — Tech Stack' },
        skills_title_complete: { zh: '用来吃饭 <span class="text-accent">的家伙</span>。',
                                  en: 'Tools of the <span class="text-accent">trade</span>.' },
        skills_desc:    { zh: '多年打磨的精选工具箱。持续学习，持续折腾。',
                          en: 'A curated toolkit refined over years of building and shipping. Always learning, always experimenting.' },
        skills_frontend: { zh: '前端', en: 'Frontend' },
        skills_backend:  { zh: '后端', en: 'Backend' },
        skills_devops:   { zh: '工程 / 运维', en: 'Tools & DevOps' },
        skills_design:   { zh: '设计 & 动效', en: 'Design & Motion' },
        contact_section:  { zh: '// 05 — 联系方式', en: '// 05 — Contact' },
        contact_title_complete: { zh: '一起来做<br><span class="gradient-text">点了不起的事</span>。',
                                   en: "Let's make <br><span class=\"gradient-text\">something great</span>." },
        contact_available:{ zh: '// 接受自由职业 · 合作 · 全职', en: '// open to freelance · collaboration · full-time' },
        contact_email:    { zh: '邮箱', en: 'Email' },
        contact_github:   { zh: 'GitHub', en: 'GitHub' },
        contact_twitter:  { zh: 'Twitter / X', en: 'Twitter / X' },
        contact_linkedin: { zh: 'LinkedIn', en: 'LinkedIn' },
        contact_cta:      { zh: '打个招呼吧 — 24 小时内必回复', en: 'Say hello — I reply within 24h' },
        footer_built:     { zh: '用 ❤️ 构建 · GitHub Pages · 纯 HTML/CSS/JS', en: 'Built with ❤️ using GitHub Pages · Pure HTML/CSS/JS' },
        footer_backtotop: { zh: '回到顶部', en: 'Back to top' },
    };

    let currentLang = loadLang();

    function loadLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && VALID_LANGS.includes(saved)) return saved;
        const nav = (navigator.language || 'zh').toLowerCase();
        if (nav.startsWith('en')) return 'en';
        return DEFAULT_LANG;
    }

    function t(key) {
        const entry = translations[key];
        if (!entry) return key;
        return entry[currentLang] || entry[DEFAULT_LANG] || key;
    }

    function setLang(lang) {
        if (!VALID_LANGS.includes(lang)) {
            console.warn('[i18n] Unknown language:', lang);
            return;
        }
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        document.documentElement.setAttribute('data-lang', lang);
        applyAll();
        document.dispatchEvent(new CustomEvent('languagechanged', { detail: { lang } }));
    }

    function applyAll() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = t(key);
            if (el.tagName === 'TITLE') document.title = text;
            else el.textContent = text;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            el.innerHTML = t(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
        });
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = currentLang === 'zh' ? 'EN' : '中';
            btn.title = currentLang === 'zh' ? 'Switch to English' : '切换到中文';
            btn.setAttribute('aria-label', btn.title);
        }
    }

    function toggle() { setLang(currentLang === 'zh' ? 'en' : 'zh'); }

    function init() {
        document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
        document.documentElement.setAttribute('data-lang', currentLang);
        const btn = document.getElementById('lang-toggle');
        if (btn) btn.addEventListener('click', (e) => { e.preventDefault(); toggle(); });
        const btnM = document.getElementById('lang-toggle-mobile');
        if (btnM) btnM.addEventListener('click', (e) => {
            e.preventDefault();
            toggle();
            btnM.textContent = currentLang === 'zh' ? 'EN / 中' : '中 / EN';
        });
        applyAll();
        document.addEventListener('languagechanged', (e) => {
            const m = document.getElementById('lang-toggle-mobile');
            if (m) m.textContent = e.detail.lang === 'zh' ? 'EN / 中' : '中 / EN';
        });
    }

    return { init, setLang, toggle, t, getLang: () => currentLang };
})();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', I18n.init);
} else {
    I18n.init();
}

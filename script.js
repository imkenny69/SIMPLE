(function () {
    'use strict';

    // Language toggle state
    let currentLang = localStorage.getItem('language') || 'ru';

    // Translation data
    const translations = {
        ru: {
            title: 'SIMPLE: Чат-менеджер',
            searchPlaceholder: 'Поиск...',
            heroTitle: 'SIMPLE: Чат-менеджер',
            heroText: 'Ваш идеальный помощник для быстрой, безопасной и удобной коммуникации.',
            addToChat: '➕ Добавить в чат',
            actionsTitle: 'Возможности',
            botInfo: '📜 Информация о боте',
            botCommands: '🤖 Команды бота',
            team: '👤 Состав команды',
            contact: '📧 Связаться с нами',
            chatPreviewTitle: 'Превью чата',
            chatMessageBot1: '👋 Привет! Я SIMPLE, твой чат-менеджер. Напиши команду, например, /help.',
            chatMessageUser: '/help',
            chatMessageBot2: '📜 Список команд: /kick, /ban, /mute, /info. Хочешь подробности?',
            faqTitle: 'Часто задаваемые вопросы',
            faq1Question: 'Что такое SIMPLE?',
            faq1Answer: 'SIMPLE — это чат-менеджер, созданный для упрощения коммуникации в чатах. Он предоставляет интуитивные инструменты для управления сообщениями и командами.',
            faq2Question: 'Как добавить бота в чат?',
            faq2Answer: 'Перейдите по кнопке "Добавить в чат" и следуйте инструкциям в VK для интеграции SIMPLE в ваш чат.',
            faq3Question: 'Какие команды поддерживает бот?',
            faq3Answer: 'Полный список команд доступен по кнопке "Команды бота". Вы найдете подробное описание всех функций.',
            botInfoModalTitle: 'Информация о боте',
            botInfoModalText: 'SIMPLE: чат-менеджер — это удобный и интуитивно понятный мессенджер, созданный для быстрой и безопасной коммуникации.',
            botInfoModalButton: 'Перейти к командам',
            botCommandsModalTitle: 'Команды бота',
            botCommandsModalText: 'Ознакомьтесь с полным списком команд и их функционалом.',
            botCommandsModalButton: 'Подробности',
            teamModalTitle: 'Состав команды',
            teamModalOwner: '<strong>Владелец:</strong> \'Man\' \'Parlament\' 🥷',
            teamModalManager: '<strong>Управляющий:</strong> Роман Александрович 👑',
            contactModalTitle: 'Связаться с нами',
            contactModalText: 'Есть вопросы или предложения? Напишите нам в VK!',
            contactModalButton: '📱 Написать в VK',
            themeModalTitle: 'Настроить тему',
            themeModalText: 'Выберите тему для приложения:',
            themeDark: 'Темная',
            themeLight: 'Светлая',
            themeNeon: 'Неон',
            searchModalTitle: 'Результаты поиска',
            searchNoResults: 'Ничего не найдено.',
            searchPrompt: 'Введите запрос для поиска.',
            scrollTop: '⬆ Наверх',
            footerCopyright: '© 2025 SIMPLE. Все права защищены.',
            footerFollow: 'Следите за нами в VK',
            footerDeveloped: 'Разработано Романом Александровичем 👑',
            notificationTransition: 'Переход в VK...',
            searchData: [
                { title: 'Добавить в чат', text: 'Добавьте SIMPLE в ваш чат для удобного управления.', url: 'https://vk.com/app6441755_-228142188', action: 'external' },
                { title: 'Состав команды', text: 'Узнайте о команде, стоящей за SIMPLE. Владелец: \'Man\' \'Parlament\', Управляющий: Роман Александрович.', url: '#teamModal', action: 'modal' },
                { title: 'Информация о боте', text: 'SIMPLE: чат-менеджер — удобный и интуитивно понятный мессенджер для быстрой и безопасной коммуникации.', url: '#botInfoModal', action: 'modal' },
                { title: 'Команды бота', text: 'Ознакомьтесь с полным списком команд и их функционалом.', url: 'https://vk.com/@simple_manager-simple-komandy-i-ih-funkcional', action: 'external' },
                { title: 'Связаться с нами', text: 'Есть вопросы или предложения? Напишите нам в VK!', url: '#contactModal', action: 'modal' },
                { title: 'Превью чата', text: 'Посмотрите, как работает SIMPLE в чате.', url: '#chat-preview', action: 'section' },
                { title: 'Что такое SIMPLE?', text: 'SIMPLE — это чат-менеджер, созданный для упрощения коммуникации в чатах.', url: '#faq1', action: 'faq' },
                { title: 'Как добавить бота?', text: 'Перейдите по кнопке "Добавить в чат" для интеграции.', url: '#faq2', action: 'faq' },
                { title: 'Какие команды?', text: 'Полный список команд доступен по кнопке "Команды бота".', url: '#faq3', action: 'faq' }
            ]
        },
        en: {
            title: 'SIMPLE: Chat Manager',
            searchPlaceholder: 'Search...',
            heroTitle: 'SIMPLE: Chat Manager',
            heroText: 'Your ideal assistant for fast, secure, and convenient communication.',
            addToChat: '➕ Add to Chat',
            actionsTitle: 'Features',
            botInfo: '📜 Bot Info',
            botCommands: '🤖 Bot Commands',
            team: '👤 Team',
            contact: '📧 Contact Us',
            chatPreviewTitle: 'Chat Preview',
            chatMessageBot1: '👋 Hi! I’m SIMPLE, your chat manager. Try a command, like /help.',
            chatMessageUser: '/help',
            chatMessageBot2: '📜 List of commands: /kick, /ban, /mute, /info. Want details?',
            faqTitle: 'Frequently Asked Questions',
            faq1Question: 'What is SIMPLE?',
            faq1Answer: 'SIMPLE is a chat manager designed to simplify communication in chats with intuitive tools for managing messages and commands.',
            faq2Question: 'How to add the bot to a chat?',
            faq2Answer: 'Click the "Add to Chat" button and follow the instructions on VK to integrate SIMPLE into your chat.',
            faq3Question: 'What commands does the bot support?',
            faq3Answer: 'The full list of commands is available via the "Bot Commands" button, with detailed descriptions of all features.',
            botInfoModalTitle: 'Bot Information',
            botInfoModalText: 'SIMPLE: Chat Manager is a convenient and intuitive messenger designed for fast and secure communication.',
            botInfoModalButton: 'View Commands',
            botCommandsModalTitle: 'Bot Commands',
            botCommandsModalText: 'Explore the full list of commands and their functionality.',
            botCommandsModalButton: 'Details',
            teamModalTitle: 'Team',
            teamModalOwner: '<strong>Owner:</strong> \'Man\' \'Parlament\' 🥷',
            teamModalManager: '<strong>Manager:</strong> Roman Alexandrovich 👑',
            contactModalTitle: 'Contact Us',
            contactModalText: 'Have questions or suggestions? Write to us on VK!',
            contactModalButton: '📱 Write on VK',
            themeModalTitle: 'Customize Theme',
            themeModalText: 'Choose a theme for the app:',
            themeDark: 'Dark',
            themeLight: 'Light',
            themeNeon: 'Neon',
            searchModalTitle: 'Search Results',
            searchNoResults: 'Nothing found.',
            searchPrompt: 'Enter a search query.',
            scrollTop: '⬆ Back to Top',
            footerCopyright: '© 2025 SIMPLE. All rights reserved.',
            footerFollow: 'Follow us on VK',
            footerDeveloped: 'Developed by Roman Alexandrovich 👑',
            notificationTransition: 'Redirecting to VK...',
            searchData: [
                { title: 'Add to Chat', text: 'Add SIMPLE to your chat for easy management.', url: 'https://vk.com/app6441755_-228142188', action: 'external' },
                { title: 'Team', text: 'Learn about the team behind SIMPLE. Owner: \'Man\' \'Parlament\', Manager: Roman Alexandrovich.', url: '#teamModal', action: 'modal' },
                { title: 'Bot Info', text: 'SIMPLE: Chat Manager is a convenient and intuitive messenger for fast and secure communication.', url: '#botInfoModal', action: 'modal' },
                { title: 'Bot Commands', text: 'Explore the full list of commands and their functionality.', url: 'https://vk.com/@simple_manager-simple-komandy-i-ih-funkcional', action: 'external' },
                { title: 'Contact Us', text: 'Have questions or suggestions? Write to us on VK!', url: '#contactModal', action: 'modal' },
                { title: 'Chat Preview', text: 'See how SIMPLE works in a chat.', url: '#chat-preview', action: 'section' },
                { title: 'What is SIMPLE?', text: 'SIMPLE is a chat manager designed to simplify communication in chats.', url: '#faq1', action: 'faq' },
                { title: 'How to add the bot?', text: 'Click the "Add to Chat" button to integrate.', url: '#faq2', action: 'faq' },
                { title: 'What commands?', text: 'The full list of commands is available via the "Bot Commands" button.', url: '#faq3', action: 'faq' }
            ]
        }
    };

    // Modal functions
    function openModal(id) {
        try {
            const modal = document.getElementById(id);
            if (!modal) return;
            modal.style.display = 'flex';
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.setAttribute('tabindex', '-1');
                modalContent.focus();
                const focusableElements = modalContent.querySelectorAll('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
                if (focusableElements.length) {
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];
                    const trapFocus = function(e) {
                        if (e.key === 'Tab') {
                            if (e.shiftKey && document.activeElement === firstElement) {
                                e.preventDefault();
                                lastElement.focus();
                            } else if (!e.shiftKey && document.activeElement === lastElement) {
                                e.preventDefault();
                                firstElement.focus();
                            }
                        }
                    };
                    modalContent.addEventListener('keydown', trapFocus);
                    modal.addEventListener('close', () => modalContent.removeEventListener('keydown', trapFocus));
                }
            }
        } catch (e) {
            console.error('Error opening modal:', e);
        }
    }

    function closeModal(id) {
        try {
            const modal = document.getElementById(id);
            if (!modal) return;
            modal.style.display = 'none';
            const opener = document.querySelector(`a[onclick="openModal('${id}')"]`) || document.querySelector('a');
            if (opener) opener.focus();
        } catch (e) {
            console.error('Error closing modal:', e);
        }
    }

    // Notification function
    function showNotification(message) {
        try {
            const notification = document.getElementById('notification');
            if (!notification) return;
            notification.textContent = message;
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        } catch (e) {
            console.error('Error showing notification:', e);
        }
    }

    // Theme functions
    function setTheme(theme) {
        try {
            document.body.classList.remove('light-theme', 'neon-theme');
            if (theme === 'light') {
                document.body.classList.add('light-theme');
            } else if (theme === 'neon') {
                document.body.classList.add('neon-theme');
            }
            localStorage.setItem('theme', theme);
            closeModal('themeModal');
            showNotification(`Тема изменена на ${translations[currentLang][`theme${theme.charAt(0).toUpperCase() + theme.slice(1)}`]}`);
        } catch (e) {
            console.error('Error setting theme:', e);
        }
    }

    // Close modals with ESC key or click outside
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display === 'flex') {
                    closeModal(modal.id);
                }
            });
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });

    // Scroll to top
    function scrollToTop() {
        try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
            console.error('Error scrolling to top:', e);
        }
    }

    window.addEventListener('scroll', () => {
        try {
            const scrollTopButton = document.querySelector('.scroll-top');
            if (scrollTopButton) {
                scrollTopButton.classList.toggle('visible', window.scrollY > 300);
            }
        } catch (e) {
            console.error('Error handling scroll:', e);
        }
    });

    // Loader and button animation
    window.addEventListener('load', () => {
        try {
            const loader = document.querySelector('.loader');
            if (loader) {
                loader.classList.add('hidden');
                setTimeout(() => loader.style.display = 'none', 600);
            }
            const buttons = document.querySelectorAll('.fancy');
            buttons.forEach((button, index) => {
                button.style.opacity = '0';
                button.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    button.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                }, index * 100);
            });
        } catch (e) {
            console.error('Error handling load:', e);
        }
    });

    // Language toggle
    function toggleLanguage() {
        try {
            currentLang = currentLang === 'ru' ? 'en' : 'ru';
            localStorage.setItem('language', currentLang);
            updateLanguage();
            const langButton = document.querySelector('.lang-toggle');
            if (langButton) {
                langButton.textContent = currentLang.toUpperCase();
            }
            showNotification(currentLang === 'ru' ? 'Язык изменен на Русский' : 'Language changed to English');
        } catch (e) {
            console.error('Error toggling language:', e);
        }
    }

    function updateLanguage() {
        try {
            const t = translations[currentLang];
            document.title = t.title;
            document.querySelector('h1').setAttribute('data-text', 'SIMPLE');
            document.querySelector('h1').textContent = 'SIMPLE';
            document.querySelector('.hero h2').setAttribute('data-text', t.heroTitle);
            document.querySelector('.hero h2').textContent = t.heroTitle;
            document.querySelector('.hero p').textContent = t.heroText;
            document.querySelector('.hero .fancy .text').textContent = t.addToChat;
            document.querySelector('.actions h2').setAttribute('data-text', t.actionsTitle);
            document.querySelector('.actions h2').textContent = t.actionsTitle;
            const actionButtons = document.querySelectorAll('.action-buttons .fancy .text');
            actionButtons[0].textContent = t.botInfo;
            actionButtons[1].textContent = t.botCommands;
            actionButtons[2].textContent = t.team;
            actionButtons[3].textContent = t.contact;
            document.querySelector('.chat-preview h2').setAttribute('data-text', t.chatPreviewTitle);
            document.querySelector('.chat-preview h2').textContent = t.chatPreviewTitle;
            document.querySelector('.chat-message.bot:nth-child(1) p').textContent = t.chatMessageBot1;
            document.querySelector('.chat-message.user p').textContent = t.chatMessageUser;
            document.querySelector('.chat-message.bot:nth-child(3) p').textContent = t.chatMessageBot2;
            document.querySelector('.faq h2').setAttribute('data-text', t.faqTitle);
            document.querySelector('.faq h2').textContent = t.faqTitle;
            const faqToggles = document.querySelectorAll('.faq-toggle');
            faqToggles[0].textContent = t.faq1Question;
            faqToggles[1].textContent = t.faq2Question;
            faqToggles[2].textContent = t.faq3Question;
            document.querySelector('#faq1').innerHTML = `<p>${t.faq1Answer}</p>`;
            document.querySelector('#faq2').innerHTML = `<p>${t.faq2Answer}</p>`;
            document.querySelector('#faq3').innerHTML = `<p>${t.faq3Answer}</p>`;
            document.querySelector('#botInfoModal .modal-content h2').setAttribute('data-text', t.botInfoModalTitle);
            document.querySelector('#botInfoModal .modal-content h2').textContent = t.botInfoModalTitle;
            document.querySelector('#botInfoModal .modal-content p').textContent = t.botInfoModalText;
            document.querySelector('#botInfoModal .fancy .text').textContent = t.botInfoModalButton;
            document.querySelector('#botCommandsModal .modal-content h2').setAttribute('data-text', t.botCommandsModalTitle);
            document.querySelector('#botCommandsModal .modal-content h2').textContent = t.botCommandsModalTitle;
            document.querySelector('#botCommandsModal .modal-content p').textContent = t.botCommandsModalText;
            document.querySelector('#botCommandsModal .fancy .text').textContent = t.botCommandsModalButton;
            document.querySelector('#teamModal .modal-content h2').setAttribute('data-text', t.teamModalTitle);
            document.querySelector('#teamModal .modal-content h2').textContent = t.teamModalTitle;
            document.querySelector('#teamModal .modal-content p:nth-child(2)').innerHTML = t.teamModalOwner;
            document.querySelector('#teamModal .modal-content p:nth-child(3)').innerHTML = t.teamModalManager;
            document.querySelector('#contactModal .modal-content h2').setAttribute('data-text', t.contactModalTitle);
            document.querySelector('#contactModal .modal-content h2').textContent = t.contactModalTitle;
            document.querySelector('#contactModal .modal-content p').textContent = t.contactModalText;
            document.querySelector('#contactModal .fancy .text').textContent = t.contactModalButton;
            document.querySelector('#themeModal .modal-content h2').setAttribute('data-text', t.themeModalTitle);
            document.querySelector('#themeModal .modal-content h2').textContent = t.themeModalTitle;
            document.querySelector('#themeModal .modal-content p').textContent = t.themeModalText;
            const themeButtons = document.querySelectorAll('.theme-options .fancy');
            themeButtons[0].textContent = t.themeDark;
            themeButtons[1].textContent = t.themeLight;
            themeButtons[2].textContent = t.themeNeon;
            document.querySelector('#searchModal .modal-content h2').setAttribute('data-text', t.searchModalTitle);
            document.querySelector('#searchModal .modal-content h2').textContent = t.searchModalTitle;
            document.querySelector('.scroll-top .text').textContent = t.scrollTop;
            document.querySelector('footer p:nth-child(1)').textContent = t.footerCopyright;
            document.querySelector('footer p:nth-child(2) a').textContent = t.footerFollow;
            document.querySelector('footer p:nth-child(3)').textContent = t.footerDeveloped;
            document.querySelector('#searchInput').placeholder = t.searchPlaceholder;
        } catch (e) {
            console.error('Error updating language:', e);
        }
    }

    // FAQ toggle functionality
    function setupFAQ() {
        try {
            const toggles = document.querySelectorAll('.faq-toggle');
            toggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const contentId = toggle.getAttribute('aria-controls');
                    const content = document.getElementById(contentId);
                    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                    toggle.setAttribute('aria-expanded', !isExpanded);
                    content.classList.toggle('active');
                });
            });
        } catch (e) {
            console.error('Error setting up FAQ:', e);
        }
    }

    // Search functionality
    function performSearch() {
        try {
            const query = document.getElementById('searchInput')?.value.trim().toLowerCase();
            const resultsDiv = document.getElementById('searchResults');
            const t = translations[currentLang];
            if (!resultsDiv || !query) {
                if (resultsDiv) resultsDiv.innerHTML = `<p>${t.searchPrompt}</p>`;
                openModal('searchModal');
                showNotification(t.searchPrompt);
                return;
            }

            resultsDiv.innerHTML = '';
            const results = t.searchData.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.text.toLowerCase().includes(query)
            );

            if (results.length === 0) {
                resultsDiv.innerHTML = `<p>${t.searchNoResults}</p>`;
                showNotification(t.searchNoResults);
            } else {
                results.forEach(item => {
                    const resultItem = document.createElement('p');
                    const regex = new RegExp(`(${query})`, 'gi');
                    const title = item.title.replace(regex, '<span class="highlight">$1</span>');
                    const text = item.text.replace(regex, '<span class="highlight">$1</span>');
                    if (item.action === 'external') {
                        resultItem.innerHTML = `<a href="${item.url}" target="_blank" onclick="showNotification('${t.notificationTransition}')">${title}</a>: ${text}`;
                    } else if (item.action === 'modal') {
                        resultItem.innerHTML = `<a href="#" onclick="openModal('${item.url.slice(1)}'); return false;">${title}</a>: ${text}`;
                    } else if (item.action === 'faq') {
                        resultItem.innerHTML = `<a href="${item.url}" onclick="scrollToFAQ('${item.url.slice(1)}'); return false;">${title}</a>: ${text}`;
                    } else if (item.action === 'section') {
                        resultItem.innerHTML = `<a href="${item.url}" onclick="scrollToSection('${item.url.slice(1)}'); return false;">${title}</a>: ${text}`;
                    }
                    resultsDiv.appendChild(resultItem);
                });
                showNotification(`Найдено ${results.length} результат(ов)`);
            }

            openModal('searchModal');
        } catch (e) {
            console.error('Error performing search:', e);
        }
    }

    // Scroll to FAQ
    function scrollToFAQ(id) {
        try {
            const faqContent = document.getElementById(id);
            const toggle = document.querySelector(`.faq-toggle[aria-controls="${id}"]`);
            if (faqContent && toggle) {
                toggle.setAttribute('aria-expanded', 'true');
                faqContent.classList.add('active');
                faqContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } catch (e) {
            console.error('Error scrolling to FAQ:', e);
        }
    }

    // Scroll to section
    function scrollToSection(id) {
        try {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } catch (e) {
            console.error('Error scrolling to section:', e);
        }
    }

    // Apply saved theme and language on load
    window.addEventListener('DOMContentLoaded', () => {
        try {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                document.body.classList.add(`${savedTheme}-theme`);
            }
            const savedLang = localStorage.getItem('language');
            if (savedLang) {
                currentLang = savedLang;
                document.querySelector('.lang-toggle').textContent = currentLang.toUpperCase();
            }
            updateLanguage();
            setupFAQ();
        } catch (e) {
            console.error('Error during DOMContentLoaded:', e);
        }
    });

    // Handle Enter key for search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Service Worker Registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then(reg => console.log('Service Worker registered', reg))
                .catch(err => console.error('Service Worker registration failed', err));
        });
    }

    // Expose functions to global scope
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.scrollToTop = scrollToTop;
    window.performSearch = performSearch;
    window.toggleLanguage = toggleLanguage;
    window.showNotification = showNotification;
    window.scrollToFAQ = scrollToFAQ;
    window.scrollToSection = scrollToSection;
    window.setTheme = setTheme;
})();
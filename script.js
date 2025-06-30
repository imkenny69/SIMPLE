(function () {
  'use strict';

  // Modal functions
  function openModal(id) {
    try {
      const modal = document.getElementById(id);
      if (modal) {
        modal.style.display = 'flex';
        const modalContent = modal.querySelector('.modal-content');
        modalContent.setAttribute('tabindex', '-1');
        modalContent.focus();
        // Trap focus within modal
        const focusableElements = modalContent.querySelectorAll('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        modalContent.addEventListener('keydown', function(e) {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        });
      }
    } catch (e) {
      console.error('Error opening modal:', e);
    }
  }

  function closeModal(id) {
    try {
      const modal = document.getElementById(id);
      if (modal) {
        modal.style.display = 'none';
        // Return focus to the button that opened the modal
        const opener = document.querySelector(`a[onclick="openModal('${id}')"]`) || document.querySelector('a');
        if (opener) opener.focus();
      }
    } catch (e) {
      console.error('Error closing modal:', e);
    }
  }

  // Close modals with ESC key or click outside
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(modal => {
        if (modal.style.display === 'flex') {
          closeModal(modal.id);
        }
      });
    }
  });

  document.addEventListener('click', function(e) {
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
      document.querySelector('.scroll-top').classList.toggle('visible', window.scrollY > 100);
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
        setTimeout(() => loader.style.display = 'none', 500);
      }
      // Animate buttons on load
      const buttons = document.querySelectorAll('.fancy');
      buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        setTimeout(() => {
          button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          button.style.opacity = '1';
          button.style.transform = 'translateY(0)';
        }, index * 200);
      });
    } catch (e) {
      console.error('Error handling load:', e);
    }
  });

  // Theme toggle
  function toggleTheme() {
    try {
      document.body.classList.toggle('light-theme');
      localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    } catch (e) {
      console.error('Error toggling theme:', e);
    }
  }

  // Apply saved theme on load
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    }
  });

  // Search functionality with highlight
  const searchData = [
    { 
      title: "Добавить в чат", 
      text: "Добавьте SIMPLE в ваш чат для удобного управления.", 
      url: "https://vk.com/app6441755_-228142188",
      action: "external"
    },
    { 
      title: "Состав команды", 
      text: "Узнайте о команде, стоящей за SIMPLE. Владелец: 'Man' 'Parlament', Управляющий: Роман Александрович.", 
      url: "#modal1",
      action: "modal"
    },
    { 
      title: "Информация о боте", 
      text: "SIMPLE: чат менеджер — удобный и интуитивно понятный мессенджер для быстрой и безопасной коммуникации.", 
      url: "#modal2",
      action: "modal"
    },
    { 
      title: "Команды бота", 
      text: "Ознакомьтесь с полным списком команд и их функционалом.", 
      url: "https://vk.com/@simple_manager-simple-komandy-i-ih-funkcional",
      action: "external"
    },
    { 
      title: "Связаться с нами", 
      text: "Есть вопросы или предложения? Напишите нам в VK!", 
      url: "#contactModal",
      action: "modal"
    }
  ];

  function performSearch() {
    try {
      const query = document.getElementById('searchInput').value.trim().toLowerCase();
      const resultsDiv = document.getElementById('searchResults');
      resultsDiv.innerHTML = '';

      if (!query) {
        resultsDiv.innerHTML = '<p>Введите запрос для поиска.</p>';
        openModal('searchModal');
        return;
      }

      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.text.toLowerCase().includes(query)
      );

      if (results.length === 0) {
        resultsDiv.innerHTML = '<p>Ничего не найдено.</p>';
      } else {
        results.forEach(item => {
          const resultItem = document.createElement('p');
          // Highlight matching text
          const regex = new RegExp(`(${query})`, 'gi');
          const title = item.title.replace(regex, '<span class="highlight">$1</span>');
          const text = item.text.replace(regex, '<span class="highlight">$1</span>');
          if (item.action === 'external') {
            resultItem.innerHTML = `<a href="${item.url}" target="_blank">${title}</a>: ${text}`;
          } else {
            resultItem.innerHTML = `<a href="#" onclick="openModal('${item.url.slice(1)}'); return false;">${title}</a>: ${text}`;
          }
          resultsDiv.appendChild(resultItem);
        });
      }

      openModal('searchModal');
    } catch (e) {
      console.error('Error performing search:', e);
    }
  }

  // Handle Enter key for search
  document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  // Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registered', reg))
        .catch(err => console.error('Service Worker registration failed', err));
    });
  }

  // Expose functions to global scope
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.scrollToTop = scrollToTop;
  window.performSearch = performSearch;
  window.toggleTheme = toggleTheme;
})();
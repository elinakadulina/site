// Управление модальным окном и темой
class AppManager {
    constructor() {
        this.modal = document.querySelector(".reg-modal");
        this.modalBtn = document.querySelector(".btn-reg");
        this.closeBtn = document.querySelector(".reg-modal_close");
        this.themeToggle = document.querySelector('.theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'light-theme';
        
        this.init();
    }

    init() {
        this.initModal();
        this.initTheme();
    }

    // Инициализация модального окна
    initModal() {
        this.modalBtn.addEventListener("click", () => {
            this.openModal();
        });

        this.closeBtn.addEventListener("click", () => {
            this.closeModal();
        });

        window.addEventListener("click", (event) => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.modal.classList.contains('block')) {
                this.closeModal();
            }
        });
    }

    // Инициализация темы
    initTheme() {
        this.setTheme(this.currentTheme);
        
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        this.updateButtonText();
    }

    openModal() {
        this.modal.classList.add("block");
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove("block");
        document.body.style.overflow = '';
    }

    setTheme(theme) {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
        this.updateButtonText();
    }

    toggleTheme() {
        if (this.currentTheme === 'light-theme') {
            this.setTheme('dark-theme');
        } else {
            this.setTheme('light-theme');
        }
    }

    updateButtonText() {
        if (this.currentTheme === 'light-theme') {
            this.themeToggle.textContent = '🌙 Тёмная';
        } else {
            this.themeToggle.textContent = '☀️ Светлая';
        }
    }
}

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new AppManager();
    
    // Логи для отладки
    console.log('Модальное окно и тема инициализированы');
    console.log('Текущая тема:', localStorage.getItem('theme') || 'light-theme');
});
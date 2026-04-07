import { ref, watch } from 'vue';

const theme = ref('dark');

function applyTheme(value) {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(value);
}

export function initTheme() {
    let initial = 'dark';
    try {
        const stored = localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') {
            initial = stored;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            initial = 'light';
        }
    } catch (e) {
        // ignore
    }
    theme.value = initial;
    applyTheme(initial);
}

watch(theme, (value) => {
    applyTheme(value);
    try {
        localStorage.setItem('theme', value);
    } catch (e) {
        // ignore
    }
});

export function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
}

export function useTheme() {
    return { theme, toggleTheme };
}

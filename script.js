// ==========================================
// 1. SELECTORES Y ELEMENTOS DEL DOM
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;


// ==========================================
// 2. INICIALIZACIÓN (Cargar tema guardado)
// ==========================================
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);


// ==========================================
// 3. EVENT LISTENERS (Interacción del usuario)
// ==========================================
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleIcon(newTheme);
});


// ==========================================
// 4. FUNCIONES AUXILIARES
// ==========================================
function updateToggleIcon(theme) {
  themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
}
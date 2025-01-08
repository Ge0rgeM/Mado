// Load a JSON file dynamically
async function loadTranslations(lang) {
    try {
      const response = await fetch(`./Js/Translations/${lang}.json`);
      if (!response.ok) throw new Error("Failed to load translation file.");
      return await response.json();
    } catch (error) {
      console.error("Error loading translations:", error);
      return null;
    }
  }
  
  // Apply translations to elements
  async function applyTranslations(lang) {
    const translations = await loadTranslations(lang);
    if (!translations) return;
  
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[key]) {
        element.textContent = translations[key];
      }
    });
  }
  
  // Language switch event listeners
  document.getElementById("ge").addEventListener("click", () => {
    applyTranslations("GE");
  });
  
  document.getElementById("en").addEventListener("click", () => {
    applyTranslations("EN");
  });
  
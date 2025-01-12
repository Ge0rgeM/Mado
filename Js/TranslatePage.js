// Get the full path of the current document
function getDocumentName(){
  const fullPath = document.location.pathname;
  return fullPath.substring(fullPath.lastIndexOf('/') + 1);
}

// Load a JSON file dynamically
async function loadTranslations(lang) {
  try {
    let response = ''
    console.log(getDocumentName())
    if(getDocumentName() === "index.html"){
      response = await fetch(`./Js/Translations/${lang}.json`);
    }else {
      response = await fetch(`../Js/Translations/${lang}.json`);
    }
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
  document.body.classList.add("visible");     /* To prevent Dual Language Lagging */
}
applyTranslations('GE'); // Default

  // Language switch event listeners
document.getElementById("ge").addEventListener("click", () => {
  localStorage.setItem("language", "GE");
  applyTranslations("GE");
});

document.getElementById("en").addEventListener("click", () => {
  localStorage.setItem("language", "EN");
  applyTranslations("EN");
});

// Apply the stored language on page load
document.addEventListener("DOMContentLoaded", () => {
  const storedLanguage = localStorage.getItem("language") || "GE"; // Default to Georgian if no language is stored
  applyTranslations(storedLanguage);
});
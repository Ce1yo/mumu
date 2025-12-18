// Gestion du consentement des cookies
(function() {
    'use strict';
    
    const COOKIE_CONSENT_KEY = 'mumu_cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;
    
    // Vérifier si l'utilisateur a déjà donné son consentement
    function hasConsent() {
        return localStorage.getItem(COOKIE_CONSENT_KEY) !== null;
    }
    
    // Sauvegarder le consentement
    function saveConsent(accepted) {
        const consentData = {
            accepted: accepted,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    }
    
    // Créer le pop-up de cookies
    function createCookieBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-consent';
        banner.id = 'cookieConsent';
        
        banner.innerHTML = `
            <div class="cookie-content">
                <div class="cookie-text">
                    <h3>🍪 Cookies</h3>
                    <p>
                        Ce site utilise des cookies essentiels pour améliorer votre expérience, notamment pour la gestion du panier. 
                        En continuant à naviguer, vous acceptez notre utilisation des cookies. 
                        <a href="mentions-legales.html">En savoir plus</a>
                    </p>
                </div>
                <div class="cookie-buttons">
                    <button class="cookie-btn cookie-btn-accept" id="acceptCookies">
                        Accepter
                    </button>
                    <button class="cookie-btn cookie-btn-decline" id="declineCookies">
                        Refuser
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        // Afficher le banner avec une petite animation
        setTimeout(() => {
            banner.classList.add('show');
        }, 500);
        
        // Gérer les boutons
        document.getElementById('acceptCookies').addEventListener('click', function() {
            saveConsent(true);
            hideBanner();
        });
        
        document.getElementById('declineCookies').addEventListener('click', function() {
            saveConsent(false);
            hideBanner();
        });
    }
    
    // Cacher le banner
    function hideBanner() {
        const banner = document.getElementById('cookieConsent');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
            }, 400);
        }
    }
    
    // Initialiser au chargement de la page
    document.addEventListener('DOMContentLoaded', function() {
        if (!hasConsent()) {
            createCookieBanner();
        }
    });
})();

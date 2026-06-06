(function () {
    'use strict';

    // цвет лоадера Mint Dark
    var loaderColor = '#3da18d';

    var svgCode = encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="135" height="140" fill="${loaderColor}">
        <rect width="10" height="40" y="100" rx="6">
            <animate attributeName="height" dur="1s" repeatCount="indefinite" values="40;100;40"/>
            <animate attributeName="y" dur="1s" repeatCount="indefinite" values="100;40;100"/>
        </rect>
        </svg>`
    );

    function applyMintDark() {
        $('#mint_dark_theme').remove();

        var style = `
<style id="mint_dark_theme">

html, body, .extensions {
    background: linear-gradient(135deg, #0a1b2a, #1a4036);
    color: #ffffff;
}

.navigation-bar__body {
    background: rgba(18, 32, 36, 0.96);
}

.card__quality,
.card__type::after {
    background: linear-gradient(to right, #1e6262dd, #3da18ddd);
}

.company-start.icon--broken .company-start__icon,
.explorer-card__head-img > img,
.bookmarks-folder__layer,
.card-more__box,
.card__img,
.extensions__item,
.extensions__block-add {
    background-color: #1e2c2f;
}

.menu__item.focus,
.menu__item.hover,
.simple-button.focus,
.full-start__button.focus {
    background: linear-gradient(to right, #1e6262, #3da18d);
    color: #fff;
}

.card.focus .card__view::after,
.items-cards .selector.focus::after,
.extensions__item.focus::after {
    border: 0.2em solid #3da18d;
}

.head__action.focus,
.head__action.hover {
    background: linear-gradient(45deg, #3da18d, #1e6262);
}

.modal__content,
.settings__content,
.settings-input,
.selectbox__content {
    background: rgba(18, 32, 36, 0.96);
}

.screensaver__preload,
.activity__loader {
    background: url("data:image/svg+xml,${svgCode}") no-repeat 50% 50%;
}

</style>`;

        $('head').append(style);
    }

    // запуск сразу
    applyMintDark();

})();

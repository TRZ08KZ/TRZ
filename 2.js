(function () {
    'use strict';


(function () {
    $('body').append(`
        <style>
            .icon--history{
                display: none !important;
            }
        </style>
    `);
})();

    // Регистрируем плагин
    if (!window.Lampa) return;

    // Запускаем после полной загрузки интерфейса
    Lampa.Listener.follow('app', function (e) {
        if (e.type !== 'ready') return;

        const style = document.createElement('style');
        style.id = 'clean-poster-style';
        style.textContent = `
            /* Качество: 4K / WEB-DL / TS */
            .card__quality,
            .quality,
            .brief__quality,
            .tag--quality,
            .info__quality {
                display: none !important;
            }

            /* Рейтинг */
            .card__vote,
            .vote,
            .rating,
            .card-vote,
            .rate {
                display: none !important;
            }

            /* TV */
            .card__type,
            .type,
            .badge-tv,
            .card--tv .card__type {
                display: none !important;
            }

            /* Сериал / Фильм */
            .content-label {
                display: none !important;
            }
        `;

        if (!document.getElementById('clean-poster-style')) {
            document.head.appendChild(style);
        }
    });

})();

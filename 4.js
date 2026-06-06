(function () {
    'use strict';

    function MyFirstPlugin() {
        // Эта функция будет вызвана сразу после загрузки плагина
        
        // Просто покажем приветственное уведомление
        // Мы используем setTimeout, чтобы уведомление появилось после полной загрузки интерфейса Lampa
        setTimeout(function() {
            Lampa.Noty.show('Привет, МЕЛИСА, АРМИН, РАНИЯ, АЙЛА', {
                title: 'Плагин активен!',
                time: 5000 // Уведомление будет видно 5 секунд
            });
        }, 1000); // Задержка в 1 секунду (1000 миллисекунд)
    }

    // Сообщаем Lampa, что наш плагин готов к работе
    if (window.appready) {
        new MyFirstPlugin();
    } else {
        Lampa.Listener.follow('app', function(e){
            if(e.type == 'ready'){
                new MyFirstPlugin();
            }
        });
    }

})();

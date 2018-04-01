import React from 'react';

let menu = [
        {id:1, name: "Главная", path: "/"},
        {id:2, name: "Правила обмена", path: "/rules"},
        {id:3, name: "Партнерам", path: "/partners"},
        {id:4, name: "Новости", path: "/news"},
        {id:5, name: "Контакты", path: "/contacts"},
        {id:6, name: "FAQ", path: "/faq"}
    ];

let cryptList = ["BTC", "AMP", "ARDR", "BCH", "BCN", "BCY", "BELA", "BLK", "BTCD", "BTM", "BTS", "BURST", "CLAM", "CVC", "DASH", "DCR", "DGB",
    "DOGE", "EMC2", "ETC", "ETH", "EXP", "FCT", "FLDC", "FLO", "GAME", "GAS", "GNO", "GNT", "GRC", "HUC", "LBC", "LSK", "LTC", "MAID", "NAV",
    "NEOS", "NMC", "NXC", "NXT", "OMG", "OMNI", "PASC", "PINK", "POT", "PPC", "RADS", "REP", "RIC", "SBD", "SC", "STEEM", "STORJ", "STR",
    "STRAT", "SYS", "VIA", "VRC", "VTC", "XBC", "XCP", "XEM", "XMR", "XPM", "XRP", "XVC", "ZEC", "ZRX", "USDT"];

let news = [{id: 1,
            publish: new Date(),
            title: "Мартовское обновление!",
            short: "Доброго времени суток, друзья. Рады представить вам несколько небольших обновлений.",
            content: (<div>Доброго времени суток, друзья. Рады представить вам несколько небольших обновлений. <br/>
            <h6>1. Изменение минимальных сумм обмена на некоторых направлениях для оптимизации работы нашего сервиса.</h6>
            <p>Теперь, при обмене рублей на BTC, платёж должен быть не менее 500RUR, долларов на BTC — не менее 10$, тенге на BTC —
            не менее 2500KZT.Также мы уменьшили порог для обмена некоторых криптовалют:</p>
            <ul>
                <li>Litecoin — 0.1LTC;</li>
                <li>Ethereum — 0.02ETH;</li>
                <li>Dash — 0.02DSH.</li>
            </ul>
            <h6>2. Доработка системы безопасности.</h6>
            <p>В связи с участившимися жалобами, мы улучшили нашу систему безопасности. Теперь, для вывода реферальных начислений, вам будет
            необходимо подтвердить операцию по привязанному к аккаунту электронному адресу. Таким образом, даже если ваш аккаунт будет
            скомпрометирован, мошенник не сможет вывести накопленные вами реферальные бонусы.</p>
            <h6>3. Ввод новых направлений.</h6>
            Теперь на нашем сайте доступны новые направления для обмена:
            <ul>
                <li>Ethereum Classic;</li>
                <li>Ripple;</li>
                <li>Monero.</li>
            </ul>
            Все они уже доступны для обмена по выгодному курсу.
            <br />
            <p>А если у вас возникнут вопросы, то наши дружелюбные операторы в чате всегда с радостью вам помогут. Также рекомендуем
            подписаться на нашу официальную страницу VK. Там вы всегда будете в курсе свежих новостей, акций и розыгрышей. А ещё мы
            переодически радуем наших подписчиков приятными подарками</p>
            </div>)
        }, { id: 2,
            publish: new Date(),
            title: "test2!",
            short: "shorrt",
            content: (<div>Доброго</div>)
            }
    ];

export { menu, cryptList, news }
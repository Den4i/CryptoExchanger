import React from 'react';

const Contacts = () => {
    return (
        <div>
            <h3>Контакты</h3>
            <div className={'contactsInfo'}>
                <div className={'contactsInfo_columns'}>
                    <div>По вопросам поддержки или финансовых проблем обращайтесь по текущим контактным данным:</div>
                    <div>Поддержка по почте:<br/>
                        <p className={'contacts'}>support@cryptoexchanger.cc</p>
                    </div>
                    <div>Мы в telegram:<br/>
                        <p className={'contacts'}>@cryptoexchanger</p>
                    </div>
                    <div>Менеджеры онлайн ежедневно, с возможными краткосрочными перерывами, о них мы уведомляем в статусе поддержки:
                        <p className={'contacts'}>Круглосуточно</p>
                    </div>
                    <div>Тех перерыв на сайте (указано Московское время):<br />
                        с 8:40 до 9:30 <br />
                        с 17:10 до 17:30 <br />
                    </div>
                </div>
                <div className={'contactsInfo_columns'}>
                    <div>Отзывы клиентов сервиса на сторонних сайтах, мы рады вашим оставленным отзывам:</div>
                </div>
            </div>
        </div>
    )
};

export default Contacts;
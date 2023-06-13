import { useState } from 'react';

import style from "./Donates.module.scss";


const Donates = () => {
    const [currency, setCurrency] = useState();

    const chooseCurrency = (e) => {
        const name = e.target.getAttribute('name');
        if (currency === name) {
            setCurrency('')
        } else (
            setCurrency(name));
    };


    return (
        <div className={`container ${style.donates__container}`}>
            <h2 className="visually-hidden">Допомога</h2>
            <h2 className={style.donates__title}>Оберіть спосіб та валюту переказу</h2>
                <ul className={style.donates__list} onClick={chooseCurrency}>
                    <li className={`${style.donates__item} ${currency === 'UAH' ? style.active : ''}`}>
                        <h3 className={style.currency__title} name='UAH'>Українська гривня</h3>
                    </li>
                    <li className={`${style.donates__item} ${currency === 'EUR' ? style.active : ''}`}>
                        <h3 className={style.currency__title} name='EUR'>Євро</h3>
                    </li>
                    <li className={`${style.donates__item} ${currency === 'USD' ? style.active : ''}`}>
                        <h3 className={`${style.currency__title}  ${currency === 'USD' ? style.active : ''}`} name='USD'>Долар</h3>
                    </li>
                    <li className={`${style.donates__item} ${currency === 'CRYPTO' ? style.active : ''}`}>
                        <h3 className={`${style.currency__title}  ${currency === 'CRYPTO' ? style.active : ''}`} name='CRYPTO'>Криптовалюта</h3>
                    </li>
                </ul>
                {currency === "UAH" ? <ul className={`${style.currency__list} ${style.uah}`}>
                            <li className={style.currency__item}>
                                <h3 className={style.item__title}>Банківський переказ</h3>
                                <ul className={style.method__list}>
                                    <li className={style.method__item}>
                                        <h3 className={style.method__title}>Найменування отримувача:</h3>
                                        <p className={style.method__paragraph}>АСОЦIАЦIЯ ВЕТСПЕЦIАЛIСТIВ КОЛЕДЖIВ УКР</p>
                                    </li>
                                    <li className={style.method__item}>
                                        <h3 className={style.method__title}>Код отримувача:</h3>
                                        <p className={style.method__paragraph}>39606220</p>
                                    </li>
                                    <li className={style.method__item}>
                                        <h3 className={style.method__title}>Рахунок в форматі відповідно до стандарту IBAN:</h3>
                                        <p className={style.method__paragraph}>UA283052990000026008010119050</p>
                                    </li>
                                    <li className={style.method__item}>
                                        <h3 className={style.method__title}>Назва банку:</h3>
                                        <p className={style.method__paragraph}>АТ КБ "ПРИВАТБАНК"</p>
                                    </li>
                                </ul>
                            </li>
                            <li className={style.currency__item}>
                            <h3 className={style.item__title}>Кредитна картка</h3>
                                <ul className={style.method__list}>
                                <li className={style.method__item}>
                                        <h3 className={style.method__title}>Приват 24:</h3>
                                        <img src="/images/donates/privat24.jpg" alt="QR code for privat24" width="300px"/>
                                        <a href="https://next.privat24.ua/money-transfer/form/%7B%22form%22:%7B%22receiver%22:%7B%22source%22:%22manual%22,%22number%22:%224246001003945387%22%7D,%22amount%22:%220%22,%22currency%22:%22UAH%22%7D%7D">Посилання</a>
                                    </li>
                                    <li className={style.method__item}>
                                        <h3 className={style.method__title}>Найменування отримувача:</h3>
                                        <p className={style.method__paragraph}>Шупик Олександр Васильович</p>
                                    </li>
                                    <li className={style.method__item}>
                                        <h3 className={style.method__title}>Номер картки отримувача:</h3>
                                        <p className={style.method__paragraph}>4246 0010 0394 5387</p>
                                    </li>
                                </ul>
                            </li>
                </ul> : ''}
                {currency === "EUR" ? 
                    <div className={style.currency__list}>
                        <h3 className={style.item__title}>Реквізити компанії</h3>
                        <ul className={style.method__list}>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Назва компанії:</h3>
                                <p className={style.method__paragraph}> АСОЦIАЦIЯ ВЕТСПЕЦIАЛIСТIВ КОЛЕДЖIВ</p>
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>IBAN Code</h3>
                                <p className={style.method__paragraph}>UA313052990000026005020122320</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Назва банку:</h3>
                                <p className={style.method__paragraph}> JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>SWIFT code банку:</h3>
                                <p className={style.method__paragraph}>PBANUA2X</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Адреса компанії:</h3>
                                <p className={style.method__paragraph}>UA 07854 Київська Бородянський смтНемiшаєве вул Технiкумiвська б.1б</p> 
                            </li>
                        </ul>
                        <h3 className={style.item__title}>Банки кореспонденти</h3>
                        <ul className={style.correspondent__list}>
                            <li className={style.correspondent__item}>
                                <ul className={style.method__list}>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Рахунок в банку кореспонденті:</h3>
                                <p className={style.method__paragraph}>400886700401</p>
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>SWIFT Code банку-кореспондента:</h3>
                                <p className={style.method__paragraph}>COBADEFF</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Банк кореспондент:</h3>
                                <p className={style.method__paragraph}>Commerzbank AG, Frankfurt am Main, Germany</p> 
                            </li>
                                </ul>
                            </li>
                            <li className={style.correspondent__item}>
                                <ul className={style.method__list}>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Рахунок в банку кореспонденті:</h3>
                                <p className={style.method__paragraph}>6231605145</p>
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>SWIFT Code банку-кореспондента:</h3>
                                <p className={style.method__paragraph}>CHASDEFX</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Банк кореспондент:</h3>
                                <p className={style.method__paragraph}>J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY</p> 
                            </li>
                                </ul>                           
                            </li>
                        </ul>
                    </div> : ''}
                {currency === "USD" ? 
                    <div className={style.currency__list}>
                        <h3 className={style.item__title}>Реквізити компанії</h3>
                        <ul className={style.method__list}>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Назва компанії:</h3>
                                <p className={style.method__paragraph}> АСОЦIАЦIЯ ВЕТСПЕЦIАЛIСТIВ КОЛЕДЖIВ</p>
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>IBAN Code</h3>
                                <p className={style.method__paragraph}>UA973052990000026004010128711</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Назва банку:</h3>
                                <p className={style.method__paragraph}> JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>SWIFT code банку:</h3>
                                <p className={style.method__paragraph}>PBANUA2X</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Адреса компанії:</h3>
                                <p className={style.method__paragraph}>UA 07854 Київська Бородянський смтНемiшаєве вул Технiкумiвська б.1б</p> 
                            </li>
                        </ul>
                        <h3 className={style.item__title}>Банки кореспонденти</h3>
                        <ul className={style.correspondent__list}>
                            <li className={style.correspondent__item}>
                                <ul className={style.method__list}>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Рахунок в банку кореспонденті:</h3>
                                <p className={style.method__paragraph}>001-1-000080</p>
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>SWIFT Code банку-кореспондента:</h3>
                                <p className={style.method__paragraph}>CHASUS33</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Банк кореспондент:</h3>
                                <p className={style.method__paragraph}>JP Morgan Chase Bank, New York ,USA</p> 
                            </li>
                                </ul>
                            </li>
                            <li className={style.correspondent__item}>
                                <ul className={style.method__list}>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Рахунок в банку кореспонденті:</h3>
                                <p className={style.method__paragraph}>890-0085-754</p>
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>SWIFT Code банку-кореспондента:</h3>
                                <p className={style.method__paragraph}>IRVT US 3N</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Банк кореспондент:</h3>
                                <p className={style.method__paragraph}>The Bank of New York Mellon, New York, USA</p> 
                            </li>
                                </ul>                           
                            </li>
                            <li className={style.correspondent__item}>
                                <ul className={style.method__list}>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Рахунок в банку кореспонденті:</h3>
                                <p className={style.method__paragraph}>36445343</p>
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>SWIFT Code банку-кореспондента:</h3>
                                <p className={style.method__paragraph}>CITI US 33</p> 
                            </li>
                            <li className={style.method__item}>
                                <h3 className={style.method__title}>Банк кореспондент:</h3>
                                <p className={style.method__paragraph}>Citibank N.A., NEW YORK, USA</p> 
                            </li>
                                </ul>                           
                            </li>
                        </ul>
                    </div> : ''}
                    {currency === "CRYPTO" ? <ul className={`${style.currency__list} ${style.crypto}`}>
                        <li className={style.currency__item}></li>
                        <li className={style.currency__item}></li>
                </ul> : ''}
        </div>
    )
}

export default Donates;
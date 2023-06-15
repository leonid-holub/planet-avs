import { useState } from 'react';

import style from "./Donates.module.scss";


const Donates = ({ active, toggle }) => {

    const [currency, setCurrency] = useState();

    const chooseCurrency = (e) => {
        const name = e.target.getAttribute('name');
        if (currency === name) {
            setCurrency('')
        } else (
            setCurrency(name));
    };


    return (
        <div className={`${active ? style['donates--active'] : style.donates} `} onClick={toggle}>
            <div className={`container ${style.donates__container}`} onClick={e => e.stopPropagation()}>
                <h2 className="visually-hidden">Допомога</h2>
                <h2 className={style.donates__title}>Оберіть валюту переказу</h2>
                <ul className={style.donates__list} onClick={chooseCurrency}>
                    <li className={`${style.donates__item} ${currency === 'UAH' ? style['currency__item--active'] : ''}`}>
                         <h3 className={`${style.currency__title} ${currency === 'UAH' ? style['currency__title--active'] : ''}`} name='UAH'>Українська гривня</h3>
                        <ul className={`${style.currency__list} ${currency === 'UAH' ? style.active : ''}`} onClick={e => e.stopPropagation()}>
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
                                        <h3 className={style.method__title}>Приват24:</h3>
                                        <div className={style.method__wrapper}>
                                            <img src="/images/donates/privat24.jpg" alt="QR code for privat24" width="300px"/>
                                            <a className={style.method__link} href="https://next.privat24.ua/money-transfer/form/%7B%22form%22:%7B%22receiver%22:%7B%22source%22:%22manual%22,%22number%22:%224246001003945387%22%7D,%22amount%22:%220%22,%22currency%22:%22UAH%22%7D%7D" target="_blank" rel="noreferrer noopener">Посилання на Приват24</a>
                                        </div>
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
                        </ul>
                    </li>
                    <li className={`${style.donates__item} ${currency === 'EUR' ? style.active : ''}`}>
                        <h3 className={`${style.currency__title} ${currency === 'EUR' ? style['currency__title--active'] : ''}`} name='EUR'>Євро</h3>
                        <div className={`${style.currency__list} ${currency === 'EUR' ? style.active : ''}`} onClick={e => e.stopPropagation()}>
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
                                    <p className={style.method__paragraph}>UA 07854 Київська Бородянський смт Немiшаєве вул Технiкумiвська 6 1б</p> 
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
                        </div>
                    </li>
                    <li className={`${style.donates__item} ${currency === 'USD' ? style.active : ''}`}>
                        <h3 className={`${style.currency__title} ${currency === 'USD' ? style['currency__title--active'] : ''}`} name='USD'>Долар</h3>
                        <div className={`${style.currency__list} ${currency === 'USD' ? style.active : ''}`} onClick={e => e.stopPropagation()}>
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
                                        <p className={style.method__paragraph}>UA 07854 Київська Бородянський смт Немiшаєве вул Технiкумiвська 6 1б</p> 
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
                        </div>
                    </li>
                    <li className={`${style.donates__item} ${currency === 'CRYPTO' ? style.active : ''}`} name='CRYPTO'>
                        <h3 className={`${style.currency__title} ${currency === 'CRYPTO' ? style['currency__title--active'] : ''}`} name='CRYPTO'>Криптовалюта</h3>
                        <ul className={`${style["currency__list--crypto"]} ${currency === 'CRYPTO' ? style.active : ''}`} onClick={e => e.stopPropagation()}>
                            <li className={style.currency__item}>
                                <h3 className={style.item__title}>Ethereum</h3>
                                <img src="/images/donates/ethereum.jpg" alt="QR code for ethereum Trust Wallet" width="300px"/>
                            </li>
                            <li className={style.currency__item}>
                            <h3 className={style.item__title}>Bitcoin</h3>
                            <img src="/images/donates/bitcoin.jpg" alt="QR code for bitcoin Trust Wallet" width="300px"/>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Donates;
import React, { useState, useEffect } from 'react';
import styles from'./Header.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonStanding } from 'react-icons/bs';
import { IoBusiness, IoCardOutline } from 'react-icons/io5';
import { TbOld } from 'react-icons/tb';
import { GrMoney } from 'react-icons/gr';
import { MdOutlineSecurity } from 'react-icons/md';

function Header() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 800);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <header className={styles.header_top}>
                <div className={styles.conteiner}>
                    <div className={styles.boxMenu}> 
                        <div className={styles.menuButton}>
                        <button onClick={toggleSidebar} className={styles.hamburgerMenu}>
                        <GiHamburgerMenu />
                        </button>
                        </div>
                    </div>
                    <div className={styles.box}>
                    {!isMobile && (
                        <a className={styles.logo} href="/login">
                            <h1>BANK-ITO</h1>
                        </a>
                    )}
                    </div>
                    
                    <div className={styles.boxBA}> 
                        {!isMobile && (
                        <div className={styles.ba}>
                            <a href="/home">Banca Online</a>
                        </div>
                    )}
                    </div>
                </div>
            </header>

            <div className={`${styles.overlay} ${isSidebarOpen ? styles.open : ''}`} onClick={toggleSidebar}></div>

            {/* Fondo opaco al abrir el menú */}
            <div 
                className={`${styles.overlay} ${isSidebarOpen ? styles.open : ''}`} 
                onClick={toggleSidebar}
            ></div>

            <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
                <h3>Menu</h3>
                <ul className={styles.menu}>
                    {isMobile && (
                        <li>
                            <a href="/home">Banca Online</a>
                        </li>
                    )}
                    <li>
                        <a href="/Seguros"><MdOutlineSecurity /> Seguros</a>
                    </li>
                    <li>
                        <a href="/Jubilados"><TbOld />Jubilados</a>
                    </li>
                    <li>
                        <a href="/Inversiones"><GrMoney /> Inversiones</a>
                    </li>
                    <li>
                        <a href="/tarjetas"><IoCardOutline /> Tarjetas</a>
                    </li>
                    <li>
                        <a href="/Cuentas"><BsPersonStanding /> Personas</a>
                    </li>
                    <li>
                        <a href="/Empresas"><IoBusiness /> Empresas</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

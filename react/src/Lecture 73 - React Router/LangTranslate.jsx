import React, { createContext, useState, useContext } from "react";

const LanguageContext=createContext();

function LangTranslate() {
    const [language, setLanguage] = useState("en");

    const translations = {
        en: "Welcome to our website",
        hi: "हमारी वेबसाइट में आपका स्वागत है",
        es: "Bienvenido a nuestro sitio web",
        fr: "Bienvenue sur notre site web",
        de: "Willkommen auf unserer Website",
        it: "Benvenuto nel nostro sito web",
        ja: "私たちのウェブサイトへようこそ",
        zh: "欢迎来到我们的网站",
        ko: "우리 웹사이트에 오신 것을 환영합니다",
        pt: "Bem-vindo ao nosso site",
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations }}>
            <Home />
        </LanguageContext.Provider>
    );
}

function Home() {
    const { language, setLanguage, translations } =
        useContext(LanguageContext);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{translations[language]}</h1>

            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{ padding: "8px", marginTop: "20px" }}
            >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="zh">Chinese</option>
                <option value="ko">Korean</option>
                <option value="pt">Portuguese</option>
            </select>
        </div>
    );
}

export default LangTranslate;

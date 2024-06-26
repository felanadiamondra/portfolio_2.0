
import 'animate.css';
import { useState, useEffect } from 'react';
import { useTranslation} from "react-i18next";


const Bio = (props) => {
    const [textIndex, setTextIndex] = useState(0);
    const [textIndex2, setTextIndex2] = useState(null);
    const chaine = "Tailwind CSS is the only framework that I've seen scale on large teams. ";
    const chaine2 = "easy to customize, adapts to any design, and the build size is tiny.";
    const texts = chaine.split(" ");
    const texts2 = chaine2.split(" ");

    const {t} = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
        if (textIndex < texts.length - 1) {
            setTextIndex(textIndex + 1);
        } 

        else if(textIndex2 < texts2.length - 1){
            setTextIndex2(textIndex2 + 1)
        }
        
        }, 100); // Déclenche l'animation toutes les 100 milliseconde

        return () => clearTimeout(timer);
    }, [textIndex, texts, textIndex2, texts2]);


    const languages = [
            { value: "", text: "Options" },
            { value: "en", text: "English" },
            { value: "fr", text: "Francais" },
        ];

        const [lang, setLang] = useState("en");

        // This function put query that helps to
        // change the language
        const handleChange = (e) => {
            setLang(e.target.value);
            let loc = "http://localhost:3000/";
            window.location.replace(
                loc + "?lng=" + e.target.value
            );
        };

    return(
        <>
              <select className='ml-20' value={lang} onChange={handleChange}>
                    {languages.map((item) => {
                        return (
                            <option
                                key={item.value}
                                value={item.value}
                            >
                                {item.text}
                            </option>
                        );
                    })}
                </select>
            <p className='m-24 text-transparent bg-clip-text bg-gradient-to-r from-dark_blue to-blue_picton font-bold text-center text-2xl'>1 percent better every day.</p>
            <figure className="md:flex h-72 break-normal bg-slate-200 rounded-md mx-20 ml-40 -mt-8 p-10 rounde-xl justify-center shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <img className="z-50 w-24 h-24 md:h-auto" src="/image/image.png" alt="Felana Diamondra RANDRIAMADISON"/>
                <div className=''>
                    <blockquote>
                    
                        <div className="text-center mt-8">
                            <div className="flex">
                              
                                {texts.map((text, index) => (
                                <p
                                    key={index}
                                    className={`text-2xl font-bold transition-opacity duration-500 mr-1 ${
                                    index <= textIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    {text}
                                </p>
                                ))}
                            </div>
                            <div className="flex">
                              
                                { textIndex2 ? 
                                texts2.map((text2, index) => (
                                <p
                                    key={index}
                                    className={`text-2xl font-bold transition-opacity duration-500 mr-1 ${
                                    index <= textIndex2 ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    {text2}
                                </p>
                                )) : <p></p>
                            }
                            </div>
                        </div>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="animate__animated animate__fadeInUp">Diamondra RANDRIAMADISON</div>
                        <div className="animate__animated animate__fadeInUp">{t("Developer")}</div>
                    </figcaption>
                </div>
            </figure>
            <footer class=" rounded-lg shadow dark:bg-gray-900 m-4 mx-20 ml-40">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Download CV</span>
                        </a>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Diamondra</a>. Build with React and Tailwind.</span>
                </div>
            </footer>
        </>
    )
}

export default Bio;
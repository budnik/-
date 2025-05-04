
document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('language-select');
    const languageSections = document.querySelectorAll('.language-section');
    const commentsSection = document.querySelector('.comments-section');

    // --- Centralized Fake Data ---
    const fakeData = {
        avatars: [
            // Array of 18 SVG Avatar Designs (Papers, Please style)
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#a0c0e0"/><circle cx="15" cy="18" r="3" fill="#333"/><circle cx="25" cy="18" r="3" fill="#333"/><path d="M 15 25 Q 20 30 25 25" stroke="#333" fill="none" stroke-width="2"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><rect x="5" y="10" width="30" height="25" rx="12.5" fill="#c0a080"/><rect x="10" y="5" width="20" height="10" rx="5" fill="#806040"/><circle cx="15" cy="20" r="2" fill="#333"/><circle cx="25" cy="20" r="2" fill="#333"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#b0e0b0"/><rect x="10" y="5" width="20" height="10" fill="#804040"/><circle cx="15" cy="22" r="2" fill="#333"/><circle cx="25" cy="22" r="2" fill="#333"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#f0d0b0"/><rect x="12" y="16" width="16" height="8" rx="2" fill="none" stroke="#333" stroke-width="2"/><circle cx="15" cy="20" r="2" fill="#333"/><circle cx="25" cy="20" r="2" fill="#333"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#e0c0a0"/><rect x="10" y="30" width="20" height="5" rx="2" fill="#604020"/><circle cx="15" cy="18" r="3" fill="#333"/><circle cx="25" cy="18" r="3" fill="#333"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#a0d0f0"/><path d="M 10 15 Q 20 5 30 15" stroke="#402000" fill="none" stroke-width="4" stroke-linecap="round"/><circle cx="15" cy="22" r="2" fill="#333"/><circle cx="25" cy="22" r="2" fill="#333"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#d0a0c0"/><rect x="12" y="10" width="16" height="5" fill="#503040"/><circle cx="15" cy="20" r="2" fill="#333"/><circle cx="25" cy="20" r="2" fill="#333"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#c0e0d0"/><rect x="10" y="5" width="20" height="10" rx="5" fill="#202020"/><circle cx="15" cy="20" r="2" fill="#fff"/><circle cx="25" cy="20" r="2" fill="#fff"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#f0e0a0"/><rect x="10" y="15" width="20" height="10" fill="none" stroke="#502000" stroke-width="2" rx="5"/><circle cx="15" cy="20" r="2" fill="#333"/><circle cx="25" cy="20" r="2" fill="#333"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#a0b0c0"/><path d="M 10 15 C 10 5 30 5 30 15 Z" fill="#401010"/><circle cx="15" cy="22" r="2" fill="#333"/><circle cx="25" cy="22" r="2" fill="#333"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#e0b0d0"/><path d="M 10 15 C 10 5 30 5 30 15" fill="#603040"/><circle cx="15" cy="22" r="2" fill="#333"/><circle cx="25" cy="22" r="2" fill="#333"/><circle cx="20" cy="30" r="3" fill="#502030"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#c0c0a0"/><rect x="12" y="12" width="16" height="4" fill="#333"/><circle cx="15" cy="20" r="2" fill="#fff"/><circle cx="25" cy="20" r="2" fill="#fff"/><path d="M 15 28 Q 20 32 25 28" stroke="#333" fill="none" stroke-width="2"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#b0a0e0"/><rect x="10" y="5" width="20" height="10" rx="5" fill="#204060"/><circle cx="15" cy="20" r="2" fill="#fff"/><circle cx="25" cy="20" r="2" fill="#fff"/><path d="M 15 28 L 25 28" stroke="#333" fill="none" stroke-width="2"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#e0a0a0"/><circle cx="15" cy="18" r="3" fill="#333"/><circle cx="25" cy="18" r="3" fill="#333"/><path d="M 15 25 C 18 28 22 28 25 25" stroke="#333" fill="none" stroke-width="2"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><rect x="5" y="10" width="30" height="25" rx="12.5" fill="#a08060"/><rect x="10" y="5" width="20" height="10" fill="#402010"/><circle cx="15" cy="20" r="2" fill="#333"/><circle cx="25" cy="20" r="2" fill="#333"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#c0b0a0"/><rect x="12" y="16" width="16" height="8" rx="2" fill="none" stroke="#502000" stroke-width="2"/><circle cx="15" cy="20" r="2" fill="#333"/><circle cx="25" cy="20" r="2" fill="#333"/><path d="M 15 30 Q 20 28 25 30" stroke="#333" fill="none" stroke-width="2"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#b0c0a0"/><rect x="10" y="30" width="20" height="5" rx="2" fill="#405030"/><circle cx="15" cy="18" r="3" fill="#333"/><circle cx="25" cy="18" r="3" fill="#333"/></svg>`,
            `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#d0e0f0"/><path d="M 10 15 Q 20 5 30 15" stroke="#201040" fill="none" stroke-width="4" stroke-linecap="round"/><circle cx="15" cy="22" r="2" fill="#333"/><circle cx="25" cy="22" r="2" fill="#333"/></svg>`,
            // Add more if needed, ensure at least 80 unique combinations possible
        ],
        names: {
            // Names with associated gender
            en: [ { name: "John", gender: "male" }, { name: "Mary", gender: "female" }, { name: "Michael", gender: "male" }, { name: "Sarah", gender: "female" }, { name: "James", gender: "male" }, { name: "Emily", gender: "female" }, { name: "David", gender: "male" }, { name: "Jessica", gender: "female" }, { name: "Robert", gender: "male" }, { name: "Ashley", gender: "female" }, { name: "William", gender: "male" }, { name: "Elizabeth", gender: "female" }, { name: "Richard", gender: "male" }, { name: "Jennifer", gender: "female" }, { name: "Charles", gender: "male" }, { name: "Linda", gender: "female" }, { name: "Thomas", gender: "male" }, { name: "Patricia", gender: "female" }, { name: "Christopher", gender: "male" }, { name: "Susan", gender: "female" } ],
            uk: [ { name: "Олександр", gender: "male" }, { name: "Ольга", gender: "female" }, { name: "Сергій", gender: "male" }, { name: "Наталія", gender: "female" }, { name: "Іван", gender: "male" }, { name: "Анна", gender: "female" }, { name: "Василь", gender: "male" }, { name: "Олена", gender: "female" }, { name: "Андрій", gender: "male" }, { name: "Тетяна", gender: "female" }, { name: "Микола", gender: "male" }, { name: "Галина", gender: "female" }, { name: "Володимир", gender: "male" }, { name: "Людмила", gender: "female" }, { name: "Дмитро", gender: "male" }, { name: "Катерина", gender: "female" }, { name: "Петро", gender: "male" }, { name: "Марія", gender: "female" }, { name: "Павло", gender: "male" }, { name: "Надія", gender: "female" } ],
            nl: [ { name: "Jan", gender: "male" }, { name: "Maria", gender: "female" }, { name: "Cornelis", gender: "male" }, { name: "Johanna", gender: "female" }, { name: "Johannes", gender: "male" }, { name: "Anna", gender: "female" }, { name: "Petrus", gender: "male" }, { name: "Elisabeth", gender: "female" }, { name: "Hendrik", gender: "male" }, { name: "Margaretha", gender: "female" }, { name: "Jacobus", gender: "male" }, { name: "Catharina", gender: "female" }, { name: "Willem", gender: "male" }, { name: "Petronella", gender: "female" }, { name: "Gerardus", gender: "male" }, { name: "Christina", gender: "female" }, { name: "Dirk", gender: "male" }, { name: "Adriana", gender: "female" }, { name: "Maarten", gender: "male" }, { name: "Wilhelmina", gender: "female" } ], // Adjusted some female names
            et: [ { name: "Rein", gender: "male" }, { name: "Anne", gender: "female" }, { name: "Toomas", gender: "male" }, { name: "Katrin", gender: "female" }, { name: "Mart", gender: "male" }, { name: "Mare", gender: "female" }, { name: "Andres", gender: "male" }, { name: "Sirje", gender: "female" }, { name: "Peeter", gender: "male" }, { name: "Tiina", gender: "female" }, { name: "Jüri", gender: "male" }, { name: "Reet", gender: "female" }, { name: "Mati", gender: "male" }, { name: "Ene", gender: "female" }, { name: "Priit", gender: "male" }, { name: "Mall", gender: "female" }, { name: "Meelis", gender: "male" }, { name: "Kristiina", gender: "female" }, { name: "Indrek", gender: "male" }, { name: "Laura", gender: "female" } ],
            fi: [ { name: "Juha", gender: "male" }, { name: "Marjatta", gender: "female" }, { name: "Matti", gender: "male" }, { name: "Pirkko", gender: "female" }, { name: "Kari", gender: "male" }, { name: "Anneli", gender: "female" }, { name: "Mika", gender: "male" }, { name: "Hannele", gender: "female" }, { name: "Timo", gender: "male" }, { name: "Leena", gender: "female" }, { name: "Veli", gender: "male" }, { name: "Ritva", gender: "female" }, { name: "Pekka", gender: "male" }, { name: "Helena", gender: "female" }, { name: "Antti", gender: "male" }, { name: "Sirkka", gender: "female" }, { name: "Jari", gender: "male" }, { name: "Eeva", gender: "female" }, { name: "Markku", gender: "male" }, { name: "Sari", gender: "female" } ],
            lv: [ { name: "Jānis", gender: "male" }, { name: "Anna", gender: "female" }, { name: "Edgars", gender: "male" }, { name: "Kristīne", gender: "female" }, { name: "Valdis", gender: "male" }, { name: "Ilze", gender: "female" }, { name: "Andris", gender: "male" }, { name: "Inga", gender: "female" }, { name: "Juris", gender: "male" }, { name: "Dace", gender: "female" }, { name: "Pēteris", gender: "male" }, { name: "Līga", gender: "female" }, { name: "Māris", gender: "male" }, { name: "Sarmīte", gender: "female" }, { name: "Aigars", gender: "male" }, { name: "Iveta", gender: "female" }, { name: "Dainis", gender: "male" }, { name: "Zane", gender: "female" }, { name: "Artūrs", gender: "male" }, { name: "Anita", gender: "female" } ],
            bg: [ { name: "Георги", gender: "male" }, { name: "Иванка", gender: "female" }, { name: "Иван", gender: "male" }, { name: "Мария", gender: "female" }, { name: "Димитър", gender: "male" }, { name: "Петя", gender: "female" }, { name: "Николай", gender: "male" }, { name: "Елена", gender: "female" }, { name: "Васил", gender: "male" }, { name: "Йорданка", gender: "female" }, { name: "Петър", gender: "male" }, { name: "Надежда", gender: "female" }, { name: "Александър", gender: "male" }, { name: "Десислава", gender: "female" }, { name: "Тодор", gender: "male" }, { name: "Маргарита", gender: "female" }, { name: "Стефан", gender: "male" }, { name: "Даниела", gender: "female" }, { name: "Христо", gender: "male" }, { name: "Виолета", gender: "female" } ],
            lt: [ { name: "Jonas", gender: "male" }, { name: "Irena", gender: "female" }, { name: "Antanas", gender: "male" }, { name: "Janina", gender: "female" }, { name: "Petras", gender: "male" }, { name: "Ona", gender: "female" }, { name: "Juozas", gender: "male" }, { name: "Danutė", gender: "female" }, { name: "Vytautas", gender: "male" }, { name: "Aldona", gender: "female" }, { name: "Kazys", gender: "male" }, { name: "Zofija", gender: "female" }, { name: "Bronius", gender: "male" }, { name: "Marija", gender: "female" }, { name: "Vladislovas", gender: "male" }, { name: "Regina", gender: "female" }, { name: "Algirdas", gender: "male" }, { name: "Rasa", gender: "female" }, { name: "Mindaugas", gender: "male" }, { name: "Laima", gender: "female" } ]
        },
        comments: {
            // NOTE: Comments are kept mostly gender-neutral for simplicity.
            // You might need to create separate male/female comment pools
            // or use more complex templating for truly gendered comments in some languages.
            en: [ "This project is amazing for beginners!", "So happy I could build a split board without spending a fortune.", "The guides are incredibly clear, thank you!", "Vial support out of the box is fantastic.", "My hands feel so much better with a split layout.", "Highly recommend the Cheapino!", "Building it was a fun weekend project.", "The open-source nature is the best part.", "Great community around this board.", "Already planning my next Cheapino build!", "Perfect entry into custom keyboards.", "Surprised how well it performs for the price.", "Soldering was easier than I thought.", "Love the compact design.", "Finally, an ergonomic option that isn't expensive.", "Looks great and feels even better to type on.", "A truly accessible keyboard project.", "My wrists thank you!", "Incredible value for money.", "Learned so much while building it." ],
            uk: [ "Цей проєкт чудовий для початківців!", "Дуже щасливий(а), що зміг(змогла) зібрати розділену плату, не витрачаючи багато грошей.", "Посібники надзвичайно зрозумілі, дякую!", "Підтримка Vial з коробки – це фантастика.", "Мої руки почуваються набагато краще з розділеним макетом.", "Дуже рекомендую Cheapino!", "Збирання було веселим проєктом на вихідні.", "Відкритий вихідний код – це найкраща частина.", "Чудова спільнота навколо цієї плати.", "Вже планую свою наступну збірку Cheapino!", "Ідеальний вхід у світ кастомних клавіатур.", "Здивований(а), наскільки добре вона працює за таку ціну.", "Припаювання було легше, ніж я думав(ла).", "Подобається компактний дизайн.", "Нарешті, ергономічний варіант, який не є дорогим.", "Виглядає чудово і набирати текст ще приємніше.", "Справді доступний проєкт клавіатури.", "Мої зап'ястя дякують вам!", "Неймовірне співвідношення ціни та якості.", "Так багато навчився(лася) під час збирання." ], // Added gender hints where simple
            nl: [ "Dit project is geweldig voor beginners!", "Zo blij dat ik een gesplitst toetsenbord kon bouwen zonder een fortuin uit te geven.", "De handleidingen zijn ongelooflijk duidelijk, bedankt!", "Vial-ondersteuning out-of-the-box is fantastisch.", "Mijn handen voelen veel beter aan met een gesplitste lay-out.", "Beveel de Cheapino ten zeerste aan!", "Het bouwen ervan was een leuk weekendproject.", "Het open-source karakter is het beste deel.", "Geweldige gemeenschap rond dit toetsenbord.", "Ben al mijn volgende Cheapino-bouw aan het plannen!", "Perfecte instap in aangepaste toetsenborden.", "Verbaasd hoe goed het presteert voor de prijs.", "Solderen was makkelijker dan ik dacht.", "Houd van het compacte ontwerp.", "Eindelijk een ergonomische optie die niet duur is.", "Ziet er geweldig uit en voelt nog beter aan om op te typen.", "Een echt toegankelijk toetsenbordproject.", "Mijn polsen danken je!", "Ongelooflijke waarde voor je geld.", "Zoveel geleerd tijdens het bouwen." ],
            et: [ "See projekt on algajatele imeline!", "Nii õnnelik, et sain ehitada poolitatud plaadi ilma varandust kulutamata.", "Juhendid on uskumatult selged, aitäh!", "Vial tugi karbist välja võttes on fantastiline.", "Mu käed tunnevad end poolitatud paigutusega palju paremini.", "Soovitan Cheapinot soojalt!", "Selle ehitamine oli lõbus nädalavahetuse projekt.", "Avatud lähtekood on parim osa.", "Suurepärane kogukond selle plaadi ümber.", "Juba planeerin oma järgmist Cheapino ehitust!", "Ideaalne sisenemine kohandatud klaviatuuride maailma.", "Üllatunud, kui hästi see hinna eest töötab.", "Jootmine oli lihtsam, kui ma arvasin.", "Armastan kompaktset disaini.", "Lõpuks ometi ergonoomiline valik, mis ei ole kallis.", "Näeb välja suurepärane ja trükkida on veel parem tunne.", "Tõeliselt ligipääsetav klaviatuuriprojekt.", "Mu randmed tänavad teid!", "Uskumatu hinna ja kvaliteedi suhe.", "Õppisin selle ehitamise ajal nii palju." ],
            fi: [ "Tämä projekti on mahtava aloittelijoille!", "Niin iloinen, että sain rakennettua jaetun näppäimistön kuluttamatta omaisuutta.", "Oppaat ovat uskomattoman selkeät, kiitos!", "Vial-tuki suoraan paketista on fantastinen.", "Käteni tuntuvat paljon paremmalta jaetulla asettelulla.", "Suosittelen Cheapinoa lämpimästi!", "Sen rakentaminen oli hauska viikonloppuprojekti.", "Avoimen lähdekoodin luonne on paras osa.", "Loistava yhteisö tämän näppäimistön ympärillä.", "Suunnittelen jo seuraavaa Cheapino-rakennustani!", "Täydellinen sisäänpääsy mukautettujen näppäimistöjen maailmaan.", "Yllättynyt, kuinka hyvin se toimii hintaansa nähden.", "Juottaminen oli helpompaa kuin luulin.", "Pidän kompaktista muotoilusta.", "Viimeinkin ergonominen vaihtoehto, joka ei ole kallis.", "Näyttää upealta ja tuntuu vieläkin paremmalta kirjoittaa.", "Todella saavutettava näppäimistöprojekti.", "Ranteeni kiittävät sinua!", "Uskomaton vastine rahalle.", "Opin niin paljon sitä rakentaessani." ],
            lv: [ "Šis projekts ir pārsteidzošs iesācējiem!", "Tik priecīgs(a), ka varēju uzbūvēt dalītu tastatūru, netērējot bagātību.", "Rokasgrāmatas ir neticami skaidras, paldies!", "Vial atbalsts no kastes ir fantastisks.", "Manas rokas jūtas daudz labāk ar dalītu izkārtojumu.", "Ļoti iesaku Cheapino!", "Tās būvēšana bija jautrs nedēļas nogales projekts.", "Atvērtā koda daba ir labākā daļa.", "Lieliska kopiena ap šo tastatūru.", "Jau plānoju savu nākamo Cheapino būvniecību!", "Perfekta ieejas iespēja pielāgoto tastatūru pasaulē.", "Pārsteigts(a), cik labi tā darbojas par šādu cenu.", "Lodēšana bija vieglāka, nekā domāju.", "Patīk kompaktais dizains.", "Beidzot ergonomiska iespēja, kas nav dārga.", "Izskatās lieliski un rakstīt jūtas vēl labāk.", "Patiesi pieejams tastatūras projekts.", "Mani plaukstas pateicas jums!", "Neticama vērtība par naudu.", "Tik daudz iemācījos to būvējot." ], // Added gender hints
            bg: [ "Този проект е страхотен за начинаещи!", "Толкова се радвам, че успях да изградя разделелена платка, без да харча цяло състояние.", "Ръководствата са невероятно ясни, благодаря!", "Поддръжката на Vial от кутията е фантастична.", "Ръцете ми се чувстват много по-добре с разделената подредба.", "Силно препоръчвам Cheapino!", "Изграждането му беше забавен уикенд проект.", "Отвореният код е най-добрата част.", "Страхотна общност около тази платка.", "Вече планирам следващата си Cheapino сборка!", "Перфектен вход в света на персонализираните клавиатури.", "Изненадан(а) съм колко добре работи за цената си.", "Запояването беше по-лесно, отколкото си мислех.", "Харесва ми компактният дизайн.", "Най-накрая, ергономична опция, която не е скъпа.", "Изглежда страхотно и се чувства още по-добре за писане.", "Наистина достъпен проект за клавиатура.", "Китката ми ви благодари!", "Невероятна стойност за парите.", "Научих толкова много, докато го изграждах." ], // Added gender hints
            lt: [ "Šis projektas yra nuostabus pradedantiesiems!", "Taip džiaugiuosi, kad galėjau sukurti padalintą plokštę neišleisdamas daug pinigų.", "Vadovai yra neįtikėtinai aiškūs, ačiū!", "Vial palaikymas iškart yra fantastiškas.", "Mano rankos jaučiasi daug geriau su padalintu išdėstymu.", "Labai rekomenduoju „Cheapino“!", "Jo kūrimas buvo smagus savaitgalio projektas.", "Atvirojo kodo pobūdis yra geriausia dalis.", "Puiki bendruomenė aplink šią plokštę.", "Jau planuoju kitą „Cheapino“ kūrinį!", "Puikus įėjimas į individualių klaviatūrų pasaulį.", "Nustebęs(usi), kaip gerai jis veikia už tokią kainą.", "Litavimas buvo lengvesnis, nei maniau.", "Patinka kompaktiškas dizainas.", "Pagaliau, ergonomiškas variantas, kuris nėra brangus.", "Atrodo puikiai ir rašyti jaučiasi dar geriau.", "Tikrai prieinamas klaviatūros projektas.", "Mano riešai jums dėkingi!", "Neįtikėtina vertė už pinigus.", "Tiek daug sužinojau jį kurdamas." ] // Added gender hints
        }
    };

    // --- Language Switching Logic ---
    function setDocumentLang(lang) {
        document.documentElement.setAttribute('lang', lang);
    }

    selectElement.addEventListener('change', function() {
        const selectedLang = this.value;
        languageSections.forEach(section => {
            section.classList.remove('active');
        });
        const activeSection = document.querySelector(`.language-section[data-lang="${selectedLang}"]`);
        if (activeSection) {
            activeSection.classList.add('active');
            setDocumentLang(selectedLang);
        }
    });

    // Set initial language on page load
    setDocumentLang(selectElement.value);

    // --- S-Curve Calculation ---
    function calculateCommentsToShow(currentDate) {
        const startDate = new Date('2025-05-04'); // YYYY-MM-DD
        const endDate = new Date('2025-12-01');   // YYYY-MM-DD
        const minComments = 1;
        const maxComments = 80;

        // Ensure dates are treated as UTC to avoid timezone issues in calculations
        const startMillis = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const endMillis = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const currentMillis = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

        if (currentMillis < startMillis) return minComments;
        if (currentMillis >= endMillis) return maxComments;

        const totalDuration = endMillis - startMillis;
        const currentDuration = currentMillis - startMillis;

        // Normalize current progress (0 to 1)
        const x = currentDuration / totalDuration;

        // Logistic function parameters (tuned for S-curve shape)
        // L = maxComments - minComments
        // k = steepness (e.g., 10-12 gives a decent S shape over the 0-1 range)
        // x0 = midpoint (0.5 for normalized range)
        const L = maxComments - minComments;
        const k = 10; // Adjust for steeper/gentler curve
        const x0 = 0.5;

        const sigmoidValue = L / (1 + Math.exp(-k * (x - x0)));

        // Calculate final number of comments and round
        const numComments = Math.round(minComments + sigmoidValue);

        // Clamp the value just in case
        return Math.max(minComments, Math.min(maxComments, numComments));
    }

    // --- Deterministic Shuffle (using date as seed) ---
    function seededShuffle(array, seed) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        const random = function() {
            // Simple LCG PRNG: seed = (a * seed + c) % m
            // Parameters from POSIX standard (good enough for this purpose)
            const a = 1103515245;
            const c = 12345;
            const m = Math.pow(2, 31); // Use 31 bits to avoid exceeding JS integer limits easily
            seed = (a * seed + c) % m;
            return seed / m; // Return value between 0 (inclusive) and 1 (exclusive)
        };

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array; // Return the mutated array
    }


    // --- Comment Generation Logic ---
    function generateComments() {
        const today = new Date();
        const numberOfCommentsToShow = calculateCommentsToShow(today);

        // Create a seed from the date (YYYYMMDD format)
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const day = String(today.getDate()).padStart(2, '0');
        const dateSeed = parseInt(`${year}${month}${day}`, 10);

        // 1. Create a master list of all possible comments
        let allPossibleComments = [];
        const languages = Object.keys(fakeData.names);

        languages.forEach(lang => {
            const namesInLang = fakeData.names[lang];
            const commentsInLang = fakeData.comments[lang];
            // Pair names, comments, and avatars for this language
            // Cycle through avatars to ensure variety
            for (let i = 0; i < Math.max(namesInLang.length, commentsInLang.length) * 2; i++) { // Generate more combinations
                  const nameData = namesInLang[i % namesInLang.length];
                  const commentText = commentsInLang[i % commentsInLang.length];
                  const avatarHtml = fakeData.avatars[i % fakeData.avatars.length];
                  allPossibleComments.push({
                      lang: lang, // Keep track of language if needed later
                      name: nameData.name,
                      gender: nameData.gender, // Store gender
                      avatar: avatarHtml,
                      text: commentText
                  });
            }
        });

        // 2. Shuffle the master list deterministically using the date seed
        seededShuffle(allPossibleComments, dateSeed);

        // 3. Select the first N comments
        const commentsToDisplay = allPossibleComments.slice(0, numberOfCommentsToShow);

        // 4. Generate HTML for selected comments
        let commentsHtml = '';
        commentsToDisplay.forEach(commentData => {
            commentsHtml += `
                <div class="comment">
                    <div class="avatar">${commentData.avatar}</div>
                    <div class="comment-content">
                        <span class="user-name">${commentData.name}</span>
                        <p class="comment-text">${commentData.text}</p>
                    </div>
                </div>
            `;
        });

        // 5. Insert HTML into the DOM
        // Clear previous comments if regenerating (though not strictly needed with deterministic approach)
        // commentsSection.innerHTML = '<h2>Comments</h2>'; // Keep header
        commentsSection.innerHTML += commentsHtml; // Append generated comments
    }

    // --- Initial Setup ---
    generateComments(); // Generate comments on page load

});
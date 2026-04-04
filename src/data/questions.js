
export const TIME_PER_QUESTION = 30
export const sections = [
  {
    id: 'figma',
    title: 'Figma\'da interfeys dizayni',
    icon: '🎨',
    description: 'Figma asoslari, komponentlar, uslublar va dizayn tizimi',
    questions: [
      {
        id: 1,
        question: "Figma qaysi platforma asosida ishlaydi?",
        options: ["Faqat macOS", "Faqat Windows", "Brauzer asosida (web-based)", "Faqat Linux"],
        correct: 2
      },
      {
        id: 2,
        question: "Figma'da 'Frame' nima?",
        options: ["Matn elementi", "Sahifa yoki ekran konteyneri", "Rang palitasi", "Plugin turi"],
        correct: 1
      },
      {
        id: 3,
        question: "Figma'da 'Component' (komponent) qanday yaratiladi?",
        options: ["Ctrl+K", "Ctrl+Alt+K", "Ctrl+Alt+G", "Edit > Create Component"],
        correct: 1
      },
      {
        id: 4,
        question: "Figma'da 'Auto Layout' qanday funksiya?",
        options: ["Rasmlarni siqish", "Elementlarni responsive joylash", "Ranglarni avtomatik tanlash", "Prototipni o'ynash"],
        correct: 1
      },
      {
        id: 5,
        question: "Figma'da 'Constraints' nima?",
        options: ["Rang cheklovi", "Elementning resize paytida qanday harakat qilishi", "Qatlam nomi", "Font o'lchami"],
        correct: 1
      },
      {
        id: 6,
        question: "Figma'da 'Variant' qanday funksiya?",
        options: ["Har xil sahifalar", "Komponentning turli holatlari (hover, active, disabled)", "Har xil ranglar", "Har xil font o'lchamlari"],
        correct: 1
      },
      {
        id: 7,
        question: "Figma'da 'Prototype' rejimiga o'tish uchun?",
        options: ["Edit tugmasi", "Prototype paneli (o'ng yuqori)", "View > Prototype", "Plugin orqali"],
        correct: 1
      },
      {
        id: 8,
        question: "Figma'da 'Smart Animate' nima?",
        options: ["Oddiy o'tish", "Bir xil nomdagi elementlarni topib silliq animatsiya yaratish", "Tezkor animatsiya", "Tasodifiy animatsiya"],
        correct: 1
      },
      {
        id: 9,
        question: "Figma'da 'Team Library' nima?",
        options: ["Shaxsiy fayl saqlash", "Jamoa uchun umumiy komponentlar va uslublar kutubxonasi", "Chat funksiyasi", "Versiya tarixi"],
        correct: 1
      },
      {
        id: 10,
        question: "Figma'da 'Dev Mode' nima uchun?",
        options: ["Dizayn uchun", "Dasturchilar uchun maxsus ko'rinish va kod eksporti", "Test uchun", "Animatsiya uchun"],
        correct: 1
      },
      {
        id: 11,
        question: "Figma'da 'Boolean Operations' nima?",
        options: ["Mantiqiy operatsiyalar", "Shakllarni birlashtirish, ayirish, kesishish operatsiyalari", "Ranglarni aralashtirish", "Qatlamlarni guruhlash"],
        correct: 1
      },
      {
        id: 12,
        question: "Figma'da 'Mask' nima uchun ishlatiladi?",
        options: ["Elementni yashirish", "Rasm yoki shaklni belgilangan chegarada ko'rsatish", "Qatlamni bloklash", "Rang o'zgartirish"],
        correct: 1
      },
      {
        id: 13,
        question: "Figma'da 'Fill' va 'Stroke' farqi nima?",
        options: ["Ikkalasi bir xil", "Fill - ichki rang, Stroke - chegara chizig'i", "Fill - chegara, Stroke - ichki rang", "Ikkalasi ham chegara"],
        correct: 1
      },
      {
        id: 14,
        question: "Figma'da 'Pen Tool' bilan qanday chizish mumkin?",
        options: ["Faqat to'g'ri chiziqlar", "Vektorli shakllar va bezier egri chiziqlar", "Faqat aylanalar", "Faqat to'rtburchaklar"],
        correct: 1
      },
      {
        id: 15,
        question: "Figma'da 'Community' nima?",
        options: ["Foydalanuvchilar forumi", "Bepul shablonlar, plugin va resurslar ombori", "Texnik yordam", "O'quv platformasi"],
        correct: 1
      }
    ]
  },
  {
    id: 'sketch',
    title: 'Sketch asoslari',
    icon: '✏️',
    description: 'Sketch dasturi, symbolar, uslublar va eksport',
    questions: [
      {
        id: 1,
        question: "Sketch dasturi qaysi operatsion tizimda ishlaydi?",
        options: ["Windows", "Linux", "macOS", "iOS"],
        correct: 2
      },
      {
        id: 2,
        question: "Sketch'da 'Symbol' nima?",
        options: ["Animatsiya elementi", "Qayta ishlatiluvchi UI elementi", "Sahifa nomi", "Eksport formati"],
        correct: 1
      },
      {
        id: 3,
        question: "Sketch'da yangi Artboard qo'shish uchun?",
        options: ["Ctrl+N", "A tugmasi", "F tugmasi", "Insert > Artboard"],
        correct: 1
      },
      {
        id: 4,
        question: "Sketch'da 'Shared Styles' nima?",
        options: ["Umumiy fayl", "Bir xil rang va font uslublarini qayta ishlatish", "Umumiy Symbol", "Umumiy Artboard"],
        correct: 1
      },
      {
        id: 5,
        question: "Sketch'da vektorli shaklni tahrirlash uchun?",
        options: ["V tugmasi", "Enter tugmasi (Double click)", "E tugmasi", "P tugmasi"],
        correct: 1
      },
      {
        id: 6,
        question: "Sketch'da 'Slice' asbob nima uchun?",
        options: ["Shakllarni kesish", "Eksport uchun maxsus maydon belgilash", "Rasmni qirqish", "Qatlamni ajratish"],
        correct: 1
      },
      {
        id: 7,
        question: "Sketch'da 'Mask' qanday yaratiladi?",
        options: ["Menyu > Mask", "Ctrl+M", "Pastki qatlam ustida o'ng klik > Use as Mask", "Insert > Mask"],
        correct: 2
      },
      {
        id: 8,
        question: "Sketch'da 'Overrides' (Symbol uchun) nima?",
        options: ["Symbol'ni o'chirish", "Symbol instancesidagi matn va rasmlarni alohida o'zgartirish", "Symbol'ni yangilash", "Symbol'ni guruhlash"],
        correct: 1
      },
      {
        id: 9,
        question: "Sketch'da 'Inspector' paneli qayerda?",
        options: ["Chap tomonda", "O'ng tomonda", "Yuqorida", "Pastda"],
        correct: 1
      },
      {
        id: 10,
        question: "Sketch'da 'Pages' nima?",
        options: ["Artboard nomi", "Bir fayldagi alohida ish maydonlari", "Eksport sahifalari", "Plugin sahifasi"],
        correct: 1
      },
      {
        id: 11,
        question: "Sketch'da gradient qo'shish uchun?",
        options: ["Fill > Linear/Radial gradient tanlash", "Stroke menyusi", "Plugin orqali", "Faqat CSS orqali"],
        correct: 0
      },
      {
        id: 12,
        question: "Sketch'da 'Group' yaratish uchun qaysi shortcut?",
        options: ["Ctrl+G", "Ctrl+Shift+G", "Cmd+G", "Cmd+Shift+G"],
        correct: 2
      },
      {
        id: 13,
        question: "Sketch'da 'Smart Layout' nima?",
        options: ["Aqlli grid", "Symbol resizing paytida ichki elementlar o'zini avtomatik moslashtirishi", "Aqlli align", "Aqlli eksport"],
        correct: 1
      },
      {
        id: 14,
        question: "Sketch Cloud nima?",
        options: ["Mahalliy saqlash", "Onlayn fayl almashish va prototip ko'rsatish platformasi", "Kod editor", "Plugin bozori"],
        correct: 1
      },
      {
        id: 15,
        question: "Sketch'da 'Color Variables' nima?",
        options: ["Shaxsiy rang palitasi", "Global darajada belgilangan va qayta ishlatiladigan ranglar", "Plugin ranglari", "Brauzer ranglari"],
        correct: 1
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript - Eventlar',
    icon: '⚡',
    description: 'JavaScript eventlari, DOM bilan ishlash va interaktivlik',
    questions: [
      {
        id: 1,
        question: "JavaScript'da event nima?",
        options: ["Kod xatosi", "Brauzer yoki foydalanuvchi tomonidan sodir bo'lgan harakat", "Server javobi", "CSS qoidasi"],
        correct: 1
      },
      {
        id: 2,
        question: "addEventListener() metodining sintaksisi?",
        options: ["element.addEvent(type, fn)", "element.addEventListener(type, listener)", "element.on(type, fn)", "element.bind(type, fn)"],
        correct: 1
      },
      {
        id: 3,
        question: "event.preventDefault() nima qiladi?",
        options: ["Eventni to'xtatadi", "Brauzerning standart harakatini bekor qiladi", "Event bubbling'ni to'xtatadi", "DOM'ni yangilaydi"],
        correct: 1
      },
      {
        id: 4,
        question: "'Event bubbling' qanday ishlaydi?",
        options: ["Pastdan yuqoriga", "Child elementdan parent elementlarga ko'tariladi", "Yuqoridan pastga", "Faqat root da"],
        correct: 1
      },
      {
        id: 5,
        question: "Event delegation nima?",
        options: ["Event tarqatish", "Parent elementga listener qo'shib child eventlarini boshqarish", "Event nusxalash", "Event o'chirish"],
        correct: 1
      },
      {
        id: 6,
        question: "event.stopPropagation() nima qiladi?",
        options: ["Standart harakatni bekor qiladi", "Event bubbling/capturing'ni to'xtatadi", "Sahifani qayta yuklaydi", "DOM'ni tozalaydi"],
        correct: 1
      },
      {
        id: 7,
        question: "'Event capturing' qanday ishlaydi?",
        options: ["Pastdan yuqoriga", "Root (yuqori) dan child ga tushadi", "Faqat child da", "Faqat button da"],
        correct: 1
      },
      {
        id: 8,
        question: "'mouseenter' va 'mouseover' farqi?",
        options: ["Bir xil", "mouseenter - faqat element o'zida, mouseover - childlarda ham", "mouseenter tezroq", "mouseover aniqroq"],
        correct: 1
      },
      {
        id: 9,
        question: "DOM elementni id bo'yicha tanlash?",
        options: ["document.getElement(id)", "document.getElementById('id')", "document.find('#id')", "document.select('#id')"],
        correct: 1
      },
      {
        id: 10,
        question: "querySelectorAll() nima qaytaradi?",
        options: ["Bitta element", "NodeList (barcha mos elementlar)", "Array", "HTMLCollection"],
        correct: 1
      },
      {
        id: 11,
        question: "'keydown' va 'keyup' farqi?",
        options: ["Bir xil", "keydown - tugma bosilganda, keyup - qo'yib yuborilganda", "keydown tezroq", "keyup birinchi"],
        correct: 1
      },
      {
        id: 12,
        question: "'change' event qachon ishlaydi?",
        options: ["Har bir tahrirda", "Element qiymati o'zgarib, focus yo'qotilganda", "Darhol", "Hech qachon"],
        correct: 1
      },
      {
        id: 13,
        question: "event.target nima?",
        options: ["Event turi", "Eventni bevosita qabul qilgan element", "Parent element", "Document"],
        correct: 1
      },
      {
        id: 14,
        question: "'DOMContentLoaded' event nima?",
        options: ["CSS yuklanganda", "HTML to'liq tahlil qilinib DOM tayyor bo'lganda", "Rasmlar yuklanganda", "Server javob berganda"],
        correct: 1
      },
      {
        id: 15,
        question: "Throttling va debouncing nima?",
        options: ["Event o'chirish", "Tez-tez chaqiriladigan eventlarni cheklovchi optimizatsiya usullari", "Event to'xtatish", "Event kechiktirish"],
        correct: 1
      }
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript asoslari',
    icon: '📘',
    description: 'TypeScript tiplari, interfeyslar va genericlar',
    questions: [
      {
        id: 1,
        question: "TypeScript nima?",
        options: ["Yangi dasturlash tili", "JavaScript'ning statik tipli superset'i", "CSS framework", "Backend tili"],
        correct: 1
      },
      {
        id: 2,
        question: "TypeScript faylining kengaytmasi?",
        options: [".js", ".ts", ".tsx", ".types"],
        correct: 1
      },
      {
        id: 3,
        question: "TypeScript'da 'any' tipi nima?",
        options: ["Faqat string", "Har qanday tip bo'lishi mumkin - type checking o'chiriladi", "Faqat number", "Faqat object"],
        correct: 1
      },
      {
        id: 4,
        question: "TypeScript'da interface yaratish?",
        options: ["type MyI = {}", "interface MyInterface { prop: string }", "class MyInterface {}", "define MyInterface {}"],
        correct: 1
      },
      {
        id: 5,
        question: "TypeScript'da Generic nima?",
        options: ["Umumiy funksiya", "Turli tiplarda ishlaydigan qayta ishlatiluvchi kod", "Global o'zgaruvchi", "Umumiy interface"],
        correct: 1
      },
      {
        id: 6,
        question: "TypeScript'da 'unknown' tipi nima?",
        options: ["'any' bilan bir xil", "Noma'lum tip - ishlatishdan oldin tekshirishni talab qiladi", "Void turi", "Never turi"],
        correct: 1
      },
      {
        id: 7,
        question: "TypeScript'da 'void' nima?",
        options: ["Hech narsa qaytarmaydigan funksiya uchun", "Yashirin tip", "String turi", "Number turi"],
        correct: 0
      },
      {
        id: 8,
        question: "Optional property qanday belgilanadi?",
        options: ["property: string?", "property?: string", "optional property: string", "property: string | undefined"],
        correct: 1
      },
      {
        id: 9,
        question: "Union type qanday yoziladi?",
        options: ["string & number", "string | number", "string or number", "(string, number)"],
        correct: 1
      },
      {
        id: 10,
        question: "Intersection type qanday yoziladi?",
        options: ["A | B", "A & B", "A + B", "A, B"],
        correct: 1
      },
      {
        id: 11,
        question: "TypeScript'da 'keyof' nima?",
        options: ["Kalit yaratish", "Ob'ekt tipining barcha key'larini union qilib berish", "Ob'ekt qiymati", "Array turi"],
        correct: 1
      },
      {
        id: 12,
        question: "TypeScript'da 'Enum' nima?",
        options: ["Oddiy ob'ekt", "Nomlangan konstantalar to'plami", "Array turi", "Interface turi"],
        correct: 1
      },
      {
        id: 13,
        question: "TypeScript'da 'Tuple' nima?",
        options: ["Tartibsiz array", "Aniq tuzilishga ega array: [string, number]", "Ob'ekt turi", "Set turi"],
        correct: 1
      },
      {
        id: 14,
        question: "TypeScript'da 'as' kalit so'zi nima?",
        options: ["Qiymat berish", "Type assertion - tipni aniq ko'rsatish", "Nusxalash", "Import qilish"],
        correct: 1
      },
      {
        id: 15,
        question: "tsconfig.json nima?",
        options: ["TypeScript fayli", "TypeScript kompilyator sozlamalari fayli", "Node.js sozlama", "Webpack sozlama"],
        correct: 1
      }
    ]
  },
  {
    id: 'bootstrap',
    title: 'Bootstrap freymvork',
    icon: '🅱️',
    description: 'Bootstrap grid, komponentlar va responsive dizayn',
    questions: [
      {
        id: 1,
        question: "Bootstrap versiyasi hozir qaysi?",
        options: ["3", "4", "5", "6"],
        correct: 2
      },
      {
        id: 2,
        question: "Bootstrap'da grid tizimi necha ustunli?",
        options: ["6", "8", "12", "16"],
        correct: 2
      },
      {
        id: 3,
        question: "Bootstrap'da 'container' va 'container-fluid' farqi?",
        options: ["Bir xil", "container - belgilangan maksimal kenglik, container-fluid - 100% kenglik", "container kattaroq", "container-fluid kattaroq"],
        correct: 1
      },
      {
        id: 4,
        question: "Bootstrap'da 'col-sm-4' nimani anglatadi?",
        options: ["4px kenglik", "Small va katta ekranlar uchun 12dan 4 ustun", "4% kenglik", "4 ta ustun"],
        correct: 1
      },
      {
        id: 5,
        question: "Bootstrap'da 'navbar-toggler' nima uchun?",
        options: ["Rang o'zgartirish", "Kichik ekranlar uchun hamburger menyu tugmasi", "Logo ko'rsatish", "Footer qo'shish"],
        correct: 1
      },
      {
        id: 6,
        question: "Bootstrap'da 'row' nima?",
        options: ["Qator", "Grid ustunlarini o'rash uchun flex container", "Header", "Section"],
        correct: 1
      },
      {
        id: 7,
        question: "Bootstrap'da breakpointlar qaysilar?",
        options: ["xs, sm, md, lg", "xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), xxl (≥1400px)", "sm, md, lg", "xs, sm, md"],
        correct: 1
      },
      {
        id: 8,
        question: "Bootstrap'da element yashirish uchun?",
        options: ["display: none", "d-none klassi", "hidden klassi", "invisible klassi"],
        correct: 1
      },
      {
        id: 9,
        question: "Bootstrap'da 'btn-primary' rangi qanday?",
        options: ["Qizil", "Ko'k (asosiy rang)", "Yashil", "Sariq"],
        correct: 1
      },
      {
        id: 10,
        question: "Bootstrap'da 'collapse' nima?",
        options: ["O'chirish", "Elementni ko'rsatish/yashirish toggle funksiyasi", "Siqish", "Kichraytirish"],
        correct: 1
      },
      {
        id: 11,
        question: "Bootstrap'da 'card' komponenti nima?",
        options: ["Matn elementi", "Kontent ko'rsatish uchun flexible konteyner", "Button turi", "Nav turi"],
        correct: 1
      },
      {
        id: 12,
        question: "Bootstrap'da 'modal' qanday ochiladi?",
        options: ["JS yozmasdan", "data-bs-toggle='modal' data-bs-target='#id' atributlari bilan", "Faqat JS bilan", "Faqat CSS bilan"],
        correct: 1
      },
      {
        id: 13,
        question: "Bootstrap'da 'spinner' nima?",
        options: ["Aylanaydigan tasvir", "Yuklash animatsiyasi indikatori", "Cursor animatsiyasi", "Scroll animatsiyasi"],
        correct: 1
      },
      {
        id: 14,
        question: "Bootstrap'da 'tooltip' nima?",
        options: ["Matn elementi", "Hover paytida ko'rinadigan kichik izoh", "Dropdown menyu", "Context menyu"],
        correct: 1
      },
      {
        id: 15,
        question: "Bootstrap'da 'accordion' nima?",
        options: ["Musiqa asbobi", "Faqat bitta bo'limni ko'rsatadigan collapse panel", "Dropdown turi", "Modal turi"],
        correct: 1
      }
    ]
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    icon: '🌬️',
    description: 'Tailwind utility classlari va UI yaratish',
    questions: [
      {
        id: 1,
        question: "Tailwind CSS qanday yondashuv bilan ishlaydi?",
        options: ["Component-based", "Utility-first CSS", "BEM metodologiyasi", "CSS-in-JS"],
        correct: 1
      },
      {
        id: 2,
        question: "Tailwind'da matn rangi?",
        options: ["color-blue-500", "text-blue-500", "font-blue-500", "blue-text-500"],
        correct: 1
      },
      {
        id: 3,
        question: "Tailwind'da padding (barcha tomondan)?",
        options: ["padding-4", "p-4", "pad-4", "all-p-4"],
        correct: 1
      },
      {
        id: 4,
        question: "Tailwind'da hover effekti?",
        options: ["hover:bg-blue-500", "bg-blue-500:hover", ":hover-bg-blue", "on-hover-bg"],
        correct: 0
      },
      {
        id: 5,
        question: "Tailwind'da responsive prefix (medium ekran)?",
        options: ["m:", "med:", "md:", "medium:"],
        correct: 2
      },
      {
        id: 6,
        question: "Tailwind'da 'w-full' nima?",
        options: ["Kenglik yo'q", "width: 100%", "Minimal kenglik", "Maksimal kenglik"],
        correct: 1
      },
      {
        id: 7,
        question: "Tailwind'da 'h-screen' nima?",
        options: ["Screen o'lchami", "height: 100vh", "height: 100%", "Screen balandligi yo'q"],
        correct: 1
      },
      {
        id: 8,
        question: "Tailwind'da flex container?",
        options: ["display-flex", "flex", "d-flex", "flexbox"],
        correct: 1
      },
      {
        id: 9,
        question: "Tailwind'da elementlarni gorizontal markazga tekislash (flex)?",
        options: ["justify-middle", "justify-center", "align-center", "center-x"],
        correct: 1
      },
      {
        id: 10,
        question: "Tailwind'da elementlarni vertikal markazga tekislash (flex)?",
        options: ["align-middle", "items-center", "vertical-center", "center-y"],
        correct: 1
      },
      {
        id: 11,
        question: "Tailwind'da 'gap-4' nima?",
        options: ["Padding", "Flex/grid elementlari orasidagi bo'shliq", "Margin", "Border"],
        correct: 1
      },
      {
        id: 12,
        question: "Tailwind'da 'truncate' nima?",
        options: ["Qisqartirish", "Matnni bir qatorda qoldirish va '...' bilan kesish", "Matnni o'chirish", "Matnni siqish"],
        correct: 1
      },
      {
        id: 13,
        question: "Tailwind'da 'sr-only' nima?",
        options: ["Screen reader olib tashlash", "Faqat screen reader uchun ko'rinadigan, vizual yashirin element", "Faqat mobil", "Faqat desktop"],
        correct: 1
      },
      {
        id: 14,
        question: "Tailwind'da 'dark:' prefiksi nima?",
        options: ["Qorong'u rang", "Dark mode uchun maxsus uslub", "Dark fon", "Qorong'u tema"],
        correct: 1
      },
      {
        id: 15,
        question: "Tailwind'da JIT (Just-In-Time) nima?",
        options: ["Kompilyatsiya turi", "Faqat ishlatiladigan classlarni real vaqtda generatsiya qilish", "JavaScript Integration Tool", "Faqat import"],
        correct: 1
      }
    ]
  },
  {
    id: 'react',
    title: 'React.js texnologiyasi',
    icon: '⚛️',
    description: 'React komponentlari, hooks va arxitektura',
    questions: [
      {
        id: 1,
        question: "React.js nima?",
        options: ["CSS freymvorki", "Facebook/Meta tomonidan yaratilgan JavaScript UI kutubxonasi", "Backend freymvorki", "Ma'lumotlar bazasi"],
        correct: 1
      },
      {
        id: 2,
        question: "React'da 'Virtual DOM' nima?",
        options: ["Haqiqiy DOM", "Haqiqiy DOM'ning xotiradagi yengil nusxasi", "DOM emulatori", "Server DOM"],
        correct: 1
      },
      {
        id: 3,
        question: "React'da funktsional komponent qanday yaratiladi?",
        options: ["class MyComp extends React", "const MyComp = () => <div>...</div>", "function* MyComp()", "React.component('MyComp')"],
        correct: 1
      },
      {
        id: 4,
        question: "React'da 'useState' hook sintaksisi?",
        options: ["const state = useState(0)", "const [count, setCount] = useState(0)", "let count = useState.init(0)", "useState count = 0"],
        correct: 1
      },
      {
        id: 5,
        question: "React'da 'props' nima?",
        options: ["Komponent o'zgaruvchisi", "Parent dan child ga uzatiladigan o'qish uchun ma'lumotlar", "Child o'zgaruvchisi", "Server ma'lumoti"],
        correct: 1
      },
      {
        id: 6,
        question: "React'da 'useEffect' hook nima uchun?",
        options: ["State yaratish", "Side effect'lar (API, DOM) uchun", "Ref yaratish", "Memo qilish"],
        correct: 1
      },
      {
        id: 7,
        question: "React'da 'key' prop ro'yxatda nima uchun?",
        options: ["ID berish", "React'ga elementlarni aniqlash va samarali DOM yangilash uchun", "Class berish", "Ref berish"],
        correct: 1
      },
      {
        id: 8,
        question: "React'da 'useContext' hook nima?",
        options: ["State hook", "React Context qiymatini komponentdan o'qish", "Ref hook", "Memo hook"],
        correct: 1
      },
      {
        id: 9,
        question: "React'da 'Fragment' nima?",
        options: ["HTML element", "Qo'chimcha DOM element qo'shmasdan bir nechta elementni qaytarish", "Virtual element", "Empty div"],
        correct: 1
      },
      {
        id: 10,
        question: "React'da 'Lifting State Up' nima?",
        options: ["State yuqoriga ko'chirish", "Umumiy state'ni umumiy parent komponentga ko'chirish", "State pastga tushirish", "State nusxalash"],
        correct: 1
      },
      {
        id: 11,
        question: "React'da 'Controlled component' nima?",
        options: ["Boshqariladigan element", "React state orqali input qiymati boshqariladigan form elementi", "CSS controlled", "DOM controlled"],
        correct: 1
      },
      {
        id: 12,
        question: "React'da 'useRef' nima?",
        options: ["State yaratish", "DOM elementiga murojaat yoki render'lar orasida qiymat saqlash", "Effect yaratish", "Callback yaratish"],
        correct: 1
      },
      {
        id: 13,
        question: "React'da 'memo' nima?",
        options: ["Memorization", "Komponentni gereksiz re-render dan saqlash HOC", "Memory hook", "Memo variable"],
        correct: 1
      },
      {
        id: 14,
        question: "React'da 'useMemo' hook nima?",
        options: ["State hook", "Qimmat hisob-kitoblarning natijasini kesh qilish", "Ref hook", "Effect hook"],
        correct: 1
      },
      {
        id: 15,
        question: "React 18 yangiliklari qaysilar?",
        options: ["Faqat bug fix", "Concurrent features, automatic batching, Suspense SSR, useId, useTransition", "Faqat TypeScript", "Faqat performance"],
        correct: 1
      }
    ]
  },
  {
    id: 'jsx',
    title: 'JSX sintaksisi',
    icon: '📝',
    description: 'JSX sintaksisi, event handling va shartli render',
    questions: [
      {
        id: 1,
        question: "JSX nima?",
        options: ["Yangi til", "JavaScript ichida HTML-ga o'xshash sintaksis kengaytmasi", "CSS kengaytmasi", "TypeScript turi"],
        correct: 1
      },
      {
        id: 2,
        question: "JSX'da class atributi?",
        options: ["class", "className", "htmlClass", "styleClass"],
        correct: 1
      },
      {
        id: 3,
        question: "JSX'da JavaScript ifodasi yozish?",
        options: ["<script>", "{ expression }", "(expression)", "[expression]"],
        correct: 1
      },
      {
        id: 4,
        question: "JSX'da shartli render (ternary)?",
        options: ["if else", "{ condition ? <A /> : <B /> }", "switch case", "ifRender()"],
        correct: 1
      },
      {
        id: 5,
        question: "JSX'da event nomi?",
        options: ["onclick", "onClick (camelCase)", "on-click", "ONCLICK"],
        correct: 1
      },
      {
        id: 6,
        question: "JSX'da for atributi (label uchun)?",
        options: ["for", "htmlFor", "labelFor", "forInput"],
        correct: 1
      },
      {
        id: 7,
        question: "JSX'da inline style?",
        options: ["style='color: red'", "style={{ color: 'red', fontSize: '16px' }}", "css={{ color: 'red' }}", "style={color: red}"],
        correct: 1
      },
      {
        id: 8,
        question: "JSX'da style kamelCase nima?",
        options: ["font-size", "fontSize (CSS kamelCase versiyasi)", "FontSize", "font_size"],
        correct: 1
      },
      {
        id: 9,
        question: "JSX'da ro'yxat render qilish?",
        options: ["forEach", "{arr.map(item => <li key={item.id}>{item.name}</li>)}", "for loop", "while loop"],
        correct: 1
      },
      {
        id: 10,
        question: "JSX'da event handler funksiyasi?",
        options: ["onClick='handleClick()'", "onClick={handleClick} (qavssiz)", "onClick='handleClick'", "onclick={handleClick}"],
        correct: 1
      },
      {
        id: 11,
        question: "JSX'da event handler bilan argument uzatish?",
        options: ["onClick={handleClick(id)}", "onClick={() => handleClick(id)}", "onClick=handleClick(id)", "onClick={handleClick, id}"],
        correct: 1
      },
      {
        id: 12,
        question: "JSX'da comment qanday yoziladi?",
        options: ["// comment", "{ /* comment */ }", "<!-- comment -->", "# comment"],
        correct: 1
      },
      {
        id: 13,
        question: "JSX'da Fragment sintaksisi?",
        options: ["<div></div>", "<> </> yoki <React.Fragment>", "<Fragment/>", "<empty>"],
        correct: 1
      },
      {
        id: 14,
        question: "JSX'da ko'p qatorli return?",
        options: ["return <div>", "return ( <div>...</div> ) - qavslar ichida", "return{ }", "return[ ]"],
        correct: 1
      },
      {
        id: 15,
        question: "JSX compile qilinganda nima bo'ladi?",
        options: ["HTML ga aylanadi", "React.createElement() chaqiruvlariga aylanadi", "CSS ga aylanadi", "JSON ga aylanadi"],
        correct: 1
      }
    ]
  }
]

// Barcha bo'limlardan umumiy savollar
export const getAllQuestions = () => {
  return sections.flatMap(section => 
    section.questions.map(q => ({ ...q, section: section.title }))
  )
}

// Bo'lim bo'yicha savollarni olish
export const getQuestionsBySection = (sectionId) => {
  const section = sections.find(s => s.id === sectionId)
  return section ? section.questions : []
}

// Jami savollar soni
export const getTotalQuestionsCount = () => {
  return sections.reduce((acc, section) => acc + section.questions.length, 0)
}
const dict = {
    title: {
        fa: "سازمان منطقه آزاد اینچه‌برون",
        en: "Inchebarun Free Zone Organization",
        rus: "Организация свободной зоны Инчебарун"
    },
    description: {
        fa: "منطقه‌آزاد تجاری-صنعتی اینچه‌برون" +
            "<br>" +
            "دروازه تجارت به آسیای میانه و چین",
        en: "Incheban Commercial-Industrial Free Zone" +
            "<br>" +
            "Trade gateway to Central Asia and China",
        rus: "Свободная торгово-промышленная зона Инчебан" +
            "<br>" +
            "Торговые ворота в Центральную Азию и Китай"
    },
    book1: {
        fa: "۱۱۰ بسته سرمایه‌گذاری منطقه‌آزاد اینچه‌برون",
        en: "110 investment packages of Inchebron Free Zone",
        rus: "110 инвестиционных пакетов свободной зоны Иншеброн"
    },
    book2: {
        fa: "معرفی و ظرفیت‌های منطقه‌آزاد اینچه‌برون",
        en: "Introduction and capabilities of INCHEH BOROUN free zone organization",
        rus: "Представление и возможности свободной зоны Инчебан"
    },
    footer: {
        fa: "تمامی حقوق این وب سایت متعلق به سازمان منطقه آزاد تجاری-صنعتی اینچه‌برون می‌باشد.",
        en: "All the rights of this website belong to Inchebarun Free Trade Zone Organization.",
        rus: "Все права на этот сайт принадлежат Организации свободной экономической зоны Инчебарун."
    },
    download: {
        fa: "دانلود",
        en: "Download",
        rus: "Скачать"
    }
}

function changeLang(lang) {
    if (['en', 'fa', 'rus'].includes(lang)) {
        Object.keys(dict).forEach(function (key) {
            const elements = document.getElementsByClassName("text-" + key)
            for (let i = 0; i < elements.length; i++) {
                elements.item(i).innerHTML = dict[key][lang]
                if (lang === 'fa') {
                    elements.item(i).style.direction = 'rtl'
                    document.getElementById('btn-110').onclick=()=>{
                        window.location.href='files/farsi.pdf'
                    }
                    document.getElementById('btn-opt').onclick=()=>{
                        window.location.href='files/fa.pdf'
                    }
                } else {
                    elements.item(i).style.direction = 'ltr'
                    if (lang==='en'){
                        document.getElementById('btn-110').onclick=()=>{
                            window.location.href='files/en.pdf'
                        }
                        document.getElementById('btn-opt').onclick=()=>{
                            window.location.href='files/latin.pdf'
                        }
                    }
                    else {
                        document.getElementById('btn-110').onclick=()=>{
                            window.location.href=''
                        }
                        document.getElementById('btn-opt').onclick=()=>{
                            window.location.href='files/russian.pdf'
                        }
                    }
                }
            }
        })
    }
}
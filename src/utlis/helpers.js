export const findLang = (lang) => {
  switch (lang) {
    case 'uz':
      return "O'z";
    case 'ru':
      return 'Ru';
    case 'en':
      return 'En';
    default:
      return "O'z";
  }
};

export const headerTitle = (lang) => {
  switch (lang) {
    case 'uz':
      return (
        <>
          Ta'lim muassasalariga o'qishga qabul qilish. <br />
          Test sinovi jarayonlarining onlayn kuzatuvi
        </>
      );
    case 'ru':
      return 'Прием в учебные заведения. Онлайн трансляция процесса сдачи тестовых испытаний в вузы';
    case 'en':
      return (
        <>
          Admission for educational institutions.
          <br /> Online surveillance of the HEI admission test examinations
        </>
      );
    default:
      return (
        <>
          Ta'lim muassasalariga o'qishga qabul qilish. <br />
          Test sinovi jarayonlarining onlayn kuzatuvi
        </>
      );
  }
};

export const headerTitlePresident = (lang) => {
  switch (lang) {
    case 'uz':
      return (
        <>
          Prezident Maktablariga kirish imtihonlari. <br /> Test sinovi
          jarayonlarining onlayn kuzatuvi
        </>
      );
    case 'ru':
      return (
        <>
          Вступительные экзамены в Президентские школы. Онлайн трансляция
          процесса сдачи тестовых испытаний
        </>
      );
    case 'en':
      return (
        <>
          Admission exams to presidential schools.
          <br />
          Online surveillance of the test examinations
        </>
      );
    default:
      return (
        <>
          Prezident Maktablariga kirish imtihonlari.
          <br /> Test sinovi jarayonlarining onlayn kuzatuvi
        </>
      );
  }
};

export const headerTitleMobile = (lang) => {
  switch (lang) {
    case 'uz':
      return "Ta'lim muassasalariga o'qishga qabul qilish. Test sinovi jarayonlarining onlayn kuzatuvi ";
    case 'ru':
      return 'Прием в учебные заведения. Онлайн трансляция процесса сдачи тестовых испытаний в вузы';
    case 'en':
      return 'Admission for educational institutions. Online surveillance of the HEI admission test examinations';
    default:
      return "Ta'lim muassasalariga o'qishga qabul qilish. Test sinovi jarayonlarining onlayn kuzatuvi ";
  }
};

export const headerTitlePresidentMobile = (lang) => {
  switch (lang) {
    case 'uz':
      return 'Prezident Maktablariga kirish imtihonlari. Test sinovi jarayonlarining onlayn kuzatuvi';
    case 'ru':
      return 'Вступительные экзамены в Президентские школы. Онлайн трансляция процесса сдачи тестовых испытаний ';
    case 'en':
      return 'Admission exams to presidential schools. Online surveillance of the test examinations';
    default:
      return 'Prezident Maktablariga kirish imtihonlari. Test sinovi jarayonlarining onlayn kuzatuvi';
  }
};

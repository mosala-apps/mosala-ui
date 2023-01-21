import { format, formatDistance} from 'date-fns'
import { fr } from 'date-fns/locale'

/*
 * 
 * @param {HTMLElement} element 
 * @param {Boolean} selectedAll 
 * @return {HTMLElement}
 */
const selectHTMLElement = (element, selectedAll = false) => {
  const elementSelected = element.trim()
  if (selectedAll) {
    return [...document.querySelectorAll(elementSelected)]
  }
  return document.querySelector(elementSelected)
}


const scrollUp = () => {
    document.body.scrollTo = 0
    document.documentElement.scrollTo = 0
}

/**
 * 
 * @param {string} title 
 * @returns string
 */
const slugify =(title)=>{
    let slug = "";
    // Change to lower case
    const titleLower = title.toLowerCase();
    // Letter "e"
    slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
    // Letter "a"
    slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
    // Letter "o"
    slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
    // Letter "u"
    slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
    // Letter "d"
    slug = slug.replace(/đ/gi, 'd');
    // Trim the last whitespace
    slug = slug.replace(/\s*$/g, '');
    // Change whitespace to "-"
    slug = slug.replace(/\s+/g, '-');
    
    return slug;
}

/**
 * 
 * @param {string} slug 
 * @returns string
 */
const makeTitle= (slug)=> {
  const words = slug.split("-");
  return words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }).join(' ');
}

/**
 * 
 * @param {string} str 
 * @returns string
 */
const capitalize = (str)=>{
  return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

/**
 * 
 * @param {Date} newDate 
 * @returns string
 */
const getFullDateTimeFormatted =(newDate)=>{

      const hour = new Date(newDate).getHours()
      const minutes = new Date(newDate).getMinutes()
      const day = capitalize(new Date(newDate).toLocaleDateString('fr',{weekday:'long'}))
                      
      const formatDate = `${day} ${format(new Date(newDate), 'dd/MM/yyyy')} à ${hour}H${minutes}`
    return formatDate
}

/**
 * 
 * @param {string} newDate 
 * @returns string
 */
const distanceDateFormatted = (newDate)=>{
  return formatDistance(new Date(newDate), new Date(),{ addSuffix: true ,locale:fr})
}


export { selectHTMLElement,scrollUp,slugify,capitalize ,getFullDateTimeFormatted, distanceDateFormatted, makeTitle}

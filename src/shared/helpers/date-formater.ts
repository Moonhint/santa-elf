const formatDate = function (value:string, type:string) {

    let lang = localStorage.getItem('slang') || 'en';
  
    let options = {}
    if (type === "no-time"){
      options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
      }
    }else if (type === 'brief'){
      options = {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
      }
    }else if (type === "short"){
      options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }else if (type === "short-month"){
      options = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }else if (type === "very-short"){
      options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }
    }else{
      options = {
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        month: "long",
        timeZoneName: "short",
        weekday: "long",
        year: "numeric"
      }
    }
  
    let dateStr = '-';
    if (value){
      dateStr = (new Date(value)).toLocaleTimeString(lang, options);
      if (type === "no-time"){
        let substringCut = (lang === 'en') ? 6 : 3;
        dateStr = dateStr.substring(0, dateStr.length - substringCut)
      }
    }
    return dateStr;
  }
  
  export default formatDate;
  
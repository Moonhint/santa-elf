
const formater = function (value=0, type="short") {

    let lang = localStorage.getItem('slang');
  
    let thousand = 'K';
    let milion = 'Mio';
    let bilion = 'Bio';
  
    if (lang === 'id'){
      thousand = 'ribu';
      milion = 'juta';
      bilion = 'miliar';
    }
  
    if (type === 'short'){
      let formated_value = "";
  
      if (!value){
        formated_value = '0';
      }else if (value < 1000){
        formated_value = String(value);
      }else if ( value >= 1000 && value < 1000000){
        let temp_value = parseFloat((value/1000).toFixed(2));
        formated_value = `${temp_value.toString()}${thousand}`;
      }else if ( value >= 1000000 && value < 1000000000) {
        let temp_value = parseFloat((value/1000000).toFixed(2));
        formated_value = `${temp_value.toString()}${milion}`;
      }else{
        let temp_value = parseFloat((value/1000000000).toFixed(2));
        formated_value = `${temp_value.toString()}${bilion}`;
      }
    
      return formated_value
    }else if (type === 'splitter'){
      if (!value) return 0
      
      let val = (value/1).toFixed(0).replace('.', ',');
      return `${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    }
  }
  
  export default formater;
  
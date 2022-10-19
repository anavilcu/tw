//Implementează o funcție care primește ca parametru un string și 
//returnează frecvența de apariție a fiecărui cuvânt

const frecventa = (str) => {
    let arr = str.split(" ");
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (obj.hasOwnProperty(arr[i])) {
        obj[arr[i]]++;
      } else {
        obj[arr[i]] = 1;
      }
    }
    return obj;
  };
  
  console.log(frecventa("the quick brown fox jumps over the lazy dog"));





    function anagram(str1,str2){
      if (str1.length !== str2.length) return false;

      let sortedStr1 = str1.split("").sort();
      let sortedStr2 = str2.split("").sort();

      for (let i = 0; i < str1.length; i++) {
        if (sortedStr1[i] !== sortedStr2[i]) {
          return false;
        }
      }
      return true;
    }

    // Input: 
    let str1 = "listen"
    let str2 = "silent"

    console.log(anagram(str1,str2))
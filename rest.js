function cal(symbol, ...val) {
    let r;
    if (val.length > 0) {
        switch (symbol) {
            case '+': 
                  r = val.reduce((cval, oldval) => cval + oldval, 0);
                console.log(r);
                
                break;
            case '*':

                 r = val.reduce((cval, oldval) => cval * oldval, 1);
                console.log(r);
                
                break;
            case '/': 
                  r = val.reduce((cval, oldval) => cval / oldval, 1);
                console.log(r);
                
                break;
            case '-': 
                  r = val.reduce((cval, oldval) => cval - oldval, 0);
                console.log(r);
                
                break;
            default : console.log("khoto");
            
        }
    }
     
}
cal();
cal('*',2,3,4);
cal('-', 12, 23, 34, 4, 5, 76, 8);
cal(3, 2, 3, 56, 6);
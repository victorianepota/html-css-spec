/**
 * Created by victoria on 09.07.2017.
 */

// стр.51 презентации, Борисов, уровень 1

function compare(x) {
    return function (y) {
        if(y == x) return null;
        return y > x;
    };
    
}
var c = compare(15); //или print(compare(15)(7));
print ( c(7) );
print ( c(17) );
print ( c(15) );


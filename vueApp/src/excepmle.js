
var lis = createArray(10,19);
console.log(lis);

function ajax(type='POST', url='',data, async=true) {
    return new Promise(function(resolve, reject){
        var req;
        if(window.XMLHttpRequest) {
            req =  new XMLHttpRequest();
        }else {
            req = new ActiveXObject();
        }

        if(type === 'GET') {
            var dataStr = '';
            Object.keys(data).forEach(function(value){
                dataStr += value + '=' +data[value] + '&';
            });
            dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'));
            url += '?' + dataStr;
            req.open(type, url, async);
            req.setRequestHeader("content-type","application/json");
            req.send(JSON.stringify(data));
        }else {
            req.open(type, url, async);
            req.setRequestHeader("content-type","application/json");
            req.send(JSON.stringify(data));
        }
        req.onreadystatechange = function() {
            if(req.readyState == 4 && req.status == 200) {
                var resp = req.response;
                if(typeof resp!== 'object') {
                    resp = JSON.parse(resp);
                    console.log(resp);
                }
                resolve(resp);
            }else {
                reject("error");
            }
        }
    })
}

ajax('POST','http://192.168.0.101:8080/pharmacy/recipe/selectRecipe',{accountCode:'001',accountPassword:1}, true).
    then(function(req){
          console.log(req,'---');
    });






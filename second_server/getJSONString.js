exports.getJSONString = obj =>{
    let JSONString = JSON.stringify(obj, null, 2);
    console.log(JSONString);
    return JSONString;
}
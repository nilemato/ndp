let cities =  require('cities');

exports.cityName = (zipcode) =>{
    let obj = cities.zip_lookup(zipcode);
    return(console.log(`City for zipcode ${zipcode} is:  ${obj.city}`))
};


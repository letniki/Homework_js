let userId=new URL(location.href).searchParams.get('id');
console.log(userId);
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(value=>value.json())
.then((response)=>{
    let user=response;
    // let userBlock=document.createElement('div');
    let ul=document.createElement('ul');
    let id=document.createElement('li');
    let name=document.createElement('li');
    let username=document.createElement('li');
    let email=document.createElement('li');
    let street=document.createElement('li');
    let suite=document.createElement('li');
    let city=document.createElement('li');
    let zipcode=document.createElement('li');
    let geoLat=document.createElement('li');
    let geoLng=document.createElement('li');
    let phone=document.createElement('li');
    let website=document.createElement('li');
    let companyName=document.createElement('li');
    let companyCatchPhrase=document.createElement('li');
    let companyBs=document.createElement('li');
    ul.innerText=`Details about ${user.name}: `;
    id.innerText=`Id: ${user.id}`;
    name.innerText=`Name: ${user.name}`;
    username.innerText=`Username: ${user.username}`;
    email.innerText=`Email: ${user.email}`;
    street.innerText=`Street: ${user.address.street}`;
    suite.innerText=`Suite: ${user.address.suite}`;
    city.innerText=`City: ${user.address.city}`;
    zipcode.innerText=`Zipcode: ${user.address.zipcode}`;
    geoLat.innerText=`Latitude: ${user.address.geo.lat}`;
    geoLng.innerText=`Longitude: ${user.address.geo.lng}`;
    phone.innerText=`Phone: ${user.phone}`;
    website.innerText=`Website: ${user.website}`;
    companyName.innerText=`Company name: ${user.company.name}`;
    companyCatchPhrase.innerText=`Catch phrase: ${user.company.catchPhrase}`;
    companyBs.innerText=`Bs: ${user.company.bs}`;
    ul.append(id, name, username, email, street, suite, city, zipcode, geoLat, geoLng, phone, website, companyName, companyCatchPhrase, companyBs);
    document.body.appendChild(ul);
})
const URL="https://coding-week-2024-api.onrender.com/api/data";
const contentScript1=document.querySelector("#script1");
const contentScript2=document.querySelector("#script2");
const contentScript3=document.querySelector("#script3");
const contentScript4=document.querySelector("#script4");
const contentScript5=document.querySelector("#script5");
const contentScript6=document.querySelector("#script6");
const contentScript7=document.querySelector("#script7");
const contentScript8=document.querySelector("#script8");
const contentScript9=document.querySelector("#script9");
const contentScript10=document.querySelector("#script10");
const contentScript11=document.querySelector("#text");

const contentTheme1=document.querySelector("#theme1");
const contentTheme2=document.querySelector("#theme2");
const contentTheme3=document.querySelector("#theme3");
const contentTheme4=document.querySelector("#theme4");



const contentDate1=document.querySelector("#date1");
const contentDate2=document.querySelector("#date2");
const contentDate3=document.querySelector("#date3");
const contentDate4=document.querySelector("#date4");
const contentDate5=document.querySelector("#date5");
const contentDate6=document.querySelector("#date6");
const contentDate7=document.querySelector("#date7");
const contentDate8=document.querySelector("#date8");
const contentDate9=document.querySelector("#date9");
const contentDate10=document.querySelector("#date10");




const contentType1=document.querySelector("#button-box1");
const contentType2=document.querySelector("#button-box2");
const contentType3=document.querySelector("#button-box3");
const contentType4=document.querySelector("#button-box4");



const contentImage1=document.querySelector("#box1");




const getScript = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data= await response.json();
    console.log(data[0].headline);
    contentScript1.innerText=data[0].headline;

    console.log(data[1].headline);
    contentScript2.innerText=data[1].headline;

    console.log(data[2].headline);
    contentScript3.innerText=data[2].headline;

    console.log(data[3].headline);
    contentScript4.innerText=data[3].headline;

    console.log(data[4].headline);
    contentScript5.innerText=data[4].headline;

    console.log(data[5].headline);
    contentScript6.innerText=data[5].headline;

    console.log(data[6].headline);
    contentScript7.innerText=data[6].headline;

    console.log(data[7].headline);
    contentScript8.innerText=data[7].headline;

    console.log(data[8].headline);
    contentScript9.innerText=data[8].headline;

    console.log(data[9].headline);
    contentScript10.innerText=data[9].headline;

    console.log(data[7].headline);
    contentScript11.innerText=data[7].headline;
};

getScript();

const getTheme = async () => {
    let res = await fetch(URL);
    console.log(res);
    let info= await res.json();
    console.log(info[0].author);
    contentTheme1.innerText=info[0].author;

    console.log(info[1].author);
    contentTheme2.innerText=info[1].author;

    console.log(info[2].author);
    contentTheme3.innerText=info[2].author;

    console.log(info[3].author);
    contentTheme4.innerText=info[3].author;
};

getTheme();

const getDate = async () => {
    let responseDate = await fetch(URL);
    console.log(responseDate);
    let dataDate= await responseDate.json();
    console.log(dataDate[0].date);
    contentDate1.innerText=dataDate[0].date;

    console.log(dataDate[1].date);
    contentDate2.innerText=dataDate[1].date;

    console.log(dataDate[2].date);
    contentDate3.innerText=dataDate[2].date;

    console.log(dataDate[3].date);
    contentDate4.innerText=dataDate[3].date;

    console.log(dataDate[4].date);
    contentDate5.innerText=dataDate[4].date;

    console.log(dataDate[5].date);
    contentDate6.innerText=dataDate[5].date;

    console.log(dataDate[6].date);
    contentDate7.innerText=dataDate[6].date;

    console.log(dataDate[7].date);
    contentDate8.innerText=dataDate[7].date;

    console.log(dataDate[8].date);
    contentDate9.innerText=dataDate[8].date;

    console.log(dataDate[9].date);
    contentDate10.innerText=dataDate[9].date;
};

getDate();


const getType = async () => {
    let responseType = await fetch(URL);
    console.log(responseType);
    let dataType= await responseType.json();
    console.log(dataType[0].type);
    contentType1.innerText=dataType[0].type;

    console.log(dataType[1].type);
    contentType2.innerText=dataType[1].type;

    console.log(dataType[2].type);
    contentType3.innerText=dataType[2].type;

    console.log(dataType[3].type);
    contentType4.innerText=dataType[3].type;
};

getType();


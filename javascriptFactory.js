// console.log("Amitav is learning Javascript Factory....");
function showProductInfo(productName,productId,productQuantity,productIsAvailable){
    return{
        productName: productName,
        productId: productId,
        productQuantity: productQuantity,
        productIsAvailable: productIsAvailable
    }
}

// console.log(showProductInfo('LotoShoe',23452,2,false));
// console.log(showProductInfo('amitav',190303105349,01,true));


function facultyMember(name,id,subject,allotedSection,numberOfDailyClass,isAllotedForLab,degree,universityName,age,maritalStatus){
    // WHEN VALUE NAME AND PARAMETER NAME IS SAME NO NEED TO MENTIONED VALUE NAME FOR EVERY
    return{
        name,//:name,
        id,//:id,
        subject,//:subject,
        allotedSection,//:allotedSection,
        numberOfDailyClass,//:numberOfDailyClass,
        isAllotedForLab,//:isAllotedForLab,
        degree,//:degree,
        universityName,//:universityName,
        age,//:age,
        maritalStatus//:maritalStatus
    }
}

// console.log(facultyMember('Yoothika Patel',349,'STQA','6b3',4,true,'Msc in SWE','Gujrat Technical University',41,true));
// console.log(facultyMember('Amitav Biswas',32432222222,'cse','6b4',5,false,'b.tech in cse','Parul University',22,false));




// THIS IS THE USE OF CONSTRUCTOR FUNCTION
function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(2);


function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    };
}
const another=new Circle(3);
 
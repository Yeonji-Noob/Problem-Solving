//코알누 함수문제////////////////////////////////////
/////////////////////////////////////////////////////


//-------------------------1,2,3번------------------------//

function greet (a) {

   console.log("안녕 내 이름은 " + a + "야");

}

greet("연지");


//-------------------------4번------------------------//
// ///meetAt함수만들기/////


function meetAt(a,b,c){


  if (a,b,c) {
  
     return a+"/"+b+"/"+c;
    
     }
   if (a,b){
    
     return a + "년 "+ b + "월";

   }
   if (c) {

     return a + "년";
  
   }

 }
 console.log(meetAt(1994,4))



// 항상 인자가 제일 많은 순으로 적어내려가야 함
// 왜냐면 첫 return이 걸려서 명령종료시켜주기때문임
// 코알누 정답에서는 백틱을 써서 했음



//-------------------------5번------------------------//

// 5번문제
// // arr는 number값의 array
// // arr의 값중 가장 작은 값을 return
// // arr가 비어있으면 0을 리턴


 function findSmallestElement(arr){

   if(arr) {
  
     let arr1 = arr.sort((a,b)=>a-b)

     return arr1[0]

   } else if(arr == null) {
  
     return 0;

   }
  

 }



 console.log(findSmallestElement([100,200,3,0,2,1]));


//코알누에서는 for문으로 순회하면서 풀었음





//-------------------------6번------------------------//

// 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오

// 출력예 )

// 12300인 경우
//  50000 X 0
//  10000 X 1
//  5000  X 0
//  1000 X 2
//  500 X 0
//  100 X 3


let num = [50000, 10000, 5000, 1000, 500, 100]

function moneyCalc(money){

  for(let i=0;i<6;i++){

    let calc1 = Math.floor(money/num[i])
    money = money - num[i]*calc1
    console.log( num[i],' X ', calc1 )
  }

}

moneyCalc(15000)




//number 내장함수 floor 사용했음
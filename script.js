"use strict";
// console.log(len);

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 1024 && window.innerHeight <= 768) {
    document.querySelector("#continueButton").style.display = "none";
    document.getElementById("desktopAlert").style.display = "block";
    Array.from(document.body.children).forEach(function (child) {
      if (child.id !== "desktopAlert") {
        child.classList.add("blur");
      }
    });
  } else {
    document.getElementById("desktopAlert").style.display = "block";
    document.querySelector("#alertMessage").textContent =
      "This website was not optimized (not beautiful to see), Sorry for this.";
    document.querySelector("#continueButton").classList.remove("hidden");
    document
      .querySelector("#continueButton")
      .addEventListener("click", function () {
        document.getElementById("desktopAlert").style.display = "none";
        $("body > *").not("#desktopAlert").removeClass("blur");
      });
  }
});

buttonDis.removeAttribute("disabled");
btnPlay.removeAttribute("disabled");


let i = 0;
let x;
let nlist = [];
let j, temp;
let t1;
let flag = 0;
let fin;
let k;
let f1 = 0;
let completed_num = [];
let len = 100;
let ran_num = function () {
  let y = Math.trunc(Math.random() * 100) + 1;
  return y;
};

let flag_winner = 0;
let win_2 = 0;
let hover_win_2 = 0;
let win_1 = 0;
let hover_win_1 = 0;

let final_ans = function (temp, temp_list) {
  f1 = 0;
  for (k = 0; k < temp_list.length; k++) {
    if (temp === temp_list[k]) {
      temp = ran_num();
      final_ans(temp, temp_list);
      f1 = 1;
    }
  }

  if (f1 == 0) temp_list.push(temp);

  return temp_list;
};

for (i = 0; i < len; i++) {
  t1 = ran_num();
  temp = t1;

  if (i == 0) {
    nlist.push(t1);
  }

  if (i > 0) {
    nlist = final_ans(temp, nlist);
  }
}

let checkequal = function (infrom, inout, in_arr_temp) {
  let lacount = 0;
  let larr = [];
  inout = inout + 1;
  for (i = infrom; i < inout; i++) {
    larr = [...in_arr_temp[i]];
    for (j = 0; j < larr.length; j++) {
      if (typeof larr[j] == "string") {
        lacount++;
      }
    }
  }
  return lacount;
};

let ab = -1;
let addi = function (use) {
  let lenUse = document.querySelectorAll(use).length;
  for (i = 0; i < lenUse; i++) {
    ab = ab + 1;
    x = document.querySelectorAll(use)[i].classList;
    if (x.value == "") {
      document.querySelectorAll(use)[i].classList.add(`arr${ab}`);
    }
  }
  return ab;
};

let k1 = addi("th");
let addc = function (use) {
  let lenUse = document.querySelectorAll(use).length;
  for (i = 0; i < lenUse; i++) {
    k1 = k1 + 1;
    x = document.querySelectorAll(use)[i].classList;
    if (x.value == "") {
      document.querySelectorAll(use)[i].classList.add(`arr${k1}`);
    }
  }
};

addc("td");

let removeSpace = function (spaceArr) {
  spaceArr = spaceArr.join();
  return spaceArr;
};
let checkWin_arr_1 = [];
let checkWin_arr_2 = [];
let checkForWinner = function () {
  let temp_checkWin_arr_1 = [];
  let temp_checkWin_arr_2 = [];
  hover_win_1 = 0;
  win_1 = 0;
  hover_win_2 = 0;
  win_2 = 0;

  checkWin_arr_1 = [...winnerArray_left];
  checkWin_arr_2 = [...winnerArray_right];

  for (j = 0; j < 10; j++) {
    if (typeof winnerArray_left[j] == "number") {
      temp_checkWin_arr_1.push(winnerArray_left[j]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_1++;
        checkWin_arr_1.splice(j, 1);
      }
      win_1++;
    }
  }

  console.log("1st win_1 : ", win_1);
  for (j = 20; j < 30; j++) {
    if (typeof winnerArray_left[j - 10] == "number") {
      temp_checkWin_arr_1.push(winnerArray_left[j - 10]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_1++;
        checkWin_arr_1.splice(j - 10, 1);
      }
      win_1++;
    }
  }

  console.log("2nd win_1 : ", win_1);

  for (j = 30; j < 40; j++) {
    if (typeof winnerArray_left[j - 10] == "number") {
      temp_checkWin_arr_1.push(winnerArray_left[j - 10]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_1++;
        checkWin_arr_1.splice(j - 10, 1);
      }
      win_1++;
    }
  }

  for (j = 10; j < 20; j++) {
    if (typeof winnerArray_right[j - 10] == "number") {
      temp_checkWin_arr_2.push(winnerArray_right[j - 10]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_2++;
        checkWin_arr_2.splice(j - 10, 1);
      }
      win_2++;
    }
  }

  console.log("1st win_2 : ", win_2);

  for (j = 40; j < 50; j++) {
    if (typeof winnerArray_right[j - 30] == "number") {
      temp_checkWin_arr_2.push(winnerArray_right[j - 30]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_2++;
        checkWin_arr_2.splice(j - 30, 1);
      }
      win_2++;
    }
  }

  console.log("2nd win_2 : ", win_2);

  for (j = 50; j < 60; j++) {
    if (typeof winnerArray_right[j - 30] == "number") {
      temp_checkWin_arr_2.push(winnerArray_right[j - 30]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_2++;
        checkWin_arr_2.splice(j - 30, 1);
      }
      win_2++;
    }
  }

  console.log(checkWin_arr_1);
  console.log(checkWin_arr_2);

  console.log("Before , Winner 1 : ", hover_win_1, win_1);
  console.log("Before Winner 2 : ", hover_win_2, win_2);

  console.log("1 Winner :");
  console.log(hover_win_1);
  console.log(win_1);

  console.log("2 Winner :");
  console.log(hover_win_2);
  console.log(win_2);

  let foundNum = 0;
  console.log(checkWin_arr_1);
  console.log(checkWin_arr_2);

  console.log(temp_checkWin_arr_1);
  console.log(temp_checkWin_arr_2);

  if (hover_win_1 != 0 && hover_win_2 != 0) {
    if (hover_win_1 == win_1) {
      console.log("After Winner 1 : ", hover_win_1, win_1);
      document.querySelector(".winner_1").classList.remove("hidden");
      document.querySelector(".randomnum").classList.add("hidden");
      btnPlay.setAttribute("disabled", "disabled");
      buttonDis.setAttribute("disabled", "disabled");
    }

    if (hover_win_2 == win_2) {
      console.log("After Winner 2 : ", hover_win_2, win_2);
      document.querySelector(".winner_2").classList.remove("hidden");
      document.querySelector(".randomnum").classList.add("hidden");
      btnPlay.setAttribute("disabled", "disabled");
      buttonDis.setAttribute("disabled", "disabled");
    }
  }
};

let p = 0;
let show_ans = function () {
  document.querySelector(".inum").value = "";
  document.querySelector(".yn-js").classList.add("hidden");
  document.querySelector(".yno-js").classList.add("hidden");
  if (p < 100 && p != 0) {
    document.querySelector(".btn--num").classList.remove("hidden");
    document.querySelector(".randomnum").textContent = nlist[p];
    completed_num.push(nlist[p]);
    p++;
  } else if (p == 0) {
    document.querySelector(".s-p-u").classList.remove("hidden");
  } else if (p == 100) {
    if (
      document.querySelector(".winner_1").classList.contains("hidden") ||
      document.querySelector(".winner_2").classList.contains("hidden")
    ) {
      document.querySelector(".l-p-u").classList.remove("hidden");
    }
    document.querySelector(".randomnum").classList.add("hidden");
  }
};

document.querySelector(".s-c-m").addEventListener("click", function () {
  document.querySelector(".s-p-u").classList.add("hidden");
});

let startButton = function () {
  document.querySelector(".inum").value = "";
  document.querySelector(".yn-js").classList.add("hidden");
  document.querySelector(".yno-js").classList.add("hidden");
  document.querySelector(".s-p-u").classList.add("hidden");
  if (p == 0) {
    document.querySelector(".btn--num").classList.remove("hidden");
    document.querySelector(".randomnum").textContent = nlist[0];
    completed_num.push(nlist[0]);
    p++;
  }
};

document.querySelector(".showans").addEventListener("click", show_ans);
document.querySelector(".sgame").addEventListener("click", startButton);

let df = 0;
let repln = -20;
let tempnow = 0;
let rn = function () {
  repln = -20;
  df = 0;
  let rlist = [];
  let rvar = 0;
  for (i = 1; i <= 10; i++) {
    let u = 0;
    rvar = i * 10 - df;
    for (j = 1; j <= 3; j++) {
      let b = Math.trunc(Math.random() * rvar) + df + 1;
      rlist.push(b);
    }
    df = i * 10;
  }
  return rlist;
};

let xyz = [...rn(), ...rn()];

let ufo = -20;
let tr = 0;
let pyt = 0;
let tea = xyz.length;
let c = 0;
let d = 0;
let final_arr = [];

for (i = 0; i < 20; i++) {
  c = c + 3;
  if (c + 1 != tea) {
    pyt = xyz.slice(c - 3, c);
    final_arr.push(pyt);
  }
}

let tarr = [];
let tempele;
let indstore;
let final_array = [];
let final_array_1 = [];
for (i = 0; i < 20; i++) {
  tarr = [...final_arr[i]];
  for (j = 0; j < tarr.length; j++) {
    tempele = tarr[j];
    for (k = 0; k < tarr.length; k++) {
      if (j === k) {
        continue;
      } else {
        if (tempele === tarr[k]) {
          tarr.splice(tarr.indexOf(tempele), 1, "");
        }
      }
    }
  }
  final_array_1.push(tarr);
}

let last_arr_1 = [];
let flagt = 0;
let mop;
let numtemp_1;
let numtemp_2;
let ranRemove;
let mn;
let countString = 0;
let replTemp = new Map();
for (i = 0; i < 20; i++) {
  flagt = 0;
  tarr = [...final_array_1[i]];
  for (j = 0; j < tarr.length; j++) {
    ranRemove = Math.trunc(Math.random() * 2); 
    for (k = 1; k <= ranRemove; k++) {
      numtemp_1 = Math.trunc(Math.random() * 3);
      replTemp.set(i, [j, k, numtemp_1]);
      if (typeof tarr[k] == "number") {
        tarr.splice(numtemp_1, 1, "");
      }
    }
  }
  last_arr_1.push(tarr);
}

let last_arr_2 = [...last_arr_1];

let divideParts = function (split_in, split_out, total_arr) {
  let part_arr = [];
  for (i = split_in; i < split_out + 1; i++) {
    part_arr.push([...total_arr[i]]);
  }
  return part_arr;
};

let part_arr_1 = divideParts(0, 9, last_arr_2);
let part_arr_2 = divideParts(10, 19, last_arr_2);

let lacount_1 = checkequal(0, 9, [...last_arr_2]);
let lacount_2 = checkequal(10, 19, [...last_arr_2]);

let last_arr_3_1;
let last_arr_3_2;
let te_arr_1;
let temp_mulRep = new Set();
let replaceNum = function (ent_flag, no_of_rep, ent_arr, ent_total_arr) {
  let repeateTimes = no_of_rep;
  let arr_change_store;
  let mulRep;
  let fb;
  let re_flag = 0;

  let randomeIndex = Math.trunc(Math.random() * ent_arr.length);
  for (j = 0; j < no_of_rep; j++) {
    re_flag = 0;
    i = 0;
    randomeIndex = Math.trunc(Math.random() * ent_arr.length);
    while (typeof ent_arr[randomeIndex][i] != "string") {
      i++;
      if (i > 2) {
        i = 0;
        randomeIndex = Math.trunc(Math.random() * ent_arr.length);
      }
    }

    let temp_i = i;

    mulRep =
      Math.trunc(
        Math.random() * ((randomeIndex + 1) * 10 - randomeIndex * 10)
      ) +
      randomeIndex * 10;

    for (fb = 0; fb < 3; fb++) {
      if (ent_arr[randomeIndex][fb] == mulRep) {
        re_flag = 1;
      }
    }

    arr_change_store = ent_arr[randomeIndex];

    if (re_flag == 1) {
      while (arr_change_store.includes(mulRep)) {
        mulRep =
          Math.trunc(
            Math.random() * ((randomeIndex + 1) * 10 - randomeIndex * 10)
          ) +
          randomeIndex * 10;
      }
    }

    if (ent_flag == 1) {
      ent_total_arr[randomeIndex][i] = mulRep;
      ent_arr[randomeIndex][i] = mulRep;
    } else {
      ent_total_arr[randomeIndex + 10][i] = mulRep;

      ent_arr[randomeIndex][i] = mulRep;
    }
  }
  return [...ent_total_arr];
};

let last_arr_3;
if (lacount_1 != lacount_2) {
  if (lacount_1 > lacount_2) {
    last_arr_3_1 = replaceNum(
      1,
      lacount_1 - lacount_2,
      [...part_arr_1],
      last_arr_2
    );
    last_arr_3 = [...last_arr_3_1];
  } else {
    last_arr_3_2 = replaceNum(
      2,
      lacount_2 - lacount_1,
      [...part_arr_2],
      last_arr_2
    );
    let ent_arr_flag = 2;
    last_arr_3 = [...last_arr_3_2];
  }
} else {
  last_arr_3 = last_arr_2;
}

let final_part_arr_1 = divideParts(0, 9, last_arr_3);

let final_part_arr_2 = divideParts(10, 19, last_arr_3);


lacount_1 = checkequal(0, 9, [...last_arr_3]);

lacount_2 = checkequal(10, 19, [...last_arr_3]);

let p1 = [];
let p2 = [];
let p3 = [];
for (i = 0; i < 20; i++) {
  p1.push(last_arr_3[i][0]);
  p2.push(last_arr_3[i][1]);
  p3.push(last_arr_3[i][2]);
}

let p1_part_1 = p1.slice(0, 10);
let p1_part_2 = p1.slice(10, 20);
let p4 = p2.slice(0, 10);
let p5 = p2.slice(10, 20);
let p6 = p3.slice(0, 10);
let p7 = p3.slice(10, 20);


let winnerArray_left = [...p1_part_1, ...p4, ...p6];

let winnerArray_right = [...p1_part_2, ...p5, ...p7];

if ([...winnerArray_left] == [...winnerArray_right]) {
  location.reload();
}

let s1 = [...p1];

let s2 = [...p4, ...p6];
let s3 = [...p5, ...p7];

let main_arr = [...s1, ...s2, ...s3];

if (main_arr.includes(0)) {
  location.reload();
}

for (i = 0; i < 60; i++) {
  document.querySelector(`.arr${i}`).textContent = main_arr[i];
}


// Front-End Connections :

let checkHover;
let checkStart;
let checkNum;
let storeClass;

let mouseHover = function (e) {
  storeClass = e.srcElement.classList[0];
  checkHover = e.srcElement.textContent;
  checkStart = document
    .querySelector(".randomnum")
    .classList.contains("hidden");
  if (!checkStart) {
    checkNum = document.querySelector(".randomnum").textContent;
    if (checkHover == checkNum) {
      document.querySelector(`.${storeClass}`).classList.add("seletedBox");
      checkForWinner();
    }
  }
};

// console.log(main_arr);
for (i = 0; i < 60; i++) {
  if (typeof main_arr[i] == "number") {
    document
      .querySelector(`.arr${i}`)
      .addEventListener("mouseover", mouseHover);
  }
}

let pageReload = function () {
  document.querySelector(".inum").value = "";
  document.querySelector(".yn-js").classList.add("hidden");
  document.querySelector(".yno-js").classList.add("hidden");
  if (document.querySelector(".randomnum").classList.contains("hidden")) {
    location.reload();
  } else {
    console.log("In game");
    document.querySelector(".p-u").classList.remove("hidden");
  }
};

let buttonOk = function () {
  if (!document.querySelector(".p-u").classList.contains("hidden"))
    location.reload();
};

let crossMark = function () {
  document.querySelector(".p-u").classList.add("hidden");
};

document.querySelector(".n-g").addEventListener("click", pageReload);
document.querySelector(".button_ok_js").addEventListener("click", buttonOk);

// cross
document.querySelector(".cross_mark").addEventListener("click", crossMark);

let inputText;
let in_flag = 0;

let removeAfter = function (removeId) {
  document.querySelector(`.${removeId}`).classList.add("hidden");
  document.querySelector(".inum").value = "";
};

let buttonCheck = function () {
  in_flag = 0;
  inputText = document.querySelector(".inum").value;
  if (document.querySelector(".randomnum").classList.contains("hidden")) {
    document.querySelector(".yno-js").classList.remove("hidden");
  } else {
    for (i = 0; i < completed_num.length; i++) {
      if (completed_num[i] == inputText) {
        document.querySelector(".yn-js").classList.remove("hidden");
        document.querySelector(".yn-js").textContent = "Yes Number Over";
        in_flag = 1;
      }
    }

    if (in_flag == 0) {
      document.querySelector(".yn-js").classList.remove("hidden");
      document.querySelector(".yn-js").textContent = "Not Yet Over";
    }

    if (in_flag == 1) {
      let mouseHoverCheck = function (e) {
        let storeClassCheck = e.srcElement.classList[0];
        let hoverCheckTemp = e.srcElement.textContent;
        let checkStartTemp = document
          .querySelector(".randomnum")
          .classList.contains("hidden");
        if (!checkStartTemp) {
          let checkNumTemo = document.querySelector(".inum").value;
          if (hoverCheckTemp == checkNumTemo && in_flag == 1) {
            document
              .querySelector(`.${storeClassCheck}`)
              .classList.add("seletedBox");
            checkForWinner();
          }
        }
      };

      for (i = 0; i < 60; i++) {
        if (typeof main_arr[i] == "number") {
          document
            .querySelector(`.arr${i}`)
            .addEventListener("mouseover", mouseHoverCheck);
        }
      }
    }
  }
};

document.querySelector(".b-c-js").addEventListener("click", buttonCheck);

document.querySelector(".w-c-m-1").addEventListener("click", function () {
  document.querySelector(".w-p-u-1").classList.add("hidden");
});

document.querySelector(".w-c-m-2").addEventListener("click", function () {
  document.querySelector(".w-p-u-2").classList.add("hidden");
});

document
  .querySelector(".winner_ok_js-1")
  .addEventListener("click", function () {
    document.querySelector(".w-p-u-1").classList.add("hidden");
    location.reload();
  });

document
  .querySelector(".winner_ok_js-2")
  .addEventListener("click", function () {
    document.querySelector(".w-p-u-2").classList.add("hidden");
    location.reload();
  });

document.querySelector(".lost_ok_js").addEventListener("click", function () {
  location.reload();
  document.querySelector(".l-p-u").classList.add("hidden");
});

document.querySelector(".l-c-m").addEventListener("click", function () {
  document.querySelector(".l-p-u").classList.add("hidden");
});

document.querySelector(".t-c-m").addEventListener("click", function () {
  document.querySelector(".t-p-u").classList.add("hidden");
});

document.querySelector(".tie_ok_js").addEventListener("click", function () {
  document.querySelector(".t-p-u").classList.add("hidden");
  location.reload();
});

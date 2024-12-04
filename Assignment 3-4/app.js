//My_Score = 68/75;

// For every equation I solved I took the value of a = 5;

let a = 5;

// let exp1 = ((4+5)&&"abc"||false+"test")*(a-- || --a) || (false&&(++a+1))*"end";
// Simplify = (9 && "abc" || "falsetest") * (5 || 3) || (0 && 5)*end;
//My_Ans1 = NaN
//Actual Ans = NaN
// console.log(exp1)        Correct


// let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
// Simplify = 10 * ("foo" && 5 + (6) || "bar") && ("falsetest") || 0 && true;
// My_Ans2 = true;
// Actual Ans = "falsetest";
// console.log(exp2)        Wrong


// let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
// Simplify = 3 +(5 || "start") * 4 && ("3value") * (3)+ "result";
// My_Ans3 = NaN;
// Actual Ans = "NaNresult";
// console.log(exp3);       Wrong


// let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
// Smiplify = "hello" * (6 + 1) || NaN * 1 +"xyz" && 0;
//My_Ans = 0;
//Actual Ans = 0;
// console.log(exp4);       Correct


// let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
//Simplify = (true || 1 * "test" && 4) || (false && "3value") * 5 + 2;
//My_Ans = true;
//Actual_Ans = true;
// console.log(exp5);       Correct


// let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
// Simplify = "6abc" && 11 || 1 && NaN || 6;
// My_Ans = 11;
// Actual_Ans = ;
// console.log(exp6);       Correct


// let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
// Simplify = "foo5" * 7 || 6 + 3 || "result";
// My_Ans = 9;
// Actual_Ans = 9;
// console.log(exp7);       Correct


// let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
// Simplify = 1 && 1 || "falsetest" * 4 && 5 || "value"
// My_Ans = 1;
// Actual_Ans = 1;
// console.log(exp8);       Correct


// let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
// Simplify = NaN || "6test" && "3result" || null;
// My_Ans = "3result";
// Actual_Ans = "3result";
// console.log(exp9);       Correct


// let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
// Simplify = 6 && "start" || 1 && "value" || NaN && 6;
// My_Ans = "start"
// Actual_Ans = "start";
// console.log(exp10);      Correct


// let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
// Simplify = false + 20 || NaN && 0;
// My_Ans = 20;
// Actual_Ans = 20;
// console.log(exp11);      Correct


// let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
// Simplify = NaN || 3 && "result" || "4test"
// My_Ans = "result";
// Actual_Ans = ;
// console.log(exp12);      Correct


// let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
// Simplify = 32 && "falsetest" || NaN && 4;
// My_Ans = "falsetest";
// Actual_Ans = "falsetest";
// console.log(exp13);      Correct


// let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
// Simplify = NaN || NaN && 4 || "end";
// My_Ans = NaN;
// Actual_Ans = "end";
// console.log(exp14);      Wrong


// let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// Simplify = NaN + "result" || "start28";
// My_Ans = "NaNresult";
// Actual_Ans = "NaNresult";
// console.log(exp15);      Correct

// let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
// Simplify = NaN || false || "start30" && null;
// My_Ans = null;
// Actual_Ans = null;
// console.log(exp16);      Correct


// let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
// Simplify = NaN && 15 || "0value" && 4;
// My_Ans = 4;
// Actual_Ans = 4;
// console.log(exp17);      Correct

// let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
// Simplify = "start" && NaN || "21result" && 0;
// My_Ans = 0;
// Actual_Ans = 0;
// console.log(exp18);      Correct


// let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
// Simplify = "foo" || "24test" && 7;
// My_Ans = "foo";
// Actual_Ans = "foo";
// console.log(exp19);      Correct

// let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
// Simplify = "6hello" && NaN || "end5" || 0;
// My_Ans = "end5";
// Actual_Ans = "end5"
// console.log(exp20);      Correct


// let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
// Simplify = 35 && "testfalse" || "21value";
// My_Ans = "testfalse";
// Actual_Ans = "testfalse";
// console.log(exp21);      Correct

// let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// Simplify = "foo4" && NaN || 11 && "test";
// My_Ans = "test";
// Actual_Ans = "test";
// console.log(exp22);      Correct


// let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
// Simplify = false || NaN && "start" || 20 && "result";
// My_Ans = "result";
// Actual_Ans= "result";
// console.log(exp23);      Correct


// let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
// Simplify = NaN || NaN && "world1" || 2;
// My_Ans = 2;
// Actual_Ans= 2;
// console.log(exp24);      Correct


// let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
// Simplify = 35 && 5 || "start1test" && 0;
// My_Ans = 5;
// Actual_Ans= 5;
// console.log(exp25);      Correct


// let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
// Simplify = "hello" && 12 || NaN;
// My_Ans = 12;
// Actual_Ans= 12;
// console.log(exp26);      Correct


// let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
// Simplify = NaN && "value" || "start5";
// My_Ans = "start5";
// Actual_Ans= "start5";
// console.log(exp27);      Correct


// let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// Simplify = NaN || NaN || "world";
// My_Ans = "world";
// Actual_Ans= "world";
// console.log(exp28);      Correct

// let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// Simplify = "start2" && NaN;
// My_Ans = NaN;
// Actual_Ans= "NaNresult";
// console.log(exp29);      Wrong

// let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
// Simplify = NaN || 5 && "falsevalueend" || 5;
// My_Ans = "falsevalueend";
// Actual_Ans= "falsevalueend";
// console.log(exp30);      Correct


// let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
// Simplify = "3end" || NaN && 7 || "start1";
// My_Ans = "3end";
// Actual_Ans= "3end";
// console.log(exp31);      Correct


// let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
// Simplify = 3 || NaN && "falsetest";
// My_Ans = 3;
// Actual_Ans= 3;
// console.log(exp32);      Correct


// let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
// Simplify = 5 && "end6" || NaN && 5;
// My_Ans = "end6";
// Actual_Ans= "end5";
// console.log(exp33);      Wrong


// let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
// Simplify = "hello20" || 3 && "start1";
// My_Ans = "hello20";
// Actual_Ans= "hello20";
// console.log(exp34);      Correct


// let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
// Simplify = "start" && 25 && "falseend" || 2;
// My_Ans = "falseend";
// Actual_Ans= "falseend";
// console.log(exp35);      Correct


// let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// Simplify = "1value" && 8 || NaN && 4;
// My_Ans = 8;
// Actual_Ans= 8;
// console.log(exp36);      Correct

// let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
// Simplify = "hello" && "2test" || 9 && "truevalue1";
// My_Ans = "2test";
// Actual_Ans= "2test";
// console.log(exp37);      Correct

// let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
// Simplify = 25 && NaN || "2end";
// My_Ans = "2end";
// Actual_Ans= "2end";
// console.log(exp38);      Correct

// let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
// Simplify = "start" && 2 || NaN && 0;
// My_Ans = 2;
// Actual_Ans= 2;
// console.log(exp39);      Correct

// let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
// Simplify = NaN || NaN;
// My_Ans = NaN;
// Actual_Ans= NaN;
// console.log(exp40);      Correct


// let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
// Simplify = "start" && NaN || 4 && "hello";
// My_Ans = "hello";
// Actual_Ans= "hello";
// console.log(exp41);      Correct


// let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
// Simplify = NaN || 3 && NaN;
// My_Ans = NaN;
// Actual_Ans= NaN;
// console.log(exp42);     Correct


// let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
// Simplify = false || 20 && "start5";
// My_Ans = "start5";
// Actual_Ans= "start5";
// console.log(exp43);     Correct


// let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
// Simplify = 15 && "value1" || "8test";
// My_Ans = "value1";
// Actual_Ans= "value1";
// console.log(exp44);     Correct


// let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
// Simplify = "1test" && 20 || "end2";
// My_Ans = 20;
// Actual_Ans= 20;
// console.log(exp45);     Correct

// let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
// Simplify = 14 && "test" || "3hello" && 5;
// My_Ans = "test";
// Actual_Ans= "test";
// console.log(exp46);     Correct

// let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
// Simplify = "0result" && 8 || NaN;
// My_Ans = 8;
// Actual_Ans= 8;
// console.log(exp47);      Correct

// let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
// Simplify = NaN && 4 || NaN;
// My_Ans = NaN;
// Actual_Ans= NaN;
// console.log(exp48);      Correct

// let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
// Simplify = "6result" && 24 || "start2end";
// My_Ans = 24;
// Actual_Ans= 24;
// console.log(exp49);      Correct

// let exp50 = 32 && true - ++a && " " || "true"; // for a = 5
// Simplify = 32 && -5 && " " || "true";
// My_Ans = "true";
// Actual_Ans= " ";
// console.log(exp50);      Wrong

// let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
// Simplify = 42 || NaN;
// My_Ans = 42;
// Actual_Ans= 42;
// console.log(exp51);      Correct


// let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
// Simplify = NaN || NaN;
// My_Ans = NaN;
// Actual_Ans= NaN;
// console.log(exp52);      Correct


// let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
// Simplify = NaN || "startend";
// My_Ans = "startend";
// Actual_Ans= "startend";
// console.log(exp53);      Correct


// let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
// Simplify = NaN || NaN;
// My_Ans = NaN;
// Actual_Ans= NaN;
// console.log(exp54);      Correct


// let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
// Simplify = "startNaN" || NaN;
// My_Ans = NaN;
// Actual_Ans= "startNaN";
// console.log(exp55);      Wrong


// let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
// Simplify = "24test" || NaN;
// My_Ans = "24test";
// Actual_Ans= "24test";
// console.log(exp56);      Correct


// let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
// Simplify = NaN || NaN || "value";
// My_Ans = "value";
// Actual_Ans= "value";
// console.log(exp57);      Correct


// let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
// Simplify = NaN || "2end3";
// My_Ans = "2end3";
// Actual_Ans= "2end3";
// console.log(exp58);      Correct


// let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
// Simplify = NaN || 2;
// My_Ans = 2;
// Actual_Ans= 2;
// console.log(exp59);      Correct


// let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
// Simplify = NaN || NaN;
// My_Ans = NaN;
// Actual_Ans= NaN;
// console.log(exp60);      Correct


// let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
// Simplify = "36result" || NaN;
// My_Ans = "36result";
// Actual_Ans= "36result";
// console.log(exp61);      Correct


// let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
// Simplify = "startNaN" || NaN;
// My_Ans = "startNaN";
// Actual_Ans= "startNaN";
// console.log(exp62);      Correct


// let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
// Simplify = NaN || "valueNaN";
// My_Ans = "valueNaN";
// Actual_Ans= "valueNaN";
// console.log(exp63);      Correct


// let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
// Simplify = NaN || "startfalse";
// My_Ans = "startfalse";
// Actual_Ans= "startfalse";
// console.log(exp64);      Correct


// let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
// Simplify = "valueNaN" || NaN;
// My_Ans = "valueNaN";
// Actual_Ans= "valueNaN";
// console.log(exp65);      Correct


// let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
// Simplify = NaN || "NaNresult";
// My_Ans = "NaNresult";
// Actual_Ans= "NaNresult";
// console.log(exp66);      Correct


// let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
// Simplify = "startNaN" || NaN;
// My_Ans = "startNaN";
// Actual_Ans= "startNaN";
// console.log(exp67);      Correct


// let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
// Simplify = "12result" || NaN;
// My_Ans = "12result";
// Actual_Ans= "12result";
// console.log(exp68);      Correct


// let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
// Simplify = NaN || NaN;
// My_Ans = NaN;
// Actual_Ans= NaN;
// console.log(exp69);      Correct


// let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
// Simplify = NaN || 3;
// My_Ans = "end3";
// Actual_Ans= 3;
// console.log(exp70);      Correct


// let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
// Simplify = "test16" || 4;
// My_Ans = "test16";
// Actual_Ans= "test16";
// console.log(exp71);      Correct


// let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
// Simplify = NaN || NaN;
// My_Ans = NaN;
// Actual_Ans= NaN;
// console.log(exp72);      Correct


// let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
// Simplify = NaN || "NaNstart";
// My_Ans = "NaNstart";
// Actual_Ans= "NaNstart";
// console.log(exp73);      Correct


// let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
// Simplify = NaN || "NaNstart";
// My_Ans = "NaNstart";
// Actual_Ans= "NaNstart";
// console.log(exp74);      Correct


// let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
// Simplify = "NaN5start" || NaN;
// My_Ans = "NaN5start";
// Actual_Ans= "NaN5start";
// console.log(exp75);      Correct
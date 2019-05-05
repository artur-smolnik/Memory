
            var elem = document.getElementById('canvas');           
            var myCanvas = canvas.getContext('2d');
            var grid = [];
            var numbersToGuess = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
            var columns = 4;
            var rows = 4;
            var shapeSize = 50;
            var pressedRectNumber1 = 0;
            var pressedRectNumber2 = 0;

            myCanvas.font = "20px Comic Sans MS";
            function shuffle(array) {
                array.sort(() => Math.random() - 0.5);
              }
            numbersToGuess.sort(() => Math.random() - 0.5)
            console.log(numbersToGuess);

            elem.addEventListener('click', () => {
                console.log('canvas click');
             });
           
            elem.addEventListener('click', canvasOnClick, false);
            
            
            function canvasOnClick(event) {
                 offsetX = event.clientX - elem.offsetLeft;
                 offsetY = event.clientY - elem.offsetTop;
                
                for (var i in grid) {
                    rectangle = grid[i];
                    
                    if(offsetX >= rectangle.x && offsetX <=rectangle.x+rectangle.w && offsetY >= rectangle.y && offsetY <= rectangle.y+rectangle.h){                                             
                       
                        myCanvas.fillStyle = "white";
                        myCanvas.fillRect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);           
                        // for (var y in grid) {
                            
                        //     rectangle = grid[y];
                        //     myCanvas.fillStyle = rectangle.deafaultColor;
                        //     myCanvas.fillRect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);                         
                    
                        // }
                        if(pressedRectNumber1 == 0 && pressedRectNumber2 == 0 ) 
                        {
                            pressedRectNumber1 = rectangle.numberToGuess;
                        }
                        else if (pressedRectNumber1 != 0 && pressedRectNumber2 == 0)
                        {
                            pressedRectNumber2 = rectangle.numberToGuess;
                        }
                        else if (pressedRectNumber1 !=0 && pressedRectNumber2 != 0)
                        {
                            myCanvas.fillStyle = "green";
                            myCanvas.fillRect(400, 180, 70,70);
                            pressedRectNumber1 = rectangle.numberToGuess;
                            pressedRectNumber2 = 0;
                        }
                        printNumber();
                        //myCanvas.strokeText(rectangle.numberToGuess, rectangle.x, rectangle.y);

                    }     
                }                
            }
            
            
            function printNumber(){
                myCanvas.fillStyle = "blue";
                if(pressedRectNumber1 != 0) myCanvas.fillText(pressedRectNumber1, 400, 200);
                if(pressedRectNumber2 != 0) myCanvas.fillText(pressedRectNumber2, 400, 250);
               
            }

       

            function Shape(x, y, w, h, deafaultColor, numberToGuess, uncoveredColor) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.deafaultColor = deafaultColor;
                this.numberToGuess = numberToGuess;
                this.uncoveredColor = uncoveredColor;
            }
                 
           
           
           
           
            var xvalue = 0;
            var yvalue = 0;
            for (var x = 0; x < columns*rows; x++) {                 
                xvalue += shapeSize+5;
                
                if ((x) % columns === 0) {
                    yvalue += shapeSize+5;
                    xvalue = 0;
                }    
                grid.push(new Shape(xvalue, yvalue, shapeSize, shapeSize, "red", numbersToGuess[x]), "black");
            }              
            for (var i in grid) {
                rectangle = grid[i];
                myCanvas.fillStyle = rectangle.deafaultColor;
                myCanvas.fillRect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);
            
            }
            
                // document.body.onclick = function(e) {
                //     e = e || window.event;
                  
                //     var target = e.target || e.srcElement,
                //       rect = target.getBoundingClientRect(),
                //       offsetX = e.clientX - rect.left,
                //       offsetY = e.clientY - rect.top;
                  
                //     //console.log([offsetX, offsetY]);
                //   };


                 
                 
            //       or (var x = 0; x < 100; x++) {
            //         //myCanvas.fillRect(xvalue, yvalue, 20, 20); 
            //        xvalue += 25;
                   
            //        if ((x) % 10 === 0) {
            //            yvalue += 25;
            //            xvalue = 0;
            //        }    
            //        grid.push(new Shape(xvalue, yvalue, 20, 20, "red"));
            //    }              
            //        for (var i in grid) {
            //            rectangle = grid[i];
            //            myCanvas.fillStyle = rectangle.deafaultColor;
            //            myCanvas.fillRect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);
               
            //        }
               
            //        document.body.onclick = function(e) {
            //            e = e || window.event;
                     
            //            var target = e.target || e.srcElement,
            //              rect = target.getBoundingClientRect(),
            //              offsetX = e.clientX - rect.left,
            //              offsetY = e.clientY - rect.top;
                     
            //            //console.log([offsetX, offsetY]);
            //          };
   
                 
                  // // Ilość prób przed podaniem wyniku
            // var howManyTrials = 5;
            // // Zmierzone czasy reakcji
            // var reactionTimes = [];
            // // Rozpoczęcie pomiaru czasu
            // var trialStart = 0;
            // // Koniec pomiaru czasu
            // var trialEnd = 0;
            // // Licznik próby
            // var trialCounter = 0;
            // // Po jakim czasie ma się pojawić zielony przycisk
            // var randomTimer = 0;

            // for (var x = 0; x <= 10; x++) {
            //     for (var y = 0; y <= 10; y++) {
            //         myCanvas.fillRect(x*40, y*40, 20, 20);
            //     }
            // }
            // // Resetowanie czasów reakcji
            // function ResetTimes() {
            //     for(var i = 0 ; i < howManyTrials; i++) {
            //         reactionTimes[i] = 0;
            //     }
            // }

            // // Rozpoczęcie odliczania do pomiaru czasu
            // function StartIdle() {
            //     document.getElementById("button").src = "Images/jerry.jfif";
            //     // Funkcja uruchomiona po kliknięciu - wywołanie funkcji FalseStart
            //     document.getElementById("button").onclick = function() { FalseStart(); };
            //     document.getElementById("button").src.get
            //     if (trialCounter >= howManyTrials) {
            //         ResetTimes();
            //         trialCounter = 0;

            //         UpdateTable(0);
            //     }

            //     trialCounter++;

            //     randomTimer = Math.floor(Math.random() * 1000 + 500);
            //     setTimeout(StartTimer, randomTimer);
            // }
            // // Rozpoczęcie pomiaru czasu reakcji
            // function StartTimer() {
            //     document.getElementById("button").src = "Images/buttonGreen.png";
            //     document.getElementById("button").onclick = function() { 
            //         StopTimer(); 
            //     };
            //     // Aktualny czas
            //     trialStart = new Date().getTime();
            // }


            // // Ukaranie za naciśnięcie przycisku zbyt wcześnie
            // function FalseStart() {
            //     trialStart = new Date().getTime() - 1000;
            //     StopTimer();
            // }

            // // Zakończenie pomiaru czasu reakcji i wyświetlenie wyniku
            // function StopTimer() {
            //     document.getElementById("button").src = "Images/buttonRed.png";
            //     document.getElementById("button").onclick = function() { StartIdle(); };
            //     // Średnia
            //     var average = 0;

            //     // Wyliczony czas
            //     trialEnd = new Date().getTime() - trialStart; 
            //     reactionTimes[trialCounter - 1] = trialEnd;

            //     UpdateTable(average);

            //     if (trialCounter > howManyTrials - 1) {
            //         for (var i = 0 ; i < trialCounter; i++) {
            //             average += reactionTimes[i];
            //         }
            //         // Wyliczenie średniej wyników
            //         average = Math.round(average / howManyTrials);

            //         UpdateTable(average);
            //         alert("Your average reaction time: " + average + " ms");
            //     }
            // }
            // // Odświeżenie tabeli z wynikami
            // function UpdateTable(average) {
            //     document.getElementById("timesTable").innerHTML = "";

            //     document.getElementById("timesTable").innerHTML +=
            //         '<tr>' +
            //         '<th> Attempt No. </th>' +
            //         '<th> Reaction time </th>' + 
            //         '</tr>';
            //     // Wyświetlenie czasu reakcji
            //     for (var i = 0 ; i < howManyTrials; i++ ) {
            //         document.getElementById("timesTable").innerHTML += '<tr>' +
            //             '<td> Attempt ' + (i + 1) + ' </td>' +
            //             '<td>' +
            //             reactionTimes[i] +
            //             ' ms </td>' +
            //             '</tr>';
            //     }

            //     document.getElementById("timesTable").innerHTML +=
            //         '<tr>' +
            //         '<td> Average </td>' +
            //         '<td> ' + average + ' ms </td>' +
            //         '</tr>';
            // }

     File.prototype.convertToBase64 = function(callback){
            var reader = new FileReader();
            reader.onload = function(e) {
                 callback(e.target.result)
            };
            reader.onerror = function(e) {
                 callback(null, e);
            };        
            reader.readAsDataURL(this);
    };

      var app = require('electron').remote;
      var fs = require('fs');
      var dialog = app.dialog;
      
      var imgW, imgH;


      var btn = document.getElementById('btn');
      var add = document.getElementById('add');
      var parser = document.getElementById('parser');
      var file = document.getElementById('file');


        // // btn.addEventListener('click', function()
        // //   {
            

 
        // //         var dir = './tmp';

        // //         if (!fs.existsSync(dir)){
        // //             fs.mkdirSync(dir);
        // //         }

        // //         fs.open(dir+'/input.json', 'a', function(err, fd) {
        // //            if (err) 
        // //            {
        // //               return console.error(err);
        // //            }
        // //            else
        // //            {
        // //             fs.readFile(dir+'/input.json','utf-8',(err,data) => {
                       
        // //                // console.log(data);

        // //                var json = JSON.parse(data);
        // //                // parser.innerHTML = json;
        // //                console.log(json['content'][0]['title']);


        // //                });
        // //            }
                     

        // //         });
               
        // //          //   var fd = '';

        // //          // fs.writeFile(dir+'/input.json',fd,(err) => {
        // //          //  if(err) console.log(err);
        // //          //   console.log("the file has been saved !");

        // //          //   });
                

        // //   });//ACTION BTN CLICK
         
        // //   var _URL = window.URL || window.webkitURL;

        // //   file.addEventListener("change" , function(e) {
            
        // //     var image, thisFile;

        // //     if ((thisFile = this.files[0]) ) 
        // //       {
               
        // //           image = new Image();
                  
        // //           image.onload = function() {

        // //               imgW = this.width;
        // //               imgH = this.height;
        // //                // parser.innerHTML = imgW + " x " + imgH;
        // //               //Create image item and save
                      
        // //               thisFile.convertToBase64(function(imgurl){
                 
        // //                   if (imgurl != "") 
        // //                    {
                               
        // //                     ///////////////  ADDING ////////////////////
                           
        // //                       var canvas = new fabric.Canvas('view_1');

        // //                         // create a rect object
        // //                         var rect = new fabric.Rect({
        // //                           left: 100,
        // //                           top: 100,
        // //                           fill: 'red',
        // //                           width: imgW,
        // //                           height: imgH
        // //                         });
        // //                         // setStyle(rect, {'z-index':55});
        // //                         canvas.add(rect);

        // //                         var Aimg = new fabric.Image();
        // //                         // Aimg.initialize('<img src="tmp/awa_logo.png">' ,
        // //                         // {
        // //                         //   width:imgW,
        // //                         //   height:imgH
        // //                         // },function(){});
        // //                         Aimg.setOptions({width:imgW, height:imgH});
        // //                         Aimg.setSrc(imgurl, function()
        // //                           {
        // //                             canvas.add(Aimg);
        // //                             canvas.renderAll.bind(canvas);

        // //                           }
        // //                           ,{width:imgW, height:imgH});

                                
        // //                         // console.log(imgurl);

        // //                         // "add" rectangle onto canvas
                               
                                
        // //                         //Set to void
        // //                         file.value = "";

        // //                     }
        // //                     // else
        // //                     // {
        // //                     //   console.log("NO FILE SELECTED");
        // //                     // }


        // //               });


                       

        // //           };
              
        // //           image.src = _URL.createObjectURL( thisFile );
        // //           //"image" is never appended to dom.
        // //     }

        // });


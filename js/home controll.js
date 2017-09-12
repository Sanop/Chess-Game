alert("Welcome To Chess Game");
var whiteDivs=['a8','c8','e8','g8','b7','d7','f7','h7','a6','c6','e6','g6','b5','d5','f5','h5','a4','c4','e4','g4','b3','d3','f3','h3','a2','c2','e2','g2','b1','d1','f1','h1'];

var BlackDivs=['b8','d8','f8','h8','a7','c7','e7','g7','b6','d6','f6','h6','a5','c5','e5','g5','b4','d4','f4','h4','a3','c3','e3','g3','b2','d2','f2','h2','a1','c1','e1','g1'];

var BlackTeam=['RB1','KNB1','BB1','KB','QB','BB2','KB2','RB2','PB1','PB2','PB3','PB4','PB5','PB6','PB7','PB8'];

var WhiteTeam=['RW1','KNW1','BW1','KW','QW','BW2','KNW2','RW2','PW1','PW2','PW3','PW4','PW5','PW6','PW7','PW8'];


function refreshBoxes() {
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            for(var k=0; k<whiteDivs.length; k++){
                if(col[i]+row[j] === whiteDivs[k]){
                    $("#"+col[i]+row[j]).removeClass('TrapBox');
                    $("#"+col[i]+row[j]).removeClass('selectedBox');
                    $("#"+col[i]+row[j]).addClass('whiteBox');
                    $("#"+col[i]+row[j]).attr('ondrop','');
                    $("#"+col[i]+row[j]).attr('ondragover','');
                }
            }
            for(var k=0; k<BlackDivs.length; k++){
                if(col[i]+row[j] === BlackDivs[k]){
                    $("#"+col[i]+row[j]).removeClass('TrapBox');
                    $("#"+col[i]+row[j]).removeClass('selectedBox');
                    $("#"+col[i]+row[j]).addClass('whiteBox');
                    $("#"+col[i]+row[j]).attr('ondrop','');
                    $("#"+col[i]+row[j]).attr('ondragover','');
                }
            }
        }
    }
}


function allowDrop(ev,e) {
    if($("#"+e.id).find("img").length > 0){
        $("#"+e.id).children("img").remove();
    }
    ev.preventDefault();
}


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev,e) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    refreshBoxes();
}

var col=['a','b','c','d','e','f','g','h'];

var row=[1,2,3,4,5,6,7,8];


function clickPawn(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                var path=(col[i])+row[j-1];

                var pathId="#"+path;

                $(pathId).addClass('selectedBox');
                $(pathId).attr('ondrop','drop(event,this)');
                $(pathId).attr('ondragover','allowDrop(event,this)');

            }
        }
    }
}
function clickWhitePawn(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                var path=(col[i])+row[j+1];

                var pathId="#"+path;

                $(pathId).addClass('selectedBox');
                $(pathId).attr('ondrop','drop(event,this)');
                $(pathId).attr('ondragover','allowDrop(event,this)');

            }
        }
    }
}

function clickBlackRook(e) {
    refreshBoxes();
    var parentId = e.parentNode.id;
    for (var i = 0; i < col.length; i++) {
        for (var j = 0; j < row.length; j++) {
            if(parentId === col[i]+row[j]){

                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i+k]+row[j]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }

                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i-k]+row[j]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }


                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }

    }
}

function clickWhiteRook(e) {
    refreshBoxes();
    var parentId = e.parentNode.id;
    for (var i = 0; i < col.length; i++) {
        for (var j = 0; j < row.length; j++) {
            if(parentId === col[i]+row[j]){

                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i+k]+row[j]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }

                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i-k]+row[j]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }


                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }

    }
}


function clickBlackBishop(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i+k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){

                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i-k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){

                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i+k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i-k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
            }
        }
    }
}

function clickWhiteBishop(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i+k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){

                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i-k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                               break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){

                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i+k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i-k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
            }
        }
    }
}


function clickWhiteKnight(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i+2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j+1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i+2]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;
                        }
                    }

                }else{

                    $("#"+col[i+2]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+2]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i+1]+row[j+2]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+2]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j-1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i+2]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;
                        }
                    }

                }else{

                    $("#"+col[i+2]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-2]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i+1]+row[j-2]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-2]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j+1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i-2]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;
                        }
                    }

                }else{

                    $("#"+col[i-2]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+2]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i-1]+row[j+2]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+2]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j-1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i-2]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;
                        }
                    }

                }else{

                    $("#"+col[i-2]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }



                if($("#"+col[i-1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-2]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i-1]+row[j-2]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-2]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}


function clickBlackKnight(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i+2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j+1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i+2]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{

                    $("#"+col[i+2]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+2]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i+1]+row[j+2]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+2]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j-1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i+2]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{

                    $("#"+col[i+2]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-2]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i+1]+row[j-2]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-2]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j+1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i-2]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{

                    $("#"+col[i-2]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+2]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i-1]+row[j+2]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+2]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j-1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){

                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            $("#"+col[i-2]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{

                    $("#"+col[i-2]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }



                if($("#"+col[i-1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-2]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i-1]+row[j-2]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-2]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}


function clickBlackKing(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j+1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{

                    $("#"+col[i]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i+1]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i-1]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j-1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{

                    $("#"+col[i]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i+1]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i-1]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i-1]+row[j]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{

                    $("#"+col[i-1]+row[j]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            break;
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            $("#"+col[i+1]+row[j]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{

                    $("#"+col[i+1]+row[j]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}


function clickWhiteKing(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j+1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;
                        }
                    }

                }else{

                    $("#"+col[i]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i+1]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i-1]+row[j+1]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+1]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j-1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){
                            $("#"+col[i]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                                break;

                        }
                    }

                }else{

                    $("#"+col[i]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){

                            $("#"+col[i+1]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;

                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-1]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){

                            $("#"+col[i-1]+row[j-1]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;

                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-1]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){

                            $("#"+col[i-1]+row[j]).addClass('TrapBox');
                            $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){
                            break;

                        }
                    }

                }else{

                    $("#"+col[i-1]+row[j]).addClass('selectedBox');
                    $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j]).children("img");
                    for(var b=0; b<BlackTeam.length; b++){
                        if($(chil).attr('id')===BlackTeam[b]){

                            $("#"+col[i+1]+row[j]).addClass('TrapBox');
                            $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0; r<WhiteTeam.length; r++){
                        if($(chil).attr('id')===WhiteTeam[r]){

                            break;
                        }
                    }

                }else{

                    $("#"+col[i+1]+row[j]).addClass('selectedBox');
                    $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}



function clickBlackQueen(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i+k]+row[j]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i-k]+row[j]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }


                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i+k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i-k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i+k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                break;
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                $("#"+col[i-k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }
    }
}

function clickWhiteQueen(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //bottom selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i+k]+row[j]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i-k]+row[j]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }


                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i+k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i-k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i+k]+row[j-k]).addClass('TrapBox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('selectedBox');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }

                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0; b<BlackTeam.length; b++){
                            if($(chil).attr('id')===BlackTeam[b]){
                                $("#"+col[i-k]+row[j+k]).addClass('TrapBox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0; r<WhiteTeam.length; r++){
                            if($(chil).attr('id')===WhiteTeam[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('selectedBox');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }
    }
}

function ReloadPage() {
    location.reload();
}
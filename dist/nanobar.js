/*
 *  Nanobar
 *  v1.0.0
 *  https://github.com/the-muda-organization/nanobar
 *  MIT License
*/

function Nanobar(){
    
    /***************************************************************************
     *                              VARIABLES
     ***************************************************************************/
    var nanobarContainer  = document.createElement('div'),
        nanobarBackground = 'red',
        nanobarWidth      = 0,
        nanobarTarget     = 0,
        nanobarOn         = 0;
        
    /***************************************************************************
     *                              FUNCTIONS
     ***************************************************************************/
    
    //Nanobar move
    function move(){
        var nanobarDistanceToGo = nanobarWidth - nanobarTarget;
        
        if(nanobarDistanceToGo < 0.1 && nanobarDistanceToGo > -0.1){
            nanobarWidth = nanobarTarget;
            nanobarContainer.style.width = nanobarWidth + '%';
            nanobarOn = 0;
            if(nanobarWidth >= 100){
                nanobarContainer.style.height = 0;
                setTimeout(function(){
                    nanobarContainer.remove();
            },300);
            }
        } else{
            nanobarWidth = nanobarWidth - nanobarDistanceToGo / 4;
            nanobarContainer.style.width = nanobarWidth + '%';
            setTimeout(go,16);
        }
    }

    //Nanobar progress
    function go(e){
        if(e >= 0){
            nanobarTarget = e;
            if(!nanobarOn){
                nanobarOn = 1;
                move();
            }
        } else if(nanobarOn){
            move();
        }
    }
    
    /***************************************************************************
     *                              NANOBAR
     ***************************************************************************/
    nanobarContainer.id = 'nanobar';
    
    //if data-nanobar="color" exists set nanobar color
    if(document.body.hasAttribute('data-nanobar')){
        nanobarBackground = document.body.dataset.nanobar;
    }
    
    nanobarContainer.style.cssText = 'width:0;height:4px;position:fixed;top:0;left:0;z-index:9999;transition:height .3s;pointer-events:none;background:' + nanobarBackground;
    
    document.body.appendChild(nanobarContainer);
    
    //Move nanobar to 30%, 76%, 100% and and finish
    go(30);
    go(76);
    go(100);
    
}

//Create nanobar
new Nanobar();

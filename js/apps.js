$(document).ready(function (){
    //text start
        $('#hideBtn').click(function() {
            $('#know').hide();
        })

        $('#showBtn').click(function() {
            $('#know').show();
        })
        
        $('#toggleBtn').click(function() {
            $('#know').toggle('slow');
        })
        
    
        $('#maltitypeBtn').mouseenter(function() {
            $('#know').hide(3000);
        })
        $('#maltitypeBtn').mouseleave(function() {
            $('#know').show(3000);
        })
    
    //div start
        $('#fadeOut').click(function() {
            $('#output').fadeOut(4000);
        })
        $('#fadeIn').click(function() {
            $('#output').fadeIn(4000);
        })
    
        $('#fadeToggle').click(function() {
            $('#output').fadeToggle(3000);
        })
    
        $('#fadeTo').click(function() {
            $('#output').fadeTo(1000, .2);
        })
    
    
        $('#animate').click(function() {
            $('#output').animate({
                width: '600px'
            },5000);
        })
        $('#animateOf').click(function() {
            $('#output').stop();
        })
        
    
        $('#mathChain').click(function() {
            $('#output').hide(2000).fadeIn(4000).animate({
                width:'50%'
            },6000);
        })
    })
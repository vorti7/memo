$(document).ready(function(){
$('#rsvp-first-name').attr("placeholder", "First Name/이름");
$('#rsvp-last-name').attr("placeholder", "Last Name/성");
$('#rsvp-email').attr("placeholder", "Email Address/이메일");
$('#rsvp-submit').val("Submit");
});

// Tealium tracking integration
(function(a,b,c,d){
    a='/img/events/splash/tealium_current_prod.js';
    b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
    a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
})();
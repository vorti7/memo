var ec_ex_vals_raw = splash.server._event.metadata;
var ec_ex_vals = {};
for (var exv in ec_ex_vals_raw) {
    var exvl = exv.toLowerCase();
    ec_ex_vals[exvl] = ec_ex_vals_raw[exv];
}
var ec_ex_translation = {
"app_service_supported" : "ec_ex__app+service+supported",
"product" : "ec_ex__product+supported",
"marketing_brand" : "ec_ex__marketing+brand",
"marketing_program" : "ec_ex__marketing+program",
"marketing_pillar" : "ec_ex__marketing+pillar",
"marketing_campaign" : "ec_ex__marketing+campaign",
"marketing_campaign_sub" : "ec_ex__marketing+campaign+sub",
"marketing_target_vertical" : "ec_ex__marketing+target+vertical",
"marketing_target_vertical_sub" : "ec_ex__marketing+target+vertical+sub",
"marketing_target_audience" : "ec_ex__marketing+target+audience",
"marketing_target_audience_sub" : "ec_ex__marketing+target+audience+sub",
"workfront_project_id" : "ec_ex__workfront+project+id"
};
var ec_ex_translated_configuration = {};
for (var tk in ec_ex_translation) {
    tv = ec_ex_translation[tk];
    ec_ex_translated_configuration[tk] = "";
}
for (var incoming_key in ec_ex_vals) {
    incoming_val = ec_ex_vals[incoming_key]
    //console.log ("k " + incoming_key + ", v " + incoming_val);
    for (var tk in ec_ex_translation) {
        tv = ec_ex_translation[tk];
        if (incoming_key == tv) {
            ec_ex_translated_configuration[tk] = incoming_val;
        }
    }
}
//console.log(ec_ex_translated_configuration);

var ec_ex_querystring_parsed = {
    "sc" : "",
    "mb" : "",
    "mp" : "",
    "scn" : "",
    "mid" : "",
    "cid" : "",
    "agid" : "",
    "kw" : "",
    "nk" : "",
    "wfid" : ""
}
var actual_query_parms = getQueryParams(window.location.search)
for (var qp in ec_ex_querystring_parsed) {
    if (actual_query_parms.hasOwnProperty(qp)) {
        ec_ex_querystring_parsed[qp] = encodeURIComponent(actual_query_parms[qp]);
    }
}
//console.log(ec_ex_querystring_parsed);

var utag_data = {

// these variables will come from the query string
// specific parameter called out for each below
// simply replicate the value from the query string mapped to each
outbound_channel_sub : ec_ex_querystring_parsed.sc, // 'sc' query string parameter
outbound_marketing_brand : ec_ex_querystring_parsed.mb, // 'mb' query string parameter
outbound_marketing_program : ec_ex_querystring_parsed.mp, // 'mp' query string parameter
outbound_campaign_sub : ec_ex_querystring_parsed.scn, // 'scn' query string parameter
outbound_activation_id : ec_ex_querystring_parsed.mid, // 'mid' query string parameter
outbound_activation_campaign_id : ec_ex_querystring_parsed.cid, // 'cid' query string parameter
outbound_activation_adgroup_id : ec_ex_querystring_parsed.agid, // 'agid' query string parameter
outbound_activation_keyword : ec_ex_querystring_parsed.kw, // 'kw' query string parameter
outbound_activation_network : ec_ex_querystring_parsed.nk, // 'nk' query string parameter
outbound_workfront_project_id : ec_ex_querystring_parsed.wfid, // 'wfid' query string parameter

// these variables should be configured at the event level by the event creator
app_service_supported : ec_ex_translated_configuration.app_service_supported, // array of brand(s) supported
product : ec_ex_translated_configuration.product, // array of product(s) supported
marketing_brand : ec_ex_translated_configuration.marketing_brand, // marketing brand of the content
marketing_program : ec_ex_translated_configuration.marketing_program, // marketing program content is aligned to
marketing_pillar : ec_ex_translated_configuration.marketing_pillar, // marketing pillar the content is aligned to
marketing_campaign : ec_ex_translated_configuration.marketing_campaign, // marketing campaign of the content
marketing_campaign_sub : ec_ex_translated_configuration.marketing_campaign_sub,// marketing sub-campaign of the content
marketing_target_vertical : ec_ex_translated_configuration.marketing_target_vertical, // vertical the content is intended for
marketing_target_vertical_sub : ec_ex_translated_configuration.marketing_target_vertical_sub, // sub-vertical the content is intended for
marketing_target_audience : ec_ex_translated_configuration.marketing_target_audience, // audience content is intended for
marketing_target_audience_sub : ec_ex_translated_configuration.marketing_target_audience_sub,// sub-audience content is intended for
workfront_project_id : ec_ex_translated_configuration.workfront_project_id,// freeform input for a unique id


// tbd how to populate, for now leave blank
// will populate later - for the time being exclude these
vid_c_user : "", // fb c_user cookie
vid_email : "", // email address
fr_cookie : "", // fb fr cookie value

// these should be set based on the locale of the content
// and the locale requested by the browser
locale_delivered : "en-us", // actual locale of the content
locale_browser : "", // the locale set by the browser

// specific event (aka activity) tracking
event_group : "", // categorization of similar ctas
event_name : "", // unique name for specific cta
event_value : "", // numeric value for the cta action

// these variables should exist within the splash system today
// related to an event
splash_event_id : splash.server._event.id, // numeric id for event
splash_event_domain : splash.server._event.domain.effective, // subdomain for event on splash system
splash_event_path : splash.server._event.domain.effective, // url path to page on splash system
splash_event_title : splash.server._event.title, // name of the event
splash_event_hashtag : splash.server._event.hashtag, // hashtag for the event
splash_event_datetime_start : splash.server._event.date.start, // date &amp; time the event starts
splash_event_datetime_end : splash.server._event.date.end, // date &amp; time the event ends
splash_event_timestamp_start : splash.server._event.date.start_timestamp, // unix timestamp the event starts
splash_event_timestamp_end : splash.server._event.date.end_timestamp, // unix timestamp the event ends
splash_event_venue_address : splash.server._event.venue.address, // venue address
splash_event_venue_city : splash.server._event.venue.city, // venue city
splash_event_venue_state : splash.server._event.venue.state, // venue state
splash_event_venue_country : splash.server._event.venue.country, // venue country
splash_event_venue_latitude : splash.server._event.venue.lat, // venue lat
splash_event_venue_longitude : splash.server._event.venue.lng, // venue long
splash_event_venue_name : splash.server._event.venue.name, // venue name
splash_event_rsvp_max : splash.server._event.rsvp_fields.rsvp_max, // max number of rsvps for event
splash_event_rsvp_status : splash.server._event.rsvp_fields.rsvp_status, // rsvp status for event
splash_event_rsvp_method : splash.server._event.rsvp_fields.rsvp_method, // rsvp method for event
splash_event_waitlistactive : splash.server._event.waitlistActive, // waitlist for event

// these variables should exist within the splash system today
// related to an individual
splash_attendee_id : (splash.server.constants && splash.server.constants.viewer && splash.server.constants.viewer.abc_id) ? splash.server.constants.viewer.abc_id : "", // attendee id within the splash system
splash_attendee_email : "", // email for attendee within splash system
splash_attendee_first_name : "", // first name for attendee within splash system
splash_attendee_last_name : "", // last name for attendee within splash system
splash_attendee_organization_id : "" // organization id within splash system

};

(function(a,b,c,d){
    a='//tags.tiqcdn.com/utag/facebook/splash/prod/utag.js';
    b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
    a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
})();

setTimeout(function(){
    console.log('synchronize t_id');
    $tealium_live_id = $.cookie('utag_main').split("$")[0];
    if ($tealium_live_id) {
        $tealium_stripped_of_prefix = $tealium_live_id.split(":")[1];
        $tealium_holder_field_name = _.find(splash.server._event.custom_rsvp_fields, { custom_class: "tealium_id" });
        if ($tealium_holder_field_name) {
            $tealium_holder_field = $('#rsvp-modal').find('input[name=' + $tealium_holder_field_name.column_name +']');
            if ($tealium_holder_field && $tealium_stripped_of_prefix) {
                $tealium_holder_field.val($tealium_stripped_of_prefix);
            }

            //checking for custom forms.

            $tealium_holder_field_2 = $(".cms-input-element div[sui-input].tealium_id");
            if ($tealium_holder_field_2.length > 0 && typeof SUI == 'function' && $tealium_stripped_of_prefix) {
                SUI($tealium_holder_field_2).setValue($tealium_stripped_of_prefix)
            }
        }
    }
}, 2000);
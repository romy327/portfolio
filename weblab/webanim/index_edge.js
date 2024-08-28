/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'baseLogo',
                type: 'image',
                rect: ['-2925px', '-3360px','6500px','7500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"baseLogo.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['299px', '659px','auto','auto','auto', 'auto'],
                text: "Platform",
                align: "center",
                font: ['open-sans, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'greenLogoCenter',
                type: 'image',
                rect: ['-423px', '151px','1500px','360px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"greenLogoCenter.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['274px', '354px','auto','auto','auto', 'auto'],
                text: "Tofu Marketing",
                align: "center",
                font: ['open-sans, sans-serif', 14, "rgba(182,204,52,1.00)", "400", "none", "normal"]
            },
            {
                id: 'cyrclebasegray',
                type: 'image',
                rect: ['-2019px', '-1996px','4690px','4690px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cyrclebasegray.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'cyrcleGrayInner',
                type: 'image',
                rect: ['-1038px', '-1017px','2730px','2730px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cyrcleGrayInner.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'cyrcleTreeColor',
                type: 'image',
                rect: ['-1524px', '-1502px','3700px','3700px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"cyrcleTreeColor.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'search1',
                type: 'image',
                rect: ['41px', '20px','300px','350px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"search1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'searchTest3',
                type: 'image',
                rect: ['-487px', '-13px','1630px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"searchTest.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'search2',
                type: 'image',
                rect: ['309px', '21px','300px','350px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"search2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'socialText',
                type: 'image',
                rect: ['6px', '279px','270px','340px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"socialText.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'sosialIcon',
                type: 'image',
                rect: ['20px', '310px','300px','350px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sosialIcon.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'advertising',
                type: 'image',
                rect: ['292px', '120px','430px','660px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"advertising.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'advertisingIcon',
                type: 'image',
                rect: ['319px', '333px','290px','340px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"advertisingIcon.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_advertisingIcon}": [
                ["style", "top", '350px'],
                ["style", "opacity", '0.0085470085470085'],
                ["style", "left", '305px']
            ],
            "${_cyrclebasegray}": [
                ["style", "top", '-1996px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2019px'],
                ["transform", "rotateZ", '-153deg']
            ],
            "${_search2}": [
                ["style", "top", '37px'],
                ["style", "opacity", '0.0085470085470085'],
                ["style", "left", '336px']
            ],
            "${_advertising}": [
                ["style", "top", '123px'],
                ["style", "opacity", '0'],
                ["style", "left", '308px']
            ],
            "${_sosialIcon}": [
                ["style", "top", '328px'],
                ["style", "opacity", '0.0085470085470085'],
                ["style", "left", '36px']
            ],
            "${_Text2}": [
                ["style", "top", '443px'],
                ["color", "color", 'rgba(182,204,52,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '274px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_greenLogoCenter}": [
                ["style", "-webkit-transform-origin", [50,12], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,12],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '151px'],
                ["style", "opacity", '0'],
                ["style", "left", '-423px'],
                ["style", "cursor", 'pointer']
            ],
            "${_searchTest3}": [
                ["style", "top", '-23px'],
                ["style", "opacity", '0'],
                ["style", "left", '-487px']
            ],
            "${_baseLogo}": [
                ["style", "top", '-3360px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-2925px']
            ],
            "${_Text}": [
                ["style", "-webkit-transform-origin", [47,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [47,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [47,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [47,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [47,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '299px'],
                ["style", "font-size", '14px'],
                ["style", "top", '534px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["transform", "skewY", '0deg']
            ],
            "${_cyrcleGrayInner}": [
                ["style", "top", '-1017px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1038px'],
                ["transform", "rotateZ", '-131deg']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '780px'],
                ["style", "width", '650px']
            ],
            "${_socialText}": [
                ["style", "top", '283px'],
                ["style", "opacity", '0'],
                ["style", "left", '-4px']
            ],
            "${_cyrcleTreeColor}": [
                ["style", "top", '-1502px'],
                ["transform", "rotateZ", '106deg'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-1524px']
            ],
            "${_search1}": [
                ["style", "top", '38px'],
                ["style", "opacity", '0.0085470085470085'],
                ["style", "left", '21px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid255", tween: [ "style", "${_searchTest3}", "left", '-487px', { fromValue: '-487px'}], position: 1426, duration: 0 },
                { id: "eid201", tween: [ "style", "${_cyrclebasegray}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid357", tween: [ "style", "${_advertisingIcon}", "top", '333px', { fromValue: '350px'}], position: 1500, duration: 222 },
                { id: "eid352", tween: [ "style", "${_search1}", "opacity", '1', { fromValue: '0.0085470085470085'}], position: 1796, duration: 222 },
                { id: "eid198", tween: [ "style", "${_baseLogo}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 250, easing: "easeOutBounce" },
                { id: "eid356", tween: [ "style", "${_advertisingIcon}", "left", '319px', { fromValue: '305px'}], position: 1500, duration: 222 },
                { id: "eid199", tween: [ "style", "${_cyrcleTreeColor}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid358", tween: [ "style", "${_sosialIcon}", "left", '20px', { fromValue: '36px'}], position: 1588, duration: 208 },
                { id: "eid359", tween: [ "style", "${_sosialIcon}", "top", '310px', { fromValue: '328px'}], position: 1588, duration: 208 },
                { id: "eid363", tween: [ "style", "${_search1}", "left", '41px', { fromValue: '21px'}], position: 1796, duration: 222 },
                { id: "eid360", tween: [ "style", "${_search2}", "left", '309px', { fromValue: '336px'}], position: 1722, duration: 222 },
                { id: "eid203", tween: [ "style", "${_greenLogoCenter}", "opacity", '1', { fromValue: '0'}], position: 186, duration: 250, easing: "easeOutBounce" },
                { id: "eid275", tween: [ "style", "${_advertising}", "top", '120px', { fromValue: '123px'}], position: 1064, duration: 362 },
                { id: "eid202", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 186, duration: 250, easing: "easeOutBounce" },
                { id: "eid272", tween: [ "style", "${_socialText}", "left", '6px', { fromValue: '-4px'}], position: 1064, duration: 362 },
                { id: "eid262", tween: [ "style", "${_advertising}", "opacity", '1', { fromValue: '0'}], position: 1064, duration: 185 },
                { id: "eid257", tween: [ "style", "${_advertising}", "opacity", '1', { fromValue: '1'}], position: 1426, duration: 0 },
                { id: "eid362", tween: [ "style", "${_search1}", "top", '20px', { fromValue: '38px'}], position: 1796, duration: 222 },
                { id: "eid20", tween: [ "style", "${_greenLogoCenter}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,12]}], position: 1064, duration: 880, easing: "easeOutBounce" },
                { id: "eid528", tween: [ "style", "${_greenLogoCenter}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,12]}], position: 1064, duration: 880, easing: "easeOutBounce" },
                { id: "eid529", tween: [ "style", "${_greenLogoCenter}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,12]}], position: 1064, duration: 880, easing: "easeOutBounce" },
                { id: "eid530", tween: [ "style", "${_greenLogoCenter}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,12]}], position: 1064, duration: 880, easing: "easeOutBounce" },
                { id: "eid531", tween: [ "style", "${_greenLogoCenter}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,12]}], position: 1064, duration: 880, easing: "easeOutBounce" },
                { id: "eid361", tween: [ "style", "${_search2}", "top", '21px', { fromValue: '37px'}], position: 1722, duration: 222 },
                { id: "eid354", tween: [ "style", "${_search2}", "opacity", '1', { fromValue: '0.0085470085470085'}], position: 1722, duration: 222 },
                { id: "eid274", tween: [ "style", "${_advertising}", "left", '292px', { fromValue: '308px'}], position: 1064, duration: 362 },
                { id: "eid3", tween: [ "style", "${_Text}", "top", '659px', { fromValue: '534px'}], position: 564, duration: 750, easing: "easeOutBounce" },
                { id: "eid16", tween: [ "transform", "${_cyrcleGrayInner}", "rotateZ", '0deg', { fromValue: '-131deg'}], position: 64, duration: 1362 },
                { id: "eid353", tween: [ "style", "${_advertisingIcon}", "opacity", '1', { fromValue: '0.0085470085470085'}], position: 1500, duration: 222 },
                { id: "eid267", tween: [ "style", "${_searchTest3}", "top", '-13px', { fromValue: '-23px'}], position: 1064, duration: 362 },
                { id: "eid264", tween: [ "style", "${_socialText}", "opacity", '1', { fromValue: '0'}], position: 1064, duration: 185 },
                { id: "eid256", tween: [ "style", "${_socialText}", "opacity", '1', { fromValue: '1'}], position: 1426, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text2}", "top", '354px', { fromValue: '443px'}], position: 1808, duration: 692, easing: "easeOutBounce" },
                { id: "eid355", tween: [ "style", "${_sosialIcon}", "opacity", '1', { fromValue: '0.0085470085470085'}], position: 1588, duration: 208 },
                { id: "eid15", tween: [ "transform", "${_cyrcleTreeColor}", "rotateZ", '0deg', { fromValue: '106deg'}], position: 64, duration: 1362 },
                { id: "eid13", tween: [ "transform", "${_cyrclebasegray}", "rotateZ", '0deg', { fromValue: '-153deg'}], position: 64, duration: 1362 },
                { id: "eid204", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutBounce" },
                { id: "eid273", tween: [ "style", "${_socialText}", "top", '279px', { fromValue: '283px'}], position: 1064, duration: 362 },
                { id: "eid263", tween: [ "style", "${_searchTest3}", "opacity", '1', { fromValue: '0'}], position: 1064, duration: 185 },
                { id: "eid258", tween: [ "style", "${_searchTest3}", "opacity", '1', { fromValue: '1'}], position: 1426, duration: 0 },
                { id: "eid200", tween: [ "style", "${_cyrcleGrayInner}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "animLog");

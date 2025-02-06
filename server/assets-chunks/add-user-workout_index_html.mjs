export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>HealthTracker</title>
  <base href="/Health_Tracker_Assignment/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>@layer theme{@theme default{ }@theme default inline reference{ --blur: 8px; --shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1); --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / .05); --drop-shadow: 0 1px 2px rgb(0 0 0 / .1), 0 1px 1px rgb(0 0 0 / .06); --radius: .25rem; --max-width-prose: 65ch; }}@layer base{*,:after,:before{box-sizing:border-box;margin:0;padding:0;border:0 solid}html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings, normal);font-variation-settings:var(--default-font-variation-settings, normal);-webkit-tap-highlight-color:transparent}body{line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}h1,h2{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}button,input,select{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}}:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33, 37, 41, .75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33, 37, 41, .5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, .175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-box-shadow-sm:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, .175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, .075);--bs-focus-ring-width:.25rem;--bs-focus-ring-opacity:.25;--bs-focus-ring-color:rgba(13, 110, 253, .25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;border:0;border-top:var(--bs-border-width) solid;opacity:.25}h1,h2{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;color:var(--bs-heading-color)}h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){h1{font-size:2.5rem}}h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){h2{font-size:2rem}}p{margin-top:0;margin-bottom:1rem}a{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,select{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}select{word-wrap:normal}select:disabled{opacity:1}[type=button],button{-webkit-appearance:button}[type=button]:not(:disabled),button:not(:disabled){cursor:pointer}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.form-label{margin-bottom:.5rem}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--bs-body-bg);background-clip:padding-box;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control:focus{color:var(--bs-body-color);background-color:var(--bs-body-bg);border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-control::-webkit-date-and-time-value{min-width:85px;height:1.5em;margin:0}.form-control::-webkit-datetime-edit{display:block;padding:0}.form-control::-moz-placeholder{color:var(--bs-secondary-color);opacity:1}.form-control::placeholder{color:var(--bs-secondary-color);opacity:1}.form-control:disabled{background-color:var(--bs-secondary-bg);opacity:1}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:var(--bs-secondary-bg)}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:var(--bs-secondary-bg)}.form-control-lg{min-height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));padding:.5rem 1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.btn{--bs-btn-padding-x:.75rem;--bs-btn-padding-y:.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:var(--bs-body-color);--bs-btn-bg:transparent;--bs-btn-border-width:var(--bs-border-width);--bs-btn-border-color:transparent;--bs-btn-border-radius:var(--bs-border-radius);--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15),0 1px 1px rgba(0, 0, 0, .075);--bs-btn-disabled-opacity:.65;--bs-btn-focus-box-shadow:0 0 0 .25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn:first-child:active{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn:first-child:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn:disabled{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-success{--bs-btn-color:#fff;--bs-btn-bg:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#157347;--bs-btn-hover-border-color:#146c43;--bs-btn-focus-shadow-rgb:60,153,110;--bs-btn-active-color:#fff;--bs-btn-active-bg:#146c43;--bs-btn-active-border-color:#13653f;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#198754;--bs-btn-disabled-border-color:#198754}.btn-lg{--bs-btn-padding-y:.5rem;--bs-btn-padding-x:1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius:var(--bs-border-radius-lg)}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width:var(--bs-border-width);--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-card-cap-padding-y:.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(var(--bs-body-color-rgb), .03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:var(--bs-body-bg);--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);color:var(--bs-body-color);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.d-grid{display:grid!important}.d-flex{display:flex!important}.shadow-lg{box-shadow:var(--bs-box-shadow-lg)!important}.vh-100{height:100vh!important}.justify-content-center{justify-content:center!important}.align-items-center{align-items:center!important}.mt-4{margin-top:1.5rem!important}.mb-4{margin-bottom:1.5rem!important}.p-5{padding:3rem!important}.gap-2{gap:.5rem!important}.text-center{text-align:center!important}.text-primary{--bs-text-opacity:1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}
</style><link rel="stylesheet" href="styles-CO52A5DN.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-CO52A5DN.css"></noscript><style ng-app-id="ng">header[_ngcontent-ng-c2446787373]{background-color:#faf8f8;color:#fff;padding:10px;position:fixed;top:0;width:100%;margin-left:225px}</style><style ng-app-id="ng">aside[_ngcontent-ng-c1788532720]{width:300px;background-color:#d4eb89;padding:10px;position:fixed;left:0;top:0;height:95%}a[_ngcontent-ng-c1788532720]{font-size:23px;color:#000;line-height:1.3}h1[_ngcontent-ng-c1788532720]{font-size:30px}</style><style ng-app-id="ng">.main-content[_ngcontent-ng-c3112904981]{padding:10px;height:auto;margin-top:0;margin-left:400px}</style><style ng-app-id="ng">.vh-100[_ngcontent-ng-c1465331262]{height:100vh}.card[_ngcontent-ng-c1465331262]{max-width:600px;width:90%;border-radius:15px;background:#f8f9fa}.form-control-lg[_ngcontent-ng-c1465331262]{border-radius:10px;padding:15px;font-size:16px}.btn-lg[_ngcontent-ng-c1465331262]{font-size:18px;padding:14px;border-radius:10px}h2[_ngcontent-ng-c1465331262]{font-size:32px;font-weight:700}@media (max-width: 768px){.card[_ngcontent-ng-c1465331262]{padding:40px}}body[_ngcontent-ng-c1465331262]{background:linear-gradient(to right,#6a11cb,#2575fc)}.form-container[_ngcontent-ng-c1465331262]{max-width:450px;width:100%;background:#fff;border-radius:15px;text-align:center}.input-custom[_ngcontent-ng-c1465331262]:focus{border-color:#2575fc;box-shadow:0 0 8px #2575fc99}.form-group[_ngcontent-ng-c1465331262]{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:20px}.form-label[_ngcontent-ng-c1465331262]{font-weight:600;margin-bottom:8px}.input-custom[_ngcontent-ng-c1465331262]{width:100%;border-radius:10px;border:2px solid #bb8fea;padding:12px;font-size:16px;transition:all .3s ease-in-out}.input-custom[_ngcontent-ng-c1465331262]:focus{border-color:#a2c1f7;box-shadow:0 0 8px #86aced99}.btn-hover[_ngcontent-ng-c1465331262]{border-radius:10px;font-size:18px;transition:all .3s ease-in-out}.btn-hover[_ngcontent-ng-c1465331262]:hover{background-color:#45a049;transform:scale(1.05)}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","submit","input","compositionstart","compositionend","change"],["blur"]);</script>
  <app-root ng-version="19.1.4" ngh="0" ng-server-context="ssg"><app-header _nghost-ng-c2446787373 ngh="0"><p _ngcontent-ng-c2446787373>header works!</p><header _ngcontent-ng-c2446787373></header></app-header><app-sidebar _nghost-ng-c1788532720 ngh="0"><aside _ngcontent-ng-c1788532720><h1 _ngcontent-ng-c1788532720>Health Tracker</h1><br _ngcontent-ng-c1788532720><br _ngcontent-ng-c1788532720><a _ngcontent-ng-c1788532720 href="/Health_Tracker_Assignment/add-user-workout" jsaction="click:;">Add User Workout</a><br _ngcontent-ng-c1788532720><br _ngcontent-ng-c1788532720><hr _ngcontent-ng-c1788532720><br _ngcontent-ng-c1788532720><a _ngcontent-ng-c1788532720 href="/Health_Tracker_Assignment/user-workouts" jsaction="click:;">Workouts</a><br _ngcontent-ng-c1788532720><br _ngcontent-ng-c1788532720><hr _ngcontent-ng-c1788532720><br _ngcontent-ng-c1788532720><a _ngcontent-ng-c1788532720 href="/Health_Tracker_Assignment/chartwise-rep" jsaction="click:;">Chart Representation</a><br _ngcontent-ng-c1788532720><br _ngcontent-ng-c1788532720></aside></app-sidebar><app-main-content _nghost-ng-c3112904981 ngh="2"><main _ngcontent-ng-c3112904981><div _ngcontent-ng-c3112904981 class="main-content"><router-outlet _ngcontent-ng-c3112904981></router-outlet><app-add-user-workout _nghost-ng-c1465331262 ngh="1"><div _ngcontent-ng-c1465331262 class="d-flex justify-content-center align-items-center vh-100 bg-light"><div _ngcontent-ng-c1465331262 class="card shadow-lg p-5 form-container"><h2 _ngcontent-ng-c1465331262 class="text-center mb-4 text-primary">Add User Workout</h2><form _ngcontent-ng-c1465331262 novalidate class="form-style ng-untouched ng-pristine ng-valid" jsaction="submit:;"><div _ngcontent-ng-c1465331262 class="form-group"><label _ngcontent-ng-c1465331262 class="form-label">Username</label><input _ngcontent-ng-c1465331262 type="text" placeholder="Enter Name" required class="form-control form-control-lg input-custom ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c1465331262 class="form-group"><label _ngcontent-ng-c1465331262 class="form-label">Workout Type</label><select _ngcontent-ng-c1465331262 required class="form-control form-control-lg input-custom ng-untouched ng-pristine ng-invalid" jsaction="change:;blur:;"><option _ngcontent-ng-c1465331262 value disabled selected>Select Workout Type</option><option _ngcontent-ng-c1465331262 value="Gym">Gym</option><option _ngcontent-ng-c1465331262 value="Cycling">Cycling</option><option _ngcontent-ng-c1465331262 value="Running">Running</option><option _ngcontent-ng-c1465331262 value="Walking">Walking</option><option _ngcontent-ng-c1465331262 value="Skipping">Skipping</option><option _ngcontent-ng-c1465331262 value="Sprinting">Sprinting</option><!----></select></div><div _ngcontent-ng-c1465331262 class="form-group"><label _ngcontent-ng-c1465331262 class="form-label">Workout Minutes</label><input _ngcontent-ng-c1465331262 type="number" placeholder="Minutes" required class="form-control form-control-lg input-custom ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"></div><div _ngcontent-ng-c1465331262 class="d-grid gap-2 mt-4"><button _ngcontent-ng-c1465331262 type="button" class="btn btn-success btn-lg btn-hover" jsaction="click:;">Save Workout</button></div></form></div></div></app-add-user-workout><!----></div></main></app-main-content></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-4SEX6ZMX.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"15":"t0"},"c":{"15":[{"i":"t0","r":1,"x":6}]}},{"c":{"2":[{"i":"c1465331262","r":1}]}}]}</script></body></html>`;
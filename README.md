"# debug-nx-cypress"
debuging app by ng
run command: ng run cy:cypress-open
run debug configuration: 'Attach to Cypress Chrome by ng'

debuging app by cypress
run comand: ng serve
run command: npm run cypr
run debug configuration: 'Attach to Cypress Chrome by cypress'


here works webpack source, but I cant debug using plugin


You HAVE TO add to local env variable in window control panel
key: CYPRESS_REMOTE_DEBUGGING_PORT
value: 9222

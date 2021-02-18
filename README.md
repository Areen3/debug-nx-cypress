"# debug-nx-cypress"

working example debuging cypress in nx environment
in these variants (same configuration):
debug nx project using nx serve
debug nx project using cypress open


build cy (cy is default app): nx build
serve cy : nx serve
test e2e : nx e2e cy-e2e
test nx in watch mode: nx e2e cy-e2e --watch
test cypress: npm run cypr

in these cases use debug lauch conf: Attach to Cypress Chrome

You HAVE TO add to local env variable in window control panel
key: CYPRESS_REMOTE_DEBUGGING_PORT
value: 9222

some explanation:
You have list of apps in nx.json - it is main configuration file
in folder apps you have executable application
in folder libs you have library for them

app name with angular: cy
app name to e2e: cy-e2e

"# debug-nx-cypress" 

some explanation:
You have list of apps in nx.json - it is main configuration file
in folder apps you have executable application
in folder libs you have library for them

app name with angular: cy
app name to e2e: cy-e2e

build cy (cy is default app): nx build
serve cy : nx serve
test e2e : nx e2e cy-e2e
test in watch mode: nx e2e cy-e2e --watch

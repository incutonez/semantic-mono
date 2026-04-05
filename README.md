# semantic-mono

The majority of the logic is driven through the .github/workflows/main.yaml file, which uses a filter to determine if any of the directories in packages get updated.  If they do, then we pass the array of affected files to the updateVersion.ts script, which then loops through each entry and only runs the semantic release for that package once.
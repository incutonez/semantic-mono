# semantic-mono

The majority of the logic is driven through the .github/workflows/main.yaml file, which uses a filter to determine if individual directories are updated.  Unfortunately, this means that if a new package is added, this logic would need to be updated.  There might be a way to automate that further, but I was unable to determine the affected path 
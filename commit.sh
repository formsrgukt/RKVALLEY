#!/bin/bash

# Auto-generate a message with the current date and time
MESSAGE="Auto-commit: $(date +'%Y-%m-%d %H:%M:%S')"


echo "Adding changes..."
git add .

echo "Committing with message: '$MESSAGE'"
git commit -m "$MESSAGE"

# Get current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "Pushing to origin $BRANCH..."
git push -u origin $BRANCH

echo "Done!"

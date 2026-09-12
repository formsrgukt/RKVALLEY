# Team Git Workflow Guide

Welcome to the project! Since we have 4 team members working on different sections, we will be using a **branching workflow**. This ensures we don't accidentally overwrite each other's code.

**IMPORTANT:** Never push the `node_modules` folder to GitHub. The project is set up to ignore it automatically.

---

## 1. First Time Setup (Do this once)
When you first join the project, you need to download the code and install the dependencies.

```bash
# Clone the repository
git clone https://github.com/formsrgukt/RKVALLEY.git

# Navigate into the project folder
cd RKVALLEY

# Install the project dependencies (this creates your local node_modules)
npm install
```

---

## 2. The Daily Workflow (Do this for every new feature)
Whenever you start working on a new feature, section, or bug fix, follow this exact loop:

### Step A: Get the latest code
Always start by making sure your local `main` branch is up to date with what is on GitHub.
```bash
# Switch to the main branch
git checkout main

# Pull the latest changes that other team members have pushed
git pull origin main
```

### Step B: Create a new branch for your work
Never write code directly on the `main` branch. Create a branch named after the feature you are working on.
```bash
# Example: creating a branch for the footer section
git checkout -b feature/footer-section
```

### Step C: Write code and commit
Now you write your code! As you finish small pieces, save them (commit them) to your branch.
```bash
# See what files you changed
git status

# Add your changes
git add .

# Save the changes with a descriptive message
git commit -m "Added footer links"
```

### Step D: Push your branch to GitHub
When you are done with your feature, push your specific branch up to GitHub.
```bash
git push -u origin feature/footer-section
```

### ⚡ Fast-Track: Single Command to Commit & Push
If you prefer a quicker flow, I have created a script that automatically adds all files, generates an auto-commit message (with the current timestamp), and pushes them to your current branch in one single command.

Whenever you want to save your work, simply run:
```bash
./commit.sh
```



### Step E: Create a Pull Request (PR) & Merge
You can create a Pull Request either from the terminal or through the browser.

**Option 1: From the Terminal (Fastest)**
If you have the [GitHub CLI (`gh`)](https://cli.github.com/) installed, just run:
```bash
gh pr create --fill
```
*(This automatically sets the title and body of the PR for you).*

**Option 2: From the Browser**
1. Go to the repository on GitHub: `https://github.com/formsrgukt/RKVALLEY`
2. You will see a green button that says **"Compare & pull request"** for your newly pushed branch. Click it.
3. This creates a request to merge your feature branch into the `main` branch. 
4. Ask a teammate to look at your code. If it looks good, click **"Merge pull request"**.

Once merged, your code is officially in `main`! Now everyone goes back to **Step A** (`git pull origin main`) to download your new feature and start their next task.

---

## Summary of Best Practices
* **Communicate:** Talk to your team and let them know what section you are working on so two people don't build the same thing.
* **Commit often:** Don't wait until the end of the week to commit. Commit every time you get a small piece working.
* **Pull often:** Run `git pull origin main` frequently to make sure you aren't working on old code.
* **Resolve conflicts together:** If two people edit the exact same line of code in different branches, Git will throw a "merge conflict". You will have to manually choose which code to keep. Doing this together over a call is usually the easiest way to solve it!

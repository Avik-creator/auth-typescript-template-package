#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

// Determine the directory where index.ts is located
const scriptDir = __dirname;

// Determine the current working directory where the package is being installed
const targetDir = process.cwd();

// Define files to copy with their source and destination paths
const filesToCopy = [
  {
    src: path.join(scriptDir, "templates/index.ts"),
    dest: path.join(targetDir, "index.ts"),
  },
  {
    src: path.join(scriptDir, "templates/.env"),
    dest: path.join(targetDir, ".env"),
  },
  {
    src: path.join(scriptDir, "templates/src/config/connectMongoDB.ts"),
    dest: path.join(targetDir, "auth/src/config/connectMongoDB.ts"),
  },
  {
    src: path.join(scriptDir, "templates/src/controllers/authController.ts"),
    dest: path.join(targetDir, "auth/src/controllers/authController.ts"),
  },
  {
    src: path.join(scriptDir, "templates/src/models/User.ts"),
    dest: path.join(targetDir, "auth/src/models/User.ts"),
  },
  {
    src: path.join(scriptDir, "templates/src/routes/authRoutes.ts"),
    dest: path.join(targetDir, "auth/src/routes/authRoutes.ts"),
  },
  {
    src: path.join(scriptDir, "templates/src/middlewares/protectRoute.ts"),
    dest: path.join(targetDir, "auth/src/middlewares/protectRoute.ts"),
  },
  {
    src: path.join(scriptDir, "templates/src/utils/generateToken.ts"),
    dest: path.join(targetDir, "auth/src/utils/generateToken.ts"),
  },
];

// Function to copy files
const copyFiles = () => {
  try {
    filesToCopy.forEach(({ src, dest }) => {
      fs.ensureDirSync(path.dirname(dest)); // Ensure destination directory exists
      fs.copyFileSync(src, dest);
      // console.log(`Copied ${src} to ${dest}`);
    });

    console.log("Authentication files created successfully in auth folder.");
  } catch (err) {
    console.error("Error copying files:", err);
  }
};

// Create authdirectory if it doesn't exist
if (!fs.existsSync(path.join(targetDir, "auth"))) {
  fs.mkdirSync(path.join(targetDir, "auth"));
}

// Copy files
copyFiles();

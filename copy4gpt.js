#!/usr/bin/env node

import { promises } from 'fs';
import clipboardy from 'clipboardy';

const formatFileContent = (filename, content) => {
  return `[${filename}]\n{{${content.trim()}}}\n`;
};

const copyFilesToClipboard = async (filenames) => {
  let clipboardText = '';
  for (const filename of filenames) {
    try {
      const content = await promises.readFile(filename, 'utf8');
      clipboardText += formatFileContent(filename, content);
    } catch (error) {
      console.error(`Error reading file ${filename}:`, error);
    }
  }
  await clipboardy.write(clipboardText);
  console.log('Files copied to clipboard successfully!');
};

// Getting filenames from command line arguments
const filenames = process.argv.slice(2);
copyFilesToClipboard(filenames);
